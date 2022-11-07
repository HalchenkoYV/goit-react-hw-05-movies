import { useParams } from "react-router-dom";
import useDataApi from '../hooks/useDataApi ';

export const Reviews = () => {
    const { id } = useParams();
    const [{ dataOnPages }] = useDataApi('reviewsforrequest',id);

    if (dataOnPages.length===0) {
        return;
    }
    if (dataOnPages.results.length === 0) {
                  return <p>There are no reviews</p>
              }
  return (
      <section>
           {dataOnPages.results.length === 0 ? <p>There are no reviews</p> :

                  dataOnPages.results.map(({ author, content, id }) => {
                      return (
                          <li key={id}>
                              <h4>Author: {author}</h4>
                              <p>Character: {content}</p>
                          </li>)
                  })
  
            }
    </section>
  );
};
