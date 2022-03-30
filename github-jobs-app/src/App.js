import React, {useState} from 'react'
import useFetchJobs from "./useFetchJobs"
import { Container } from 'react-bootstrap'

function App() {
  
  const {jobs, loading, error} = useFetchJobs()
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  return (
    <Container>
      { loading && <h1>Loading...</h1> }
      { error && <h1> Error! Try Refreshing.</h1> }
      <h1> { jobs.lenght } </h1>
    </Container>
  )
}

export default App;
