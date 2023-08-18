import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { marked } from "marked";

function App() {
  let [content, setContent] = useState("");
  const changeForm = (e) => {
    setContent(e.target.value);
  };
  marked.use({ breaks: true });
  return (
    <div className="wrapper">
      <div id="editorWrap" className="editorWrap">
        <div className="toolbarEditor">
          <FontAwesomeIcon icon={faFreeCodeCamp} className="iconFontAw" />
          Editor
          <FontAwesomeIcon icon={faMaximize} className="iconFontAw" />
        </div>
        <textarea
          onChange={changeForm}
          id="editor"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="previewerWrap">
        <div className="toolbarPreviewer">
          <FontAwesomeIcon icon={faFreeCodeCamp} className="iconFontAw" />
          Previewer
          <FontAwesomeIcon icon={faMaximize} className="iconFontAw" />
        </div>

        <div
          className="previewer"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
