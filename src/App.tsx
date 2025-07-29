
import Department from "./Component/Department/Department"
import Department_Group from "./Component/Department/Department_Group"
import DetailsAccount from "./Component/Department/Details/Account"
import DeptDetails from "./Component/Department/Details/Details"
import DetailOptions from "./Component/Department/Details/Options"
import Login from "./Component/Login/Login"
import Brand from "./Component/Pricebook/Brand/Brand"
import Category from "./Component/Pricebook/Category/Category"
import Manufacture from "./Component/Pricebook/Manufacture/Manufacture"
import Product from "./Component/Pricebook/Producttag/PRoduct"
import Vendor_parts from "./Component/Pricebook/VendorParts/Vendor_parts"
import Vendor_parts1 from "./Component/Pricebook/VendorParts/Vendor_parts1"
import { Product_Tag } from "./Component/ProductTag/Product"
import ReduxCounter from "./Component/Redux/Counter"



import Vendor_table from "./Component/Vendors/Vendor_table"
import VendorContact from "./Component/Vendors/VendorDetails/Contact"
import Vendor_Edifilter from "./Component/Vendors/VendorDetails/Edifilter"
import VendorContactEdit from "./Component/Vendors/VendorDetails/VendorContactEdit"
import Vendor_Details from "./Component/Vendors/VendorDetails/VendorDetails"
import VendorEdit from "./Component/Vendors/VendorDetails/VendorEdit"
import VendorEDIfilterEdit from "./Component/Vendors/VendorDetails/VendorfilterEdit"

import Layout from "./Layout"
import MarshTable from "./Page/Table"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReduxProduct from "./Component/Product/Product"

function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<> <Login /></>} ></Route>



          <Route element={<Layout />}>
            <Route path="/marshtable" element={<> <MarshTable /></>} ></Route>
            <Route path="/product_tag" element={<>   <Product_Tag /></>}></Route>
            <Route path="/department" element={<>   <Department /></>}></Route>
            <Route path="/deptdetails" element={<><DeptDetails /></>}></Route>
            <Route path="/optionsdetails" element={<>   <DetailOptions /></>}></Route>
            <Route path="/accountdetails" element={<>   <DetailsAccount /></>}></Route>
            <Route path="/deptgroup" element={<>   <Department_Group /></>}></Route>
            <Route path="/vendor" element={<>   <Vendor_table /></>}></Route>
            <Route path="/vendordetails" element={<><Vendor_Details /></>}></Route>
            <Route path="/vendor_edi" element={<>   <Vendor_Edifilter /></>}></Route>
            <Route path="/vendor_contact" element={<>   <VendorContact /></>}></Route>
            <Route path="/vendor_edit" element={<VendorEdit />} />
            <Route path="/vendorFilter_edit" element={<VendorEDIfilterEdit />} />
            <Route path="/vendorContact_edit" element={<VendorContactEdit />} />
            <Route path="/brand" element={<><Brand /> </>} />
            <Route path="/manufacture" element={<><Manufacture /> </>} />
            <Route path="/product" element={<><Product /> </>} />
            <Route path="/category" element={<><Category /> </>} />

            <Route path="/vendor_part" element={<><Vendor_parts /> </>} />
            <Route path="/vendor_part1" element={<><Vendor_parts1 /> </>} />


            {/* Redux */}


          </Route>
          <Route path="/redux" element={<><ReduxCounter /> </>} />
          <Route path="/rdprd" element={<><ReduxProduct /> </>} />




        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
