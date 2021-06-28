import styled from "styled-components";

const EditorWrapper = styled.div`
  height: 100%;
  width: 50%;
  margin-right: 1rem;
  .ace_editor {
    width: 100% !important;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
export { EditorWrapper };
