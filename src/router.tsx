import {BrowserRouter, Route, Routes} from "react-router";
import AppLayout from "./layout/AppLayout.tsx";
import PortfolioView from "./views/PortfolioView.tsx";
import IntelligTest from "./views/IntelligTest.tsx";
import DevFlow from "./views/DevFlow.tsx";
import PredBit from "./views/PredBit.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element= {<AppLayout/>}/>
                    <Route path="/" element={<PortfolioView/>} index/>
                    <Route path="/intelligtest" element={<IntelligTest/>}/>
                    <Route path="/devflow" element={<DevFlow/>}/>
                    <Route path="/predbit" element={<PredBit/>}/>
            </Routes>
        </BrowserRouter>
    );
}
