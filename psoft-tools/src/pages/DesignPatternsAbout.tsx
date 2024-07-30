import Navbar from "../components/Navbar";
import Menu from "../components/DesignPatternsMenu";
import "./DesignPatternStyles.css";

export default function DesignPatternsAbout() {
    return (
        <div className="container">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="lower">
                <div className="menuBar">
                    <Menu />
                </div>
                <div className="mainContent_">
                    <div style={{ textAlign: "center" }}>What are design patterns?</div>
                    <br />
                    Design patterns allow us to write more efficient and flexible code. There are 3 main types of design patterns, each with their own subtypes.
                    <div>
                        <ol type="1">
                            <li>Creational design patterns</li>
                            <ol className="subList">
                                <li>Factory</li>
                                <li>Prototype</li>
                                <li>Singleton</li>
                            </ol>
                            <li>Behavioral design patterns</li>
                            <ol className="subList">
                                <li>Observer</li>
                                <li>Command</li>
                                <li>Visitor</li>
                            </ol>
                            <li>Structural design patterns</li>
                            <ol className="subList">
                                <li>Proxy</li>
                                <li>Flyweight</li>
                                <li>Facade</li>
                            </ol>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
