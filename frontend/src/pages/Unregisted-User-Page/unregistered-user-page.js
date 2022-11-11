import  { NavBarUnreg, ExploreFeed } from "../../components";
import './styles.css';

export default function UnregisteredHomePage() {
  return (
    <div className="App">
      <NavBarUnreg></NavBarUnreg>
      <h1>UNREGISTERED USERS PAGE</h1>
      <ExploreFeed></ExploreFeed>
    </div>
  );
}

