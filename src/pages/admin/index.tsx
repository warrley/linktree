import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

const Admin = () => {
    return (
        <div className="flex items-center flex-col min-h-screen">
            <Header />
            
            <form className="flex flex-col mt-8 mb-3 w-full max-w-2xl">
                <label className="text-white font-medium mt-2 mb-2">Link name</label>
                <Input
                    placeholder="Enter a link name..."
                />
            </form>
        </div>
    )
}

export default Admin;