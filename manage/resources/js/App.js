import React, { Component } from 'react';
import Web from './routes/web'


class App extends Component {

  // constructor() {
  //     super();

  //     this.state = {
  //         users: []
  //     }
  // }

  // async componentDidMount() {
  //   await fetch("http://localhost:8000/admin/api/products")
  //       .then(res => res.json())
  //       .then((data) => {
  //           this.setState({ users: data })
  //       })
  //       .catch(console.log)
  // }

  // renderUsers = () => {
  //     let users = this.state.users.map((data, index) =>
  //         <tr key={data.id}>
  //           <td>{data.id}</td>
  //           <td>{data.name}</td>
  //           <td>{data.email}</td>
  //           <td>{data.website}</td>
  //         </tr>
  //     );

  //     return users;
  // }

  render() {
    return (
      <div className="App">
        <Web></Web>
      </div>
    );
  }
}

export default App;
