import { useState } from "react";
import Product_Form from "./Product_Form"
import Product_Table from "./Product_Table";

function Product() {

    const [productName, setProductName] = useState<any>({
        name: '',
        tag: ''
    })
    // console.log("productName", productName);

    const [prtTableData, setPrtTableData] = useState<any>([]) // tabledata
    console.log("prtTableData", prtTableData);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const today = new Date()
        const dateStr = today.toLocaleDateString("en-GB")
        const newItem = { ...productName, created: dateStr, updated: dateStr }
        setPrtTableData((prev: any) => [...prev, { ...productName, id: productName.name, ...newItem }])

        handleClose()
    }

    // const [textEdit, setTextEdit] = useState<any>()

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setProductName({})
    }


    return (
        <>

            <Product_Form productName={productName} setProductName={setProductName} handleSubmit={handleSubmit} setOpen={setOpen}
                open={open} handleOpen={handleOpen} />
            <Product_Table prtTableData={prtTableData} />

        </>
    )
}

export default Product