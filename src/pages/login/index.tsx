import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormEvent, useState } from "react";
import { auth } from "../../services/direbaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (email === '' || password === '') {
            alert("Fill in all fields")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/admin", { replace: true })
            })
            .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-6xl">W<span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent -ml-3">Link</span></h1>
            </Link>

            <form className="w-full max-w-xl flex flex-col px-2" onSubmit={handleSubmit}>
                <Input 
                    placeholder="Enter your email..."
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Enter your password..."
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="bg-sky-500 rounded text-lg font-medium cursor-pointer text-white p-2" type="submit">Acess</button>
            </form>
        </div>
    )
}

export default Login;