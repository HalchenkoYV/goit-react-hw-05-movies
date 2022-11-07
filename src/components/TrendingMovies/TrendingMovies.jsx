import { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "./TrendingMovies.styled";
import useDataApi from '../hooks/useDataApi ';

export const TrendingMovies = () => {
    const [{ dataOnPages}, setTargeta,] = useDataApi();
    const location = useLocation();

    useEffect(() => {
      setTargeta('trendforrequest')
    },[dataOnPages, setTargeta]);



    
  return (
      <Container>
          
          <p>Trending movies</p>
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