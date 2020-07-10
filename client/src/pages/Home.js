// Import all of the dependencies
import React, { useState } from 'react'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import Form from '../components/Form'
import Book from '../components/Book'
import Footer from '../components/Footer'
import API from '../utils/API'
import { Col, Row, Container } from '../components/Grid'
import { List } from '../components/List'

// This is the Home Page
function Home () {
  // Use State hook for books, search and the message
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search For A Book To Begin!')

  // Make the API call to gett all the books
  // Use the method getBooks from the API module
  const getBooks = () => {
    API.getBooks(search)
      .then(res => setBooks(res.data))
      .catch(() => {
        setBooks([])
        setMessage('No New Books Found, Try a Different Query')
      })
  }

  // Handle Submit by making the API call to get all the books
  const handleFormSubmit = event => {
    event.preventDefault()
    getBooks()
  }

  // Event listener function to save the specific book
  const handleBookSave = id => {
    const book = books.find(book => book.id === id)

    // Use the method saveBook() from the API module
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => getBooks())
  }

  // JSX to render
  return (
    <Container>
      <Row>
        <Col size='md-12'>
          <Jumbotron>
            <h1 className='text-center'>
              <strong>(React) Google Books Search</strong>
            </h1>
            <h2 className='text-center'>
              Search for and Save Books of Interest.
            </h2>
          </Jumbotron>
        </Col>
        <Col size='md-12'>
          <Card title='Book Search' icon='far fa-book'>
            <Form
              handleInputChange={e => setSearch(e.target.value)}
              handleFormSubmit={handleFormSubmit}
              search={search}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size='md-12'>
          <Card title='Results'>
            {books.length ? (
              <List>
                {books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(', ')}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick={() => handleBookSave(book.id)}
                        className='btn btn-primary ml-2'
                      >
                        Save
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <h2 className='text-center'>{message}</h2>
            )}
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

export default Home
