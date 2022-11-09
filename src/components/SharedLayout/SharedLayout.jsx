import { Outlet } from "react-router-dom";

import { Container, Header, Logo, Link,JustLink } from "./SharedLayout.styled";


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
            </span>{" "}
            <JustLink to="/" end>MoviesDB</JustLink>
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};