import { useParams } from "react-router-dom";
import useDataApi from '../hooks/useDataApi ';
import styled from "styled-components";

const Div = styled('div')`
  display:flex;
	padding:10px;
	color:white;
  list-style: none;
  flex-direction: row;
  justify-content:space-between;
  align-items: center ;

`;
const Li = styled('li')`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center ;
width:200px;
`;

const Img = styled('img')`
border-radius:10px;
`;

export const Cast = () => {
    const { id } = useParams();
    const [{ dataOnPages }] = useDataApi('castforrequest',id);


    if (dataOnPages.length===0) {
        return;
    }

  return (
      <Div>
          {dataOnPages.cast.slice(0, 3).map(({character, profile_path, original_name, id}) => {
              return (
                <Li key={id}>
                    <Img width={160} src={`https://www.themoviedb.org/t/p/original${profile_path}`} alt="actor" />
                    <p>{original_name}</p>
                    <p>Character {character}</p>
                </Li>)
          })}
    </Div>
  );
};