import React, { useState } from 'react';
import styled from 'styled-components';

import bgImage from '../images/bg.jpg';
import { Meal } from '../components/Meal';
import { ShowMeal } from '../components/ShowMeal';

import { getMeal } from '../services/mealAPI';

const Wrapper = styled.main`
  height: 100%;
  background: url(${bgImage}) no-repeat center center fixed;
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-items: center;
`;


export const MainWrapper = () => {

  const [showRecepy, setShowRecepy] = useState({
    show: false
  })

  const [showMenu, setShowMenu] = useState();

  const buttonHandler = (e) => {
    if (e.type === 'click') {
      getMeal().then(menu => setShowMenu(menu.data.meals[0]));
      setShowRecepy({ show: true });
    }
  }


  return (
    <Wrapper>
      <Meal buttonHandler={buttonHandler} />
      {showRecepy.show ? <ShowMeal letsEat={showMenu}></ShowMeal> : null}
    </Wrapper>
  );
}