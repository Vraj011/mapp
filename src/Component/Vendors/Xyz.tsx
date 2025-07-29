import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react"


function Xyz() {

    const [data] = useState([
        { name: "Ram", created: "23/06/2025", updated: "23/06/2025" },
        { name: "Shyam", created: "23/06/2025", updated: "23/06/2025" },
        { name: "Ramesh", created: "23/06/2025", updated: "23/06/2025" },
    ])

    return (
        <>
            <Table >
                <TableHeader >
                    <TableRow>
                        <TableHead className="text-center">Invoice</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Method</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-center">
                    {data.map((item) => (
                        <TableRow key={item.name}>

                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.created}</TableCell>
                            <TableCell>{item.updated}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default Xyz