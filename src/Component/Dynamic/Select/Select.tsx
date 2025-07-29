
import { Label } from "@/components/ui/label"
import type { ChangeEvent } from "react"


interface ReuseSelectProps {

    label?: string,
    name?: string,
    value?: string | number | readonly string[],
    placeholder?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    type: "select",
    options: { label: string, value: string }[] // for select
    className?: string
}

function Dynamic_Select({ label, name, value, options, className, onChange }: ReuseSelectProps) {
    return (
        <>
            <div className="">
                <Label className="mb-2">{label}</Label>
                <select
                    id={name}
                    name={name}
                    value={value ?? ""}
                    onChange={onChange}
                    className={` border-2 border-gray-300 rounded-md px-1 py-2 ${className} `}
                >
                    <option value=""> {name}</option>
                    {options?.map((option, idx) => (
                        <option key={idx} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>


            </div>
        </>
    )
}

export default Dynamic_Select