import Link from 'next/link';
import styled from 'styled-components';

const NavLinks = styled.div`
  a {
    color: #0e0d0d;
    text-decoration: ;
    margin-right: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavLink = styled(Link)`
  color: #141313;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/user/users">Users</NavLink>
        <NavLink href="/user/post/page">Post</NavLink>
      </NavLinks>
      {/* <header
        className={`fixed w-full left-0 top-0 bg-blue-500 text-white py-6 px-10 flex items-center justify-between`}
      >
        <h1>Next Demo</h1>
        <ul className={'flex'}>
          <li>
            <Link
              href={'/'}
              className={
                'text-xs text-gray-200 hover:underline block ml-7 hover:text-white transition-all'
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/user/users'}
              className={
                'text-xs text-gray-200 hover:underline block ml-7 hover:text-white transition-all'
              }
            >
              User
            </Link>
          </li>
        </ul>
      </header> */}
    </>

  );
};
export default Header;