import { NavBarUnreg, ExploreFeed } from "../../components";
import './styles.css';

export default function MessagesPage() {
    return (
        <div className="App">
            <NavBarUnreg></NavBarUnreg>
            <h1>MESSAGES PAGE</h1>
            <ExploreFeed></ExploreFeed>
        </div>
    );
}

