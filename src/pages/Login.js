import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { signin } from '../actions/auth'

const initialState = {
  email: '',
  password: '',
}

function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(signin(form, history))
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className='d-flex justify-content-center'>
      <div className='w-25 p-3'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={handleChange}
              required
            />
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
          <div className='d-flex justify-content-end'>
            <Button variant='primary' type='submit'>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
