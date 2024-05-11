import { BrowserRouter,Routes, Route } from "react-router-dom";
import {carProfileRouters} from './routes.js'


function Router(){
    return(
        <BrowserRouter>
            <Routes>
        {carProfileRouters.map(item=><Route key={item.id} path={item.path} element={item.element} />)}
            </Routes>
        </BrowserRouter>
    )
}

export default Router