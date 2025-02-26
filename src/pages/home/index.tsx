import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { CornerRightDown, Facebook, Instagram, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { linkData } from "../../types/linkData";
import { db } from "../../services/direbaseConnection";
import { Link } from "react-router-dom";


const Home = () => {
    const [links, setLinks] = useState<linkData[]>([])

    useEffect(() => {
        const linkRef = collection(db, "links");
        const queryRef = query(linkRef, orderBy("created", "asc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista: linkData[] = []; //cria um array
            setLinks(lista);

            snapshot.forEach((doc) => {
                lista.push({    // pega os itens da web e coloca no array
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    color: doc.data().color,
                    background: doc.data().background
                })
            })
        })

        return () => {
            unsub(); //Para de observar
        }
    }, []) 

    return (
        <div className="flex flex-col w-full py-4 items-center justify-cente">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-6xl">W<span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent -ml-3">Link</span></h1>
            </Link>
            <span className="flex text-gray-50 mb-5 mt-3">See my links <CornerRightDown /></span>
            
            <main className="flex flex-col w-11/12 max-w-xl text-center">
                {links.map((item, index) => (
                    <section style={{ backgroundColor: item.background, color: item.color }} className=" mb-4 w-full py-2 rounded-lg select-none hover:scale-105 transition-all cursor-pointer" key={index}>
                    <a className="text-base md:text-lg">
                        <p className="font-semibold">
                            {item.name}
                        </p>
                    </a>
                </section>
                ))}

                <footer className="flex justify-center gap-3 my-4">
                    <a target="_blank" href="https://facebook.com.br"><Facebook color="white" size={45} /></a>
                    <a target="_blank" href="https://instagram.com.br"><Instagram color="white" size={45}/></a>
                    <a target="_blank" href="https://Youtube.com.br"><Youtube color="white" size={45}/></a>
                </footer>
            </main>
        </div>
    )
}

export default Home;