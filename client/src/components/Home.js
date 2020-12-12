import React from 'react'
import { StyledALink, AvailableOn } from './elements'
import * as typography from '../style-guide/typography'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const GreenScquare = styled.div`
  width: 0;
  height: 0;
  border-top: 100vw solid #08c6b2;
  border-right: 100vh solid transparent;
  @media (max-width: 650px) {
    border-top: 130vw solid #08c6b2;
  }
  @media (max-width: 940px) {
    border-top: 90vw solid #08c6b2;
    border-right: 110vh solid transparent;
  }
  @media (min-width: 1000px) {
    border-top: 80vw solid #08c6b2;
    border-right: 120vh solid transparent;
  }
`
const OverLayer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UpDown = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    // height: 50%;
    justify-content: center;
    align-items: flex-start;
  }
`
const EmptyBox = styled.div`
  width: 20vw;
  height: 10vh;
  @media (max-width: 650px) {
    display: none;
  }
`
const LogoContainer = styled.div`
  width: 50%;
  min-width: 300px;
  height: 15vh;
  min-height: 150px;
  background-image: url('logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const Logo = styled.div`
  min-width: 300px;
  height: 15vh;
  min-height: 150px;
  background-image: url('logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`
const ExplanatoryText = styled.div`
  min-width: 300px;
  // height: 15vh;
  // min-height: 150px;
  // background: yellow;
  display: flex;
  justify-content: center;
`
const LinkToDownload = styled.div`
  width: 50%;
  min-width: 300px;
  min-height: 120px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  @media (max-width: 450px) {
    height: 100%;
    // background: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Screenshots = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('Screenshots.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 650px) {
    background-size: cover;
  }
`
const SignatureContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`

function About() {
  return (
    <>
      <Container>
        <GreenScquare></GreenScquare>
        <OverLayer>
          <UpDown>
            <LogoContainer>
              <Logo></Logo>
              <ExplanatoryText>
                <typography.H2>
                  Meet people in your area and play!
                </typography.H2>
              </ExplanatoryText>
            </LogoContainer>
            <EmptyBox />
          </UpDown>
          <UpDown>
            <EmptyBox />
            <LinkToDownload>
              <typography.H1>Available on</typography.H1>
              <a
                href='https://play.google.com/store/apps/details?id=com.patrinoua.PingPongBuddies'
                target='_blank'
              >
                <AvailableOn />
              </a>
            </LinkToDownload>
          </UpDown>
        </OverLayer>
      </Container>
      <Screenshots />
      <SignatureContainer>
        <typography.H3>
          Project by{' '}
          <StyledALink href='https://angelikipatrinou.com' target='_blank'>
            Angeliki Patrinou
          </StyledALink>
          , 2020
        </typography.H3>
      </SignatureContainer>
    </>
  )
}

export default About