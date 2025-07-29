import { useSelector } from "react-redux"

function Count() {

    const count = useSelector((state: number) => state)

    return (
        <>
            {/* // display counting */}
            <p>{count}</p>
        </>
    )
}

export default Count