import Navbar from "../../components/Navbar";
import Menu from "../../components/DesignPatternsMenu";
import "./CreationalStyles.css"
import { Link } from "react-router-dom";


export default function CreationalPatterns() {

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
                    <div style={{ textAlign: "center" }}>What are creational design patterns?</div>
                    <br />
                    Creational patterns focus on enforcing reusability and efficiency in the creation of objects. Programs using creatonal patterns often
                    reuse or copy existing objects in order to save memory and time.
                    <div style={{paddingLeft:"40px"}}>
                        <ol type = "1">
                            <li className="listItem"><Link to="../Creational/Factory">Factory</Link></li>
                            <li className="listItem"><Link to="../Creational/Prototype">Prototype</Link></li>
                            <li className="listItem"><Link to="../Creational/Singleton">Singleton</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}