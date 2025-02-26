import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = (props: InputProps) => {
    return (
        <input
            className="border-sky-600 border-2 h-12 rounded-md outline-0 text-blue-700 font-semibold px-2 bg-gradient-to-r from-white to-sky-600 mb-3"
            {...props}
        />
    )
}