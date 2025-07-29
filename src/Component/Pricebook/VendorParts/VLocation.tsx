import Dynamic_Select from "@/Component/Dynamic/Select/Select"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

function Vendor_Location() {

    //  Manage Location Assigment-st
    const [result, setResult] = useState([
        { location: "Location 1", select: "Select" },
        { location: "Location 2", select: "Select" },
        { location: "Location 3", select: "Select" },
        { location: "Location 4", select: "Select" },
        { location: "Location 5", select: "Select" },
        { location: "Location 6", select: "Select" },
        { location: "String", select: "Select" },
    ])

    const [searchText, setSearchText] = useState('')
    const [locationType, setLocationType] = useState('All') // for option
    const [, setSelectRow] = useState(null)
    const [secondTable, setSecondTable] = useState<any[]>([])

    const handleSelectAllLoct = () => {
        setSecondTable(prev => [...prev, ...result])
        setResult([])
    }
    const handleDeleteAllLoct = () => {
        setResult(prev => [...prev, ...secondTable])
        setSecondTable([])
    }

    const handleSelectLoct = (item: any) => {
        setSelectRow(item)
        setResult(result.filter(items => items.location !== item.location))
        setSecondTable([...secondTable, item])
    }

    const handleDeleteLoct = () => {
        setSecondTable((prev) => prev.slice(1))
        setResult(result => [...result, secondTable[0]])
    }
    //  Manage Location Assigment-&

    return (
        <>
            <div className="border-1 border-gray-300 mb-7 w-200 rounded px-5 ">
                <div className="py-2  font-medium ">
                    <p>Manage Location Assigment </p>
                </div>
                <hr className="w-full" />
                <div className="mt-5 mb-2 flex   gap-3 ">

                    <Dynamic_Select
                        label="Select  Locations"
                        name="All"
                        type="select"
                        options={[
                            // { value: "All", label: "All" },
                            { value: "By Location", label: "By Location" },
                            { value: "By Location Group", label: "By Location Group" }
                        ]}
                        className="w-100"
                        value={locationType}
                        onChange={(e) => setLocationType(e.target.value)}
                    />




                    <div className='px-5 py-5'>
                        <div className='flex'>

                            {(locationType === "By Location") && (
                                <Dialog >
                                    <DialogTrigger asChild>
                                        <Button variant="blue" className='ml-5 text-sm font-normal px-3 py-5'>Manage</Button>
                                    </DialogTrigger>
                                    <DialogContent className='sm:max-w-[900px] '>
                                        <DialogHeader>
                                            <DialogTitle>Manage Filter</DialogTitle>
                                            <hr />
                                        </DialogHeader>

                                        {/* // search I/P */}
                                        <Input type='text'
                                            placeholder='Search Location...'
                                            className='border-1 border-gray-400'
                                            value={searchText}
                                            onChange={(e) => setSearchText(e.target.value)}
                                        />

                                        {/* Location-Table */}
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
                                                        onClick={handleSelectAllLoct}
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
                                                            {result.filter((items) => items.location.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                                                                .map((item) => (
                                                                    <TableRow key={item.location}>
                                                                        <TableCell className='pl-5 border-r border-gray-300'>{item.location}</TableCell>
                                                                        <TableCell className='flex justify-center'>
                                                                            <Button size="sm" className='bg-green-100 hover:bg-green-500 text-green-500 hover:text-white' onClick={() => handleSelectLoct(item)}>
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
                                                                        <Button className=' text-red-500 bg-red-200 hover:bg-red-500 hover:text-white'
                                                                            onClick={handleDeleteLoct}  >X</Button>
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
                                            <DialogTitle>Manage Filter</DialogTitle>
                                            <hr />
                                        </DialogHeader>

                                        {/* // search I/P */}
                                        <Input type='text'
                                            placeholder='Search Location...'
                                            className='border-1 border-gray-400'

                                        />

                                        {/* Location-Table */}
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
                                                        onClick={handleSelectAllLoct}
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
                                                            {result.map((item) => (
                                                                <TableRow key={item.location}>
                                                                    <TableCell className='pl-5 border-r border-gray-300'>{item.location}</TableCell>
                                                                    <TableCell className='flex justify-center'>
                                                                        <Button size="sm" className='bg-green-100 hover:bg-green-500 text-green-500 hover:text-white' onClick={() => handleSelectLoct(item)}>
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
                                                                        <Button className=' text-red-500 bg-red-200 hover:bg-red-500 hover:text-white'
                                                                            onClick={handleDeleteLoct}  >X</Button>
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



                            {/* // */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Vendor_Location