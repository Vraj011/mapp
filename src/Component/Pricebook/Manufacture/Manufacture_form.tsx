import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenuDemo } from "@/Page/Dropdown"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CiSquarePlus } from "react-icons/ci"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import type React from "react"
import Dynamic_Input from "@/Component/Dynamic/Inputs/Input"

export interface ManfactData {
    id?: string,
    name: string,
}

interface Props {
    handleSubmit: (e: React.FormEvent) => void
    manufactureinput: ManfactData,
    setManufactureInput: any,
    open: boolean,
    setOpen: (value: boolean) => void,
    handleOpen: () => void,
    textEdit: ManfactData
}


function Manufacture_form({ handleSubmit, manufactureinput, setManufactureInput, open, setOpen, handleOpen, textEdit }: Props) {


    const handleChange = (key: any, value: any) => {
        { setManufactureInput({ ...manufactureinput, [key]: value }) }
    }

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
                                <BreadcrumbLink className="text-black" href='/manufacture' >Manufacture</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>


                    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>

                        <Button type="submit" variant="blue"
                            onClick={handleOpen}
                        >
                            <CiSquarePlus className="text-white" />Add New</Button>

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="pb-3">Add New Manufacture </DialogTitle>
                                <hr className="w-full" />
                            </DialogHeader>
                            <form className="mb-5 ms-3" onSubmit={handleSubmit}>
                                <div className="grid gap-4">
                                    {/* <div className="grid gap-3">
                                        <Label >Manufacture Name*</Label>
                                        <Input type="text" name="name" className="border-1 border-gray-300"
                                            placeholder="Enter Manufacture Name"
                                            value={manufactureinput.name || textEdit?.name}
                                            onChange={(e) => { setManufactureInput({ ...manufactureinput, name: e.target.value }) }}
                                        />
                                    </div> */}
                                    <Dynamic_Input
                                        label="Manufacture Name"
                                        name="name"
                                        value={manufactureinput.name || textEdit?.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
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

export default Manufacture_form