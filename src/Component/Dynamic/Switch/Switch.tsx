import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface ReuseSwitch {
    label: string,
    name: string,
    checked?: boolean,
    value?: string | number | readonly string[] | undefined,
    onChange?: (value: boolean) => void
    className?: string
}

function Dynamic_Switch({ label,
    name,
    checked,
    value,
    className,
    onChange }: ReuseSwitch) {

    return (
        <>
            <div className="flex items-center gap-3 mt-5">
                <Label htmlFor={name}>{label}</Label>
                <Switch
                    id={name}
                    checked={checked}
                    value={value ?? ""}
                    onCheckedChange={onChange}
                    className={`${className}`}
                />
            </div>
        </>
    )
}

export default Dynamic_Switch