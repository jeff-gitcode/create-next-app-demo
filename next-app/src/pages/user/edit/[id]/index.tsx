"use client"

import React from 'react'
import useSWR from 'swr';
import { fetcher } from '../../../fetcher';
import { useRouter } from 'next/router';
import { useUser } from '../../../useUser';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const { data, error, isLoading } = useUser(id);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const { result } = data;

  return (
    <div className="w-full flex flex-col text-4xl justify-center my-0 mx-auto bg-red-300  ">
      <h1>
        {' '}
        <span>Name: </span>
        {result.name}
      </h1>
      <p>
        <span>Email:</span> {result.email}
      </p>
    </div>
  )
}

// export async function getServerSideProps({ params }) {
//   console.log(params);
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}`,
//   )
//   const user = await response.json()

//   return {
//     props: {
//       user,
//     },
//   }
// }

