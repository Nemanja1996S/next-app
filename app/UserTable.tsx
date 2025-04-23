import Link from 'next/link';
import React from 'react'

interface User {
    id: number,
    name: string,
    email: string
}

// interface Props {
//   name: boolean,
//   email: boolean
// }

interface Props {
  sortOrder: string
}

const UserTable = async ({sortOrder} : Props) => { 
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users'
    // { cache: 'no-store' }
  );
  const users: User[] = await res.json()

  return (
    <table className='table table-zebra'>
      <thead>
        <tr>
          <th><Link href='users?sortOrder=name'>Name</Link></th>
          <th><Link href='users?sortOrder=email'>Email</Link></th>
        </tr>
      </thead>
      <tbody>
        { sortOrder != 'email' ? users.sort((userA: User, userB: User) => userA.name.localeCompare(userB.name)).map(user =>
           <tr key={user.id}>
              <td >{user.name}</td>
              <td >{user.email}</td>
           </tr>)
           :
           users.sort((userA: User, userB: User) => userA.email.localeCompare(userB.email)).map(user =>
            <tr key={user.id}>
               <td >{user.name}</td>
               <td >{user.email}</td>
            </tr>)}
      </tbody>
    </table>
  )
}

export default UserTable