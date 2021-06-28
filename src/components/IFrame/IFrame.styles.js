import styled from "styled-components";

const IFrameWrapper = styled.div`
  height: 100%;
  width: 50%;

  iframe {
    height: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export { IFrameWrapper };
