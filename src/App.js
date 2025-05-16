import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/LoginScreen'
import Register from './screens/RegisterScreen'
import Products from './screens/prodDetailScreen'
import Artisan from './screens/ArtisanScreen'
import AddProduct from './screens/AddProductScreen'
import Sales from './screens/SalesScreen'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/> } />
        <Route path='/login/' element={<Login/>} />
        <Route path='/register/' element={<Register/>} />
        <Route path='/products/' element={<Products/>} />
        <Route path='/artisan/' element={<Artisan/>} />
        <Route path='/addproduct/' element={<AddProduct/>} />
        <Route path='/sales/' element={<Sales/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
