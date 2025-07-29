import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenuDemo } from "@/Page/Dropdown"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CiSquarePlus } from "react-icons/ci"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react"

export interface ProductData {
    id?: string,
    name: string,
    tag: string
}

interface Props {
    handleSubmit: (e: React.FormEvent) => void
    productName: ProductData,
    setProductName: any,
    open: boolean,
    setOpen: (value: boolean) => void,
    handleOpen: () => void

}

function Product_Form({ productName, setProductName, handleSubmit, open, setOpen, handleOpen }: Props) {


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
                                <BreadcrumbLink className="text-black" href='/product' >Product Tag</BreadcrumbLink>
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
                                <DialogTitle className="pb-3">Add Product Tag  </DialogTitle>
                                <hr className="w-full" />
                            </DialogHeader>
                            <form className="mb-5 ms-3" onSubmit={handleSubmit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-3">
                                        <Label > Name*</Label>
                                        <Input type="text" name="name" className="border-1 border-gray-300"
                                            placeholder="Enter Name"
                                            value={productName.name}
                                            onChange={(e) => { setProductName({ ...productName, name: e.target.value }) }}
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-2">Tag Group</Label>
                                        <select className="w-full border-2 border-gray-300 rounded-md py-1 "
                                            value={productName.tag}
                                            onChange={(e) => { setProductName({ ...productName, tag: e.target.value }) }}
                                        >
                                            <option value="">Select Tag Group</option>
                                            <option value="a">a</option>
                                            <option value="b">b</option>
                                        </select>
                                    </div>
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

export default Product_Form