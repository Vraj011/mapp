

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TableHeader, Table, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { HoverCardContent } from "@radix-ui/react-hover-card";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import { BiTrash } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DropdownMenuDemo } from "@/Page/Dropdown";
import { PaginationDemo } from "@/Page/Pagination";
import useDocumentTitle from "@/hooks/title";


function Department_Group() {

    useDocumentTitle('Department Group | MarshPOS')

    const [itemsPerPage, setItemsPerPage] = useState(2)
    // const itemsPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)

    // const [heading, setHeading] = useState(() => {
    //     const localData = localStorage.getItem("marshTableData");
    //     return localData ? JSON.parse(localData) : [];
    // });

    const [data, setData] = useState([
        { name: "Ram", created: "23/06/2025", updated: "23/06/2025" },
        { name: "Shayam", created: "24/06/2025", updated: "24/06/2025" },
        { name: "Mahesh", created: "25/06/2025", updated: "25/06/2025" },
        { name: "Rajesh", created: "22/06/2025", updated: "22/06/2025" },
    ]);

    const [newName, setNewName] = useState("");
    const [sortName, setSortName] = useState<"none" | "NameAtoZ" | "NameZtoA">("none") // name filter
    const [sortDate, setSortDate] = useState<"none" | "Date1to31" | "Date31to1">("none") // date filter

    useEffect(() => {
        localStorage.setItem("marshTableData", JSON.stringify(data));
    }, [data]);

    // const [dialogOpen, setDialogOpen] = useState(false)
    const [newNameError, setNewNameError] = useState("");


    const handleAddNew = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!newName.trim()) {
            setNewNameError("This field is required");
            return;
        }
        console.log("Form submitted:", newName);
        const today = new Date()
        const dateStr = today.toLocaleDateString("en-GB")
        const newItem = { name: newName, created: dateStr, updated: dateStr }
        setData((prevs: any) => [...prevs, newItem]);
        setNewName("");
        setNewNameError("");
        setDialogOpen(false)
    }




    //  filter  (name & date )
    let sortFilter = [...data]
    if (sortName === "NameAtoZ") {
        sortFilter.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortName === "NameZtoA") {
        sortFilter.sort((a, b) => b.name.localeCompare(a.name))
    }

    // pagination
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginationProduct = sortFilter.slice(startIndex, endIndex)
    const sortTotalPages = Math.ceil(sortFilter.length / itemsPerPage)

    const handleDeleteItem = () => {
        setData((prev: { name: string; created: string; updated: string }[]) => prev.slice(1));
    };

    const [editIndex, setEditIndex] = useState<number | null>(null)
    const [editName, setEditName] = useState("")
    const [editDialogOpen, setEditDialogOpen] = useState(false)

    const [dialogOpen, setDialogOpen] = useState(false);
    // edit product 
    const handleEditClick = (idx: number) => {
        setEditIndex(idx);
        setEditName(paginationProduct[idx].name);
        setEditDialogOpen(true);
    };

    const handleEditSave = () => {
        if (editIndex === null) return;
        const today = new Date();
        const dateStr = today.toLocaleDateString("en-GB");
        setData((prev: any[]) => {
            const globalIdx = (currentPage - 1) * itemsPerPage + editIndex;
            return prev.map((item, idx) =>
                idx === globalIdx ? { ...item, name: editName, updated: dateStr } : item
            );
        });
        setEditDialogOpen(false);
        setEditIndex(null);
        setEditName("");
    };


    return (
        <>

            <div><DropdownMenuDemo /></div>
            <hr />

            <div className=" mx-5 mt-5 mb-3 flex  justify-between    ">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>Departments</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-black" >Departments Group</BreadcrumbLink>
                            {/* <Button variant="blue">xxx</Button> */}
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* MAnage  Group */}
                <div className="flex space-x-2">


                    {/* Add new  */}

                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                            <Button variant="blue">
                                <CiSquarePlus className="text-white" /> Add New
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="pb-3">Add Departments Group</DialogTitle>

                            </DialogHeader>
                            <hr className="w-full bg-black" />
                            <form onSubmit={handleAddNew} className="mb-5 ms-3">
                                <div className="grid gap-4">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name-1">Name*</Label>
                                        <Input id="name-1" name="name" value={newName} onChange={(e) => {
                                            setNewName(e.target.value)
                                            if (e.target.value) setNewNameError("");
                                        }}
                                            placeholder="Name"
                                        />
                                        {newNameError && (
                                            <span className="text-red-500 text-xs">{newNameError}</span>
                                        )}
                                        {/* }} placeholder="Name" /> */}
                                        {/*  */}

                                    </div>

                                </div>
                                <hr className="w-full mt-5 bg-black" />
                                <DialogFooter className="mt-5">
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button variant="blue" type="submit" disabled={!newName.trim()}>Save  </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

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
                        <TableHeader className="">
                            <TableRow >
                                {/* name */}
                                <div className="flex flex-row">
                                    <TableHead
                                        onClick={() =>
                                            setSortName((prev) =>
                                                prev === "NameAtoZ" ? "NameZtoA" : "NameAtoZ"
                                            )
                                        }
                                        className="cursor-pointer text-gray-500 flex gap-2  items-center "
                                    >
                                        Department Group Name
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
                                    className="cursor-pointer text-gray-600  items-center"
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
                                    className="cursor-pointer text-gray-600  items-center"
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
                                <TableHead className="text-center text-gray-600">Action</TableHead>
                            </TableRow>
                        </TableHeader>



                        <TableBody className="">
                            {paginationProduct.map((item, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="text-gray-600" >{item.name}</TableCell>
                                    <TableCell className="text-gray-600">{item.created}</TableCell>
                                    <TableCell className="text-gray-600">{item.updated}</TableCell>
                                    <TableCell className="flex justify-center" >
                                        <HoverCard >
                                            <HoverCardTrigger>
                                                <HiOutlineDotsVertical className="cursor-pointer p-1 bg-gray-200 text-gray-500 rounded-sm  w-8 h-7" />
                                            </HoverCardTrigger>
                                            <HoverCardContent className=" bg-white px-2 border-2 rounded-md w-22  text-center ">

                                                <span className="flex cursor-pointer h-10 pt-2 font-medium rounded-sm" onClick={() => handleEditClick(idx)}>
                                                    <LuPencil className="text-blue-500 mt-1" /> Edit
                                                </span>

                                                <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                                                    <DialogContent className="sm:max-w-[425px]">
                                                        <DialogHeader>
                                                            <DialogTitle>Edit Product Tag</DialogTitle>
                                                        </DialogHeader>
                                                        <form
                                                            onSubmit={e => {
                                                                e.preventDefault();
                                                                handleEditSave();
                                                            }}
                                                        >
                                                            <div className="grid gap-3">
                                                                <Label htmlFor="edit-name">Name</Label>
                                                                <Input
                                                                    id="edit-name"
                                                                    value={editName}
                                                                    onChange={e => setEditName(e.target.value)}
                                                                />
                                                            </div>
                                                            <DialogFooter className="mt-3">
                                                                <Button variant="blue" type="submit">
                                                                    Save
                                                                </Button>
                                                                <DialogClose asChild>
                                                                    <Button variant="gray">Cancel</Button>
                                                                </DialogClose>
                                                                <Button>Delete</Button>
                                                            </DialogFooter>
                                                        </form>
                                                    </DialogContent>
                                                </Dialog>

                                                <span className="flex cursor-pointer h-10 pt-2 font-medium rounded-sm" onClick={handleDeleteItem} > <BiTrash className="text-red-500 mt-1" />Delete</span>


                                            </HoverCardContent>

                                        </HoverCard>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex justify-between mt-5 mx-5 font-medium">
                    <div>
                        <span className="text-gray-500">  Showing </span> {Math.min(startIndex + 1, data.length)} to {Math.min(endIndex, data.length)}
                        <span className="text-gray-500">  Out of</span>   {data.length}
                        <span className="text-gray-500"> entries </span>
                    </div>
                    <div>
                        <PaginationDemo currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={sortTotalPages} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Department_Group 