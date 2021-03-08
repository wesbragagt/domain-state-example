import React, { useCallback, useEffect } from 'react';
import './App.css';

interface BaseEntity{
  id: string | null
}

interface Client extends BaseEntity{
  firstName: string
  lastName: string
  email: string
  active: boolean
}

interface ClientState{
  clients: Client[]
  loading: boolean
  error?: Error
}

const initialState: ClientState = {
  clients: [],
  loading: true
}

function App() {
  const [state, setState] = React.useState(initialState)
  
  const handleCallingInitState = useCallback(() => {
    setState(state => ({...state, loading: true}))
    setTimeout(()=>{
      const clients: Client[] = [
        {id: 'lkj1lk2j', firstName: 'john', lastName: 'doe', active: true, email: 'john@doe.com'}
      ]
      setState(state => ({...state, loading: false, clients}))
    }, 1000)
  }, [])
  
  useEffect(()=>{
    handleCallingInitState()
  }, [handleCallingInitState])

  return (
    <div className="App">
      <h1>Domain State Example</h1>
      <pre>
        {
          state.loading ? 'Loading' : JSON.stringify({state}, undefined, 2)
        }
      </pre>
    </div>
  );
}

export default App;
