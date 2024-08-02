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
                        <div style={{fontSize:"40px"}}>PROXY PATTERN</div>
                    </div>
                    <div>
                        The proxy design pattern is a structural pattern where a proxy object is created to handle access to an object.
                    </div>
                    <div>
                        <div className="advantages"><div style={{ fontSize: "25px" }}>Advantages</div>
                            <ul style={{ paddingLeft: "40px" }}>
                                <li className="notNumbered">Prevents clients from accessing data they should not be able to</li>
                           
                            </ul>
                        </div>
                        <div className="disadvantages"><div style={{ fontSize: "25px" }}>Disadvantages</div>
                            <ul style={{ paddingLeft: "40px" }}>
                                <li className="notNumbered">Adds another layer of complexity to the code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}