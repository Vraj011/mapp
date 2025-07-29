
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination"

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


interface PaginationDemoProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}

export function PaginationDemo({ currentPage, setCurrentPage, totalPages }: PaginationDemoProps) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Pagination className="flex justify-end px-7">
            <PaginationContent>
                <PaginationItem>
                    <button
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                    >
                        <FaLongArrowAltLeft />
                    </button>
                </PaginationItem>
                {pages.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            // href="#"
                            className={page === currentPage ? "bg-blue-500 text-white" : ""}
                            isActive={page === currentPage}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <button
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        <FaLongArrowAltRight />
                    </button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}