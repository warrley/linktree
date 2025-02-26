import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link, Trash2 } from "lucide-react";
import { linkData } from "../../types/linkData";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/direbaseConnection";

const Admin = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState("");
    const [color, setColor] = useState("#f1f1f1");
    const [background, setBackground] = useState("#121212");
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

    const handleNewLink = (e: React.FormEvent) => {
        e.preventDefault();

        if (name === "" || url === "") {
            alert("Fill in all fields");
            return;
        }

        addDoc(collection(db, "links"), {
            name: name,
            url: url,
            color: color,
            background: background,
            created: new Date()
        })
        .then(() => {
            setName("");
            setUrl("");
            setColor("#f1f1f1");
            setBackground("#121212");
            console.log("cadastrado");
            
        })
        .catch((err) => {
            console.log("erro ao cadrastar" + err);
         })
    }

    return (
        <div className="flex items-center flex-col min-h-screen">
            <Header />
            
            <form className="flex flex-col mt-8 mb-3 w-full max-w-2xl" onSubmit={handleNewLink}>
                <label className="text-white font-medium mt-2 mb-2">Link Name</label>
                <Input
                    placeholder="Enter a link name..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link URL</label>
                <Input
                    type="url"
                    placeholder="Enter a link name..."
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />

                <section className="flex my-4 gap-10">
                    <div className="flex gap-4">
                        <label className="text-white font-medium mt-2 mb-2">Link Color</label>
                        <Input
                            placeholder="Enter a link name..."
                            value={color}
                            onChange={e => setColor(e.target.value)}
                            type="color"
                        />
                    </div>

                    <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">Link Background</label>
                        <Input
                            placeholder="Enter a link name..."
                            value={background}
                            onChange={e => setBackground(e.target.value)}
                            type="color"
                        />
                    </div>
                </section>

                {name && 
                    <div className="flex items-center justify-center flex-col mb-7 p-2 border-gray-100/25 border rounded-lg ">
                        <label  className="text-white font-medium mt-2 mb-3">See Preview</label>
                        <article style={{ backgroundColor: background }} className={`w-11/12 max-w-lg flex flex-col items-center justify-center rounded-lg px-2 py-4`}>
                            <p style={{ color: color }} className="font-semibold text-xl ">{name}</p>
                        </article>
                    </div>
                }

                <button type="submit" className="bg-sky-500 rounded-lg text-white font-semibold gap-4 text-xl p-3 flex items-center justify-center">
                    Register <Link/>
                </button>
            </form>

            <h2 className="font-bold text-white mb-4 text-2xl">
                My Links
            </h2>

            {links.map((item, index) => (
                <article key={index} className="w-11/12 max-w-2xl flex items-center justify-between mb-4 rounded-lg px-2 py-4 text-white" style={{ backgroundColor: item.background, color: item.color }}>
                    <p>{item.name}</p>
                    <div>
                        <button className="border border-dashed p-2 bg-zinc-950 rounded-md cursor-pointer"><Trash2 color="white" size={18}/></button>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Admin;