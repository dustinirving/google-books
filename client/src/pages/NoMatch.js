// Import all of the dependencies
import React from 'react'
import { Col, Row, Container } from '../components/Grid'
import Jumbotron from '../components/Jumbotron'

// Render this page if none of the other routes match
// NoMatch Page
function NoMatch () {
  return (
    <Container fluid>
      <Row>
        <Col size='md-12'>
          <Jumbotron>
            <h1 className='text-center'>404 Page Not Found</h1>
            <h1 className='text-center'>
              <span role='img' aria-label='Face With Rolling Eyes Emoji'>
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default NoMatch
