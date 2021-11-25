import '../App.css';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Main from "../Componets/Main";
import {
    BrowserRouter
} from "react-router-dom";

export default function UITransfer() {
    return (
        <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
    )
}