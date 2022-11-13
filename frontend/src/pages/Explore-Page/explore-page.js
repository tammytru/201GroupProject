import { NavBarUnreg, ExploreFeed } from "../../components";
import './styles.css';

export default function ExplorePage() {
    return (
        <div className="App">
            <NavBarUnreg></NavBarUnreg>
            <h1>EXPLORE PAGE</h1>
            <ExploreFeed></ExploreFeed>
        </div>
    );
}

