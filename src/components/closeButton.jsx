/**
 * @description Close button component, displays a close button, used to close modal popups
 * @param {function} function called by the on-click event
 * @returns jsx component
 */
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export default function closeButton({ closeFunction }) {
  return (
    <StyledClose onClick={() => closeFunction(false)}>
      <AiFillCloseCircle className="close-button" />
    </StyledClose>
  );
}

const StyledClose = styled.div`
  z-index: 999;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;

  .close-button {
    border-radius: 50%;
    pointer-events: none;
    width: 30px;
    height: 30px;
    background-color: whitesmoke;
    color: #65617d;

    &:hover {
      color: #920000;
      transition: 0.3s;
    }
  }
`;
