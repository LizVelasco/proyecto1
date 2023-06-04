import { useAuth0 } from '@auth0/auth0-react'
import { Route, Routes } from "react-router-dom";
// Slick-carrusel de generos de libros
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Boostrap para el banner
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Paginas dentro de la web
import Catego from './screens/Categorias';
import Colecci from './screens/Colecciones';
import Promo from './screens/Promociones';
import Home from './screens/Home';
import Carrito from './screens/Carrito';
import RegistroAdmin from './components/LoginAdmin'
import Dashboard from './screens/Dashboard'

// Mui-navbar
import { Container } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// Componentes
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer";

// Estilos para la pagina
import './styles/App.css'

export default function App() {
    // navbar
  const navArrayLinks=[
    {title: 'Categorías', path: '/categoria', icon:<CategoryIcon/>},
    {title: 'Promociones', path: '/promociones', icon:<AttachMoneyIcon/>},
    {title: 'Colecciones', path: './colecciones', icon:<CollectionsBookmarkIcon/>},
  ]
  return (
  <>
    <Container sx={{ mt: 4}}>
      <Navbar navArrayLinks={navArrayLinks}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/categoria" element={<Catego />}/>
        <Route path="/promociones" element={<Promo />}/>
        <Route path="/colecciones" element={<Colecci />}/>
        <Route path="/compras" element={<Carrito />}/>
        <Route path="/registroAdmin" element={<RegistroAdmin />}/>
        <Route path="/Admin" element={<Dashboard />}/>
      </Routes>
      <Footer></Footer>
    </Container>
    <div className="container">
      <Banner></Banner>
    </div>
    <div className="carrusel">
      <Carrusel></Carrusel>
    </div>
    
    <Slider></Slider>
    <Footer></Footer>
  </>
  )
}

