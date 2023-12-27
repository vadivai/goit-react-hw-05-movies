import { Outlet } from 'react-router-dom';
import { Container, NavLinkStyled, NavList } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavList>
            <li>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </li>
          </NavList>
        </nav>
      </header>
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </Container>
  );
};

// import { Layout } from './Layout';
// import { NavLink, Outlet } from 'react-router-dom';

// export const AppLayout = () => {
//   return (
//     <Layout>
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/create">Create</NavLink>
//             </li>
//             <li>
//               <NavLink to="/list">Quiz list</NavLink>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <Outlet />
//       </main>

//       <footer>FOOTER</footer>

//       <GlobalStyle />
//     </Layout>
//   );
// };
