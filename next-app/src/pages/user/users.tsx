import Link from 'next/link';
import React from 'react';

const Users = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <Link
          href={`/user/${user.id}`}
          key={user.id}>
          <li key={user.id}>        {user.id}
            |          {user.name}</li>
        </Link>))}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from jsonplaceholder API 
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
export default Users;