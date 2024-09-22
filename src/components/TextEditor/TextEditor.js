import React, { useState } from "react";
import { EditorState, Modifier, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.css";

function TextEditor({
  defaultText = "",
  placeholder = "",
  onChangeFun = () => {},
}) {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(defaultText))
  );

  const handleOnChange = (value) => {
    setEditorState(value);
    const plainText = value.getCurrentContent().getPlainText();
    onChangeFun(plainText);
  };

  const handlePastedText = (input) => {
    const inputLength = editorState.getCurrentContent().getPlainText().length;
    if (input.length + inputLength) {
      const newContent = Modifier.insertText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        input
      );
      handleOnChange(
        EditorState.push(editorState, newContent, "insert-characters")
      );
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="mb-3 mt-3">
      <Editor
        editorState={editorState}
        wrapperClassName="text-area-editor-wrapper"
        editorClassName="text-area-editor"
        onEditorStateChange={handleOnChange}
        toolbarClassName="text-area-editor-toolbar"
        toolbar={{
          options: ["inline", "textAlign", "colorPicker"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
          textAlign: {
            options: ["left", "center", "right"],
          },
        }}
        placeholder={placeholder}
        handlePastedText={handlePastedText}
      />
    </div>
  );
}

export default TextEditor;
