import { DropdownMenuDemo } from "@/Page/Dropdown";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import { CiSquarePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


function Vendor_Bread() {

    const navigate = useNavigate()

    const AddNew = () => {
        navigate('/vendor_part1')
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
                                <BreadcrumbLink className="text-black" href='/vendor_part' >Vendor Parts</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div>
                        <Button type="submit" variant="blue" onClick={AddNew} ><CiSquarePlus className="text-white" />Add New</Button>

                    </div>
                </div>
                <p>

                    dddwwddwd♣Breadcrumb
                </p>
            </div>
        </>
    )
}

export default Vendor_Bread