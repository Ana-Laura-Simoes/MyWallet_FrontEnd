import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NewEntrance from"./Pages/NewEntrance";
import NewExit from "./Pages/NexExit";
import SignUp from "./Pages/SignUp";

export default function App(){
    return (
<BrowserRouter>
<Switch>
<Route path="/" exact component={SignUp} />
<Route path="/menu" exact component={Home} />
<Route path="/entrance" exact component={NewEntrance} />
<Route path="/exit" exact component={NewExit} />
</Switch>

</BrowserRouter>
    );
}