import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 50%;
  margin-bottom: 0.5rem;
  display: flex;
	align-items: center;
`;

const Button = styled.button`
  height: 2rem;
  width: 5rem;
  margin-right: 0.5rem;
  background: ${(props) => props.backgroundColor};;
  color: white;
  cursor: pointer;
`;

const RightSeparator = styled.div`
  margin-left: auto;
`

export {
  NavbarWrapper,
  Button,
  RightSeparator
};