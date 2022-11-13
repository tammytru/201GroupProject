import { NavBarUnreg, ExploreFeed } from "../../components";
import './styles.css';

export default function SearchPage() {
    return (
        <div className="App">
            <NavBarUnreg></NavBarUnreg>
            <h1>SEARCH PAGE</h1>
            <ExploreFeed></ExploreFeed>
        </div>
    );
}