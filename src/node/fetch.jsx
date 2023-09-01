import axios from "axios"
import { useState } from "react"

const FetchNode = () => {
  const url = 'http://localhost:2500/users'
  const [users, setUsers] = useState([])

  async function handleGetUsers() {
    axios.get(url)
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      })
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
    </div>
  )
}

export default FetchNode