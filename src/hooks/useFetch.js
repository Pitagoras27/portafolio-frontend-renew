import { useEffect, useState } from "react";
import axiosFetch from "../api/axiosFetch";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    const getDataRequest = async () => {
      try {
        const { data } = await axiosFetch.get('/quotes');
        setLoading(false);
        setData(data);

      } catch (error) {
        
        setLoading(false);
        setError('An error ocurr')
        console.error(error);

      }
    }

    getDataRequest();

  }, []);

  return {
    loading,
    data,
    error
  }  
}