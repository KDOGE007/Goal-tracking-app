import { Container } from 'reactstrap'
import './App.css'
import AppNavbar from './component/AppNavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
import GoalList from './component/goalList'
function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <Container>
        <h1>Go for Gold!</h1>
        <GoalList />
      </Container>
    </div>
  )
}

export default App
