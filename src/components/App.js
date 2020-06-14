import React, {Component} from 'react';
import App from '../App';

class App extends Component{


constructor() {
    super();

    this.state = {
      accountBalance: 14568.27
    }}
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
  return (
    <Router>
      <div>
      <Route exact path="/login" render={LogInComponent}/>

      </div>
    </Router>
  );
export default App;
