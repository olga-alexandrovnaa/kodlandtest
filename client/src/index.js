import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Client from "./components/client"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.getProducts();
  }

  async getProducts() {
    return fetch(
      'http://localhost:7070/api/products',
      {
        method: 'GET',
        headers: { 'Content-Type': 'Application/JSON' },
      },
    ).then((res) => res.json())
    .then((products) => this.setState({ ...this.state, products }));
  }

  onProductsHandler = async () => {
    const products = await this.getProducts();
    if (!products) return;
    //for(let i=0; i<products.lenght; i++){
      //console.log(`Name: ${products[i].name}`);
    //}
    this.setState({ ...this.state, products });
  };



  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Client products={this.state.products} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("react-root"));
export default App;

