import { Switch, Route, BrowserRouter } from "react-router-dom";
import Transactions from "./Pages/Menu";
import NewTransaction from "./Pages/NewTransaction";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SingIn";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

import "./styles/reset.css";

export default function App() {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider
          value={{
            user: user || JSON.parse(localStorage.getItem("user")),
            setUser,
          }}
        >
          <Route path="/" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/menu" exact component={Transactions} />
          <Route
            path="/newtransaction/:transaction"
            exact
            component={NewTransaction}
          />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
