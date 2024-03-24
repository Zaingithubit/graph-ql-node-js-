
import './App.css'
import {ApolloClient,ApolloProvider,InMemoryCache} from "@apollo/client"
import DisplayData from './components/DisplayData'
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri : "http://localhost:4000/graphql"
  })

  return (
    <ApolloProvider client={client}>
      <div>
     <h1>...............List of Users ...........</h1> 
      <DisplayData></DisplayData>
    </div>
    </ApolloProvider>
  )
}

export default App
