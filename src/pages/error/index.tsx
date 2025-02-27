import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <div className="flex w-full justify-center items-center flex-col text-white min-h-screen">
            <h1 className="font-bold text-6xl mb-4">404</h1>
            <h1 className="font-bold text-4xl mb-4">Page not found</h1>
            <p className="italic text-xl mb-4">You landed on a page that doesn't exist!</p>

            <Link className="bg-gray-50/20 py-2 px-5 rounded-lg text-xl" to="/">Back to Home</Link>
        </div>
    )
}