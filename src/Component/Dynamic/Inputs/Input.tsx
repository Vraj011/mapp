import { Input } from "@/components/ui/input"
import { type ChangeEvent } from "react"
import { Label } from "@/components/ui/label"


interface ReuseIPProps {
    label?: string,
    name?: string,
    placeholder?: string,
    value?: string | number | readonly string[],
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
    type?: string
}

function Dynamic_Input({ label, name, type, value, className, placeholder, onChange }: ReuseIPProps) {

    return (
        <>
            <div className="grid gap-2 mt-4">
                <Label htmlFor={name}>{label}</Label>
                <Input
                    id={name}
                    name={name}
                    value={value ?? ""}
                    placeholder={placeholder ?? `Enter ${label}`}
                    onChange={onChange}
                    className={`${className}`}
                // type=""
                />
            </div>

        </>
    )
}

export default Dynamic_Input