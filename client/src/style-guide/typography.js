import styled from 'styled-components'
import { colors } from './colors'

export const H1 = styled.div`
  font-family: 'Manrope', 'Helvetica Neue', Roboto, 'Segoe WP', 'Segoe UI';
  font-weight: 500;
  font-size: 34px;
  line-height: 34px;
  color: ${colors.almostBlack};
  font-style: normal;
  margin: 20px 0;
  // letter-spacing: 0.05em;
`
export const H2 = styled.div`
  font-family: 'Manrope', 'Helvetica Neue', Roboto, 'Segoe WP', 'Segoe UI';
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  margin: 20px 0;
  color: ${colors.almostBlack};
`
export const H3 = styled.div`
  font-family: 'Manrope', 'Helvetica Neue', Roboto, 'Segoe WP', 'Segoe UI';
  font-weight: 600;
  font-size: 16px;
  color: ${({ color }) => color || colors.almostBlack};
`
export const Regular = styled.div`
  font-family: 'Manrope', 'Helvetica Neue', Roboto, 'Segoe WP', 'Segoe UI';
  font-weight: 400;
  font-size: 1.2em;
  // line-height: 24px;
  color: ${colors.almostBlack};
`

export const Prompt = styled.div`
  font-family: 'Manrope', 'Helvetica Neue', Roboto, 'Segoe WP', 'Segoe UI';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.almostBlack};
  margin: 30px 10px;
  max-width: 700px;
  @media (max-width: 450px) {
    font-size: 16px;
    margin: 10px 0;
  }
`
export const Subtitle = styled.div`
  font-family: 'Manrope', 'Helvetica Neue', Roboto, 'Segoe WP', 'Segoe UI';
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${({ color }) => color || colors.mediumGray};
`
