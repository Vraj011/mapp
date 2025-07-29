import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenuDemo } from "@/Page/Dropdown"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CiSquarePlus } from "react-icons/ci"
import Dynamic_Input from "@/Component/Dynamic/Inputs/Input"
import Dynamic_Select from "@/Component/Dynamic/Select/Select"
import Dynamic_Textarea from "@/Component/Dynamic/Textarea/Textarea"
import Dynamic_Switch from "@/Component/Dynamic/Switch/Switch"


export interface TextData {
    id?: string,
    name: string,
    manufacture: string,
    description: string,
    switch: string | number | readonly string[] | undefined
}

interface Props {
    handleSubmit: (e: React.FormEvent) => void,
    textData: TextData,
    setTextData: any,
    handleOpen: () => void,
    open: boolean,
    setOpen: (value: boolean) => void
    isEdit: TextData
}

function Brand_form({ handleSubmit, textData, setTextData, handleOpen, open, setOpen, isEdit }: Props) {

    const handleChange = (Key: any, value: any) => {
        { setTextData({ ...textData, [Key]: value }) }
    };

    return (
        <>
            <div className=' bg-white sticky top-0'>
                <DropdownMenuDemo />
                <div className=" mx-5 mt-5 mb-3 flex  justify-between">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Pricebook</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-black" href='/brand' >Brand</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>

                        <Button type="submit" variant="blue" onClick={handleOpen}><CiSquarePlus className="text-white" />Add New</Button>

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="pb-3">Add New Brand </DialogTitle>
                                <hr className="w-full" />
                            </DialogHeader>
                            <form className="mb-5 ms-3" onSubmit={handleSubmit}>
                                <div className="grid gap-4">


                                    <Dynamic_Input
                                        label="Name"
                                        name="name"
                                        value={textData.name || isEdit?.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                    />

                                    <Dynamic_Select
                                        label="Manufacturer"
                                        name="manufacturer"
                                        type="select"
                                        value={textData.manufacture}
                                        onChange={(e) => handleChange('manufacture', e.target.value)}
                                        options={[
                                            { value: "label1", label: "label1" },
                                            { value: "label2", label: "label2" }
                                        ]}
                                    />

                                    <Dynamic_Textarea
                                        label="Brand Description"
                                        name="description"
                                        value={textData.description}
                                        onChange={(e) => handleChange('description', e.target.value)}
                                    />

                                    <Dynamic_Switch
                                        label="Status"
                                        name="status"
                                        value={textData.switch}
                                        onChange={(value) => handleChange('switch', value)}
                                    />
                                </div>

                                <DialogFooter className="mt-5">
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button variant="blue" type="submit">Save </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    )
}

export default Brand_form

