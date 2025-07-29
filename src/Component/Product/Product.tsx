import { Button } from "@/components/ui/button";
import products from "../products";
import type { productsItem } from "../products";

import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/ReduxProduct/slice/cart";

const ReduxProduct = () => {

    const dispatch = useDispatch()
    const items = useSelector((state: any) => state.cart)
    const total = items.reduce((a: any, b: any) => a + b.price, 0)



    return (
        <>

            <Cart />

            <div className="grid grid-cols-3 gap-3 mx-3 mt-5 mb-5">
                {products.map((item: productsItem) => (
                    <Card>
                        <CardHeader key={item.id} >
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={item.image} width={50} alt="" />
                            <p>{item.description}</p>
                            <p className="mt-2">Price: ${item.price}</p>
                        </CardContent>
                        <CardFooter>
                            <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                            <CardAction className="ml-50">
                                <Button variant="blue"
                                    onClick={() => dispatch(
                                        addItem({
                                            title: item.title,
                                            rating: item.rating,
                                            description: item.description,
                                            price: item.price
                                        }))}
                                >
                                    Add
                                </Button>
                            </CardAction>
                        </CardFooter>
                    </Card>
                ))}
            </div>


            <div className="mx-5 border-1 border-gray-400 rounded mb-5  ">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead >Title</TableHead>
                            <TableHead >Description</TableHead>
                            <TableHead >Rating</TableHead>
                            <TableHead >Amount</TableHead>
                            <TableHead> Total Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items.map((item: productsItem, idx: number) => (
                            <TableRow key={idx}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell >{item.description}</TableCell>
                                <TableCell >{item.rating.rate}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell> {total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};


export default ReduxProduct;
