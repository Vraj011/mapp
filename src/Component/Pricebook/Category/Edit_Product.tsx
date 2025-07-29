import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

interface EditProductProps {
    category: {
        name: string;
        desc: string;
    };
    handleEditdelete: (id: string) => void;
    handleEditSave: (id: string, value: any) => void;
}

function Edit_Product({ category, handleEditdelete, handleEditSave }: EditProductProps) {

    const [editValue, setEditValue] = useState({
        name: category.name,
        desc: category.desc
    });

    React.useEffect(() => {
        setEditValue({
            name: category.name,
            desc: category.desc
        });
    }, [category]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditValue((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <div>
                <div className="flex justify-between mx-4 mt-5">
                    <div>
                        <p className="font-medium">Edit Product Category</p>
                    </div>
                    <div >
                        <Button variant="blue" type="submit"
                            onClick={() => handleEditSave(category.name, editValue)}
                            className="py-5 px-3"
                        >Save</Button>
                        <Button variant="outline" type="submit"
                            onClick={() => handleEditdelete(category.name || editValue.name)}
                            className="mx-3 py-5 px-2 btn btn-outline btn-error hover:bg-red-100 hover:text-red-400">Delete</Button>
                    </div>
                </div>
                <div className="mx-4 mt-5">
                    <Label className="mb-2">Name on POS</Label>
                    <Input
                        type="text"
                        placeholder="Name on POS"
                        name="name"
                        value={editValue.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mx-4 mt-5 mb-5">
                    <Label className="mb-2">Description</Label>
                    <Textarea
                        placeholder="Description"
                        name="desc"
                        value={editValue.desc}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}

export default Edit_Product;