import { Editor, useMonaco } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

//Create Routing File
export default function Index() {
  const monaco = useMonaco();
  useEffect(() => {
    monaco?.languages.register({ id: "dafny" });
    monaco?.languages.setMonarchTokensProvider("dafny", {
      keywords: [
        "abstract",
        "continue",
        "for",
        "new",
        "switch",
        "assert",
        "goto",
        "do",
        "if",
        "private",
        "this",
        "break",
        "protected",
        "throw",
        "else",
        "public",
        "enum",
        "return",
        "catch",
        "try",
        "interface",
        "static",
        "class",
        "finally",
        "const",
        "super",
        "while",
        "true",
        "false",
      ],

      typeKeywords: [
        "boolean",
        "double",
        "byte",
        "int",
        "short",
        "char",
        "void",
        "long",
        "float",
      ],

      operators: [
        "=",
        ">",
        "<",
        "!",
        "~",
        "?",
        ":",
        "==",
        "<=",
        ">=",
        "!=",
        "&&",
        "||",
        "++",
        "--",
        "+",
        "-",
        "*",
        "/",
        "&",
        "|",
        "^",
        "%",
        "<<",
        ">>",
        ">>>",
        "+=",
        "-=",
        "*=",
        "/=",
        "&=",
        "|=",
        "^=",
        "%=",
        "<<=",
        ">>=",
        ">>>=",
      ],

      // we include these common regular expressions
      symbols: /[=><!~?:&|+\-*/^%]+/,

      // C# style strings
      escapes:
        /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

      // The main tokenizer for our languages
      tokenizer: {
        root: [
          // identifiers and keywords
          [
            /[a-z_$][\w$]*/,
            {
              cases: {
                "@typeKeywords": "keyword",
                "@keywords": "keyword",
                "@default": "identifier",
              },
            },
          ],
          [/[A-Z][\w$]*/, "type.identifier"], // to show class names nicely

          // whitespace
          { include: "@whitespace" },

          // delimiters and operators
          [/[{}()[\]]/, "@brackets"],
          [/[<>](?!@symbols)/, "@brackets"],
          [/@symbols/, { cases: { "@operators": "operator", "@default": "" } }],

          // @ annotations.
          // As an example, we emit a debugging log message on these tokens.
          // Note: message are supressed during the first load -- change some lines to see them.
          [
            /@\s*[a-zA-Z_$][\w$]*/,
            { token: "annotation", log: "annotation token: $0" },
          ],

          // numbers
          [/\d*\.\d+([eE][-+]?\d+)?/, "number.float"],
          [/0[xX][0-9a-fA-F]+/, "number.hex"],
          [/\d+/, "number"],

          // delimiter: after number because of .\d floats
          [/[;,.]/, "delimiter"],

          // strings
          [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
          [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],

          // characters
          [/'[^\\']'/, "string"],
          [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
          [/'/, "string.invalid"],
        ],

        comment: [
          [/[^/*]+/, "comment"],
          [/\/\*/, "comment", "@push"], // nested comment
          ["\\*/", "comment", "@pop"],
          [/[/*]/, "comment"],
        ],

        string: [
          [/[^\\"]+/, "string"],
          [/@escapes/, "string.escape"],
          [/\\./, "string.escape.invalid"],
          [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }],
        ],

        whitespace: [
          [/[ \t\r\n]+/, "white"],
          [/\/\*/, "comment", "@comment"],
          [/\/\/.*$/, "comment"],
        ],
      },
    });
  }, [monaco]);
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
            height="100vh"
            width="50vw"
            defaultLanguage="javascript"
            defaultValue="// input code"
          />
        </div>
        <div className="flex" style={{ justifyContent: "center" }}>
          Output.Output.Output.Output
        </div>
      </div>
    </div>
  );
}
