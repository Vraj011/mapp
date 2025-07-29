import { DropdownMenuDemo } from '@/Page/Dropdown'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


import { FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
// import { IoIosContacts } from 'react-icons/io';
// import { HiOutlineFilter } from 'react-icons/hi';
// import { LuNotebookPen } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { BsInfoCircle } from "react-icons/bs";
import useDocumentTitle from '@/hooks/title';
// import { log } from 'console';

function VendorContact() {

    useDocumentTitle('Contact | Vendor')

    // navigation
    const navigate = useNavigate()
    const handlevendordetail = () => {
        navigate("/vendordetails")
    }
    const handlevendoredifilter = () => {
        navigate("/vendor_edi")
    }
    const handleVendor = () => {
        navigate("/vendor")
    }

    // const [name] = useLocalstorage("name", "")

    const resetForm = () => {
        localStorage.removeItem("names")
    }
    const saveOptions = [
        // { label: "Save", onclick: () => resetForm() },
        {
            label: "Save"
        },
        { label: "Save & Close", onclick: () => { resetForm(), navigate("/vendor") } }
    ]



    const [saveDropdownOpen, setSaveDropdownOpen] = useState(false)


    const [activeSection] = useState("contact")
    const [locationType, setLocationType] = useState("All")


    // state,city
    const [selectState, setSelectState] = useState('')
    const [selectCity, setSelectCity] = useState('')
    const CityMap: Record<string, string[]> = {
        GJ: ['Ahmedabad', 'Surat'],
        MH: ['Mumbai', 'Pune']
    }
    const [cityErr, setCityErr] = useState(false)
    // state,city


    // manage assigment
    const [result, setResult] = useState([
        { location: "Location 1", select: "Select" },
        { location: "Location 2", select: "Select" },
        { location: "Location 3", select: "Select" },
        { location: "Location 4", select: "Select" },
        { location: "Location 5", select: "Select" },
        { location: "Location 6", select: "Select" },
        { location: "String", select: "Select" },
    ])

    const [searchText, setSearchText] = useState('') // search


    const [, setSelectRow] = useState(null)
    const [secondTable, setSecondTable] = useState<{ location: string; select: string }[]>([])

    const handleSelect = (item: any) => {
        setSelectRow(item)
        setResult(result.filter(items => items.location !== item.location))
        setSecondTable([...secondTable, item])
    }
    // select all 
    const handleSelectAll = () => {
        setSecondTable(prev => [...prev, ...result]);
        setResult([]);
    }
    const handleDeleteLoct = () => {
        setSecondTable((prev) => prev.slice(1))
        setResult(result => [...result, secondTable[0]])
        // setSecondTable(items => [...items.slice(1)])
    }
    // delete all 
    const handleDeleteAllLoct = () => {
        setResult(prev => [...prev, ...secondTable]);
        setSecondTable([]);
    }
    // manage ass-end


    return (
        <>
            <div className=' bg-white sticky top-0'>
                <DropdownMenuDemo />
                <div className=" mx-5 mt-5 mb-3 flex  justify-between    ">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Vendor</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-black" href='/vendor' >Vendor</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className='flex space-x-2'>
                        {/* <Button variant="gray">Cancel</Button> */}
                        <AlertDialog>
                            <AlertDialogTrigger variant="gray" className=' border-2 text-black' >Cancel</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Leave Without Saving?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you do not want to edit? If you go back your changes will be not saved ?
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>No</AlertDialogCancel>
                                    <AlertDialogAction variant="blue"
                                        //  buttonVariants={buttonVariants({ variant="blue" })}
                                        onClick={handleVendor} >Yes</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        {/* <Button variant="blue" className='py-5'>Save <FaChevronDown /></Button> */}

                        {/* savedropdown-start  */}
                        <div className='relative'>
                            <Button
                                variant="blue"
                                type='button'
                                className='py-4 flex items-center '
                                onClick={() => setSaveDropdownOpen((open) => !open)}
                                aria-expanded={saveDropdownOpen}
                            >Save
                                <FaChevronDown className={`transition-transform duraction-200 ${saveDropdownOpen ? 'rotate-180' : ''}`} />
                            </Button>
                            {saveDropdownOpen && (
                                <div className='absolute w-full mt-2 bg-white border border-gray-200 rounded shadow-lg transition-opacity z-10'
                                    onMouseLeave={() => setSaveDropdownOpen(false)}
                                >
                                    {saveOptions.map((option) => (
                                        <button
                                            key={option.label}
                                            className='w-full text-left text-sm px-5 py-2 hover:bg-blue-100'
                                            type='button'
                                            onClick={() => {
                                                setSaveDropdownOpen(false)
                                                option.onclick && option.onclick()
                                                // console.log("option.onclick", option.onclick && option.onclick());
                                            }}
                                        >{option.label}</button>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* savedropdown-end  */}

                    </div>
                </div>
            </div>


            <div className=''>
                <div className=' grid grid-cols-7 gap-3 '>
                    <div className=" bg-white px-2  ms-2 rounded-md col-span-1 shadow-md border-2 border-gray-300">
                        <div className=''>
                            <p
                                className={`flex rounded-sm px-2 py-2 mb-3 mt-2 cursor-pointer ${activeSection === "details" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                                onClick={handlevendordetail} >
                                Details
                            </p>
                            <p
                                className={`flex rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "filter" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                                onClick={handlevendoredifilter} >
                                EDI Filter
                            </p>
                            <p
                                className={`flex rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "contact" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                            >
                                Contact
                            </p>
                        </div>

                    </div>


                    <div className="col-span-6 font-light bg-white rounded-md me-3  shadow-md  border border-2 border-gray-300">
                        <form className=' mx-5 '>


                            <div className='grid grid-cols-3 mb-10 mt-5 gap-5'>
                                <div>
                                    <Label className='mb-2'>Full Name</Label>
                                    <Input type="text" placeholder="Full Name" />
                                </div>

                                <div>
                                    <Label className='mb-2'>Phone</Label>
                                    <Input type="number" placeholder="Phone" />
                                </div>

                                <div>
                                    <Label className='mb-2'>Alt Phone</Label>
                                    <Input type="number" placeholder="Alt Phone" />
                                </div>

                            </div>


                            <div className='grid grid-cols-3 mb-10 mt-5 gap-5'>
                                <div>
                                    <Label htmlFor='email' className='mb-2'>Email</Label>
                                    <Input type="email" id='email' placeholder="Email" />
                                </div>

                                <div>
                                    <Label className='mb-2'>Fax</Label>
                                    <Input type="number" placeholder="Fax" />
                                </div>

                                <div>
                                    <Label className='mb-2'>Address Line 1</Label>
                                    <Input type="text" placeholder="Address Line 1" />
                                </div>

                            </div>


                            <div className='grid grid-cols-3 mb-10 mt-5 gap-5'>
                                <div>
                                    <Label className='mb-2'>Address Line 2</Label>
                                    <Input type="text" placeholder="Address Line 2" />
                                </div>


                                <div>
                                    <Label className='mb-2'>State</Label>
                                    <select className=' border-2 w-65 rounded-md px-3 py-1 w-full '
                                        value={selectState}
                                        onChange={(e) => {
                                            setSelectState(e.target.value)
                                            setSelectCity('')
                                        }}

                                    >
                                        <option value="">Select state</option>
                                        <option value="GJ">GJ</option>
                                        <option value="MH">MH</option>
                                    </select>
                                </div>

                                <div>
                                    <Label className='mb-2'>City</Label>
                                    <select className=' border-2 w-65 rounded-md px-3 py-1 w-full '
                                        value={selectCity}
                                        onChange={(e) => {
                                            setSelectCity(e.target.value)
                                            setCityErr(true)
                                        }}
                                        onClick={() => {
                                            if (!selectState) {
                                                setCityErr(true)
                                            }
                                        }}
                                    // disabled={!selectState}
                                    >
                                        <option value="">Select City</option>
                                        {selectState && CityMap[selectState]?.map((city) => (
                                            <option key={city} value="{city}">{city}</option>
                                        ))}
                                    </select>
                                    {cityErr && !selectState && (
                                        <p className="text-red-500 text-sm font-normal  mt-1">Please select a state first.</p>
                                    )}
                                </div>


                            </div>

                            <div className='grid grid-cols-3 mb-5 mt-5 gap-5'>
                                <div>
                                    <Label className='mb-2'>Zip</Label>
                                    <Input type="number" placeholder="Zip" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div >
            </div >
            {/* // pagination-start  */}
            < div className=' bg-white rounded-md mx-3 my-5  shadow-md  border border-2 border-gray-300' >
                <div className='px-5 py-5'>
                    <p className='font-medium my-3'>Manage Assignment</p>
                    <p>Select Locations</p>
                    <div className='flex'>
                        {/* <select className='border-2 rounded-lg px-3 py-2'>
                            <option value="All">All</option>
                            <option value="By Location">By Location</option>
                            <option value="By Location Group">By Location Group</option>
                        </select>
                        <Button variant="blue" className='ml-5 text-sm font-normal px-3 py-5'>Manage</Button> */}
                        <select
                            className='border-2 w-65 rounded-lg px-3 py-2'
                            value={locationType}
                            onChange={e => setLocationType(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="By Location">By Location</option>
                            <option value="By Location Group">By Location Group</option>
                        </select>
                        {/* {(locationType === "By Location" || locationType === "By Location Group") && (
                            <Button variant="blue" className='ml-5 text-sm font-normal px-3 py-5'>Manage</Button>
                        )} */}

                        {(locationType === "By Location") && (
                            <Dialog >
                                <DialogTrigger asChild>
                                    <Button variant="blue" className='ml-5 text-sm font-normal px-3 py-5'>Manage</Button>
                                </DialogTrigger>
                                <DialogContent className='sm:max-w-[900px] '>
                                    <DialogHeader>
                                        <DialogTitle>Manage Assignment</DialogTitle>
                                        <hr />
                                    </DialogHeader>

                                    {/* // search I/P */}
                                    <Input type='text'
                                        placeholder='Search Location...'
                                        className='border-1 border-gray-400'
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />

                                    {/* Table */}
                                    <div className='grid grid-cols-6 gap-5 mt-5 w-full'>


                                        {/* result */}
                                        <div className='col-span-3 w-full sm:max-h-[300px] overflow-auto'>
                                            <div className='flex justify-between'>

                                                <div className='flex '>
                                                    <p className='text-sm font-bold'>
                                                        Result
                                                    </p>
                                                    <span>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                {/* <HiOutlineInformationCircle className='ml-2 text-gray-400' /> */}
                                                                <BsInfoCircle className='ml-2 text-gray-400' />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                Select all not available for more than 1000 records
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </span>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="px-3 py-4 text-sm text-green-500 font-medium rounded-md
                                                                               btn btn-xs border-1  border-green-500"
                                                    // className={`px-3 py-4 text-sm text-green-500 font-medium rounded-md
                                                    // //  btn btn-xs border-1  border-green-500 ${btnColorinActive}`}
                                                    onClick={handleSelectAll}
                                                >
                                                    Select All
                                                </button>

                                            </div>
                                            <div className='mb-5 mt-5 rounded-md border-1 border-gray-300 '>
                                                <Table >
                                                    <TableHeader>
                                                        <TableRow className='bg-base-200 '>
                                                            <TableHead className='pl-5 text-gray-600 font-medium border-r border-gray-300 ' >Location</TableHead>
                                                            <TableHead className=' text-gray-600 font-medium text-center'>Select</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody >
                                                        {result.filter((item) => item.location.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                                                            .map((item) => (
                                                                <TableRow key={item.location} >
                                                                    <TableCell className='pl-5 border-r border-gray-300'>{item.location}</TableCell>
                                                                    <TableCell
                                                                        // className='btn my-1 mx-5 flex-justify-center font-medium bg-green-100 text-green-500' 
                                                                        className='flex justify-center'
                                                                    >
                                                                        <Button size="sm" className='  bg-green-100 hover:bg-green-500 text-green-500 hover:text-white ' onClick={() => handleSelect(item)}>
                                                                            {item.select}
                                                                        </Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>


                                        {/* selected     */}
                                        <div className='col-span-3 w-full sm:max-h-[300px] overflow-auto '>

                                            <div className='flex justify-between'>
                                                <p className='text-sm font-bold'>Selected List</p>
                                                {/* <button className="px-3 py-3 text-sm font-normal rounded-md btn btn-xs btn-outline btn-error">Clear Section</button> */}
                                                <button
                                                    type="button"
                                                    className="px-3 py-4 text-sm text-red-500 font-medium rounded-md
                                                                               btn btn-xs border-1  border-red-500"
                                                    onClick={handleDeleteAllLoct}
                                                >
                                                    Clear Section
                                                </button>
                                            </div>

                                            <div className='mb-5 mt-5 rounded-md border-1 border-gray-300'>
                                                <Table >
                                                    <TableHeader>
                                                        <TableRow className='bg-base-200 '>
                                                            <TableHead className='pl-5  text-gray-600 font-medium border-r-2 border-gray-300 ' >Location</TableHead>
                                                            <TableHead className='text-gray-600 font-medium text-center '>Delete</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {secondTable.map((item) => (
                                                            <TableRow key={item.location}>
                                                                <TableCell className='pl-5 border-r border-gray-300'>{item.location}</TableCell>
                                                                <TableCell className='flex justify-center'>
                                                                    <Button className=' text-red-500 bg-red-200 hover:bg-red-500 hover:text-white' onClick={() => handleDeleteLoct()}>X</Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>


                                    </div>
                                </DialogContent>
                            </Dialog>
                        )}

                        {(locationType === "By Location Group") && (
                            <Dialog >
                                <DialogTrigger asChild>
                                    <Button variant="blue" className='ml-5 text-sm font-normal px-3 py-5'>Manage</Button>
                                </DialogTrigger>
                                <DialogContent className='sm:max-w-[900px] '>
                                    <DialogHeader>
                                        <DialogTitle>Manage  Assignment</DialogTitle>
                                        <hr />
                                    </DialogHeader>

                                    {/* // search I/P */}
                                    <Input type='text'
                                        placeholder='Search Location...'
                                        className='border-1 border-gray-400'
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />

                                    {/* Table */}
                                    <div className='grid grid-cols-6 gap-5 mt-5 w-full'>


                                        {/* result */}
                                        <div className='col-span-3 w-full sm:max-h-[300px] overflow-auto'>
                                            <div className='flex justify-between'>

                                                <div className='flex '>
                                                    <p className='text-sm font-bold'>
                                                        Result
                                                    </p>
                                                    <span>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                {/* <HiOutlineInformationCircle className='ml-2 text-gray-400' /> */}
                                                                <BsInfoCircle className='ml-2 text-gray-400' />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                Select all not available for more than 1000 records
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </span>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="px-3 py-4 text-sm text-green-500 font-medium rounded-md
                                                                               btn btn-xs border-1  border-green-500"
                                                    // className={`px-3 py-4 text-sm text-green-500 font-medium rounded-md
                                                    // //  btn btn-xs border-1  border-green-500 ${btnColorinActive}`}
                                                    onClick={handleSelectAll}
                                                >
                                                    Select All
                                                </button>

                                            </div>
                                            <div className='mb-5 mt-5 rounded-md border-1 border-gray-300 '>
                                                <Table >
                                                    <TableHeader>
                                                        <TableRow className='bg-base-200 '>
                                                            <TableHead className='pl-5 text-gray-600 font-medium border-r border-gray-300 ' >Location Group</TableHead>
                                                            <TableHead className=' text-gray-600 font-medium text-center'>Select</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody >
                                                        {result.filter((item) => item.location.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                                                            .map((item) => (
                                                                <TableRow key={item.location} >
                                                                    <TableCell className='pl-5 border-r border-gray-300'>{item.location}</TableCell>
                                                                    <TableCell
                                                                        // className='btn my-1 mx-5 flex-justify-center font-medium bg-green-100 text-green-500' 
                                                                        className='flex justify-center'
                                                                    >
                                                                        <Button size="sm" className='  bg-green-100 hover:bg-green-500 text-green-500 hover:text-white ' onClick={() => handleSelect(item)}>
                                                                            {item.select}
                                                                        </Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>


                                        {/* selected     */}
                                        <div className='col-span-3 w-full sm:max-h-[300px] overflow-auto '>

                                            <div className='flex justify-between'>
                                                <p className='text-sm font-bold'>Selected List</p>
                                                {/* <button className="px-3 py-3 text-sm font-normal rounded-md btn btn-xs btn-outline btn-error">Clear Section</button> */}
                                                <button
                                                    type="button"
                                                    className="px-3 py-4 text-sm text-red-500 font-medium rounded-md
                                                                               btn btn-xs border-1  border-red-500"
                                                    onClick={handleDeleteAllLoct}
                                                >
                                                    Clear Section
                                                </button>
                                            </div>

                                            <div className='mb-5 mt-5 rounded-md border-1 border-gray-300'>
                                                <Table >
                                                    <TableHeader>
                                                        <TableRow className='bg-base-200 '>
                                                            <TableHead className='pl-5  text-gray-600 font-medium border-r-2 border-gray-300 ' >Location</TableHead>
                                                            <TableHead className='text-gray-600 font-medium text-center '>Delete</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {secondTable.map((item) => (
                                                            <TableRow key={item.location}>
                                                                <TableCell className='pl-5 border-r border-gray-300'>{item.location}</TableCell>
                                                                <TableCell className='flex justify-center'>
                                                                    <Button className=' text-red-500 bg-red-200 hover:bg-red-500 hover:text-white' onClick={() => handleDeleteLoct()}>X</Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </div>


                                    </div>
                                </DialogContent>
                            </Dialog>
                        )

                        }

                    </div>
                </div>
            </div >

            {/* // pagination-end  */}
        </>
    )
}

export default VendorContact