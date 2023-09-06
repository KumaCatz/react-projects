import axios from "axios"
import { useState } from "react"
import { GET } from "../utils/api"

const FetchNode = () => {
  const url = 'http://localhost:2500/users'
  const [users, setUsers] = useState([])
  const [value, setValue] = useState('')

  async function handleGetUsers() {
    const users = await GET('/users')
    console.log(users)
    
    setUsers(users)
  }

  const handleAddUser = async () => {
    const body = {
      name: value
    }
    const resp = await axios.post(url, body)
    setUsers([...users, resp])
  }

  return (
    <div>
      <button onClick={handleGetUsers}>fetch</button>
      { users.length > 0 ? users.map((user) => {
        return (
          <div>{ user.name }</div>
        )
      } )
      : null }
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAddUser}>post</button>
    </div>
  )
}

export default FetchNode