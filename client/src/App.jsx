import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState("Waiting for server...")

  useEffect(() => {
    fetch('http://127.0.0.1:8888/api/ping')
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(err => setData("Server is offline ❌"))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Spotify Subgenre Splitter</h1>
      <p>Server Status: <strong>{data}</strong></p>
    </div>
  )
}

export default App