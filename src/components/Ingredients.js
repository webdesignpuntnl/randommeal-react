import React from 'react'
import styled from 'styled-components';

const TableWrapper = styled.table`
  margin: 0 0 1rem 0;
  padding: 1rem;
  grid-column-start: 2 ;
  border: 2px solid black;
  
  tr:nth-child(odd) {
    background-color: lightgrey;
  }

  th {
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: grey;
    color: white;
  }
`;


export const Ingredients = ({ letsEat }) => {

  let result = [];
  const ingredientsQuantatie = (ingredients, quantaties) => {
    for (let i = 0; i < ingredients.length; i++)
      result[ingredients[i]] = quantaties[i];
    return result;
  }

  const ingredients = [];
  const quantaties = [];
  for (let [key, value] of Object.entries(letsEat)) {
    if (key.includes('Ingredient') && value !== '') {
      ingredients.push(value);
    } else if (key.includes('Measure') && value !== '') {
      quantaties.push(value);
    }
    ingredientsQuantatie(ingredients, quantaties)
  }

  return (
    <TableWrapper>
      <tbody>
        <tr>
          <th>ingredients</th>
          <th>quantity</th>
        </tr>
        {Object.entries(result).map(([key, value]) => {
          return (
            <tr>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          )
        }
        )}
      </tbody>
    </TableWrapper>
  );
};