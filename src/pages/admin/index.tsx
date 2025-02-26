import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link, Trash2 } from "lucide-react";

const Admin = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState("");
    const [color, setColor] = useState("#f1f1f1");
    const [background, setBackground] = useState("#121212");

    return (
        <div className="flex items-center flex-col min-h-screen">
            <Header />
            
            <form className="flex flex-col mt-8 mb-3 w-full max-w-2xl">
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

            <article className="w-11/12 max-w-2xl flex items-center justify-between rounded-lg px-2 py-4 text-white bg-blue-500">
                <p>Canal YT</p>
                <div>
                    <button className="border border-dashed p-2 rounded-md cursor-pointer"><Trash2 color="white" size={18}/></button>
                </div>
            </article>

        </div>
    )
}

export default Admin;