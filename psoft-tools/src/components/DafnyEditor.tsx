import { EditorProps, useMonaco } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import useDafny from "../hooks/useDafny";
import * as monacoTypes from "monaco-editor";

export default function DafnyEditor({
  EditorProps,
  markers,
}: {
  EditorProps: EditorProps;
  markers?: monacoTypes.editor.IMarkerData[];
}) {
  const monaco = useMonaco();
  const dafny = useDafny();
  const editorRef = useRef<monacoTypes.editor.IStandaloneCodeEditor>();
  const language = dafny.langDef;
  useEffect(() => {
    let cleanup: null | (() => void) = null;
    if (monaco) {
      monaco.languages.register({ id: "dafny" });
      monaco.languages.setMonarchTokensProvider("dafny", language);

      const { dispose } = monaco.languages.registerCompletionItemProvider(
        "dafny",
        {
          provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position);
            const range = {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: word.startColumn,
              endColumn: word.endColumn,
            };

            return { suggestions: dafny.suggestionsWithRange(range) };
          },
        }
      );
      cleanup = dispose;

      if (markers && editorRef.current) {
        const model = editorRef.current.getModel(); // Get the model
        if (model) {
          console.log("setting markers");
          monaco.editor.setModelMarkers(model, "dafny", markers); // Call setModelMarkers only if the model is not null
        }
      }
    }
    return () => {
      if (!monaco || !cleanup) return;
      cleanup();
    };
  }, [monaco, markers]);

  return (
    <Editor
      onMount={(editor) => {
        editorRef.current = editor;
      }}
      {...EditorProps}
    />
  );
}
