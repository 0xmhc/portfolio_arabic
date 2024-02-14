import  {createRoot}  from "react-dom/client"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from "./App"
import Amthal from "./components/Amthal";
import'./index.css'
import Header from "./components/Header";
import Gallery from "./components/Gallery";


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/amthal" element={<Amthal/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>);

