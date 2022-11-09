import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Link, Container,H1, CardWrapper, ProductName,Span,Img,MoreInformation} from "./TrendingMovies.styled";
import useDataApi from '../hooks/useDataApi ';

export const TrendingMovies = () => {
    const [{ dataOnPages}, setTargeta,] = useDataApi();
    const location = useLocation();

    useEffect(() => {
      setTargeta('trendforrequest')
    },[dataOnPages, setTargeta]);
  console.log(dataOnPages);
    
  return (
      <Container>
          
          <H1>Trending movies</H1>
          <ul>
          {dataOnPages.map(({ title, id, name, poster_path,vote_average,release_date,overview}) => {
            return (
              <CardWrapper key={id}>
                <Link to={`/movies/${id}`} state={{ from: location } }>
                  <Img  src={`https://www.themoviedb.org/t/p/original${poster_path}`} alt="" />
                  <div>
                    <ProductName>Name: <Span>{title ? title : name}</Span></ProductName>
                    <MoreInformation>
                    <ProductName>Year: <Span>{String(new Date(release_date).getFullYear())}</Span></ProductName>
                    <ProductName>Raiting: <Span>{Number(vote_average).toFixed(1)*10}%</Span></ProductName>
                    <ProductName>Overview: {overview.slice(0,120)}...<Span>load more</Span></ProductName>
                  </MoreInformation>
                  </div>
                </Link>
              </CardWrapper>
            );
          })}
              </ul>
    </Container>
  );
};