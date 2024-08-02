import Navbar from "../../components/Navbar";
import Menu from "../../components/DesignPatternsMenu";
import "./StructuralStyles.css"


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
                        <div style={{fontSize:"40px"}}>FLYWEIGHT PATTERN</div>
                    </div>
                    <div>
                        The factory pattern is a creational pattern where the role of creating objects is given to a superclass or interface, which can be called the factory.
                        This is especially useful when multiple subclasses may need to be created, as the factory takes care of generating an object of the correct subclass.
                    </div>
                    <div>
                        <div className="advantages"><div style={{ fontSize: "25px" }}>Advantages</div>
                            <ul style={{ paddingLeft: "40px" }}>
                                <li className="notNumbered">Easily extendible</li>
                                <li className="notNumbered">Reusable code</li>
                            </ul>
                        </div>
                        <div className="disadvantages"><div style={{ fontSize: "25px" }}>Disadvantages</div>
                            <ul style={{ paddingLeft: "40px" }}>
                                <li className="notNumbered">Adding more classes and interfaces increases the complexity of the code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}