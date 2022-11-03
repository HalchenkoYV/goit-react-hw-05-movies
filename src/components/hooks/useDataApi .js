import {  useState, useEffect, useRef, } from 'react';
import getPics from 'components/api-service(only-get)/api-service';


const  useDataApi = () => {
  const [target, setTargeta] = useState('');
  const [curPage, setCurPage] = useState(1);
  const [dataOnPages, setDataOnPages] = useState([]);
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const once = useRef(false);

 
    useEffect(() => {
      if (once.current) {
        
            return;
      };
      once.current = true;
      

        const fetchData =  () => {
          setIsError(false);
          setIsLoading(true);
          setLoadMore(false);
          // console.log(0)
          setTimeout(async() => {
            try {
              // console.log(0)
               if (id) {
                 const { data} = await getPics.fetchPics('', id);
                 setDataOnPages(data);
              };
              if (!target) {
                console.log(1)
                  const { data:{ results, page, total_pages }} = await getPics.fetchPics(target,'',curPage);
                  setDataOnPages(prevData => [...prevData, ...results]);
                  page >= total_pages ? setLoadMore(true) : setLoadMore(false);
              };
             }
             catch (error) {setIsError(true);};
 
             setIsLoading(false);
          }, 1000);
        };

        fetchData();
        
  }, [curPage, id, target]);

  return [{ dataOnPages, isLoading, isError,loadMore,curPage }, setTargeta, setCurPage,setDataOnPages, setLoadMore, setId];
};

export default useDataApi;