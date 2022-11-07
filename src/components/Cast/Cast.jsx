import { useParams } from "react-router-dom";
import useDataApi from '../hooks/useDataApi ';

export const Cast = () => {
    const { id } = useParams();
    const [{ dataOnPages }] = useDataApi('castforrequest',id);


    if (dataOnPages.length===0) {
        return;
    }

  return (
      <section>
          {dataOnPages.cast.slice(0, 3).map(({character, profile_path, original_name, id}) => {
              return (
                <li key={id}>
                    <img width={160} src={`https://www.themoviedb.org/t/p/original${profile_path}`} alt="actor" />
                    <p>{original_name}</p>
                    <p>Character {character}</p>
                </li>)
          })}
    </section>
  );
};