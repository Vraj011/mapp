
import { DropdownMenuDemo } from '@/Page/Dropdown'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


import { useNavigate } from 'react-router-dom';


import { FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useDocumentTitle from '@/hooks/title';

function DetailsAccount() {

    useDocumentTitle('Account | Department ')

    // navigation
    const navigate = useNavigate()

    const handleDepartment = () => {
        navigate("/department")
    }
    const handleDetails = () => {
        navigate("/deptdetails")
    }
    const handleOptions = () => {
        navigate("/optionsdetails")
    }

    // Manage locations 
    type Location = { location: string; pos: string };
    const [locations, setLocations] = useState<Location[]>([]);

    const [activeSection] = useState("accounts")

    //  to add a new location row
    const handleAddLocation = () => {
        setLocations((prev) => [...prev, { location: '', pos: '' }]);
    };

    //  to remove a location row
    const handleRemoveLocation = () => {
        setLocations((prev) => prev.slice(1))
    };

    const resetForm = () => {
        localStorage.removeItem("Department_name")
        localStorage.removeItem("Dept#")
        localStorage.removeItem("DepartmentGroup")
        localStorage.removeItem("POS")
    }

    const saveOptions = [
        { label: "Save", onclick: () => resetForm() },
        { label: "Save & Close", onClick: () => { resetForm(), navigate("/department") } }
    ];

    const [saveDropdownOpen, setSaveDropdownOpen] = useState(false);

    return (
        <>
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
                                    onClick={handleDepartment} >Yes</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    {/* Save Dropdown */}
                    <div className="relative">
                        <Button
                            variant="blue"
                            className="py-4  text-sm  flex items-center"
                            type="button"
                            onClick={() => setSaveDropdownOpen((open) => !open)}
                            aria-expanded={saveDropdownOpen}
                        >
                            Save
                            <FaChevronDown
                                className={`ml-2 transition-transform duration-200 ${saveDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </Button>
                        {saveDropdownOpen && (
                            <div
                                className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg transition-opacity z-10"
                                onMouseLeave={() => setSaveDropdownOpen(false)}
                            >
                                {saveOptions.map((option) => (
                                    <button
                                        key={option.label}
                                        className="w-full text-left text-sm px-5 py-2 hover:bg-blue-100"
                                        type="button"
                                        onClick={() => {
                                            setSaveDropdownOpen(false);
                                            option.onClick && option.onClick();
                                        }}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className=''>
                <div className=' grid grid-cols-7 gap-3 '>
                    <div className=" bg-white px-2  ms-2 rounded-md col-span-1 shadow-md border-2 border-gray-300">
                        <div className=''>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 mt-2 cursor-pointer ${activeSection === "details" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                                onClick={handleDetails}
                            >
                                Details
                            </p>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "options" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                                onClick={handleOptions}
                            >
                                Options
                            </p>
                            <p
                                className={`rounded-sm px-2 py-2 mb-3 cursor-pointer ${activeSection === "accounts" ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`}
                            >
                                Accounts
                            </p>
                        </div>

                    </div>


                    <div className="col-span-6 font-light bg-white rounded-md me-3  shadow-md  border border-2 border-gray-300">
                        <form className=' mx-5 '>



                            <div className='grid grid-cols-3 mb-10 mt-5 gap-5'>
                                <div>
                                    <Label className='mb-2 '>Sales Account</Label>
                                    <Input type="number" id="name" placeholder="Sales Account" className='border-gray-400' />
                                </div>

                                <div>
                                    <Label className='mb-2'>COGS Account</Label>
                                    <Input type="number" id="name" placeholder="COGS Account" className='border-gray-400' />
                                </div>

                                <div>
                                    <Label className='mb-2'>INV AP Account</Label>
                                    <Input type="number" id="name" placeholder="INV AP Account" className='border-gray-400' />
                                </div>

                            </div>


                            <div className='grid grid-cols-3 mb-10 mt-5 gap-5'>
                                <div>
                                    <Label className='mb-2'>Return Account</Label>
                                    <Input type="number" id="name" placeholder="Return Account" className='border-gray-400' />
                                </div>

                                <div>
                                    <Label className='mb-2'>Shrink Account</Label>
                                    <Input type="number" id="name" placeholder="Shrink Account" className='border-gray-400' />
                                </div>

                                <div>
                                    <Label className='mb-2'>Adjustments Account</Label>
                                    <Input type="number" id="name" placeholder="Adjustments Account" className='border-gray-400' />
                                </div>

                            </div>

                            <div className='grid grid-cols-3 mb-10 mt-5 gap-5'>
                                <div>
                                    <Label className='mb-2'>Excise Account</Label>
                                    <Input type="number" id="name" placeholder="Excise Account" className='border-gray-400' />
                                </div>
                            </div>



                        </form>

                    </div>
                </div>
            </div>

            <div className=' bg-white rounded-md mx-3 my-5 text-gray-600  shadow-md  border border-2 border-gray-300'>
                <div className='px-5 py-5'>
                    <p className='font-medium '>Manage POS Flag Locations</p>
                    <p>Customize POS Flag assignment with an override at specified locations</p>
                </div>
                <div className='flex justify-between mx-5 mb-5'>
                    <p className='text-gray-600 font-medium'>Location Assignment</p>
                    <Button variant="blue" className='flex justify-end' onClick={handleAddLocation}>Add Location</Button>
                </div>
                {locations.length > 0 && (
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
                                {locations.map(() => (
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
                                            <Button className='text-red-500 text-2xl bg-red-200 hover:bg-red-300' type="button" onClick={() => handleRemoveLocation()}>X</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div >
                )
                }

            </div >
        </>
    )
}

export default DetailsAccount