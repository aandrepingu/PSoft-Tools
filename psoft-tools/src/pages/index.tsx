import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { get, post } from "../lib/api";


//Create Routing File

export default function Index() {
  const [data, setData] = useState("hello");
  const [precondition, setPrecondition] = useState("");
  const [code, setCode] = useState("");
  const [postcondition, setPostcondition] = useState("");
  
  const handleClick = () => {
    post("http://localhost:3000", code, precondition, postcondition)
      .then(response => {
        //console.log(response);
        setData(response);
      })  
      .catch(error => {
        console.error("error: ", error);
      })
  };

  const handleClick1 = () => {
    setPrecondition("");
    setData(""); 
    setPostcondition("");
  };
  
  const handlePreEditorChange = (value: string | undefined) => {
    if (value) {
      setPrecondition(value);
    }
  };
  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  };
  const handlePostEditorChange = (value: string | undefined) => {
    if (value) {
      setPostcondition(value);
    }
  };

  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="screen"
        style={{ paddingTop: "50px", width: "100%", overflow: "hidden" }}
      >
        <div style={{ width: "50%", justifyContent: "left" }}>
          <Editor
            height="10vh"
            width="50vw"
            defaultLanguage="javascript"
            defaultValue="// input precondition"
            onChange={handlePreEditorChange}
          />
          <Editor
            height="72vh"
            width="50vw"
            defaultLanguage="javascript"
            defaultValue="// input code"
            onChange={handleEditorChange}
          />
          <Editor
            height="10vh"
            width="50vw"
            defaultLanguage="javascript"
            defaultValue="// input postcondition"
            onChange={handlePostEditorChange}
          />
        </div>
        <div style={{position: "relative", paddingLeft: 15, whiteSpace: "pre-line", textAlign: "start", tabSize: 5}}>{data}</div>
        <button 
          onClick={handleClick1}
          style={{position: "absolute", right: 150, bottom: 10}}
          >Clear</button>
        <button 
          onClick={handleClick}
          style={{position: "absolute", right: 10, bottom: 10}}
          >Run Dafny</button>
      </div>
    </div>
  );
}
