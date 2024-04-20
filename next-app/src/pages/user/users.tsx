import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useUsers } from "../useUser";

const Title = styled.h1`
  font-size: 50px;
  color: white;
  background-color: green;
  text-align: left;
`;

const Users = () => {
  const { data, error, isLoading } = useUsers();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { result: users } = data;

  return (
    <>
      <Title>Users</Title>
      {users.map((user) => (
        <Link href={`/user/edit/${user.id}`} key={user.id}>
          <li key={user.id}>
            {" "}
            {user.id}| {user.name}
          </li>
        </Link>
      ))}
    </>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from jsonplaceholder API
//   const response = await fetch(`${process.env.PATH_URL_BACKEND}/users`);

//   const users = await response.json();

//   return {
//     props: {
//       users,
//     },
//   };
// }

export default Users;
