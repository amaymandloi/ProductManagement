import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/Navbar";
import { EditProduct } from "./component/EditProduct";
import { Home } from "./component/Home";
import { AddProduct } from "./component/AddProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/editProduct/:id" element={<EditProduct />}></Route>
      </Routes>
    </>
  );
}

export default App;
