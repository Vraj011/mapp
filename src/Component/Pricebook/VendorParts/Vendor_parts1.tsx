import { useState } from "react"
import Vendor_Form from "./Vendor_Form"


function Vendor_parts1() {

    const [vendorPart, setVendorPart] = useState({
        Product: '',
        Vendor: '',
        PartNumUnits: '',
        Partnumber: '',
        primaryswitch: ''
    })
    console.log("first", vendorPart)


    // form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <>
            <Vendor_Form vendorPart={vendorPart} setVendorPart={setVendorPart} handleSubmit={handleSubmit} />
        </>
    )
}

export default Vendor_parts1