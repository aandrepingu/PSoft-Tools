import Navbar from "../../components/Navbar";
import Menu from "../../components/DesignPatternsMenu";
import "./CreationalStyles.css"


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
                    <div style={{ textAlign: "center" }}>
                    <div style={{fontSize:"40px"}}>SINGLETON PATTERN</div>
                    </div>
                    <div>
                        The singleton design pattern is a creational pattern in which there is only one instance of a class exists in a program. This instance must be
                        easily accessible by the rest of the program. In many cases, the constructor of the class should be private in order to prevent the program from
                        instantiating more instances of the class.
                        <div>
                            <div className="advantages"><div style={{fontSize:"25px"}}>Advantages</div>
                                <ul style={{paddingLeft:"40px"}}>
                                    <li className="notNumbered">Typically better than using global variables</li>
                                    <li className="notNumbered">Instance of the class is only initialized once</li>
                                </ul>
                            </div>
                            <div className="disadvantages"><div style={{fontSize:"25px"}}>Disadvantages</div>
                                <ul style={{paddingLeft:"40px"}}>
                                    <li className="notNumbered">Can expose too much to the rest of the program</li>
                                    <li className="notNumbered">Can be difficult to write unit tests since there is only one instance of the class</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}