import { CornerRightDown, Facebook, Instagram, Youtube } from "lucide-react";

const Home = () => {
    return (
        <div className="flex flex-col w-full py-4 items-center justify-cente">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Warley</h1>
            <span className="flex text-gray-50 mb-5 mt-3">See my links <CornerRightDown /></span>
            
            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none hover:scale-105 transition-all cursor-pointer">
                    <a className="text-base md:text-lg">
                        <p className="font-semibold">
                            Canal no Yt
                        </p>
                    </a>
                </section>

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