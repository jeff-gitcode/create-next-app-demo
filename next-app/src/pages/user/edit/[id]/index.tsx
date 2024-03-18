"use client"

import React from 'react'
import useSWR from 'swr';
import { fetcher } from '../../../fetcher';
import { useRouter } from 'next/router';

export default function Page() {

  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data, error, isLoading } = useSWR<any>(`/api/hello/`, fetcher);
  // const { data, error, isLoading } = useSWR<any>(`/api/user/1`, fetcher);
  console.log(data);  
  return (
    <div className="w-full flex flex-col text-4xl justify-center my-0 mx-auto bg-red-300  ">
      <h1>
        {' '}
        <span>Name: </span>
        {/* {user.name} */}
      </h1>
      <p>
        {/* <span>Email:</span> {user.email} */}
      </p>
    </div>
  )

}

// export async function getServerSideProps({ params }) {
//   debugger;
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

