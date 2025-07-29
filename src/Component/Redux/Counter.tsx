import { Button } from "@/components/ui/button"
import Count from "./Count"
import { useDispatch } from 'react-redux'

function ReduxCounter() {

    const dispatch = useDispatch()


    return (
        <>
            <div className="text-center mt-50">
                <Button onClick={() => dispatch({ type: '+' })}>+</Button>
                <Count />
                <Button onClick={() => dispatch({ type: '-' })}>-</Button>

            </div >
        </>
    )
}

export default ReduxCounter