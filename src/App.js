import React, { Fragment, useState } from 'react';
import './App.css';
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-bottom: 1em;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1 1 100%;
  margin: 0.5em 0;

  & > div {
    padding: 0 8px;
  }

  @media (min-width: 426px) and (max-width: 1024px) {
    & {
      flex: 0 10 50%;
      padding: 0;
    }
  }

  @media (min-width: 1025px){
    & {
      flex: 1;
    }
  }
`

const ColumnFull = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1 1 100%;
`;

const Value = styled.input`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  -webkit-transition: all .3s;
  transition: all .3s;
`;

const TextGradient = styled.p`
  margin: 0;
  font-size: 3em;
  font-weight: 700;
  /* Fallback: Set a background color. */
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, #2C3E50, #FD746C);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
const App = () => {
  const [text, setText] = useState("It's a beautiful day.");

  const handleOnChangeText = e => {
    const { value } = e.target;
    setText(value);
  }

  return (
    <Fragment>
      <Row>
        <ColumnFull>
          <Value value={text} onChange={handleOnChangeText} />
        </ColumnFull>
      </Row>
      <Row>
        <Column>
          <TextGradient>{text}</TextGradient>
        </Column>
        <Column>
          <TextGradient>{text}</TextGradient>
        </Column>
        <Column>
          <TextGradient>{text}</TextGradient>
        </Column>
      </Row>
    </Fragment>
  );
}

export default App;
