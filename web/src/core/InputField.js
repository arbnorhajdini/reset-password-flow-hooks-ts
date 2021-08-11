import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { breakpoints } from '../theme/breakpoints'

const StyledInputField = styled.input`
  &:focus {
    border-color: ${colors.lightTeal};
    outline: none;
  }
  padding: 10px 20px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: ${colors.paleTeal};
  border-radius: 0px;
  @media only screen and (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`
StyledInputField.displayName = 'StyledInputField'

export default function InputField ({ children, onChange, className, type, id }) {
  return (
    <div className="form-group">
      <div className="col-lg-4 m-auto">
        <StyledInputField className={className} onChange={onChange} type={type} id={id} placeholder={children} />
      </div>
    </div>
  )
}
