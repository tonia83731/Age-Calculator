import { useState, useEffect } from "react";

import { currentDate } from "./utilities/currentDate";
import styled from "styled-components";
import { breakpoint } from "./styles/breakpoint";
import { colorSetting } from "./styles/colorSettings";

import "./App.css";

import DefaultInput from "./components/DefaultInput";
import DefaultResult from "./components/DefaultResult";
import SearchArea from "./components/SearchArea";

import { checkEmpty } from "./utilities/checkEmpty";

function App() {
  const { year, month, day } = currentDate();
  // console.log(year)
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [warnMessage, setWarnMessage] = useState({
    year: "",
    month: "",
    day: "",
  });

  const handleDateChange = (e) => {
    // console.log(e.target)
    const name = e.target.name
    const value = e.target.value
    if (!Number(value)) {
      setInputValue((prevData) => ({ ...prevData, [name]: "" }));
    } else {
      setInputValue((prevData) => ({ ...prevData, [name]: value }));
    }
    
    // year error message
    if (name === "year" && Number(value) > year) {
      console.log(name)
      setWarnMessage((prevMessage) => ({
        ...prevMessage,
        [name]: "Must be in the past",
      }));
    } else if (name === "month" && Number(value) > 12) {
      setWarnMessage((prevMessage) => ({
        ...prevMessage,
        [name]: "Must be a valid month",
      }));
    } else if (name === "day" && Number(value) > 31){
      setWarnMessage((prevMessage) => ({
        ...prevMessage,
        [name]: "Must be a valid day",
      }));
    } else {
      setWarnMessage((prevMessage) => ({
        ...prevMessage,
        [name]: "",
      }));
    }
  }
  const handleDateSubmit = (e) => {
    e.preventDefault()
    // console.log('submit')
  }
  console.log(warnMessage)
  useEffect(() => {
    const isEmpty = checkEmpty(inputValue);
    if (!isEmpty) setIsDisabled(false);
    else setIsDisabled(true);
  })
  return (
    <AppArea>
      <MainArea>
        <form onSubmit={handleDateSubmit}>
          <FormGroup>
            <DefaultInput
              id="day"
              label="DAY"
              placeholder="DD"
              inputValue={inputValue.day}
              onChange={handleDateChange}
              warn={warnMessage.day}
            />
            <DefaultInput
              id="month"
              label="MONTH"
              placeholder="MM"
              inputValue={inputValue.month}
              onChange={handleDateChange}
              warn={warnMessage.month}
            />
            <DefaultInput
              id="year"
              label="YEAR"
              placeholder="YY"
              inputValue={inputValue.year}
              onChange={handleDateChange}
              warn={warnMessage.year}
            />
          </FormGroup>
          <SearchArea isDisabled={isDisabled} />
        </form>
        <ResultGroup>
          <DefaultResult title="years" />
          <DefaultResult title="months" />
          <DefaultResult title="days" />
        </ResultGroup>
      </MainArea>
    </AppArea>
  );
}

const AppArea = styled.div`
  padding: 90px 16px 0;
  @media screen and (min-width: ${breakpoint.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MainArea = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${colorSetting["card-white"]};
  border-radius: 24px 24px 100px 24px;
  padding: 48px 24px;
  @media screen and (min-width: ${breakpoint.mobile}) {
    max-width: 840px;
    border-radius: 24px 24px 200px 24px;
    padding: 56px;
  }
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  grid-gap: 16px;
  margin-bottom: 64px;
  @media screen and (min-width: ${breakpoint.mobile}) {
    display: grid;
    grid-template-columns: repeat(4, minmax(160px, 1fr));
    grid-gap: 32px;
  }
`;

const ResultGroup = styled.div`
  font-size: 56px;
  font-style: italic;
  font-weight: 800;
  margin-top: 64px;
  line-height: 110%;
  letter-spacing: -1.12px;
  color: ${colorSetting.black};
  @media screen and (min-width: ${breakpoint.mobile}) {
    font-size: 104px;
    letter-spacing: -2.08px;
  }
`;

export default App;
