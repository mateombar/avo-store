import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Container, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const QuestionPage = () => {

  const [randomQuestion, setRandomQuestion] = useState(Math.random() < 0.5 ? 'Yes' : 'No')

  const handleClick = () => {
    setRandomQuestion(Math.random() < 0.5 ? 'Yes' : 'No')
  }

  return (
    <Layout>
      <Container text textAlign='center'>
        <Header as='h1' textAlign='center'>
          Should I eat an avocado?
        </Header>
        <h1>{randomQuestion}</h1>
        <Button color='green' onClick={handleClick}>Try it
          again</Button>
        <Link href='/' passHref>
          <Button basic color='grey'>Back to home</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default QuestionPage