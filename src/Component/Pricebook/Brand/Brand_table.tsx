import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BiTrash } from "react-icons/bi"
import { HiOutlineFilter } from "react-icons/hi"
import type { TextData } from "./Brand_form"
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { PaginationDemo } from "@/Page/Pagination"
import Dynamic_Select from "@/Component/Dynamic/Select/Select"


interface Props {
    tableData: TextData[] | any
    handleDelete: (id: string) => void
    handleEdit: (id: string) => void

}

function Brand_table({ tableData, handleDelete, handleEdit }: Props) {

    const [searchText, setSearchText] = useState('')

    // pagination-st
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginationProduct = tableData.slice(startIndex, endIndex);
    const sortTotalPages = Math.ceil(tableData.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);
    // pagination-&



    return (
        <>
            {/* Table */}
            <div className=" border-1 border-solid border-gray-400 rounded-sm shadow-lg mx-5  " >


                <div className="flex justify-between mt-2 ">
                    <div className="ml-5 flex  rounded-lg items-center  gap-2">
                        <span className="font-medium" >Show</span>

                        <Dynamic_Select
                            name=""
                            type="select"
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            options={[
                                { value: "2", label: "2" },
                                { value: "5", label: "5" }
                            ]}
                            className="w-12"
                        />
                        <span className="font-medium" >Entries</span>
                    </div>


                    <div className=" mr-5  flex gap-2">
                        <div>
                            <Input placeholder="Search"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <Button variant="gray" className=" pb-1"> Columns</Button>
                        <Button variant="gray" className=" mx-1" >
                            <HiOutlineFilter className="text-blue-500" />Filter</Button>

                        <Button variant="gray" className=" mx-1">
                            <BiTrash className="text-red-500" />View Delete Item</Button>
                    </div>

                </div>


                <div className="mx-5 mb-10 mt-2 rounded-md ">
                    <Table className="mt-5 rounded-md ">
                        <TableHeader className="border-1 border-gray-300  ">
                            <TableHead className="border-r-1 border-gray-400  text-center text-gray-600 bg-base-300">S.N.</TableHead>
                            <TableHead className="border-r-1 border-gray-400 text-center text-gray-600 bg-base-300">Brand Name</TableHead>
                            <TableHead className="border-r-1 border-gray-400 text-center text-gray-600 bg-base-300">Manufacture</TableHead>
                            <TableHead className="border-r-1 border-gray-400 text-center text-gray-600 bg-base-300">Description</TableHead>
                            <TableHead className="border-r-1 border-gray-400 text-center text-gray-600 bg-base-300">Status</TableHead>
                            <TableHead className="border-r-1 border-gray-400 text-center text-gray-600 bg-base-300">Created</TableHead>
                            <TableHead className="border-r-1 border-gray-400 text-center text-gray-600 bg-base-300">Updated</TableHead>
                            <TableHead className="text-center bg-base-300 text-gray-600">Action</TableHead>
                        </TableHeader>
                        <TableBody>
                            {paginationProduct.filter((items: any) => items.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                                .map((item: any, idx: number) => (

                                    <TableRow key={idx}>
                                        <TableCell className="border-l-1 border-b-1 border-r-1 border-gray-400 text-center text-gray-600">{idx + 1}</TableCell>
                                        <TableCell className="border-r-1 border-b-1 border-gray-400 text-center text-gray-600">{item.name}</TableCell>
                                        <TableCell className="border-r-1 border-b-1 border-gray-400 text-center text-gray-600">{item.manufacture}</TableCell>
                                        <TableCell className="border-r-1 border-b-1 border-gray-400 text-center text-gray-600">{item.description}</TableCell>
                                        <TableCell className="border-r-1 border-b-1 border-gray-400 text-center text-gray-600">{item.switch === true ? <FaRegCircleCheck className="text-green-500" /> : <FaRegCircleXmark className="text-red-500" />}</TableCell>
                                        <TableCell className="border-r-1 border-b-1 border-gray-400 text-center text-gray-600">{item.created}</TableCell>
                                        <TableCell className="border-r-1 border-b-1 border-gray-400 text-center text-gray-600">{item.updated}</TableCell>
                                        <TableCell className="border-r-1 border-b-1 border-gray-400 text-center text-gray-600">
                                            <Button variant="destructive" onClick={() => handleDelete(item.id)}>Delete</Button>
                                            <Button variant="gray" onClick={() => handleEdit(item)}  >Edit</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                        </TableBody>
                    </Table>
                    <div className="flex mb-5 justify-between mt-5  mx-5 font-medium">
                        <div>
                            <span className="text-gray-500">  Showing </span>
                            {Math.min(startIndex + 1, tableData.length)} to {Math.min(endIndex, tableData.length)}
                            <span className="text-gray-500">  Out of</span>   {tableData.length}
                            <span className="text-gray-500"> entries </span>
                        </div>
                        <div className="">
                            <PaginationDemo currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={sortTotalPages} />
                        </div>
                    </div>
                </div>


            </div>





        </>
    )
}

export default Brand_table