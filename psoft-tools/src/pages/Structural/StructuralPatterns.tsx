import Navbar from "../../components/Navbar";
import Menu from "../../components/DesignPatternsMenu";
import "./StructuralStyles.css"
import { Link } from "react-router-dom";


export default function StructuralPatterns() {

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
                    <div style={{ textAlign: "center" }}>What are structural design patterns?</div>
                    <br />

                    <div style={{paddingLeft:"40px"}}>
                        <ol type = "1">
                            <li className="listItem"><Link to="../Structural/Proxy">Proxy</Link></li>
                            <li className="listItem"><Link to="../Structural/Flyweight">Flyweight</Link></li>
                            <li className="listItem"><Link to="../Structural/Facade">Facade</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}