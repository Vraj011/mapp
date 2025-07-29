import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { ChangeEvent } from "react"

interface ReuseTextarea {
    label: string,
    name: string,
    placeholder?: string,
    value?: string | number | readonly string[],
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    maxlength?: number
    className?: string
}

function Dynamic_Textarea({ label,
    name,
    placeholder,
    value,
    onChange,
    className,
    maxlength }: ReuseTextarea) {

    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Textarea
                id={name}
                name={name}
                value={value ?? ""}
                onChange={onChange}
                placeholder={placeholder ?? `Enter ${label}`}
                maxLength={maxlength}
                className={`border-1 border-gray-300  ${className} `}
            />
        </>
    )
}

export default Dynamic_Textarea