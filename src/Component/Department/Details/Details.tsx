import { DropdownMenuDemo } from '@/Page/Dropdown'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import type React from 'react';
import { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import useLocalstorage from '@/hooks/useLocalStorage';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useDocumentTitle from '@/hooks/title';


function DeptDetails() {

    useDocumentTitle('Details | Department')

    // naivgation
    const navigate = useNavigate()
    const handleDepartment = () => {
        navigate("/department")
    }
    const handleNext = () => {
        navigate("/optionsdetails")
    }
    const handleAccount = () => {
        navigate("/accountdetails")
    }
    const handleOption = () => {
        navigate("/optionsdetails")
    }


    const [name, setName] = useLocalstorage("Department_name", "")
    const [nameError, setNameError] = useState("")
    const [dept, setDept] = useLocalstorage("Dept#", "")
    const [deptError, setDeptError] = useState("")
    const [departmentGroup, setDepartmentGroup] = useLocalstorage("DepartmentGroup", "");
    const [departmentGroupError, setDepartmentGroupError] = useState("");


    // form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let valid = true

        if (!name.trim()) {
            setNameError("This field is required")
            valid = false
        }
        if (!dept.trim()) {
            setDeptError("This field is required")
            valid = false
        }
        if (!departmentGroup.trim()) {
            setDepartmentGroupError("This field is required");
            valid = false;
        }

        if (!valid) return
        localStorage.setItem("deptformCompleted", "true")
        setFormCompleted(true)
        handleNext()
    }


    const [formCompleted, setFormCompleted] = useState(() => {
        return localStorage.getItem("deptformCompleted") === "true"
    })

    const [activeSection, setActiveSection] = useState("details")

    type Location = { location: string, pos: string }
    const [location, setLocation] = useState<Location[]>([])

    const handleAddLocation = () => {
        setLocation((prev) => [...prev, { location: '', pos: '' }])
    }

    const handleRemoveLocation = () => {
        setLocation((prev) => prev.slice(1))
    }

    return (
        <>
            <div className=' bg-white sticky top-0'>
                <DropdownMenuDemo />


                <div className=" mx-5 mt-5 mb-3 flex  justify-between ">
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
                                        onClick={handleDepartment} >Yes</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>


            <div className=''>
                <div className=' grid grid-cols-7 gap-5 '>
                    <div className=" bg-white px-2 ms-2 w-full   rounded-md col-span-1 shadow-md border-2 border-gray-300">
                        <div className=''>

                            {/* <p className='hover:bg-blue-500 hover:text-white cursor-pointer rounded-sm px-2 py-2 mb-3 mt-2'>Details</p>
                            <p className={`rounded-sm px-2 py-2 mb-3   ${formCompleted ? 'text-gray-500 cursor-not-allowed' : ' hover:bg-blue-500 hover:text-white'}`} >Options</p>
                            <p className={`rounded-sm px-2 py-2 mb-3   ${formCompleted ? 'text-gray-500 cursor-not-allowed' : ' hover:bg-blue-500 hover:text-white'}`} >Accounts</p> */}
                            {/* <p className='hover:bg-blue-500 hover:text-white rounded-sm px-2 py-2 mb-3'>Accounts</p> */}

                            <p
                                className={`rounded-sm  px-2 py-2 mb-3 mt-2 cursor-pointer ${activeSection === "details" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                            >
                                Details
                            </p>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "options" ? "bg-blue-500 text-white" :
                                    name && name.trim() ?
                                        "hover:bg-blue-500 hover:text-white" :
                                        "text-gray-500 cursor-not-allowed"
                                    }`}
                                onClick={() => {
                                    if (name && name.trim()) {
                                        setActiveSection("options")
                                        handleOption()
                                    }
                                }}
                            >
                                Options
                            </p>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "accounts" ? "bg-blue-500 text-white" : name && name.trim() ? "hover:bg-blue-500 hover:text-white" : "text-gray-500 cursor-not-allowed"
                                    }`}
                                onClick={() => {
                                    if (name && name.trim()) {
                                        setActiveSection('accounts')
                                        handleAccount()
                                    }
                                }}
                            >
                                Accounts
                            </p>


                        </div>


                    </div>



                    <div className="col-span-6 font-light bg-white rounded-md me-3  shadow-md  border border-2 border-gray-300">
                        <form className=' mx-5 ' onSubmit={handleSubmit}>

                            <div className="grid grid-cols-3 gap-7 justify-around w-full text-2xl mt-5   items-center ">
                                <div className=''> <Label htmlFor="name" className='text-sm font-medium mb-1'>Name*

                                </Label>
                                    <Input type="text" id="name" placeholder="Name" value={name}
                                        className='border-1 border-gray-300'
                                        onChange={e => {
                                            setName(e.target.value)
                                            if (e.target.value) setNameError("")
                                        }} />
                                    {nameError && <span className='text-red-500 text-xs'>{nameError}</span>}
                                </div>

                                <div className=''>
                                    <Label htmlFor="name" className='text-sm font-medium mb-1'>Department Group* </Label>
                                    {/* <DropdownDetail /> */}
                                    <select
                                        value={departmentGroup}
                                        onChange={e => {
                                            setDepartmentGroup(e.target.value);
                                            if (e.target.value) setDepartmentGroupError("");
                                        }}
                                        className="w-full border text-sm border-1 border-gray-300 rounded-lg px-3 py-2"
                                    >
                                        <option value="" className='' >Department group</option>
                                        <option value="group1">Group 1</option>
                                        <option value="group2">Group 2</option>
                                    </select>
                                    {departmentGroupError && <span className='text-red-500 text-xs'>{departmentGroupError}</span>}

                                </div>
                                <div className=''>
                                    <Label htmlFor="name" className='text-sm font-medium mb-1'>Disclaimer</Label>
                                    {/* <DropdownDetail /> */}
                                    <select className='w-full borderborder-1 border-gray-300  text-sm rounded-lg px-3 py-2'>

                                        <option value="">Disclaimer</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>

                            </div>

                            <div className='mt-10 mb-10'>
                                <Label className='text-sm font-medium mb-1 '  >POS Description</Label>
                                <Textarea placeholder='POS Description' className='border-1 border-gray-300' />
                            </div>

                            <div className='grid grid-cols-2 gap-4 mt-5'>
                                <div>
                                    <Label htmlFor="name" className='text-sm font-medium mb-1'>Tag</Label>
                                    {/* <DropdownDetail /> */}
                                    <select className='w-full border-1 border-gray-300 text-sm rounded-lg px-3 py-2'>

                                        <option value="">Tags</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <div>
                                    <Label htmlFor="name" className='text-sm font-medium mb-1'>Dept#*</Label>
                                    <Input type="text" placeholder="Dept#" value={dept}
                                        className='border-1 border-gray-300'
                                        onChange={e => {
                                            setDept(e.target.value)
                                            if (e.target.value) setDeptError("")
                                        }} />
                                    {deptError && <span className='text-red-500 text-xs'>{deptError}</span>}
                                </div>
                                <div className='col-span-2'></div>
                            </div>
                            <div className='flex justify-end mb-5'>
                                <Button variant="blue" className='flex justify-end' disabled={!name || !dept || !departmentGroup} >Next</Button>

                            </div>
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
                {/* add location */}
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
                                    <TableRow  >
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

export default DeptDetails