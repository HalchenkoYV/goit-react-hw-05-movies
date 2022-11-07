import axios from "axios";



function fetchPics(text='',id='', page=1, ) {
  // axios.defaults.baseURL = "https://pixabay.com/api/";
  // let instance = axios.create();
    // instance.defaults = ({
    //   method: 'get',
    //   baseURL: 'https://pixabay.com',
    //   timeout: 3000
    // });
  
  
                                                             //1)variant pixbay
  // const params = {
  //           q: text,
  //           page: page,
  //           key: '21539739-826ad7071a5325d71a1052891',
  //           image_type: 'photo',
  //           orientation: 'horizontal',
  //           per_page: 12,
  // } 

                                                              //2)variant movieDB
                                                              
                                                              
  const apiKey = '945c892eb6b23a8f9dda97b263841f5e';
  const purposeOfRequest = {
    trendingRequest: `trending/all/day?api_key=${apiKey}`,
    targetRequest: `search/movie?api_key=${apiKey}&query=${text}`,
    idRequest: `movie/${id}?api_key=${apiKey}&language=en-US`,
    castRequest: `movie/${id}/credits?api_key=${apiKey}&language=en-US`,
    reviewsRequest:`movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=${page}`
  };
  const { trendingRequest, targetRequest, idRequest,castRequest,reviewsRequest } = purposeOfRequest;

  const chosenRequest = () => {
    if (id&&text==='reviewsforrequest') {
      return reviewsRequest;
    };
    if (id&&text==='castforrequest') {
      return castRequest;
    };
    if (text==='byId') {
      return idRequest;
    };
    if(text==='trendforrequest') {
      return trendingRequest;
    };
    if (text) {
      return targetRequest;
    };  
  };
  console.log(text, id, chosenRequest());

  
  return axios.get(`https://api.themoviedb.org/3/${chosenRequest()}`);
        
  };

  const api = {
    fetchPics,
  };

export default api;





