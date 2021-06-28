import { Fragment } from "react";
import { IFrameWrapper } from "./IFrame.styles";
import PropTypes from "prop-types";

const RESOURCE_IFRAME_TITLE = "output";

const IFrame = ({ source }) => {
  return (
    <Fragment>
      <IFrameWrapper>
        <iframe title={RESOURCE_IFRAME_TITLE} srcDoc={source} />
      </IFrameWrapper>
    </Fragment>
  );
};

IFrame.propTypes = {
  source: PropTypes.string.isRequired,
};

export default IFrame;
