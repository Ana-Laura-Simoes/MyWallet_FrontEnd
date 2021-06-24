import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NewEntrance from"./Pages/NewEntrance";
import NewExit from "./Pages/NexExit";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App(){
    const [user, setUser] = useState("");
    return (
<UserContext.Provider value={{ user, setUser }}>
<BrowserRouter>
<Switch>
<Route path="/" exact component={Login}/>    
<Route path="/SignUp" exact component={SignUp} />
<Route path="/menu" exact component={Home} />
<Route path="/entrance" exact component={NewEntrance} />
<Route path="/exit" exact component={NewExit} />
</Switch>
</BrowserRouter>
</UserContext.Provider>
    );
}