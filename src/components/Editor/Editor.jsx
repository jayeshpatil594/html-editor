import { Fragment } from "react";
import AceEditor from "react-ace";
import { EditorWrapper } from "./Editor.styles";
import PropTypes from "prop-types";

const RESOURCE_EDITOR_NAME = "editor";

const Editor = ({ onChange, mode, value, theme }) => {
  return (
    <Fragment>
      <EditorWrapper>
        <AceEditor
          mode={mode}
          theme={theme}
          value={value}
          onChange={onChange}
          name={RESOURCE_EDITOR_NAME}
          editorProps={{ $blockScrolling: true }}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 2,
          }}
        />
      </EditorWrapper>
    </Fragment>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Editor;
