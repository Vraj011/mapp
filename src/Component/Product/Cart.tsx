import type { RootState } from "@/ReduxProduct/slice/cart"
import { useSelector } from "react-redux"

const Cart = () => {

    // const items = useSelector((state: any) => state.cart)
    const items = useSelector((state: RootState) => state.cart)
    console.log(items)
    const total = items.reduce((a: any, b: any) => a + b.price, 0)

    return (

        <>
            <div className=" bg-red-300 text-center text-2xl text-white mb-3">
                <p className="text-red-700 font-medium">Total: {items.length} </p>
                <p className="text-red-700 font-medium"> Price: {total}</p>
            </div>
        </>
    )
}

export default Cart