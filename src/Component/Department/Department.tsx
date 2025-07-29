
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
import { BiTrash } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DropdownMenuDemo } from "@/Page/Dropdown";
import { PaginationDemo } from "@/Page/Pagination";
import { useNavigate } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import useDocumentTitle from "@/hooks/title";


function Department() {

    useDocumentTitle('Department| MarshPOS')

    const [itemsPerPage, setItemsPerPage] = useState(2) // items per page
    // const itemsPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)

    // const [heading, setHeading] = useState(() => {
    //     const localData = localStorage.getItem("marshTableData");
    //     return localData ? JSON.parse(localData) : [];
    // });

    const [data, setData] = useState([
        {
            name: "Ram", number: '1', departmentgroup: "MarshPOS", POS: "a", included: "zz", margin: "100", created: "23/06/2025",
            updated: "23/06/2025"
        },
        { name: "Shayam", number: '1', departmentgroup: "MarshPOS", POS: "a", included: "cc", margin: "100", created: "24/06/2025", updated: "24/06/2025" },
        { name: "Mahesh", number: '1', departmentgroup: "MarshPOS", POS: "a", included: "ss", margin: "100", created: "25/06/2025", updated: "25/06/2025" },
        { name: "Rajesh", number: '1', departmentgroup: "MarshPOS", POS: "a", included: "ab", margin: "100", created: "22/06/2025", updated: "22/06/2025" },
    ]);


    const [newName, setNewName] = useState("");
    const [sortName, setSortName] = useState<"none" | "NameAtoZ" | "NameZtoA">("none") // name filter
    const [sortDate, setSortDate] = useState<"none" | "Date1to31" | "Date31to1">("none") // date filter

    useEffect(() => {
        localStorage.setItem("marshTableData", JSON.stringify(data));
    }, [data]);

    // const [dialogOpen, setDialogOpen] = useState(false)

    const handleAddNew = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!newName.trim()) return
        console.log("Form submitted:", newName);
        const today = new Date()
        const dateStr = today.toLocaleDateString("en-GB")
        const newItem = { name: newName, created: dateStr, updated: dateStr }
        setData((prevs: any) => [...prevs, newItem]);
        setNewName("");
        // setDialogOpen(false)
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
        // setData((prev: { name: string; created: string; updated: string }[]) => prev.slice(1));
        setData((prev: { name: string; number: string; departmentgroup: string; POS: string; included: string; margin: string; created: string; updated: string }[]) => prev.slice(1));
    };

    const [editIndex, setEditIndex] = useState<number | null>(null)
    const [editName, setEditName] = useState("")
    const [editDialogOpen, setEditDialogOpen] = useState(false)


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
    const navigate = useNavigate()
    const navigateClick = () => {
        navigate('/deptdetails')
    }

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
                            <BreadcrumbLink className="text-black" >Departments</BreadcrumbLink>
                            {/* <Button variant="blue">xxx</Button> */}
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* MAnage  Group */}
                <div className="flex space-x-2">
                    <Dialog >
                        <DialogTrigger asChild>
                            <Button variant="blue">
                                Manage Department Groups
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="pb-3">Manage Tag Group</DialogTitle>
                                <DialogDescription>
                                    Please fill out the form to add a new disclaimer.
                                </DialogDescription>
                                <hr className="w-full" />
                            </DialogHeader>

                            <div className="ml-5">
                                <p className="font-medium" >Show
                                    <span className="bg-gray-300 text-center text-gray-600 rounded-md mx-3 px-3">

                                        {Math.min(endIndex, itemsPerPage)}
                                    </span> Entries</p>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableHead className="text-gray-400">Name</TableHead>
                                    <TableHead className="text-gray-400 flex justify-center">Action</TableHead>
                                </TableHeader>
                                <TableBody >
                                    {paginationProduct.map((item) => (

                                        <TableRow>
                                            <TableCell>{item.name}</TableCell>


                                            <TableCell className="flex justify-center" >
                                                <HoverCard >
                                                    <HoverCardTrigger>
                                                        <HiOutlineDotsVertical className="  bg-gray-200 text-gray-500 rounded-sm w-8 h-7" />
                                                    </HoverCardTrigger>
                                                    <HoverCardContent className=" bg-white border-2 px-2 rounded-md w-40  text-center ">
                                                        <span className="flex cursor-pointer  h-10 pt-2 font-medium rounded-sm"><LuPencil className="text-blue-500 mt-1" /> Edit Department </span>
                                                        <span className="flex cursor-pointer h-10 pt-2 font-medium rounded-sm" onClick={handleDeleteItem} > <BiTrash className="text-red-500  mt-1" />Delete Department</span>
                                                    </HoverCardContent>

                                                </HoverCard>
                                            </TableCell>
                                        </TableRow>))}
                                </TableBody>
                            </Table>

                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                {/* Product>Manage> add  */}
                                <Button variant="blue" type="submit">  <CiSquarePlus className="text-white" />
                                    <Dialog >
                                        <DialogTrigger asChild>
                                            <Button variant="blue">
                                                Add Tag Group
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle className="pb-3">Add Tag Group</DialogTitle>
                                                <DialogDescription>
                                                    Please fill out the form.
                                                </DialogDescription>
                                                <hr className="w-full" />
                                            </DialogHeader>

                                            <form onSubmit={handleAddNew}>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="name-1">Name</Label>
                                                    <Input id="name-1" name="name" value={newName} onChange={(e) => {
                                                        console.log("add tag group", e.target.value);
                                                        setNewName(e.target.value)
                                                    }} placeholder="Name" />
                                                </div>


                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Button variant="blue" type="submit">Create</Button>
                                                </DialogFooter>
                                            </form>
                                        </DialogContent>
                                    </Dialog>
                                    {/* Add Tag Group */}
                                </Button>
                            </DialogFooter>

                        </DialogContent>
                    </Dialog>








                    {/* Add new  */}
                    <Button variant="blue" onClick={navigateClick} >
                        <CiSquarePlus className="text-white" />
                        Add New

                    </Button>
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
                                        Department Name
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
                                {/* Dept  */}
                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600  items-center"
                                >
                                    <div className="flex gap-2">

                                        Dept
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>
                                {/* Dept Group */}
                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600  items-center"
                                >
                                    <div className="flex gap-2">

                                        Dept Group
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>



                                {/* POS Flag */}
                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600  items-center"
                                >
                                    <div className="flex gap-2">

                                        POS Flag
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* Sales Report */}
                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600  items-center"
                                >
                                    <div className="flex gap-2">

                                        Include in Sales Report
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>
                                {/* Margin */}
                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600  items-center"
                                >
                                    <div className="flex gap-2">

                                        Margin
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>


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
                                    <TableCell className="text-gray-600" >{item.number}1</TableCell>
                                    <TableCell className="text-gray-600" >Default</TableCell>
                                    <TableCell className="text-gray-600" >{item.name}1</TableCell>
                                    <TableCell className="text-green-600 pl-20" ><FaRegCircleCheck /></TableCell>
                                    <TableCell className="text-gray-600" >{item.number}1</TableCell>
                                    <TableCell className="text-gray-600">{item.created}</TableCell>
                                    <TableCell className="text-gray-600">{item.updated}</TableCell>
                                    <TableCell className="flex justify-center" >
                                        <HoverCard >
                                            <HoverCardTrigger>
                                                <HiOutlineDotsVertical className="cursor-pointer p-1  bg-gray-200 text-gray-500 rounded-sm w-8 h-7" />
                                            </HoverCardTrigger>
                                            <HoverCardContent className=" bg-white px-2 border-2 rounded-md w-40  text-center ">

                                                <span className="flex cursor-pointer h-10 pt-2 font-medium rounded-sm" onClick={() => handleEditClick(idx)}>
                                                    <LuPencil className="text-blue-500 mt-1" /> Edit Department
                                                </span>

                                                <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                                                    <DialogContent className="sm:max-w-[425px]">
                                                        <DialogHeader>
                                                            <DialogTitle>Edit Department</DialogTitle>
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

                                                <span className="flex cursor-pointer h-10 pt-2 font-medium rounded-sm" onClick={handleDeleteItem} > <BiTrash className="text-red-500 mt-1" />Delete Department</span>


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

export default Department 