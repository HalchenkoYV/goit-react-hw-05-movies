import { useSearchParams,Link,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchBox } from '../SearchBox/SearchBox';
import useDataApi from '../hooks/useDataApi ';
import { Container, CardWrapper, ProductName } from "../TrendingMovies/TrendingMovies.styled";
// import { SearchBox } from "../components/SearchBox";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [{ dataOnPages }, setTarget,setDataOnPages] = useDataApi();
  const location = useLocation();
  
  const  handleSubmit = evt => {
    evt.preventDefault();
    setQuery(evt.currentTarget.query.value);
    setSearchParams({ query });
    evt.currentTarget.reset();
    setDataOnPages([]);
  };

  useEffect(() => {
    if (!query) { return; };
    setTarget(query);
  }, [query, setTarget]);
    
  return (
    <Container>
      <SearchBox handleSubmit={handleSubmit} />
      <ul>
       {dataOnPages.map(({ title, id, name }) => {
            return (
                <CardWrapper key={id}>
                      <Link to={`/movies/${id}`} state={{ from: location }}>
                          <ProductName>{title?title:name}</ProductName>
                      </Link>
                </CardWrapper>
              )
        })}
      </ul>
    </Container>
  );
};