import type { textCatInput } from "./Category_Form"
import { Button } from "@/components/ui/button";

interface Props {
    categories: textCatInput[] | any;
    onSelectCategory?: (cat: textCatInput) => void;
}

function Categories({ categories, onSelectCategory }: Props) {


    return (
        <>
            <div className="mt-5 mb-5 pl-2 font-bold ">
                <p>Categories</p>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col gap-2 p-2">
                {categories.map((item: any) => (
                    <Button key={item.name} variant="outline" onClick={() => onSelectCategory && onSelectCategory(item)}>
                        {item.name}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default Categories


