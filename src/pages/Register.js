import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { signup } from '../actions/auth'

const initialState = {
  name: '',
  email: '',
  password: '',
}

function Register() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(signup(form, history))
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className='d-flex justify-content-center'>
      <div className='w-25 p-3'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='Name'
              placeholder='Enter Name'
              name='name'
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={handleChange}
              required
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button variant='primary' type='submit'>
              Register Now
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register
