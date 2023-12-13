import styled from "styled-components";
import { breakpoint } from "../styles/breakpoint";
import { colorSetting } from "../styles/colorSettings";

export default function DefaultResult({ calculate, title }) {
  return (
    <div>
      <ResultSpan>{calculate || "- -"}</ResultSpan>
      {title}
    </div>
  );
}

const ResultSpan = styled.span`
  color: ${colorSetting.purple};
`;
