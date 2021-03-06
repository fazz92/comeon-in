import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@comeonin/design-system'

export const Root = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px'
})

export const Center = styled('div', {
  flexGrow: '1',
  maxWidth: '390px'
})

export const ButtonWrapper = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizing.scale800,
}))

export const FooterLink = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizing.scale600,
  ...$theme.typography.font350
}))

export const StyledLink = styled(Link, ({ $theme }) => ({
  textDecoration: 'underline'
}))

export const FlexWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const FlexItem1 = styled('div', {
  width: '30%'
})

export const FlexItem2 = styled('div', {
  width: '65%'
})
