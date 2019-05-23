import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'


export default function News() {

  const [results , setResult] = useState([])
  const [query, setQuery] = useState('reacthooks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const searchInputRef = useRef();

/*  useEffect(()=> {
    axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks').then(response=> {
      console.log(response.data);
      setResult(response.data.hits);
    })
  })*/

 /* useEffect( ()=> {
   getResults();
  },[query])*/

  useEffect( ()=> {
    getResults();
  },[])

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      console.log('test');
      setResult(response.data.hits);
    } catch (e) {
      setError(e)
    }

    setLoading(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getResults();

  }
  const handleClearSearch = () => {
    setQuery(" ");
    searchInputRef.current.focus()
  }


return (
  <div>
    <form onSubmit={handleSubmit}>
    <input
      type = "text"
      onChange={event=> setQuery(event.target.value)}
      value = {query}
      ref={searchInputRef}

    />
    <button type="submit" >Search</button>
      <button type="button"  onClick={handleClearSearch}>Clear</button>
    </form>
    {loading ? (
      <div> Loading result </div>
    ): (
      <ul>
        {results.map(result => (
          <li key = {result.objectID}>
            <a href ={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    )}
    {error && <div>{error.message}</div>}
  </div>
)
}
