import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/direbaseConnection";

const Newtworks = () => {
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [X, setX] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            github: github,
            instagram: instagram,
            x: X
        })
            .then(() => {
                console.log("cadastrado");
        })
    }

    useEffect(() => {
        const loadLinks = () => {
            const docRef = doc(db, "social", "link");
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data()) {
                        setGithub(snapshot.data()?.github)
                        setInstagram(snapshot.data()?.instagram)
                        setX(snapshot.data()?.x)
                    }
                })
        }
        
        loadLinks()
    }, [])

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />
            
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">My Social Networks</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">GitHub Link</label>

                <Input
                    type="url"
                    placeholder="Enter the GitHub URL..."
                    value={github}
                    onChange={e => setGithub(e.target.value)}
                />

                <Input
                    type="url"
                    placeholder="Enter the Instagram URL..."
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                />

                <Input
                    type="url"
                    placeholder="Enter the X URL..."
                    value={X}
                    onChange={e => setX(e.target.value)}
                />

                <button type="submit" className="text-white bg-sky-600 py-3 rounded-lg flex items-center justify-center mb-7 font-semibold text-lg">Save Links</button>
            </form>
        </div>
    )
}

export default Newtworks;