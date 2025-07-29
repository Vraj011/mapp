
import { useEffect, useState } from "react"
import Brand_form from "./Brand_form"
import Brand_table from "./Brand_table"
import Dynamic_Table from "@/Component/Dynamic/Table/Table"
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setColumn, setDataTable } from "@/Component/Dynamic/Table/tableSlice";


export interface Column {
    heading: string;
    id: string
}

function Brand() {

    const [textData, setTextData] = useState<any>(
        {
            name: '',
            manufacture: '',
            description: '',
            switch: '',
        }
    )

    const [tableData, setTableData] = useState<any>([])// table data

    // dytable-st
    const dispatch = useDispatch()

    useEffect(() => {

        const column = [
            { heading: "S.N.", id: "sn" },
            { heading: "Brand Name", id: "brand_name" },
            { heading: "Manufacture", id: "manufacture" },
            { heading: "Description", id: "desc" },
            { heading: "Status", id: "status" },
            { heading: "Created", id: "created" },
            { heading: "Updated", id: "updated" },
            { heading: "Action", id: "action" }
        ]
        dispatch(setColumn(column))
    }, [])

    useEffect(() => {

        const datas = tableData.map((item: any, idx: number) => ({
            "sn": idx + 1,
            "brand_name": item.name,
            "manufacture": item.manufacture,
            "desc": item.description,
            "status": item.switch === true ? <FaRegCircleCheck className="text-green-500" /> : <FaRegCircleXmark className="text-red-500" />,
            "created": item.created,
            "updated": item.updated,
            "action": <>
                <Button variant="destructive"
                    onClick={() => handleDelete(item.id)}
                >Delete</Button>
                <Button variant="gray"
                    onClick={() => handleEdit(item)}
                >Edit</Button>
            </>
        }))
        dispatch(setDataTable(datas))
    }, [tableData])

    // dytable-&

    const handleOpen = () => {
        setOpen(true)

    }
    const handleclose = () => {
        setOpen(false)
        setTextData({})
        setIsEdit({})
    }
    // form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const today = new Date()
        const dateStr = today.toLocaleDateString("en-GB")
        const newItem = { ...textData, created: dateStr, updated: dateStr }
        setTableData((prev: any) => [...prev, { ...textData, id: textData.name, ...newItem }])
        // datas()
        handleclose()
    }
    console.log("first", tableData)

    const [open, setOpen] = useState(false) // dialog open

    const [isEdit, setIsEdit] = useState<any>()

    const handleEdit = (item: any) => {
        setIsEdit(item)
        console.log(item);
        setOpen(true)
    }

    const handleDelete = (id: string) => {
        console.log("delete", id);
        setTableData((prev: any) => {
            const FilterData = prev.filter((item: any) => item.id !== id);
            console.log(FilterData, "FilterData");
            return FilterData;
        });
    };


    return (
        <>
            <Brand_form handleSubmit={handleSubmit} isEdit={isEdit} textData={textData} setTextData={setTextData} open={open}
                setOpen={setOpen} handleOpen={handleOpen} />
            <Brand_table tableData={tableData} handleDelete={handleDelete} handleEdit={handleEdit} />
            <Dynamic_Table
            // column={column}
            // dataTable={datas}
            />
        </>
    )
}

export default Brand