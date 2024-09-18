import React, { useState } from 'react';
import { EditorState, convertToRaw, Modifier, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './TextEditor.css'


function TextEditor(props) {
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(ContentState.createFromText(props.defaultText))
    );

    const {
        placeholder = "",
        onChangeFun = () => { },
    } = props;

    const handleOnChange = (value) => {
        setEditorState(value);
        const rawContentState = convertToRaw(value.getCurrentContent());
        const markup = draftToHtml(
            rawContentState
        );
        onChangeFun(markup);
    }

    const handlePastedText = input => {
        const inputLength = editorState
            .getCurrentContent()
            .getPlainText().length;
        if (input.length + inputLength) {
            const newContent = Modifier.insertText(
                editorState.getCurrentContent(),
                editorState.getSelection(),
                input
            );
            handleOnChange(
                EditorState.push(
                    editorState,
                    newContent,
                    "insert-characters"
                )
            );
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <Editor
                editorState={editorState}
                wrapperClassName="text-area-editor-wrapper"
                editorClassName="text-area-editor"
                onEditorStateChange={handleOnChange}
                toolbarClassName="text-area-editor-toolbar"
                toolbar={{
                    options: ['inline', 'textAlign', 'colorPicker'],
                    inline: {
                        options: ['bold', 'italic', 'underline']
                    },
                    textAlign: {
                        options: ['left', 'center', 'right'],
                    }
                }}
                placeholder={placeholder}
                handlePastedText={handlePastedText}
            />
        </div>
    );
};

export default TextEditor
