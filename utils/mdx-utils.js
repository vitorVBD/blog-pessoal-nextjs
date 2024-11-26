import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const { data, error } = await api.get(`/post?id=eq.${id}`);
  
    try {
      if (error) {
        console.error('Erro ao buscar o post:', error);
        return null;
      }
  
      if (data && data.length > 0) {
        return data[0];
      } else {
        return null;
      }
    } catch (error) {
      console.error('Erro na requisição à API:', error);
      return null;
    }
  };
  