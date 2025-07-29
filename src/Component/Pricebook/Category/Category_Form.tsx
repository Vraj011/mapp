import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenuDemo } from "@/Page/Dropdown"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CiSquarePlus } from "react-icons/ci"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

export interface textCatInput {
    id?: string,
    name: string,
    parent: string,
    desc: string,
    shortdesc: string,
    activeswitch: string,

}

interface Props {
    textCat: textCatInput,
    setTextCat: any,
    handleSubmit: (e: React.FormEvent) => void
    open: boolean,
    setOpen: (value: boolean) => void
    handleOpen: () => void

}


function Category_form({ handleSubmit, textCat, setTextCat, open, setOpen, handleOpen }: Props) {

    const [root, setRoot] = useState(false)


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
                                <BreadcrumbLink className="text-black" href='/category' >Category</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>


                    <Dialog
                        open={open} onOpenChange={(value) => setOpen(value)}
                    >

                        <Button type="submit" variant="blue"
                            onClick={handleOpen}
                        >
                            <CiSquarePlus className="text-white " />Add New Category</Button>

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="pb-3">Add New Category </DialogTitle>
                                <hr className="w-full" />
                            </DialogHeader>
                            <form className="mb-5 ms-3"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid gap-4">
                                    <div className="grid gap-3">
                                        <Label > Name*</Label>
                                        <Input type="text" name="name" className="border-1 border-gray-300"
                                            placeholder="Enter Category Name"
                                            value={textCat.name}
                                            onChange={(e) => setTextCat({ ...textCat, name: e.target.value })}
                                        />
                                    </div>

                                    {/* root-switch-start */}
                                    <div>
                                        <div className="flex mt-4 mb-3 ">
                                            <div>
                                                <Label > is Root Category</Label>
                                            </div>
                                            <div className="px-5">
                                                <Switch
                                                    checked={root}
                                                    onCheckedChange={setRoot} />
                                            </div>
                                        </div>
                                        {root && (
                                            <div>

                                                <Label className="mb-2" > Parent Category</Label>
                                                <select className="w-full border-2 border-gray-300 rounded-md py-1 px-2 mb-3 text-gray-500"
                                                    value={textCat.parent}
                                                    onChange={(e) => setTextCat({ ...textCat, parent: e.target.value })}
                                                >
                                                    <option value="">Electronic</option>
                                                    <option value="Electronic 1">Electronic 1</option>
                                                    <option value="Electronic 2">Electronic 2</option>
                                                </select>
                                            </div>
                                        )}
                                    </div>
                                    {/* root-switch-end */}

                                    <div className="grid gap-3">
                                        <Label >Description</Label>
                                        <Textarea
                                            placeholder="Description"
                                            value={textCat.desc}
                                            onChange={(e) => setTextCat({ ...textCat, desc: e.target.value })}

                                        ></Textarea>

                                    </div>
                                    <div className="grid gap-3">
                                        <Label >Short Description</Label>
                                        <Textarea
                                            placeholder="Short Description"
                                            value={textCat.shortdesc}
                                            onChange={(e) => setTextCat({ ...textCat, shortdesc: e.target.value })}

                                        ></Textarea>

                                    </div>


                                    <div className="flex mt-4 mb-3 ">
                                        <div>
                                            <Label > Active</Label>
                                        </div>
                                        <div className="px-5">
                                            <Switch value={textCat.activeswitch}
                                                onCheckedChange={(value) => setTextCat({ ...textCat, activeswitch: value })}
                                            />
                                        </div>
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

export default Category_form