import React from 'react'
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
    background: ${colors.BubbleGum};
    border: none;
    color: ${colors.white};
    &:disabled{
      background: ${colors.BubbleGum};
    }
    &:active, &:focus {
      background: ${colors.BubbleGum};
    }
  }
`
StyledButton.displayName = 'StyledButton'

export default function Button ({ children, onClick, className, disabled }) {
  return (
    <StyledButton disabled={disabled} className={className} onClick={onClick}>{children}</StyledButton>
  )
}
