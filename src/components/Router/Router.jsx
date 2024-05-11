import { BrowserRouter,Routes, Route } from "react-router-dom";
import {carProfileRouters} from './routes.js'


function Router(){
    return(
        <div>
        {carProfileRouters.map(item=>(<Route key={item.id} path={item.path} element={item.element} />))}
        </div>
    )
}

export default Router