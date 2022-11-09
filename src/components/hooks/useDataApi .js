import {  useState, useEffect, } from 'react';
import getPics from 'components/api-service(only-get)/api-service';


const  useDataApi = (forTarget='',forId='') => {
  const [target, setTarget] = useState(forTarget);
  const [curPage, setCurPage] = useState(1);
  const [dataOnPages, setDataOnPages] = useState([]);
  const [id, setId] = useState(forId);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);



  useEffect(() => {

      if (!target) {
            return;
    };
        const fetchData =  () => {
          setIsError(false);
          setIsLoading(true);
          setLoadMore(false);

          setTimeout(async () => {
             console.log('awaitt', `id${id}`,`target${target}`);
            try {
              if (target==='castforrequest') {
                 const { data} = await getPics.fetchPics(target, id);
                setDataOnPages(data);
                return
              };
              if (target==='reviewsforrequest') {
                 const { data} = await getPics.fetchPics(target, id);
                setDataOnPages(data);
                return
              };
              if (target==='trendforrequest') {
                  const { data:{ results, page, total_pages }} = await getPics.fetchPics(target,'',curPage);
                  setDataOnPages(prevData => [...prevData, ...results]);
                page >= total_pages ? setLoadMore(true) : setLoadMore(false);
                setIsLoading(false);
                return
              };
               if (target==='byId') {
                 const { data} = await getPics.fetchPics(target, id);
                 setDataOnPages(data);
                 return
              };
                if (target) {
                 const { data:{ results, page, total_pages }} = await getPics.fetchPics(target);
                 setDataOnPages(prevData => [...prevData, ...results]);
                  page >= total_pages ? setLoadMore(true) : setLoadMore(false);
                  
              };
             }
             catch (error) {setIsError(true);};
 
             setIsLoading(false);
          }, 350);
        };

        fetchData();
        
  }, [curPage, id, target]);

  return [{ dataOnPages, target, isLoading, isError,loadMore,curPage }, setTarget, setDataOnPages,setCurPage, setLoadMore, setId];
};

export default useDataApi;