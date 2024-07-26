import Navbar from "../components/Navbar";
import Menu from "../components/DesignPatternsMenu";
import "./DesignPatternStyles.css"
export default function DesignPatternsAbout() {

    return (
        <div className="container" >
            <div className="navbar">
                <Navbar />
            </div>

            <div className="lower"style={{ position: "relative", padding: "0px", margin: "0px", borderWidth: "5px", borderColor:"green" }}>

                <div className="menuBar" >

                    <Menu />
                </div>
                <div className="mainContent_">

                    What are design patterns?

                </div>

            </div>
        </div>

    )
}