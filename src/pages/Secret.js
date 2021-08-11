import React, { useEffect } from 'react'

import { getUsers } from '../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'

const Secret = () => {
  const dispatch = useDispatch()

  const { userData } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Secret
