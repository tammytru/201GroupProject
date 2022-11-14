import './styles.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBarUnreg } from "../../components";
import { SearchPage, LoginPage, UnregisteredExplorePage } from "..";

export default function UnregisteredLandingPage() {
  return (
    <Router>
        <div className="App">
            <NavBarUnreg></NavBarUnreg>

            <div className="content">

            <Switch>
                <Route exact path="/">
                    <UnregisteredExplorePage/>
                </Route>
                <Route exact path="/search">
                    <SearchPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
            </Switch>

            </div>
        
        
        </div>
    </Router>

  );
}

