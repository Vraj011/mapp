import useDocumentTitle from "@/hooks/title";
import Product_Table from "./Product_Table";

export function Product_Tag() {
    useDocumentTitle('Product Tag | MarshPOS')
    return (
        <div>

            <Product_Table />
        </div>
    );
}