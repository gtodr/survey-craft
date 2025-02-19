import React, { FC } from 'react'
import styled, { css } from 'styled-components'

type ButtonPropsType = {
  primary?: boolean
}

const Button = styled.button<ButtonPropsType>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    background: palevioletred;
    color: white;
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  ${(props: ButtonPropsType) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;

      &:hover {
        background: white;
        color: palevioletred;
    `}
`

const Container = styled.div`
  text-align: center;
`

const Demo: FC = () => {
  return (
    <div>
      <h1>Styled Components Demo</h1>
      <Container>
        <Button>an1</Button>
        <Button primary>an2</Button>
      </Container>
    </div>
  )
}

export default Demo
