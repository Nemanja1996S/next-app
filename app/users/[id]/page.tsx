import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: number }
}
const UserDetails = async ({ params }: Props) => {
  const {id} = await params
  if (id > 10) notFound();
  return (
    <div>UserDetails {id}</div>
  )
}

export default UserDetails