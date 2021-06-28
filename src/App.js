import { useState, useCallback } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import IFrame from "./components/IFrame/IFrame";
import styled from "styled-components";
import { saveAs } from "file-saver";
import { SAMPLE_CODE } from './mocks/sample'

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

const RESOURCE_RUN_TEXT = "Run";
const RESOURCE_SAVE_TEXT = "Save";

const DARK_MODE_ID = "dark-mode";
const LIGHT_MODE_ID = "light-mode";
const DARK_MODE_THEME = "monokai";
const LIGHT_MODE_THEME = "github";
const DEFAULT_THEME = DARK_MODE_THEME;

const App = () => {
  const [value, setValue] = useState("");
  const [source, setSource] = useState("");
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const onChange = useCallback((e) => {
    setValue(e);
  }, []);

  const runCode = useCallback(() => {
    setSource(value);
  }, [setSource, value]);

  const changeTheme = useCallback((e) => {
    setTheme(e.target.value);
  }, []);

  const saveCode = useCallback(() => {
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "download.txt");
  }, [value]);

  const runSampleCode = () => {
    setValue(SAMPLE_CODE)
    setSource(SAMPLE_CODE)
  }

  return (
    <div className="App">
      <Wrapper>
        <Options>
          <Button onClick={runCode}>{RESOURCE_RUN_TEXT}</Button> <br />
          <SaveButton onClick={saveCode}>{RESOURCE_SAVE_TEXT}</SaveButton>
          <form>
            <p>Dark mode</p>
            <input
              type="radio"
              id={DARK_MODE_ID}
              value={DARK_MODE_THEME}
              checked={theme === DARK_MODE_THEME}
              onChange={changeTheme}
            />
            <label for={DARK_MODE_ID}>On</label>
            <input
              type="radio"
              id={LIGHT_MODE_ID}
              value={LIGHT_MODE_THEME}
              checked={theme === LIGHT_MODE_THEME}
              onChange={changeTheme}
            />
            <label for={LIGHT_MODE_ID}>Off</label>
          </form>
        </Options>
        <Editor onChange={onChange} value={value} mode="html" theme={theme} />
        <IFrame source={source} />
      </Wrapper>
      <Button onClick={runSampleCode} >Click me</Button> <span>to run a sample code</span>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  p {
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  height: 2rem;
  width: 5rem;
  margin-right: 0.5rem;
  background: green;
  color: white;
  cursor: pointer;
`;

const SaveButton = styled.button`
  height: 2rem;
  width: 5rem;
  margin-right: 0.5rem;
  background: cornflowerblue;
  color: white;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export default App;
