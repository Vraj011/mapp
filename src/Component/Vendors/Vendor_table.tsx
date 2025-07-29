import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { TableHeader, Table, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { HoverCardContent } from "@radix-ui/react-hover-card";
import { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import { BiTrash } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import { LuPencil } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DropdownMenuDemo } from "@/Page/Dropdown";
import { PaginationDemo } from "@/Page/Pagination";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "@/hooks/title";


function Vendor_table() {

    useDocumentTitle('Vendor| MarshPOS')

    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [data, setData] = useState([
        { name: "Ram", status: "Active", created: "23/06/2025", updated: "23/06/2025" },
        { name: "Shayam", status: "Inactive", created: "24/06/2025", updated: "24/06/2025" },
        { name: "Mahesh", status: "Active", created: "25/06/2025", updated: "25/06/2025" },
        { name: "Rajesh", status: "Inactive", created: "22/06/2025", updated: "22/06/2025" },
    ]);


    const [currentPage, setCurrentPage] = useState(1);
    // const [heading, setHeading] = useState(() => {
    //     const localData = localStorage.getItem("marshTableData");
    //     return localData ? JSON.parse(localData) : [];
    // });


    const [sortName, setSortName] = useState<"none" | "NameAtoZ" | "NameZtoA">("none");
    const [sortDate, setSortDate] = useState<"none" | "Date1to31" | "Date31to1">("none");



    // Filter  state
    const [showFilter, setShowFilter] = useState(false);
    const [statusFilter, setStatusFilter] = useState<string>(""); // "" means show all
    const [tempStatusFilter, setTempStatusFilter] = useState<string>("");


    // Filtering logic
    let sortFilter = [...data];
    if (sortName === "NameAtoZ") {
        sortFilter.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortName === "NameZtoA") {
        sortFilter.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (statusFilter !== "") {
        sortFilter = sortFilter.filter(item => item.status === statusFilter);
    }


    // pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginationProduct = sortFilter.slice(startIndex, endIndex);
    const sortTotalPages = Math.ceil(sortFilter.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    const handleDeleteItem = () => {
        // setData((prev: { name: string; created: string; updated: string }[]) => prev.slice(1));
        setData((prev: { name: string; status: string; created: string; updated: string }[]) => prev.slice(1));
    };

    const [editIndex, setEditIndex] = useState<number | null>();
    const [editName, setEditName] = useState("");
    // const [editDialogOpen, setEditDialogOpen] = useState(false);

    // edit product
    const handleEditClick = (idx: number) => {
        const globalIdx = (currentPage - 1) * itemsPerPage + idx;
        const selectedVendor = sortFilter[globalIdx];
        localStorage.setItem("editVendor", JSON.stringify(selectedVendor))
        localStorage.setItem("editVendorIndex", globalIdx.toString())

        navigate("/vendor_edit")
        setEditIndex(idx);
        setEditName(paginationProduct[idx].name);
        // setEditDialogOpen(true);
    };

    // Filter 
    const handleOpenFilter = () => {
        setTempStatusFilter(statusFilter);
        setShowFilter(true);
    };
    const handleCancelFilter = () => {
        setShowFilter(false);
    };
    const handleApplyFilter = () => {
        setStatusFilter(tempStatusFilter);
        setShowFilter(false);
        setCurrentPage(1);
    };
    const handleClearAll = () => {
        setStatusFilter("");
        setTempStatusFilter("");
        setShowFilter(false);
        setCurrentPage(1);
    };

    // const handleEditSave = () => {
    //     if (editIndex === null) return;
    //     const today = new Date();
    //     const dateStr = today.toLocaleDateString("en-GB");
    //     setHeading((prev: any[]) => {
    //         const globalIdx = (currentPage - 1) * itemsPerPage + editIndex;
    //         return prev.map((item, idx) =>
    //             idx === globalIdx ? { ...item, name: editName, updated: dateStr } : item
    //         );
    //     });
    //     // setEditDialogOpen(false);
    //     setEditIndex(null);
    //     setEditName("");
    // };



    const navigate = useNavigate()
    const navigateClick = () => {
        navigate('/vendordetails')
    }

    return (
        <>
            <div><DropdownMenuDemo /></div>
            <hr />

            <div className="mx-5 mt-5 mb-3 flex justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>Vendor</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-black">Vendor</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex space-x-2">
                    <Button variant="blue" onClick={navigateClick}>
                        <CiSquarePlus className="text-white" /> Add New
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="border-1 border-solid border-gray-400 rounded-sm shadow-lg mx-5">
                <div className="flex justify-between mt-2 ">
                    <div className="ml-5 flex items-center gap-2">
                        <span className="font-medium">Show</span>
                        <select
                            className="bg-gray-200  text-gray-500 rounded-md px-2 py-1 "
                            value={itemsPerPage}
                            onChange={e => setItemsPerPage(Number(e.target.value))}
                        >
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                        <span className="font-medium">Entries</span>
                    </div>
                    <div className="mr-5 md:flex gap-4">

                        <Button variant="gray" className="pb-1"> Columns</Button>

                        {/* filter */}
                        <div className="">
                            <div className="flex items-center gap-2 mb-2">
                                <Button variant="gray" className="pb-1" onClick={handleOpenFilter}>
                                    <HiOutlineFilter className="text-blue-500" /> Filters
                                </Button>
                                {/* {statusFilter && (
                                    <div className="flex items-center  bg-gray-100 px-2 py-1 rounded text-sm">
                                        <span className="mr-2">Active Filters :</span>
                                        <span>Status : {statusFilter} <button className="ml-1 text-gray-500 hover:text-red-500" onClick={handleClearAll}>✕</button></span>
                                        <button className="ml-3 text-blue-500 underline" onClick={handleClearAll}>Clear all</button>
                                    </div>
                                )} */}
                            </div>
                            {showFilter && (
                                // <div className="border w-full border-gray-300 rounded p-4 mb-3 bg-white flex flex-col md:flex-row md:items-center md:gap-8">
                                <div className="border w-full border-gray-300 rounded-sm p-4 mb-3 bg-white flex flex-col md:flex-row  md:gap-8">
                                    <div className="flex w-full items-center gap-4 mb-3 md:mb-0">
                                        <span className="font-medium">Status :</span>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="Active"
                                                checked={tempStatusFilter === "Active"}
                                                onChange={() => setTempStatusFilter("Active")}
                                            /> Active
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="status"
                                                value="Inactive"
                                                checked={tempStatusFilter === "Inactive"}
                                                onChange={() => setTempStatusFilter("Inactive")}
                                            /> Inactive
                                        </label>
                                    </div>
                                    <div className="flex gap-2 mt-2 md:mt-0">
                                        <Button variant="gray" onClick={handleCancelFilter}>Cancel</Button>
                                        <Button variant="blue" onClick={handleApplyFilter}>Apply Filters</Button>
                                    </div>
                                </div>
                            )}

                            {statusFilter && (
                                <div className="flex items-center  bg-gray-100 px-2 py-1 rounded text-sm">
                                    <span className="mr-2">Active Filters :</span>
                                    <span>Status : {statusFilter} <button className="ml-1 font-bold text-gray-500 hover:text-red-500" onClick={handleClearAll}>✕</button></span>
                                    <button className="ml-3 text-blue-500 underline  " onClick={handleClearAll}>Clear all</button>
                                </div>
                            )}
                        </div>



                        <Button variant="gray" className="mx-1" onClick={handleDeleteItem}>
                            <BiTrash className="text-red-500" />View Delete Item
                        </Button>
                    </div>
                </div>

                <div className="mx-5 mt-2">
                    <Table>
                        <TableHeader className="">
                            <TableRow className="">
                                {/* name */}
                                <div className="flex py-2 flex-row border-1 border-gray-400 ">
                                    <TableHead
                                        onClick={() =>
                                            setSortName((prev) =>
                                                prev === "NameAtoZ" ? "NameZtoA" : "NameAtoZ"
                                            )
                                        }
                                        className="cursor-pointer  text-gray-500 flex gap-2  items-center "
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
                                {/* //contact Name  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer border-r-1 border-t-1 border-b-1 border-gray-400 text-gray-600  items-center"
                                >
                                    <div className="flex gap-2">

                                        Contact Name
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* //Phone Number  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
                                >
                                    <div className="flex gap-2">

                                        Phone Number
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* //Vendor Code  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
                                >
                                    <div className="flex gap-2 ">

                                        Vendor Code
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* //Address  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
                                >
                                    <div className="flex gap-2">

                                        Address
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* //City  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
                                >
                                    <div className="flex gap-2">


                                        City
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* //State  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
                                >
                                    <div className="flex gap-2">



                                        State
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* //Zip Code  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
                                >
                                    <div className="flex gap-2">



                                        Zip Code
                                        <div>
                                            <FaAngleUp
                                                className={sortDate === "Date1to31" ? "text-blue-500" : "text-gray-400"}
                                            />
                                            <FaAngleDown
                                                className={sortDate === "Date31to1" ? "text-blue-500" : "text-gray-400"}
                                            /></div>
                                    </div>
                                </TableHead>

                                {/* //Status  */}

                                <TableHead
                                    onClick={() => setSortDate((prevs) => prevs === "Date1to31" ? "Date31to1" : "Date1to31")}
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
                                >
                                    <div className="flex gap-2">



                                        Status
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
                                    className="cursor-pointer text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
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
                                    className="cursor-pointer text-gray-600  border-r-1 border-t-1 border-b-1 border-gray-400 items-center"
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
                                <TableHead className="text-center text-gray-600 border-r-1 border-t-1 border-b-1 border-gray-400">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>


                        {/* border-b-1 border-r-1 border-l-1 */}
                        <TableBody className="">
                            {paginationProduct.map((item, idx) => (
                                <TableRow key={idx} className="">
                                    <TableCell className="text-gray-600  border-1 border-gray-400  py-2" >{item.name}</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400  py-2" >{item.name}</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400" >123456789</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400" >VEND001</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400  py-2" >xyz</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400  py-2" >Ahmedabad</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400  py-2" >Gujarat</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400  py-2" >3884433</TableCell>

                                    <TableCell className="text-green-600 pl-7 border-1 border-gray-400  py-2" >
                                        {item.status === "Inactive" ? (

                                            <FaRegCircleXmark className="text-red-600" />
                                        ) : (

                                            <FaRegCircleCheck />
                                        )}
                                        {/* //  */}
                                    </TableCell>

                                    <TableCell className="text-gray-600 border-1 border-gray-400  py-2">{item.created}</TableCell>
                                    <TableCell className="text-gray-600 border-1 border-gray-400  py-2">{item.updated}</TableCell>
                                    <TableCell className="flex justify-center border-1 border-gray-300" >

                                        <HoverCard >
                                            <HoverCardTrigger>
                                                <HiOutlineDotsVertical className=" cursor-pointer bg-gray-200 text-gray-500 p-1  rounded-sm w-8 h-7" />
                                            </HoverCardTrigger>
                                            <HoverCardContent className="relative bg-white px-1 border-2 rounded-md w-22  text-center ">
                                                <div className="absolute bg-white">
                                                    <span className="flex  cursor-pointer h-10 pt-2 font-medium rounded-sm" onClick={() => handleEditClick(idx)}>
                                                        <LuPencil className="mx-2 text-blue-500 mt-1" /> Edit
                                                    </span>
                                                    <span className="flex cursor-pointer h-10 pt-2 font-medium rounded-sm" onClick={handleDeleteItem} >
                                                        <BiTrash className="mx-2 text-red-500 mt-1" />Delete
                                                    </span>
                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex mb-5 justify-between mt-5  mx-5 font-medium">
                    <div>
                        <span className="text-gray-500">  Showing </span>
                        {Math.min(startIndex + 1, data.length)} to {Math.min(endIndex, data.length)}
                        <span className="text-gray-500">  Out of</span>   {data.length}
                        <span className="text-gray-500"> entries </span>
                    </div>
                    <div className="">
                        <PaginationDemo currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={sortTotalPages} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Vendor_table