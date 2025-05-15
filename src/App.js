import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/LoginScreen'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/> } />
        <Route path='/login/' element={<Login/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
