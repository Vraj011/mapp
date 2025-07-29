import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"

function Form() {

    const [names, setNames] = useState<any>(
        {
            name: '',
            maxchanges: '',
            minamount: '',
            bucket: '',
            account: '',
            switch: '',
        }
    )
    const [xyz, setXyz] = useState<any>([])
    // const [open, setOpen] = useState(false)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(names, "dssa");
        setXyz((prev: any) => [...prev, names])
    }

    console.log(xyz, "xyz")

    return (
        <>
            <div className="mt-7">
                <form onSubmit={handleSubmit} >
                    <div className="grid grid-cols-4 gap-5 mx-3">

                        <div>
                            <Label className="mb-2">Name</Label>
                            <Input type="text" className="border-2 border-gray-300" placeholder="Enter Tender Name"
                                value={names.name}
                                onChange={(e) => { setNames({ ...names, name: e.target.value }) }}
                            />

                        </div>

                        <div>
                            <Label className="mb-2">Max Changes</Label>
                            <Input type="number" className="border-2 border-gray-300" placeholder="Enter Tender Name"
                                value={names.maxchanges}
                                onChange={(e) => { setNames({ ...names, maxchanges: e.target.value }) }}
                            />
                        </div>

                        <div>
                            <Label className="mb-2">Min Sale Amount</Label>
                            <Input type="number" className="border-2 border-gray-300" placeholder="Enter Tender Name"
                                value={names.minamount}
                                onChange={(e) => { setNames({ ...names, minamount: e.target.value }) }}
                            />
                        </div>

                        <div>
                            <Label className="mb-2">Reconcilition Bucket</Label>
                            <select className="w-full border-2 border-gray-300 rounded-md py-1 "
                                value={names.bucket}
                                onChange={(e) => { setNames({ ...names, bucket: e.target.value }) }}
                            >
                                <option value="">Select Bucket</option>
                                <option value="ram">ram</option>
                                <option value="shyam">shyam</option>
                            </select>
                        </div>
                        <div>
                            <Label className="mb-2">Account Code</Label>
                            <Input type="text" className="border-2 border-gray-300" placeholder="Enter Account Code"
                                value={names.account}
                                onChange={(e) => { setNames({ ...names, account: e.target.value }) }}
                            />

                        </div>

                        <div className="flex justify-between mt-6">
                            <div>
                                <Label>Required Tender Amount </Label>
                            </div>

                            <div>
                                <Switch value={names.switch}
                                    onCheckedChange={(value) => { setNames({ ...names, switch: value }) }}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div>
                                <Label>Allow Over Tendering </Label>
                            </div>

                            <div>
                                <Switch />
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div>
                                <Label>Open Drawer </Label>
                            </div>
                            <div>
                                <Switch />
                            </div>
                        </div>

                        <Button variant="blue" type="submit"
                        // disabled={!name} 
                        >Save</Button>

                    </div>
                </form>


                <Table className="mt-5 bg-gray-200">
                    <TableHeader>
                        <TableHead>Name</TableHead>
                        <TableHead>Max Changes</TableHead>
                        <TableHead>Min Sale Amt</TableHead>
                        <TableHead>Bucket</TableHead>
                        <TableHead>Account Code</TableHead>
                        <TableHead>Tendet Amt</TableHead>
                    </TableHeader>
                    <TableBody>
                        {xyz.map((item: any) => (
                            <TableRow key={item}>
                                <TableCell> {item.name} </TableCell>
                                <TableCell>{item.maxchanges}</TableCell>
                                <TableCell>{item.minamount}</TableCell>
                                <TableCell>{item.bucket}</TableCell>
                                <TableCell>{item.account}</TableCell>
                                <TableCell>{item.switch === true ? "yes" : "no"}</TableCell>
                            </TableRow>
                        )
                        )}
                    </TableBody>
                </Table>

            </div >
        </>
    )
}

export default Form