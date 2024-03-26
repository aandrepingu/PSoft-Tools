import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { get, post_Tripple } from "../lib/api";


//Create Routing File
const DEFAULT_PRECONDITION = "//input precondition";
const DEFAULT_CODE = "//input code";
const DEFAULT_POSTCONDITION = "//input postcondition"

export default function Index() {
  const [data, setData] = useState("hello");
  const [precondition, setPrecondition] = useState(DEFAULT_PRECONDITION);
  const [code, setCode] = useState(DEFAULT_CODE);
  const [postcondition, setPostcondition] = useState(DEFAULT_POSTCONDITION);
  
  const handleClick = () => {
    post_Tripple("http://localhost:3000/Hoars_Tripple", code, precondition, postcondition)
      .then(response => {
        //console.log("HI");
        console.log(response);

        setData(response.toString());
      })  
      .catch(error => {
        console.error("error: ", error);
      })
  };

  const handleClickClear = () => {
    setPrecondition(DEFAULT_PRECONDITION);
    setCode(DEFAULT_CODE); 
    setPostcondition(DEFAULT_POSTCONDITION);
    setData("");
  };

  const handleClickPre = () => {
    setPrecondition(DEFAULT_PRECONDITION);
  };

  const handleClickCode = () => {
    setCode(DEFAULT_CODE); 
    setData("");
  };

  const handleClickPost = () => {
    setPostcondition(DEFAULT_POSTCONDITION);
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
            value={precondition}
            onChange={handlePreEditorChange}
          />
          <button 
            onClick={handleClickPre}
            style={{ position: "absolute", top: "10vh", left: "42vw"}}
          >Reset Pre</button>
          <Editor
            height="72vh"
            width="50vw"
            defaultLanguage="javascript"
            value={code}
            onChange={handleEditorChange}
          />
          <button 
            onClick={handleClickCode}
            style={{ position: "absolute", top: "82vh", left: "41vw"}}
          >Reset Code</button>
          <Editor
            height="10vh"
            width="50vw"
            defaultLanguage="javascript"
            value={postcondition}
            onChange={handlePostEditorChange}
          />
          <button 
            onClick={handleClickPost}
            style={{ position: "absolute", top: "92vh", left: "41.5vw"}}
          >Reset Post</button>
        </div>
        <div style={{position: "relative", paddingLeft: 15, whiteSpace: "pre-line", textAlign: "start", tabSize: 5}}>{data}</div>
        <button 
          onClick={handleClickClear}
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
