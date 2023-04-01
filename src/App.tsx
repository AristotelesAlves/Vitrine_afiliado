import Home from "./pages/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./Rotas";

function App(){
  return(
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Rotas/>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}
export default App;