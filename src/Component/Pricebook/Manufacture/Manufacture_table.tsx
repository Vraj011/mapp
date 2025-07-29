import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { ManfactData } from "./Manufacture_form"
import { HiOutlineFilter } from "react-icons/hi"
import { BiTrash } from "react-icons/bi"
import { useState } from "react"
import { Input } from "@/components/ui/input"

interface Props {
    mftTableData: ManfactData[] | any,
    handleEdit: (id: string) => void,
    handleDelete: (id: string) => void
}

function Manufacture_table({ mftTableData, handleEdit, handleDelete }: Props) {

    const [searchText, setSearchText] = useState('')

    return (
        <>
            < div className=" border-1 border-solid border-gray-400 rounded-sm shadow-lg mx-5  " >

                <div className=" mt-5 mx-5 mb-5">

                    <div className="flex justify-between mt-2 mb-5 ">
                        <div className="ml-5 flex  rounded-lg items-center  gap-2">
                            <span className="font-medium" >Show</span>
                            <select className="bg-gray-200 text-gray-600 
                          rounded-md mx-3 px-2 py-1">
                                <option value={5}>5</option>
                                <option value={12}>12</option>
                                <option value={15}>15</option>

                            </select>
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

                    <Table>
                        <TableHeader className="bg-base-300 text-center border-1 border-gray-300">
                            <TableHead className="text-center text-gray-500 border-r-1  border-gray-400 border-l-1">S.N.</TableHead>
                            <TableHead className="text-center text-gray-500 border-r-1  border-gray-300 ">Name</TableHead>
                            <TableHead className="text-center text-gray-500 border-r-1  border-gray-300 ">Created</TableHead>
                            <TableHead className="text-center text-gray-500 border-r-1  border-gray-300 ">Updated</TableHead>
                            <TableHead className="text-center text-gray-500 border-r-1  border-gray-300 ">Action</TableHead>
                        </TableHeader>
                        <TableBody>
                            {mftTableData.filter((items: any) => items.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                                .map((item: any, idx: number) => (

                                    <TableRow key={idx}>
                                        <TableCell className="text-center text-gray-600 border-r-1 border-b-1 border-gray-300 border-l-1 ">{idx + 1}</TableCell>
                                        <TableCell className="text-center text-gray-600 border-r-1 border-b-1 border-gray-300 ">{item.name}</TableCell>
                                        <TableCell className="text-center text-gray-600 border-r-1 border-b-1 border-gray-300 ">{item.created}</TableCell>
                                        <TableCell className="text-center text-gray-600 border-r-1 border-b-1 border-gray-300 ">{item.updated}</TableCell>
                                        <TableCell className="text-center text-gray-600 border-r-1 border-b-1 border-gray-300 ">
                                            <Button variant="destructive" className="mx-2" onClick={() => handleDelete(item.id)}>Delete</Button>
                                            <Button variant="gray" className="border border-gray-300" onClick={() => handleEdit(item)} >Edit</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Manufacture_table