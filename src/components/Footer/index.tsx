import React from 'react'
import {
  AboutContent,
  AboutSection,
  AboutText,
  Container,
  FacebookSection,
  InstagramSection,
  SocialMediaSection,
  StoreAdress,
  TwitterSection,
} from 'styles/components/Footer'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
const Footer = () => {
  return (
    <Container>
      <AboutSection>
        <AboutText>About us</AboutText>
        <AboutContent>
          PETSTORE started its operation in 2020 with a mission to feed animal lovers needs. Our dedication to customers
          pets is why we hand pick and research every item stocked on our shelves. We are the no1 online pet store to be
          launched during the covid lockdown and since then we never failed in offering the most appropriate advice and
          quality home delivery service.
        </AboutContent>
      </AboutSection>
      <SocialMediaSection>
        <FacebookSection>
          <FacebookIcon />
        </FacebookSection>
        <TwitterSection>
          <TwitterIcon />
        </TwitterSection>
        <InstagramSection>
          <InstagramIcon />
        </InstagramSection>
      </SocialMediaSection>
      <StoreAdress>
        <strong> Contact us: </strong> petatore@gmail.com
      </StoreAdress>
    </Container>
  )
}

export default Footer
