import Navbar from "../components/Navbar";
import Menu from "../components/DesignPatternsMenu";

export default function DesignPatterns() {
    return (
        <div >
            <div className="navbar">
                <Navbar />
            </div>
            <div className="menuBar">
                <div className="menu">
                    <Menu />
                </div>

            </div>
        </div>
    );
}
