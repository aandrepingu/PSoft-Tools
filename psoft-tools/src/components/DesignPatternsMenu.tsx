
import { Link } from "react-router-dom";
import "./MenuStyles.css"

export default function DesignPatternsMenu() {

    return (
        <div className="menuContainer">
            <div className="menuItem">
                <Link to="/DesignPatternsAbout">
                    What are design patterns?
                </Link>
            </div>
            <div className="menuItem">
                <Link to="/Creational/CreationalPatterns">
                    Creational design patterns
                </Link>
            </div>
            <div className="menuItem">
                <Link to="/Creational/CreationalPatterns">
                    Behavioral design patterns
                </Link>
            </div >
            <div className="menuItem">
                <Link to="/Creational/CreationalPatterns">
                    Structural design patterns
                </Link>
            </div>

        </div>
    )
}