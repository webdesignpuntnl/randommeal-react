import React from 'react';
import styled from 'styled-components';

const MealWrapper = styled.div`

.getMeal {
    border: 3px solid black;
    border-radius: 2px;
    height: auto;
    margin-top: 2rem;
    text-align: center;
    padding: 1rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0.6;
      z-index: 1;
    }
  }

  h1 {
    position: relative;
    z-index: 100;
  }

  button {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    opacity: 1;
    text-transform: uppercase;
    padding: 0.8rem 2rem;
    margin-top: 2rem;
    border: 2px solid black;
    background-color: green;
    border-radius: 3px;
    transition: all 0.8s;
    cursor: pointer;
    position: relative;
    z-index: 100;

    &:hover,
    &:active {
      color: black;
      background-color: yellow;
      transform: scale3d(1.2, 0.9, 1.5);
      box-shadow: 1px 1px 3px 3px grey;
      transition: all 0.8s;
    }
  }
`;

export const Meal = (props) => {

  return (
    <MealWrapper>
      <div className="getMeal">
        <h1>Push the button for a recipy</h1>
        <button onClick={props.buttonHandler}>eat</button>
      </div>
    </MealWrapper>
  )
}