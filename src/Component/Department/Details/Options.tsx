import { DropdownMenuDemo } from '@/Page/Dropdown'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useNavigate } from 'react-router-dom';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

import { Switch } from '@/components/ui/switch';
import React, { useState } from 'react';
import useLocalstorage from '@/hooks/useLocalStorage';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useDocumentTitle from '@/hooks/title';

function DetailOptions() {

    useDocumentTitle('Options | Department ')

    // navigation
    const navigate = useNavigate()
    const handleDepartment = () => {
        navigate("/department")
    }
    const handleNext = () => {
        navigate("/accountdetails")
    }
    const handleDetails = () => {
        navigate("/deptdetails")
    }
    const handleAccount = () => {
        navigate("/accountdetails")
    }

    const [pos, setPos] = useLocalstorage("POS", "")
    const [posError, setPosError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()


        let valid = true

        if (!pos) {
            setPosError("This field is required")
            valid = false
        }

        if (!valid) return
        localStorage.setItem("datas", "true")
        setFormCompleted(true)
        handleNext()
    }
    const [formCompleted, setFormCompleted] = useState(() => {
        return localStorage.getItem("datas") === "true"
    })
    const [activeSection] = useState("options")

    // location
    type Location = { location: string, pos: string }
    const [location, setLocation] = useState<Location[]>([])

    const handleAddLocation = () => {
        setLocation((prev) => [...prev, {
            location: '', pos: ''
        }])
    }

    const handleRemoveLocation = () => {
        setLocation((prev) => prev.slice(1))
    }



    return (
        <>
            <div className=' bg-white sticky top-0'>
                <DropdownMenuDemo />


                <div className=" mx-5 mt-5 mb-3 flex  justify-between    ">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Departments</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-black" href='/department' >Departments</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className='flex space-x-2'>
                        {/* <Button variant="gray">Cancel</Button> */}
                        <AlertDialog>
                            <AlertDialogTrigger variant="gray" className=' border-2 text-black'>Cancel</AlertDialogTrigger>
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
                                        onClick={handleDepartment} >Yes</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        {/* <Button variant="blue">Save </Button> */}
                    </div>
                </div>
            </div>


            <div className=''>
                <div className=' grid grid-cols-7 gap-3 '>
                    <div className=" bg-white px-2  ms-2 rounded-md col-span-1 shadow-md border-2 border-gray-300">
                        <div className=''>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 mt-2 cursor-pointer ${activeSection === "details" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                                onClick={handleDetails}>
                                Details
                            </p>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "options" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                            >
                                Options
                            </p>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "accounts" ? "bg-blue-500 text-white" : formCompleted ? "text-gray-500 cursor-not-allowed" : "hover:bg-blue-500 hover:text-white"}`}
                                onClick={handleAccount}
                            >
                                Accounts
                            </p>

                        </div>

                    </div>


                    <div className="col-span-6 font-light bg-white rounded-md me-3  shadow-md  border border-2 border-gray-300">
                        <form className=' mx-5 ' onSubmit={handleSubmit}>

                            <div className='mt-5'>
                                <Label htmlFor="name" className='mb-2 font-medium text-sm'>POS Flag*</Label>
                                {/* <DropdownDetail /> */}
                                <select className='rounded-lg px-3 py-2 border-1 border-gray-300 w-full'
                                    value={pos}
                                    onChange={e => {
                                        setPos(e.target.value)
                                        if (e.target.value) setPosError("")
                                    }}

                                >
                                    <option value="">POS Flag</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                {posError && <span className='text-red-500 text-xs'>{posError}</span>}

                            </div>



                            <div className='grid grid-cols-3 gap-4 my-10 w-full'>
                                <Label htmlFor="name" className='mb-2 font-medium text-sm'>Open Dept Min Amount

                                    <Input type="number" id="name" placeholder="amount" className='font-light border-1 border-gray-300' />
                                </Label>


                                <Label htmlFor="name" className='mb-2 font-medium text-sm'> Open Dept Max Amount
                                    <Input type="number" id="name" placeholder="amount" className='font-light border-1 border-gray-300' />
                                </Label>


                                <Label htmlFor="name" className='mb-2 font-medium text-sm'>Max Discount
                                    <Input type="number" id="name" placeholder="amount" className='font-light border-1 border-gray-300' />
                                </Label>

                            </div>

                            <div className='grid grid-cols-3 w-full gap-4 my-10'>
                                <Label htmlFor="name" className='mb-2 font-medium text-sm'>Discount Percent on Damaged

                                    <Input type="number" id="name" placeholder="amount" className='font-light border-1 border-gray-300' />
                                </Label>

                                <Label htmlFor="name" className='mb-2 font-medium text-sm'>Target Margin
                                    <Input type="number" id="name" placeholder="amount" className='font-light border-1 border-gray-300' />
                                </Label>


                                <Label htmlFor="name" className='mb-2 font-medium text-sm'>QOH Recorder Point

                                    <Input type="number" id="name" placeholder="amount" className='font-light border-1 border-gray-300' />
                                </Label>

                            </div>

                            <div className='grid grid-cols-2 gap-4 mt-5'>
                                <div>
                                    <Label htmlFor="name" className='mb-1 font-medium text-sm'>Override Order Days</Label>
                                    <Input type="number" id="name" placeholder="Override Order Days" className='border-1 border-gray-300' />
                                </div>
                                <div>
                                    <Label htmlFor="name" className='mb-1 font-medium text-sm'>Override Type</Label>
                                    {/* <DropdownDetail /> */}
                                    <select className='rounded-lg px-3 py-2 border-1 border-gray-300 w-full'>
                                        <option value="" >Override Type</option>
                                        <option value="50">Global</option>
                                        <option value="100">Custom</option>
                                    </select>
                                </div>
                                <div className='col-span-2'></div>
                            </div>

                            {/* switch start */}
                            <div className='grid grid-cols-6 mb-10 mt-5 w-full '>
                                <div>
                                    <Label className=''>Include in Transfers</Label>
                                </div>
                                <div className=''>
                                    <Switch className='text-red-500' />
                                </div>
                                <div>
                                    <Label className=''>Can Evaluate</Label>
                                </div>
                                <div >
                                    <Switch className='' />
                                </div>
                                <div className='w-full'>
                                    <Label className=''>Include In Sales Reporting</Label>
                                </div>
                                <div className='ml-10'>
                                    <Switch className='' />
                                </div>
                            </div>

                            <div className='grid grid-cols-6 mb-10 w-full'>
                                <div>
                                    <Label className='font-medium text-sm'>Non Tax</Label>
                                </div>
                                <div className=''>
                                    <Switch className='' />
                                </div>
                                <div>
                                    <Label className='font-medium text-sm'>Is Lottery</Label>
                                </div>
                                <div >
                                    <Switch className='' />
                                </div>
                                <div>
                                    <Label className='font-medium text-sm '>Bypass Item Sales Limit</Label>
                                </div>
                                <div className='ml-10'>
                                    <Switch className='' />
                                </div>
                            </div>
                            {/* switch end */}


                            <div className='grid grid-cols-2 gap-4 mt-5'>
                                <div>
                                    <Label htmlFor="name" className='mb-1 font-medium text-sm'>Allow Sales for 0$</Label>
                                    {/* <DropdownDetail /> */}
                                    <select className='rounded-lg px-3 py-2 border w-full'>
                                        <option value="">Allow Sales for 0$</option>
                                        <option value="50">Global</option>
                                        <option value="100">Custom</option>
                                    </select>
                                </div>
                                <div>
                                    <Label htmlFor="name" className='mb-1 font-medium text-sm'>Department Type*</Label>
                                    {/* <DropdownDetail /> */}
                                    <select className='rounded-lg px-3 py-2 border w-full'>
                                        <option value=""> Department Type</option>
                                        <option value="50">Normal</option>
                                        <option value="100">Payout</option>
                                        <option value="100">Fuel</option>
                                    </select>
                                </div>
                                <div className='col-span-2'></div>
                            </div>
                            <div className='flex justify-end mb-5'>
                                <Button variant="blue" className='flex justify-end ' disabled={!pos}>Next</Button></div>
                        </form>

                    </div>
                </div>
            </div >

            <div className=' bg-white rounded-md mx-3 my-5 text-gray-600  shadow-md  border border-2 border-gray-300'>
                <div className='px-5 py-5'>
                    <p className='font-medium '>Manage POS Flag Locations</p>
                    <p>Customize POS Flag assignment with an override at specified locations</p>
                </div>
                <div className='flex justify-between mx-5 mb-5'>
                    <p className='text-gray-600 font-medium'>Location Assignment</p>
                    <Button variant="blue" className='flex justify-end' onClick={handleAddLocation}>Add Location</Button>
                </div>
                {/* add location  */}
                {location.length > 0 && (


                    <div className='mx-5 mb-5 border-1 border-gray-400 rounded'>
                        <Table>
                            <TableHeader>
                                <TableRow className='bg-base-300 border-b-1 border-gray-400  '>
                                    <TableHead className='font-normal text-gray-600 py-5 pl-3'>Location Name</TableHead>
                                    <TableHead className='font-normal text-gray-600 py-5'>POS Flag</TableHead>
                                    <TableHead className='font-normal text-gray-600 py-5'>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody >
                                {location.map(() => (
                                    <TableRow >
                                        <TableCell>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Location Name" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Details">Details</SelectItem>
                                                    <SelectItem value="Options">Options</SelectItem>
                                                    <SelectItem value="Actions">Actions</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="POS Name" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Details">Details</SelectItem>
                                                    <SelectItem value="Options">Options</SelectItem>
                                                    <SelectItem value="Actions">Actions</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            <Button className=' text-red-500 text-2xl bg-red-200 hover:bg-red-300' type="button" onClick={() => handleRemoveLocation()}
                                            >X</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div >)}
            </div>
        </>
    )
}

export default DetailOptions