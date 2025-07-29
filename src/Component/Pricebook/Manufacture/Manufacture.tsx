import { useState } from "react"
import Manufacture_form from "./Manufacture_form"
import Manufacture_table from "./Manufacture_table";
import Dynamic_Table from "@/Component/Dynamic/Table/Table";
import { Button } from "@/components/ui/button";

export interface Column {
    heading: string;
    id: string
}

function Manufacture() {

    const [manufactureinput, setManufactureInput] = useState<any>({
        name: ''
    })

    const [mftTableData, setMftTableData] = useState<any>([]) // table data



    // dytable-→
    const column = [
        { heading: "S.N.", id: "sn" },
        { heading: " Name", id: "name" },
        { heading: "Created", id: "created" },
        { heading: "Updated", id: "updates" },
        { heading: "Action", id: "action" }
    ]

    const datas = mftTableData.map((item: any, idx: number) => (({

        "sn": idx + 1,
        "name": item.name,
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
    })))
    // dytable-& 



    // form data
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const today = new Date();
        const datestr = today.toLocaleDateString("en-GB");
        const newItem = { ...manufactureinput, created: datestr, updated: datestr };

        //update name
        if (textEdit && textEdit.name) {
            setMftTableData((prev: any) =>
                prev.map((item: any) =>
                    item.name === textEdit.name ? { ...item, ...manufactureinput, updated: datestr } : item
                )
            );
        }
        else {
            setMftTableData((prev: any) => [
                ...prev,
                { ...manufactureinput, id: manufactureinput.name, ...newItem }
            ]);
        }

        handleClose();
    };
    // console.log(mftTableData);

    const [textEdit, setTextEdit] = useState<any>()

    // dialog
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setManufactureInput({})
        setTextEdit({})
    }


    // edit
    const handleEdit = (item: any) => {
        setTextEdit(item)
        setOpen(true)

    }
    const handleDelete = (id: string) => {
        console.log("delete", id);

    }


    return (
        <>
            <Manufacture_form handleSubmit={handleSubmit} handleOpen={handleOpen} open={open} setOpen={setOpen} manufactureinput={manufactureinput} setManufactureInput={setManufactureInput} textEdit={textEdit} />
            <Manufacture_table mftTableData={mftTableData} handleEdit={handleEdit} handleDelete={handleDelete} />
            <Dynamic_Table
                column={column} dataTable={datas} />
        </>
    )
}

export default Manufacture