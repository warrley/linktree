import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { CornerRightDown, Github, Instagram, X } from "lucide-react";
import { useEffect, useState } from "react";
import { linkData } from "../../types/linkData";
import { db } from "../../services/direbaseConnection";
import { Link } from "react-router-dom";
import { Social } from "../../types/social";


const Home = () => {
    const [links, setLinks] = useState<linkData[]>([]);
    const [social, setSocial] = useState<Social>();

    useEffect(() => {
        const loadLinks = () => {
            const linksRef = collection(db, "links");
            const queryRef = query(linksRef, orderBy("created", "asc"));

            getDocs(queryRef)
                .then((snapshot) => {
                    let list = [] as linkData[];

                    snapshot.forEach((doc) => {
                        list.push({
                            id: doc.data().id,
                            name: doc.data().name,
                            url: doc.data().url,
                            background: doc.data().background,
                            color: doc.data().color
                        })
                    })

                    setLinks(list);
                    console.log(links)
                    
                })
        }
        loadLinks();
    }, [])
    
    useEffect(() => {
        function loadSocialLinks() {
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot) {
                        setSocial({
                            github: snapshot.data()?.github,
                            instagram: snapshot.data()?.instagram,
                            x: snapshot.data()?.x
                    })
                }
            })
        }
        loadSocialLinks();
    },[])

    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-7xl">W<span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent -ml-3">Link</span></h1>
            </Link>
            <span className="flex text-gray-50 mb-5 mt-3 font-medium items-center">See my links <CornerRightDown className="mt-4" size={23} /></span>
            
            <main className="flex flex-col w-11/12 max-w-xl text-center">
                {links.map((item, index) => (
                    <section style={{ backgroundColor: item.background, color: item.color }} className=" mb-4 w-full py-2 rounded-lg select-none hover:scale-105 transition-all cursor-pointer" key={index}>
                    <a className="text-base md:text-lg" href={item.url}>
                        <p className="font-semibold">
                            {item.name}
                        </p>
                    </a>
                </section>
                ))}

                <footer className="flex justify-center gap-3 my-4">
                    <a target="_blank" href={social?.github}><Github color="white" size={45} /></a>
                    <a target="_blank" href={social?.instagram}><Instagram color="white" size={45}/></a>
                    <a target="_blank" href={social?.x}><X color="white" size={45}/></a>
                </footer>
            </main>
        </div>
    )
}

export default Home;