import React, { useState } from "react"
import Category_form from "./Category_Form"
import Categories from "./Categories";
import Edit_Product from "./Edit_Product";
import type { textCatInput } from "./Category_Form";
import Cat_Table from "./Cat_Table";

function Category() {

    const [textCat, setTextCat] = useState<any>({
        name: '',
        parent: '',
        desc: '',
        shortdesc: '',
        activeswitch: ''
    })

    // console.log("textCat", textCat);


    const [categories, setCategories] = useState<textCatInput[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<textCatInput | null>(null);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCategories((prev) => [...prev, { ...textCat, id: textCat.name }]);
        handleClose();
    };

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setTextCat({})
    }

    // editCat_delete
    const handleEditdelete = (id: string) => {
        setCategories((prev) => prev.filter((cat) => cat.id !== id));
        setSelectedCategory((prev) => (prev && prev.id === id ? null : prev));
    }

    // editCat_save(update)
    const handleEditSave = (id: string, value: any) => {
        setCategories((prev) => prev.map((cat) => cat.id === id ? { ...value, id } : cat));
        setSelectedCategory((prev) => (prev && prev.id === id ? { ...value, id } : prev));
        handleClose();
    }


    return (
        <>
            <Category_form textCat={textCat} setTextCat={setTextCat} handleSubmit={handleSubmit} handleOpen={handleOpen} open={open} setOpen={setOpen} />
            <div className="flex mx-5 gap-5 ">

                <div className="border-1 border-gray-300 rounded-lg shadow-md w-80 ">
                    <Categories categories={categories} onSelectCategory={setSelectedCategory} />
                </div>

                <div className="border-1 border-gray-300 rounded-lg shadow-md w-full">
                    {selectedCategory ? (
                        <Edit_Product
                            category={selectedCategory}
                            handleEditdelete={handleEditdelete}
                            handleEditSave={handleEditSave}
                        />
                    ) : (
                        <Edit_Product
                            category={{ name: "", desc: "" }}
                            handleEditdelete={() => { throw new Error("Function not implemented."); }}
                            handleEditSave={() => { throw new Error("Function not implemented."); }}
                        />
                    )
                    }

                    <Cat_Table />
                </div>
            </div>
        </>
    );
}

export default Category