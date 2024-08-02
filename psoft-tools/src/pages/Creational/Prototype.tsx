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
                        <div style={{ fontSize: "40px" }}>PROTOTYPE PATTERN</div>
                    </div>
                    <div>
                        The prototype design pattern is a creational pattern that allows objects to be created by copying an existing object. This is especially important
                        if creating objects from scratch requires time consuming operations. When using this pattern, a prototype interface should be created. Inside this interface,
                        a clone() method should be created. Classes that implement this interface will overwrite the clone method to fit the needs of the class.
                    </div>
                    <div>
                        <div className="advantages"><div style={{ fontSize: "25px" }}>Advantages</div>
                            <ul style={{ paddingLeft: "40px" }}>
                                <li className="notNumbered">Saves time and memory when you would typically have to create an expensive object from scratch</li>
                                <li className="notNumbered">Reusable code</li>
                            </ul>
                        </div>
                        <div className="disadvantages"><div style={{ fontSize: "25px" }}>Disadvantages</div>
                            <ul style={{ paddingLeft: "40px" }}>
                                <li className="notNumbered">Less useful when objects do not share many attributes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}