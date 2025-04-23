import React, { Suspense } from 'react'
import UserTable from '../UserTable'
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({searchParams}: Props) => {
  const {sortOrder} = await searchParams;
  return (
    <>
    <h1>UsersPage</h1>
    <Link href='/users/new' className="btn">Create a user</Link>
    <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder} />
    </Suspense>
    </>
  )
}
export default UsersPage

