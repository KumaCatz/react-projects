import { userContext } from '../../App';
import { useContext } from 'react';

function UserName() {
  const { userName, setUserName } = useContext(userContext)

  return (
    <>
      <h2>Hello {userName}</h2>
      <input type='text' onChange={(e) => setUserName(e.target.value)} placeholder='username...' />
    </>
  )
}

export default UserName