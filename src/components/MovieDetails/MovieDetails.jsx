import { NavLink, useParams, Outlet ,useLocation} from "react-router-dom";
import { BackLink } from "../BackLink/BackLink";
import useDataApi from '../hooks/useDataApi ';
import styled from "styled-components";

  const Main = styled('main')`
      // width: 800px;
			// hight: 1000x;
  background: rgba(47, 48, 58, 0.4);
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${props => (props.bg ? props.bg : null)});
  background-repeat: repeat;
  background-position: left top;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 118px;
  // background-size: cover;
`;
const Img = styled('img')`
	// padding-left:5px;
	border-radius:20px;
`;
const Div = styled('div')`
	padding:10px;
	color:white;

`;
const Link = styled(NavLink)`
		color:tan;
	// list-style: auto;

&.active {
    color: purpul;
  };

`;



export const MovieDetails = () => {
    const { id } = useParams();
    const [{ dataOnPages }] = useDataApi('byId', id);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const { original_title, release_date, vote_average, overview, genres, poster_path,backdrop_path  } = dataOnPages;
    


    if (dataOnPages.length===0) {
        return;
    }
    
  return (
      <Main bg={`https://www.themoviedb.org/t/p/original${backdrop_path}`}>
          <BackLink to={backLinkHref}>Back to movies</BackLink>
        <Div >
            <Img width={160} src={`https://www.themoviedb.org/t/p/original${poster_path}`} alt="" />
            <div>
                <div>
                    <h2>{original_title} ({new Date(release_date).getFullYear()})</h2>
                    <p>User Score: {Number(vote_average).toFixed(1)*10}%</p>
                </div>
                <div>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </div>
                <div>
                    <h3>Genres</h3>
                    <p>{genres.map((item, index,array) => array.length===index+1?<span key={item.id}>{item.name}</span>:<span key={item.id}>{item.name}, </span>)}</p>
                </div>
            </div>
        </Div>
        <Div>
              <p>  Additional information</p>
              <ul>
                  <li><Link to='cast'>Cast</Link></li>
                  <li><Link to='reviews'>Reviews</Link></li>
              </ul>
              <Outlet />
        </Div>
          

    </Main>
  );
};