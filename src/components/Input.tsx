import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = (props: InputProps) => {
    return (
        <input
            className="border-white border-2 h-12 rounded-md outline-0 text-sky-600 font-semibold px-1 bg-gradient-to-r from-white to-zinc-900 mb-3"
            {...props}
        />
    )
}