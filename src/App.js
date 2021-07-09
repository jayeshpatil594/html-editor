import { useState, useCallback } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import IFrame from "./components/IFrame/IFrame";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import { saveAs } from "file-saver";
import { SAMPLE_CODE } from './mocks/sample'
import { Button } from './components/Navbar/Navbar.styles'
import { GlobalStyles } from "./GlobalStyles";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

const DARK_MODE_THEME = "monokai";
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
      <GlobalStyles theme={theme} />
      <Navbar
        theme={theme}
        runCode={runCode}
        saveCode={saveCode}
        changeTheme={changeTheme}
      />
      <Wrapper>
        <Editor onChange={onChange} value={value} mode="html" theme={theme} />
        <IFrame source={source} />
      </Wrapper>
      <Button backgroundColor="green" onClick={runSampleCode} >Click me</Button> <span>to run a sample code</span>
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

export default App;
