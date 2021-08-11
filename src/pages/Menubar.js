import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MSG_CLOSE } from '../constants/actionTypes'

import { Navbar, Container, Nav } from 'react-bootstrap'
import Message from './Message'
import { getVerify } from '../actions/user'
import { signout } from '../actions/auth'

function Menubar() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { sessionData } = useSelector((state) => state.user)
  const { message, isModalOpen } = useSelector((state) => state.auth)

  const location = useLocation()
  useEffect(() => {
    dispatch(getVerify())
  }, [location])

  const handleSelect = (eventKey) => {
    history.push(eventKey)
  }

  const closeModal = () => {
    dispatch({ type: MSG_CLOSE })
  }

  const logout = () => {
    dispatch(signout())
  }

  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <i className='fas fa-drumstick-bite' styles='font-size:36px'></i>
            &nbsp; Meat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto' onSelect={handleSelect}>
              <Nav.Link eventKey='/home'>
                <i className='fas fa-home' styles='font-size:36px'></i>
                &nbsp; Home
              </Nav.Link>
              <Nav.Link eventKey='/secret'>
                <i
                  className='fas fa-skull-crossbones'
                  styles='font-size:36px'
                ></i>
                &nbsp; Secret
              </Nav.Link>
            </Nav>
            <Nav onSelect={handleSelect}>
              <Nav.Link eventKey='/register'>
                <i className='far fa-address-card' styles='font-size:36px'></i>
                &nbsp; Register
              </Nav.Link>

              {sessionData.name ? (
                <Nav.Link onClick={() => logout()}>
                  <i className='fas fa-user-alt' styles='font-size:36px'></i>
                  &nbsp; Log-out
                </Nav.Link>
              ) : (
                <Nav.Link eventKey='/login'>
                  <i className='fas fa-user-alt' styles='font-size:36px'></i>
                  &nbsp; Log-in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isModalOpen && (
        <Message closeModal={closeModal} modalContent={message} />
      )}
    </div>
  )
}

export default Menubar
