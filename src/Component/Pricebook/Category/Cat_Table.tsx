import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



function Cat_Table() {
    return (
        <>

            <div className="mb-10">


                <div className="mx-4 mt-10 mb-5">
                    <p className="font-medium">Products in Category</p>
                </div>


                <div className="mx-4 border-1 border-gray-300 rounded ">

                    <Table>
                        <TableHeader>
                            <TableRow className="bg-base-200">
                                <TableHead className=" border-r-1 text-gray-500">Product Name</TableHead>
                                <TableHead className="  border-r-1 text-gray-500">UPC</TableHead>
                                <TableHead className="  border-r-1 text-gray-500">Category </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="border-r-1 text-gray-500">Dummy Product 391</TableCell>
                                <TableCell className="border-r-1 text-gray-500">000000000391</TableCell>
                                <TableCell className="border-r-1 text-gray-500">Credit Card</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="border-r-1 text-gray-500">Dummy Product 392</TableCell>
                                <TableCell className="border-r-1 text-gray-500">000000000392</TableCell>
                                <TableCell className="border-r-1 text-gray-500">Credit Card</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Cat_Table