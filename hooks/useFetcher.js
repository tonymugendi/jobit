import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

const useFetcher = (endPoint, queryParams) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      'X-RapidAPI-Key': '4e1b942659msh27ea84f7c4c5365p121c16jsn46d118813098',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...queryParams }
  };


  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)

    } catch (error) {
      setError(error);
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    fetchData()
  }, [])


  const refetch = () => fetchData();

  return { data, isLoading, error, refetch };
}

export default useFetcher