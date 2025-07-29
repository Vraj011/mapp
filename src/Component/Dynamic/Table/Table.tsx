import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import type { Column } from "../../Pricebook/Brand/Brand"
import type { TextData } from "../../Pricebook/Brand/Brand_form"
import { useSelector } from "react-redux"
import type { RootState } from "./tableSlice"

// interface Props {
//     column: Column[] | any
//     dataTable: TextData[] | any
// }

type TableRowCompProps = {
    items: TextData;
};

function Dynamic_Table() {

    const column = useSelector((state: RootState) => state.table.column)
    const dataTable = useSelector((state: RootState) => state.table.dataTable) as unknown as TextData[]
    // const dataTable = useSelector((state: RootState) => state.table.dataTable)

    const TableHeadComponent = ({ items }: { items: Column }) =>

        <TableHead key={items.id} className="border-1 border-gray-300  text-center text-gray-500 bg-base-300">
            {items.heading}
        </TableHead>


    // const TableRowComp = ({ items }: { items: TextData }) => {
    //     return (
    //         <TableRow>
    //             {Object.values(items).map((value, index) => (
    //                 <TableCell key={index} className="border-1 text-center text-gray-500">
    //                     {value}
    //                 </TableCell>
    //             ))}
    //         </TableRow>
    //     );
    // };
    const TableRowComp: React.FC<TableRowCompProps> = ({ items }) => {
        return (
            <TableRow>
                {Object.values(items).map((value, index) => (
                    <TableCell key={index} className="border-1 text-center text-gray-500">
                        {value}
                    </TableCell>
                ))}
            </TableRow>
        );
    };
    console.log(dataTable)

    return (
        <>
            <div className="mx-4  border-gray-300 rounded mt-10">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-base-200">

                            {column.map((item: Column, index: number) =>
                                <TableHeadComponent items={item} key={index} />
                            )}

                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {dataTable.map((item: TextData, idx: number) => (
                            <TableRowComp items={item} key={idx} />
                        ))}

                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Dynamic_Table