import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { breakpoints } from '../theme/breakpoints'

const StyledButton = styled.button`
  padding: 10px 20px;
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 100%;
  }
  &.primary{
    background: ${colors.paleTeal};
    border: none;
    color: ${colors.white};
    &:disabled{
      background: ${colors.lightTeal};
    }
    &:active, &:focus {
      background: ${colors.lightTeal};
    }
  }
  &.secondary{
    background: ${colors.bubbleGum};
    border: none;
    color: ${colors.white};
    &:disabled{
      background: ${colors.bubbleGum};
    }
    &:active, &:focus {
      background: ${colors.bubbleGum};
    }
  }
`
StyledButton.displayName = 'StyledButton'

type Props = {
  onClick: MouseEventHandler,
  children: string,
  className: string,
  disabled: boolean
}

export default function Button ({ children, onClick, className, disabled }: Props) {
  return (
    <StyledButton disabled={disabled} className={className} onClick={onClick}>{children}</StyledButton>
  )
}
