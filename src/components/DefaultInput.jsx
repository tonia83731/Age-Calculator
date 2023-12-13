import styled from "styled-components";
import { breakpoint } from "../styles/breakpoint";
import { colorSetting } from "../styles/colorSettings";

export default function DefaultInput({
  id,
  label,
  inputValue,
  placeholder,
  onChange,
  warn
}) {
  return (
    <InputGroup className={warn !== "" ? 'error' : ''}>
      <InputLabel htmlFor={`${id}-input`}>{label}</InputLabel>
      <InputNumber
        id={`${id}-input`}
        name={`${id}`}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
      ></InputNumber>
      <p>{warn || ""}</p>
    </InputGroup>
  );
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  &.error {
    label {
      color: ${colorSetting.red};
    }
    input {
      border: 1px solid ${colorSetting.red};
    }
    p {
      color: ${colorSetting.red};
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
    }
  }
`;
const InputLabel = styled.label`
  color: ${colorSetting.grey};
  letter-spacing: 3.5px;
`;
const InputNumber = styled.input`
  padding: 12px 16px;
  border: 1px solid ${colorSetting["line-gray"]};
  border-radius: 8px;
  color: ${colorSetting.black};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.32px;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${breakpoint.mobile}) {
    font-size: 32px;
    padding: 12px 24px;
  }
`;


