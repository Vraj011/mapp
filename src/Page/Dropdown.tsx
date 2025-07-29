import { Button } from "@/components/ui/button"
import { LuMapPin } from "react-icons/lu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BiGridAlt } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PiNotificationLight } from "react-icons/pi";
import { TbMessageDots } from "react-icons/tb";
// import { LuCircle } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DropdownMenuDemo() {
    return (
        <>
            <div className="flex mt-5 mx-5 mb-5 justify-between">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild >
                        <Button variant="gray" className="text-gray-500"><LuMapPin />Any Location<FaChevronDown /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>India</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Gujarat
                                {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Delhi
                                {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Mumbai
                                {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Punjab
                                {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex justify-around w-50 text-2xl text-gray-500  ">
                    <CiSearch />
                    <PiNotificationLight />
                    <TbMessageDots />
                    <BiGridAlt />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* <LuCircle className="text-blue-500" /> */}
                </div>

            </div>
        </>
    )
}
