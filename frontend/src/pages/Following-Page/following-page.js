import { NavBarUnreg, ExploreFeed } from "../../components";
import './styles.css';

export default function FollowingPage() {
    return (
        <div className="App">
            <NavBarUnreg></NavBarUnreg>
            <h1>FOLLOWING PAGE</h1>
            <ExploreFeed></ExploreFeed>
        </div>
    );
}

