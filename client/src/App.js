import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//importar components
import Header from './components/Layout/Header'
import Home from './components/Home'
import EnProgreso from './components/Helpers/EnProgreso.jsx'
import IngresarHomicidio from './components/Ingresar/Homicidio.jsx'
import IngresoIncendio from './components/Ingresar/IncendioBomb.jsx'

// ---* ---

const client = new ApolloClient({
  //configuro el puerto del server para acceder a los schemas,resolvers, conecciones a mongo ...
  uri: "http://localhost:4000/graphql",
  //hago algo de cache de apollo boost
  cache: new InMemoryCache({
    addTypename: false
  }),
  // Para manejar error apollo mandara a consola el problema
  onError:  ({ networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})

/// --------------
function App() {
  return (
    //El apollo provider contendra a todas las funciones de Apollo
    // querys, mutations ...
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>

              {/* <Route exact path="/clientes" component={Clientes} />
              <Route exact path="/clientes/editar/:id" component={EditarCliente} />
              <Route exact path="/clientes/nuevo" component={NuevoCliente} /> */}
              <Route exact path="/" component={Home} /> 
              <Route exact path="/ingresar-homicidio" component={IngresarHomicidio} /> 
              <Route exact path="/ingresar-incendio" component={IngresoIncendio} /> 

              {/* Helpers */}
              <Route exact path="/en-progreso" component={EnProgreso} /> 

            </Switch>  
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
