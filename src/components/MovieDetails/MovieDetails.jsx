import { Link, useParams, Outlet ,useLocation} from "react-router-dom";
import { BackLink } from "../BackLink/BackLink";
import useDataApi from '../hooks/useDataApi ';

export const MovieDetails = () => {
    const { id } = useParams();
    const [{ dataOnPages }] = useDataApi('byId', id);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const { original_title, release_date, vote_average, overview, genres, poster_path } = dataOnPages;
    

    if (dataOnPages.length===0) {
        return;
    }
    
  return (
      <main>
          <BackLink to={backLinkHref}>Back to products</BackLink>
        <div>
            <img width={160} src={`https://www.themoviedb.org/t/p/original${poster_path}`} alt="" />
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
        </div>
        <div>
              <p>Additional information</p>
              <ul>
                  <li><Link to='cast'>Cast</Link></li>
                  <li><Link to='reviews'>Reviews</Link></li>
              </ul>
              <Outlet />
        </div>
          

    </main>
  );
};