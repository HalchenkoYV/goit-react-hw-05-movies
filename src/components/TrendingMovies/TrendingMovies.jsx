import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Link, CardWrapper, ProductName } from "./TrendingMovies.styled";
import useDataApi from '../hooks/useDataApi ';

export const TrendingMovies = () => {
    const [{ dataOnPages, isLoading, isError, loadMore, curPage }, setTargeta, setDataOnPages,] = useDataApi();
    

    // useEffect(() => {
    //     // console.log(dataOnPages)
    // },[dataOnPages]);



    
  return (
      <Container>
          
          <p>Additional Information</p>
            {/* <Cast />
              <Reviews/> */}
          <ul>
          {dataOnPages.map(({ title, id, name }) => {
              return (
                
                  <CardWrapper key={id}>
                        <Link to={`${id}`}>
                            <ProductName>{title?title:name}</ProductName>
                        </Link>
                  </CardWrapper>
                )
          })};
              </ul>
      
    </Container>
  );
};