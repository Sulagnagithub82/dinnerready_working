import axios from 'axios';

const baseUrl = 'api/blog/'

export default {
  // postMessage(url = baseUrl + 'postmessages/')
  postMessage(url = baseUrl )

  {
    return{
      fetchAll:()=> axios.get(url),
      fetchById : id => axios.get(url+id),
      create : newEntry => axios.post(url, newEntry),
      update : (id,updatedEntry) => axios.put(url+id,updatedEntry),
      delete : id => axios.delete(url+id)

    }
  }
}