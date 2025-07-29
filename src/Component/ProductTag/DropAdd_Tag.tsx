import { Button } from "@/components/ui/button"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { FaChevronDown } from "react-icons/fa6";


export function ProductDropdownMenuDemo() {
    return (
        <>
            <div className="flex mt-5 mx-5 mb-5 justify-between">
                <DropdownMenu  >
                    <DropdownMenuTrigger asChild >
                        <Button variant="outline" className="text-gray-500 w-50 ">Please Select Tag Group<FaChevronDown /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>Select Tag Group</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Manage Group 1
                                {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Manage Group 2
                                {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Manage Group 3
                                {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Manage Group 4
                                {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* <div className="flex justify-around w-50 text-2xl text-gray-500  ">
                    <CiSearch />
                    <PiNotificationLight />
                    <TbMessageDots />
                    <BiGridAlt />
                    <LuCircle className="text-blue-500" />
                </div> */}

            </div>
        </>
    )
}
