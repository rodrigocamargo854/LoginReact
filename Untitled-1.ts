import styled, { css } from 'styled-components'; 

type Props = {
    color?: 'blue' | 'red'
    size: number
}

const Button = styled.button<Props>`
  border: 2px solid white;

  ${props => {
      if (props.color === 'blue'){
        return css`
            background-color: blue;
        `
      } else if (props.color === 'red'){
        return css`
            background-color: red;
        `
      } else {
        return css`
            background-color: black;
        ` 
      }
  }}
`

