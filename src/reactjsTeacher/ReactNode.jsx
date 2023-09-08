import { useEffect, useState } from "react"
import { GET, POST } from "./utils/api";

/*
    1) on every error from our api, we will display alert message
    2) on error, we want to pop alert message AND show an error text on page
    3) on error, we DONT WANT alert ONLY error text.
*/


export const ReactNode = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        handleGetUsers();
    }, [])

    const handleGetUsers = async () => {
        const users = await GET('/users');
        if (!users) { return }
        console.log(users);

        setUsers(users);
    }

    const handleAddUser = async () => {
        const body = {
            name,
            age,
            email
        }
        const data = await POST('/users', body);
        if (!data) { return }

        const { id } = data;


        const newUser = {
            id,
            ...body
        }

        setUsers([...users, newUser]);
    }

    return (
        <div>
            <h1>ITC App</h1>

            <div>
                <input value={name} onChange={handleNameChange} placeholder="name" />
                <input value={age} onChange={handleAgeChange} placeholder="age" />
                <input value={email} onChange={handleEmailChange} placeholder="email" />
                <button onClick={handleAddUser}>Add</button>
            </div>

            <h2>Users list:</h2>
            {
                users.map(u => (
                    <h3 key={u.id}>{u.name}</h3>
                ))
            }
        </div>
    )
}