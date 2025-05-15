import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/LoginScreen'
import Register from './screens/RegisterScreen'
import Products from './screens/prodDetailScreen'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/> } />
        <Route path='/login/' element={<Login/>} />
        <Route path='/register/' element={<Register/>} />
        <Route path='/products/' element={<Products/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
