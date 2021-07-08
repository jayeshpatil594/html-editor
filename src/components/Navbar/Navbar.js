import React from 'react';
import PropTypes from "prop-types";
import { NavbarWrapper, Button, RightSeparator } from './Navbar.styles';

const RESOURCE_RUN_TEXT = "Run";
const RESOURCE_SAVE_TEXT = "Save";
const DARK_MODE_ID = "dark-mode";
const LIGHT_MODE_ID = "light-mode";
const DARK_MODE_THEME = "monokai";
const LIGHT_MODE_THEME = "github";

const Navbar = (props) => {
  return (
    <NavbarWrapper>
      <div>
        <span>Dark Mode</span>
        <input
          type="radio"
          id={DARK_MODE_ID}
          value={DARK_MODE_THEME}
          checked={props.theme === DARK_MODE_THEME}
          onChange={props.changeTheme}
        />
        <label for={DARK_MODE_ID}>On</label>
        <input
          type="radio"
          id={LIGHT_MODE_ID}
          value={LIGHT_MODE_THEME}
          checked={props.theme === LIGHT_MODE_THEME}
          onChange={props.changeTheme}
        />
        <label for={LIGHT_MODE_ID}>Off</label>
      </div>
      <RightSeparator></RightSeparator>
      <Button backgroundColor="#646495" onClick={props.saveCode}>{RESOURCE_SAVE_TEXT}</Button>
      <Button backgroundColor="green" onClick={props.runCode}>{RESOURCE_RUN_TEXT}</Button>
    </NavbarWrapper>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  runCode: PropTypes.func.isRequired,
  saveCode: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Navbar;