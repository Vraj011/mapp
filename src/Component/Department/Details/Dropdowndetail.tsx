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

export function DropdownDetail() {
    return (
        <>
            <div className="flex   mb-5 justify-between">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild >
                        <Button variant="outline" className="text-gray-500 w-full">Select <FaChevronDown /></Button>
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


            </div>
        </>
    )
}
