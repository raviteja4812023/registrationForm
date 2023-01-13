import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import UsersList from './Components/UsersList'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={UsersList} />
  </Switch>
)

export default App
