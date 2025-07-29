import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableHeader, Table, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { HoverCardContent } from "@radix-ui/react-hover-card";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import { DropdownMenuDemo } from "./Dropdown";
import { BiTrash } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import { PaginationDemo } from "./Pagination";
import { LuPencil } from "react-icons/lu";
// import { BiSortAlphaDown, BiSortAlphaUp } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import useDocumentTitle from "@/hooks/title";






function MarshTable() {

    useDocumentTitle('MarshTable | MarshPOS')

    // const itemsPerPage = 3
    const [itemsPerPage, setItemsPerPage] = useState(2) // items per page

    const [currentPage, setCurrentPage] = useState(1)
    // const [heading, setHeading] = useState([
    //     {
    //         name: "Ram",
    //         created: "23/06/2025",
    //         updated: "23/06/2025"
    //     },
    //     {
    //         name: "Shayam",
    //         created: "24/06/2025",
    //         updated: "24/06/2025"
    //     },
    //     {
    //         name: "Mahesh",
    //         created: "25/06/2025",
    //         updated: "25/06/2025"
    //     },
    //     {
    //         name: "Rajesh",
    //         created: "22/06/2025",
    //         updated: "22/06/2025"
    //     },

    // ])
    const [heading, setHeading] = useState(() => {
        const localData = localStorage.getItem("marshTableData");
        return localData ? JSON.parse(localData) : [];
    });

    const [newName, setNewName] = useState("");
    const [sortName, setSortName] = useState<"none" | "NameAtoZ" | "NameZtoA">("none") // name filter
    const [sortDate, setSortDate] = useState<"none" | "Date1to31" | "Date31to1">("none") // date filter

    useEffect(() => {
        localStorage.setItem("marshTableData", JSON.stringify(heading));
    }, [heading]);

    const handleAddNew = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!newName.trim()) return
        console.log("Form submitted:", newName);
        const today = new Date()
        const dateStr = today.toLocaleDateString("en-GB")
        const newItem = { name: newName, created: dateStr, updated: dateStr }
        setHeading((prevs: any) => [...prevs, newItem]);
        setNewName("");
    }



    //  filter  (name & date )
    let sortFilter = [...heading]
    if (sortName === "NameAtoZ") {
        sortFilter.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortName === "NameZtoA") {
        sortFilter.sort((a, b) => b.name.localeCompare(a.name))
    }

    // let sortFilters = [...heading]
    // if (sortDate === "Date1to31") {
    //     sortFilter.sort((a, b) => a.created.localeCompare(b.created))
    // } else if (sortDate === "Date31to1") {
    //     sortFilter.sort((a, b) => b.created.localeCompare(a.created))
    // }

    // pagination
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginationProduct = sortFilter.slice(startIndex, endIndex)
    const sortTotalPages = Math.ceil(sortFilter.length / itemsPerPage)

    const handleDeleteItem = () => {
        setHeading((prev: { name: string; created: string; updated: string }[]) => prev.slice(1));
    };

    return (
        <>

            <div><DropdownMenuDemo /></div>
            <hr />

            <div className=" mx-5 mt-5 mb-3 flex justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>Disclaimer</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-black" >Disclaimer</BreadcrumbLink>
                            {/* <Button variant="blue">xxx</Button> */}
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Add new  */}


                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="blue">
                            <CiSquarePlus className="text-white" /> Add New
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="pb-3">Add Disclaimers</DialogTitle>
                            <DialogDescription>
                                Please fill out the form to add a new disclaimer.
                            </DialogDescription>
                            <hr className="w-full" />
                        </DialogHeader>
                        <form onSubmit={handleAddNew} className="mb-5 ms-3">
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="name-1">Name*</Label>
                                    <Input id="name-1" name="name" value={newName} onChange={(e) => {
                                        console.log("ssdddd", e.target.value);

                                        setNewName(e.target.value)
                                    }} placeholder="Name" />


                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="text">Text</Label>
                                    <Input id="text" name="text" defaultValue="Text" />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button variant="blue" type="submit">Save <FaChevronDown /></Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div >

            {/* Table */}
            < div className=" border-1 border-solid border-gray-400 rounded-sm shadow-lg mx-5   h-100 " >


                <div className="flex justify-between mt-2 ">
                    <div className="ml-5 flex  rounded-lg items-center  gap-2">
                        <span className="font-medium" >Show</span>
                        <select className="bg-gray-200 text-gray-600 
                          rounded-md mx-3 px-2 py-1"
                            value={itemsPerPage} onChange={e => setItemsPerPage(Number(e.target.value))} >
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>

                        </select>

                        <span className="font-medium" >Entries</span>
                    </div>
                    <div className=" mr-5 ">

                        <Button variant="gray" className=" pb-1"> Columns</Button>
                        <Button variant="gray" className=" mx-1" onClick={() => setSortName((prev) => prev === "NameAtoZ" ? "NameZtoA" : "NameAtoZ")}> <HiOutlineFilter className="text-blue-500" />Filter</Button>

                        <Button variant="gray" className=" mx-1" onClick={handleDeleteItem} > <BiTrash className="text-red-500" />View Delete Item</Button>

                    </div>
                </div>


                <div className="mx-5 mt-2">
                    <Table>
                        <TableHeader >
                            <TableRow >
                                {/* name */}
                                <div className="flex flex-row">
                                    <TableHead
                                        onClick={() =>
                                            setSortName((prev) =>
                                                prev === "NameAtoZ" ? "NameZtoA" : "NameAtoZ"
                                            )
                                        }
                                        className="cursor-pointer flex gap-2  items-center "
                                    >
                                        Name
                                        <div >
                                            <FaAngleUp
                                                className={sortName === "NameZtoA" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortName === "NameAtoZ" ? "text-blue-500" : "text-gray-400"}
                                            />
                                        </div>
                                    </TableHead>
                                </div>

                                {/* //created  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer   items-center"
                                >
                                    <div className="flex gap-2">

                                        Created
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>
                                {/*updated  */}
                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer   items-center"
                                >
                                    <div className="flex gap-2">

                                        Updated
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>


                                <TableHead className="text-center">Action</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody className="">
                            {paginationProduct.map((item, idx) => (
                                <TableRow key={idx}>
                                    <TableCell  >{item.name}</TableCell>
                                    <TableCell>{item.created}</TableCell>
                                    <TableCell>{item.updated}</TableCell>
                                    <TableCell className="flex justify-center" >
                                        <HoverCard >
                                            <HoverCardTrigger>
                                                <HiOutlineDotsVertical className=" cursor-pointer bg-gray-200 text-gray-500 rounded-sm w-8 h-7" />
                                            </HoverCardTrigger>
                                            <HoverCardContent className=" bg-white border-2  rounded-md w-37  text-center ">
                                                {/* <p className="btn bg-blue-500 text-white h-8 pt-1 font-medium rounded-sm mb-2">Edit</p> */}
                                                {/* <BiTrash />  <p className="btn bg-red-500 text-white h-8 pt-1 font-medium rounded-sm">Delete</p> */}
                                                <span className="flex mx-3  h-10 pt-2 font-medium rounded-sm"><LuPencil className="text-blue-500 mt-1 cursor-pointer" /> Edit Disclaimer</span>
                                                <span className="flex mx-3  h-10 pt-2 font-medium rounded-sm" onClick={handleDeleteItem} > <BiTrash className="text-red-500 mt-1 cursor-pointer" />Delete Disclaimer</span>


                                            </HoverCardContent>

                                        </HoverCard>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="mx-5 font-medium">
                    <PaginationDemo currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={sortTotalPages} />
                    <span className="text-gray-500">  Showing </span> {startIndex + 1} to {Math.min(endIndex, heading.length)}
                    <span className="text-gray-500">  Out of</span>   {heading.length}
                    <span className="text-gray-500"> entries </span>
                </div>
            </div >
        </>
    )
}

export default MarshTable 