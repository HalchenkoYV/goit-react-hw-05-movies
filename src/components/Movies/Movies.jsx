import { useSearchParams,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchBox } from '../SearchBox/SearchBox';
import useDataApi from '../hooks/useDataApi ';
import {Link, Container, CardWrapper, ProductName,Span,Img,MoreInformation} from "../TrendingMovies/TrendingMovies.styled";
// import { SearchBox } from "../components/SearchBox";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [{ dataOnPages }, setTarget,setDataOnPages] = useDataApi();
  const location = useLocation();
  
  const  handleSubmit = evt => {
    evt.preventDefault();
    setQuery(evt.currentTarget.query.value);
    // setSearchParams({ query });
    // evt.currentTarget.reset();
  };

  useEffect(() => {
    if (!query) { return; };
    setTarget(query);
    setSearchParams({ query })
    setDataOnPages([]);
  }, [query, setDataOnPages, setSearchParams, setTarget]);
    
  return (
    <Container>
      <SearchBox handleSubmit={handleSubmit} />
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