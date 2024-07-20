import {Header1} from "./Components/Header1";
import {BrowserRouter} from "react-router-dom";
import {Header2} from "./Components/Header2.jsx";
import { Frequent } from "./Components/Frequent.jsx";
import { Appbar } from "./Components/Appbar.jsx";
import { Advertisement } from "./Components/Advertisement.jsx";
import { Circlesadd } from "./Components/Circlesadd.jsx"
import { Table2 } from "./Components/Table2.jsx";
import { Add } from "./Components/Add.jsx";
import { Footer } from "./Components/Footer.jsx";




function App() {
  return (
    <>
        <BrowserRouter>

            <Header1/>
            <Header2/>
            <Appbar/>
            <Advertisement/>
            <Circlesadd/>
            <Table2/>
            <Frequent/>
            <Add/>
            <Footer/>
            
        </BrowserRouter>
    </>
  )
}

export default App
