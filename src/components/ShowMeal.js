import React from 'react'
import styled from 'styled-components';

import { Ingredients } from './Ingredients';

const ArticleWrapper = styled.article`
    overflow-y: scroll;
    border: 3px solid black;
    border-radius: 2px;
    height: auto;
    margin: 2rem;
    width: 90%;
    max-width: 1000px;
    text-align: center;
    padding: 1rem;
    background: white;
    display: grid;
    grid-template-columns: 1fr 2fr;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    img {
      width: 100%;
      max-width: 800px;
      border-radius: 50%;
      border: 4px solid black;
      position: relative;
    }

    div {
      background-color: lightgrey;
      margin: 0 2rem;
      height: 80%;
    }
`;


export const ShowMeal = ({ letsEat }) => {



  if (!letsEat) {
    return (
      <ArticleWrapper>
        <h1>Getting some food !!</h1>;
      </ArticleWrapper>
    )
  } else {
    return (
      <ArticleWrapper>
        <img src={letsEat.strMealThumb} alt={letsEat.strMeal} />
        <div>
          <h1>{letsEat.strMeal}</h1>
          <h2>{letsEat.strCategory}</h2>
          <h3>{letsEat.strArea}</h3>
          <button>instructions</button>
        </div>
        <Ingredients letsEat={letsEat} />
      </ArticleWrapper>
    )
  }
}