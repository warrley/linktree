import { signOut } from "firebase/auth"
import { LogOut } from "lucide-react"
import { Link } from "react-router-dom"
import { auth } from "../services/direbaseConnection"

export const Header = () => {
    const handleLogout = async () => {
        await signOut(auth);
    }

    return (
        <header className="w-full max-w-2xl mt-4 px-1">
            <nav className="w-full bg-white h-12 flex items-center justify-between rounded-lg px-3">
                <div className="flex gap-4 font-medium ">
                    <Link to="/"> Home </Link>
                    <Link to="/admin"> Links </Link>
                    <Link to="/admin/networks"> Social Media </Link>
                </div>
                <button className="cursor-pointer hover:scale-110 transition-all" onClick={handleLogout}><LogOut size={28} color="#db2629"/></button>
            </nav>
        </header>
    )
}