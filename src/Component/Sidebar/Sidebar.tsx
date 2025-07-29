import { Calendar, Inbox, Package2, Search, Settings, SquareTerminal } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./Navmain"
import { NavProjects } from "./NavProject"

// Menu items.
// const items = [
//     {
//         title: "Product",
//         url: "/product_tag",
//         icon: Package2,
//     },
//     {
//         title: "Marsh Table",
//         url: "/marshtable",
//         icon: Inbox,
//     },

//     // {
//     //     navMain: [
//     //         {
//     //             title: "Maintenance",
//     //             url: '',
//     //             icon: SquareTerminal,
//     //             isActive: true, //temp
//     //             items: [
//     //                 {
//     //                     title: "Department",
//     //                     url: "/department",
//     //                     icon: Calendar,
//     //                 },
//     //                 {
//     //                     title: "Department Group",
//     //                     url: "/deptgroup",
//     //                     icon: Search,
//     //                 },
//     //                 {
//     //                     title: "Vendor",
//     //                     url: "/vendor",
//     //                     icon: Settings,
//     //                 },

//     //             ],


//     //         },

//     //     ],
//     // }

// ]




const maintnance =
{


    single: [
        {
            title: '',
            name: "Product",
            url: "/product_tag",
            icon: Package2,
        },
        {
            title: '',
            name: "Marsh Table",
            url: "/marshtable",
            icon: Inbox,
        },
    ],

    navMain: [
        {
            title: "Maintenance",
            url: '',
            icon: SquareTerminal,
            isActive: true, //temp
            items: [
                {
                    title: "Department",
                    url: "/department",
                    icon: Calendar,
                },
                {
                    title: "Department Group",
                    url: "/deptgroup",
                    icon: Search,
                },
                {
                    title: "Vendor",
                    url: "/vendor",
                    icon: Settings,
                },
            ],

        },
    ],


    //     {
    //         title: "Maintenance",
    //         url: '',
    //         icon: SquareTerminal,
    //         isActive: true, //temp
    //         items: [
    //             {
    //                 title: "Department",
    //                 url: "/department",
    //                 icon: Calendar,
    //             },
    //             {
    //                 title: "Department Group",
    //                 url: "/deptgroup",
    //                 icon: Search,
    //             },
    //             {
    //                 title: "Vendor",
    //                 url: "/vendor",
    //                 icon: Settings,
    //             },
    //         ],

    //     },
    // ],

    pricebook: [
        {
            title: "Pricebook",
            url: '',
            icon: SquareTerminal,
            isActive: true, // temp
            items: [
                {
                    title: "Brand",
                    url: "/brand",
                    icon: Settings,
                },
                {
                    title: "Manufacture",
                    url: "/manufacture",
                    icon: Settings,
                },
                {
                    title: "Category",
                    url: "/category",
                },
                {
                    title: "Vendor Parts",
                    url: "/vendor_part",
                },
            ]
        },
    ],

}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarContent>
                <SidebarHeader className="text-2xl pl-5 text-center  my-4 font-bold text-black ">
                    MarshPOS
                </SidebarHeader>
                <NavProjects projects={maintnance.single} />
                <NavMain items={maintnance.navMain} />
                <NavMain items={maintnance.pricebook} />
            </SidebarContent>
        </Sidebar >
    )
}