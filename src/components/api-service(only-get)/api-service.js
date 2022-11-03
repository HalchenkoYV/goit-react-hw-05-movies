import axios from "axios";



function fetchPics(text='',id='', page=1) {
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
    trendingRequest: `trending//all/day?api_key=${apiKey}`,
    targetRequest: `search/movie?api_key=${apiKey}&query=${text}`,
    idRequest: `movie/${id}?api_key=${apiKey}&language=en-US`,
  };
  const { trendingRequest, targetRequest, idRequest } = purposeOfRequest;

  const request = () => {
    if (id) {
      return idRequest;
    }
    if (text) {
      return targetRequest;
    }
    else {
      return trendingRequest;
    }
  };
console.log(text,id)
  return axios.get(`https://api.themoviedb.org/3/${request()}`);
        
  };

  const api = {
    fetchPics,
  };

export default api;





