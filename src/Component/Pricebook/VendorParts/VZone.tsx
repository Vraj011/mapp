import { Button } from "@/components/ui/button"

function Vendor_Zone() {
    return (

        <>

            <div className="border-1 border-gray-300 mb-7 w-full rounded">
                <div className="flex justify-between mx-5 mt-4 mb-5">
                    <p className="font-medium">Zone Costs </p>
                    <Button variant="blue">Update All Cost</Button>
                </div>
                <hr className="w-full" />
            </div>

        </>
    )
}

export default Vendor_Zone