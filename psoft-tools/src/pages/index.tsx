import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

// Create Routing File
export default function Index() {
  // const [code, setCode] = useState("");
  const [precondition, setPrecondition] = useState("");
  const [parsedCode, setParsedCode] = useState("");
  const [postcondition, setPostcondition] = useState("");

  const handleEditorChange = (value : string | undefined) => {
    if (value) {
      // setCode(value);
      parseCode(value);
    }
  };

  const parseCode = (value : string) => {
    try {
      console.log("Parsing...")
      const regex = /{"(.*?)"}\s*{"(.*?)"}\s*{"(.*?)"}+/; // Adjusted regular expression
      const matches = value.match(regex);
      console.log(matches)
      if (matches) {
        const precondition = matches[1].trim(); // Extract precondition without curly braces
        const parsedCode = matches[2].trim(); // Extract code without curly braces
        const postcondition = matches[3].trim(); // Extract postcondition without curly braces
        setPrecondition(precondition);
        setParsedCode(parsedCode);
        setPostcondition(postcondition);
        logToJsonFile({ precondition, parsedCode, postcondition });
      } else {
        setPrecondition("");
        setParsedCode("");
        setPostcondition("");
      }
    } catch (error) {
      console.error("Error parsing code:", error);
    }
  };
  

  const logToJsonFile = (data: { precondition: string, parsedCode: string, postcondition: string }) => {
    const jsonData = JSON.stringify(data);
    console.log(jsonData); // Log JSON data to console
    // You can perform further actions here such as sending data to a server or saving it to local storage
  };

  useEffect(() => {
    console.log(parsedCode); // Log parsed code to console
  }, [parsedCode]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="screen" style={{ paddingTop: "50px", width: "100%", overflow: "hidden" }}>
        <div style={{ width: "50%", justifyContent: "left" }}>
          <Editor
            height="100vh"
            width="50vw"
            defaultLanguage="javascript"
            defaultValue="// input code"
            onChange={handleEditorChange}
          />
        </div>
        <div className="flex" style={{ justifyContent: "center" }}>
          <div style={{ top: 50 }}>
            <div>Precondition: {precondition}</div>
            <div>Code: {parsedCode}</div>
            <div>Postcondition: {postcondition}</div>
          </div>
          <button
            className="button"
            style={{ position: "absolute", right: 10, bottom: 10 }}
          >
            Compile
          </button>
        </div>
      </div>
    </div>
  );
}
