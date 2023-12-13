import styled from "styled-components";
import { breakpoint } from "../styles/breakpoint";
import { colorSetting } from "../styles/colorSettings";
// import { ReactComponent as ArrowIcon } from "../assets/icon-arrow.svg";
import ArrowIcon from "../assets/icon-arrow.svg?react";

export default function SearchArea({isDisabled}) {
  return (
    <SubmitGroup>
      <BreakLine></BreakLine>
      <SubmitBtn disabled={isDisabled}>
        <ArrowIcon />
      </SubmitBtn>
    </SubmitGroup>
  );
}

const SubmitGroup = styled.div`
  position: relative;
`
const BreakLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colorSetting["line-gray"]};
`;
const SubmitBtn = styled.button`
  width: 64px;
  height: 64px;
  background-color: ${colorSetting.black};
  border: none;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  &:disabled {
    background-color: ${colorSetting.purple};
  }
  @media screen and (min-width: ${breakpoint.mobile}) {
    width: 96px;
    height: 96px;
    position: absolute;
    top: 0;
    left: unset;
    right: 0;
    transform: translate(0, -50%);
  }
`;