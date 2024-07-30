import Navbar from "../../components/Navbar";
import Menu from "../../components/DesignPatternsMenu";
import "./CreationalStyles.css"
import { Link } from "react-router-dom";


export default function Factory() {

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
                   <div style={{textAlign:"center"}}>FACTORY PATTERN</div>
                </div>
            </div>
        </div>
    );
}