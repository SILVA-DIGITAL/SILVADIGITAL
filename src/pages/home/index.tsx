import React, { FC } from 'react'
import { Container, Col } from 'react-bootstrap'
import { StyledRow } from './styles'

const Home: FC = () => (
  <Container id="page-container">
    <StyledRow className="justify-content-md-center">
      <Col md="auto"></Col>
    </StyledRow>
  </Container>
)

export default Home
