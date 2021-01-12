import React, { useState } from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import { v4 as uuidv4 } from 'uuid'

const GoalList = () => {
  const [goal, setGoal] = useState({
    goals: [
      {
        id: uuidv4(),
        title: 'Exercise',
        periodSpent: 0,
        timeCompleted: 0,
        tags: ['#important', '#doDaily'],
      },
      {
        id: uuidv4(),
        title: 'Study Code',
        periodSpent: 0,
        timeCompleted: 0,
        tags: ['#important', '#doDaily'],
      },
      {
        id: uuidv4(),
        title: 'Travel to other country',
        periodSpent: 0,
        timeCompleted: 0,
        tags: '',
      },
      {
        id: uuidv4(),
        title: 'Learn Klingon',
        periodSpent: 0,
        timeCompleted: 0,
        tags: ['#important', '#doWeekly'],
      },
    ],
  })
  const onSubmit = (e) => {
    e.preventDefault()
  }
  //**TODO** Add Goal to the state
  const addGoal = () => {
    console.log('clicked add')
    setGoal({
      goals: [
        {
          id: uuidv4(),
          title: 'Exercise',
          periodSpent: 0,
          timeCompleted: 0,
          tags: ['#important', '#doDaily'],
        },
      ],
    })
  }
  //**COMPLETED** Delete Goal
  const deleteGoal = (id) => {
    console.log('click delete')
    setGoal({
      goals: goal.goals.filter((item) => item.id !== id),
    })
  }
  //**TODO** Edit Goal
  const editGoal = () => {
    console.log('click edit')
  }
  //**TODO** start Time
  const trackTime = () => {
    console.log('click timer')
  }

  const { goals } = goal
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input type='text' placeholder='Search your goal'></Input>
        </FormGroup>
      </Form>
      <Button
        color='success'
        style={{ marginBottom: '1rem' }}
        block
        onClick={addGoal}
      >
        Add Goal
      </Button>
      <ListGroup>
        {goals.map(({ id, title, periodSpent, tags }) => (
          <ListGroupItem>
            <Button
              className='remove-btn'
              color='danger'
              size='sm'
              onClick={() => deleteGoal(id)}
            >
              &times;
            </Button>
            {`${title} || total time spent: ${periodSpent} `}
            {tags && (
              <ListGroup>
                <ListGroupItem>{tags.map((tag) => `${tag} `)}</ListGroupItem>
              </ListGroup>
            )}
            <Button
              block
              color='primary'
              style={{ marginTop: '0.5rem' }}
              onClick={trackTime}
            >
              Track
            </Button>
            <Button block color='warning' onClick={editGoal}>
              Edit
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  )
}

export default GoalList
