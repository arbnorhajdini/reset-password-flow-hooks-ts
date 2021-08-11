import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { breakpoints } from '../theme/breakpoints'
import Image from '../assets/images/yoga-1-033-copy@2x.png'

const StyledPageWrapper = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
`
StyledPageWrapper.displayName = 'StyledPageWrapper'

const StyledContent = styled.div`
  background-color: ${colors.white};
  opacity: 0.9;
  position: absolute;
  bottom: 0px;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.smallMax}) {
    padding-bottom: 40px;
  }
`
StyledContent.displayName = 'StyledContent'

export default function WrapperComponent ({ children }) {
  return (
    <StyledPageWrapper>
      <StyledContent className='text-center'>
        {children}
      </StyledContent>
    </StyledPageWrapper>
  )
}
