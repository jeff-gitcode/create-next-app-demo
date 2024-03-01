import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { GETLIST } from '../api/user/route';

const Title = styled.h1`
  font-size: 50px;
  color: white;
  background-color: green;
  text-align: left;
`;

const Users = ({ users }) => {
  return (
    <>
      <Title>Users</Title>
      {users.map((user) => (
        <Link
          href={`/user/${user.id}`}
          key={user.id}>
          <li key={user.id}>        {user.id}
            |          {user.name}</li>
        </Link>))}
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from jsonplaceholder API 
  const response = await fetch(`${process.env.PATH_URL_BACKEND}/users`);

  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
export default Users;