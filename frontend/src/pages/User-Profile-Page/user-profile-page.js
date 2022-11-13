import  { NavBarUnreg, ExploreFeed } from "../../components";
import './styles.css';

export default function UserProfilePage() {
  return (
    <div className="App">
      <NavBarUnreg></NavBarUnreg>
      <h1>USER PROFILE</h1>
      <ExploreFeed></ExploreFeed>
    </div>
  );
}

