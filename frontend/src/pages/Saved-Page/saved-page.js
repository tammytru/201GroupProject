import { NavBarUnreg, ExploreFeed } from "../../components";
import './styles.css';

export default function SavedPage() {
    return (
        <div className="App">
            <NavBarUnreg></NavBarUnreg>
            <h1>Saved Page</h1>
            <ExploreFeed></ExploreFeed>
        </div>
    );
}

