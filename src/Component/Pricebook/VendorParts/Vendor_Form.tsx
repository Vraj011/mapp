import Dynamic_Switch from "@/Component/Dynamic/Switch/Switch"
import { Button } from "@/components/ui/button"
import Dynamic_Input from "@/Component/Dynamic/Inputs/Input"
import Dynamic_Select from "@/Component/Dynamic/Select/Select"
import Vendor_Location from "./VLocation"
import { DropdownMenuDemo } from "@/Page/Dropdown";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import type React from "react"
import Vendor_Zone from "./VZone"


export interface VendorData {
    Product: string,
    Vendor: string,
    PartNumUnits: string | number,
    Partnumber: string | number,
    primaryswitch: string | number | readonly string[] | undefined
}


interface Props {
    vendorPart: VendorData,
    setVendorPart: any
    handleSubmit: (e: React.FormEvent) => void
}

function Vendor_Form({ handleSubmit, vendorPart, setVendorPart }: Props) {
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
                                <BreadcrumbLink className="" href='/vendor_part' >Vendor Parts</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-black"  >Add</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div >
                        <Button type="submit" variant="gray" className="mx-3 border border-gray-300 text-black" >Cancel</Button>
                        <Button type="submit" variant="blue"   >Save</Button>
                    </div>

                </div>
            </div>

            <div className="border-1 border-solid border-gray-400 rounded-sm shadow-lg mx-5 ">


                <form className="mb-5  " onSubmit={handleSubmit} >

                    <div className="grid grid-cols-3 mt-5 mx-5 gap-7">

                        <Dynamic_Select
                            label="Product"
                            name="Product"
                            type="select"
                            value={vendorPart.Product}
                            onChange={(e) => setVendorPart('Product', e.target.value)}
                            options={[
                                { value: "label1", label: "label1" },
                                { value: "label2", label: "label2" }
                            ]}
                            className="w-full"
                        />

                        <Dynamic_Select
                            label="Vendor"
                            name="Vendor"
                            type="select"
                            value={vendorPart.Vendor}
                            onChange={(e) => setVendorPart('Vendor', e.target.value)}
                            options={[
                                { value: "label1", label: "label1" },
                                { value: "label2", label: "label2" }
                            ]}
                            className="w-full"
                        />

                        <Dynamic_Input
                            label="Part Num Units"
                            name="PartNumUnits"
                            value={vendorPart.PartNumUnits}
                            onChange={(e) => setVendorPart('PartNumUnits', e.target.value)}
                        />

                        <Dynamic_Input
                            label="Part Number"
                            name="Partnumber"
                            value={vendorPart.Partnumber}
                            onChange={(e) => setVendorPart('Partnumber', e.target.value)}

                        />

                        <Dynamic_Switch
                            label="Is primary"
                            name="primaryswitch"
                            value={vendorPart.primaryswitch}
                            onChange={(value) => setVendorPart('primaryswitch', value)}
                            className="mx-5 "
                        />


                    </div>


                </form>


                <div className=" flex gap-4 mx-5 mt-3">

                    <Vendor_Location />
                    <Vendor_Zone />
                </div>

            </div>
        </>
    )
}

export default Vendor_Form