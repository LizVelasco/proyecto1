import { Route, Routes } from "react-router-dom";
// Slick-carrusel de generos de libros
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Boostrap para el banner
import 'bootstrap/dist/css/bootstrap.min.css';

// Paginas dentro de la web
import Catego from './screens/Categorias';
import Colecci from './screens/Colecciones';
import Promo from './screens/Promociones';
import Home from './screens/Home';
import Carrito from './screens/Carrito';
import LoginAdmin from './components/LoginAdmin'
import Dashboard from './screens/Dashboard'
import Terror from './screens/Terror';

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
    <Navbar navArrayLinks={navArrayLinks}/>
    <Container sx={{ mt: 3.9}}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/categoria" element={<Catego />}/>
        <Route path="/promociones" element={<Promo />}/>
        <Route path="/colecciones" element={<Colecci />}/>
        <Route path="/compras" element={<Carrito />}/>
        <Route path="/terror" element={<Terror />}/>
        <Route path="/LoginAdmin" element={<LoginAdmin />}/>
        <Route path="/Admin" element={<Dashboard />}/>
      </Routes>
    </Container>
    {/* <Container sx={{ mt: 12}}>
      <Routes>
      </Routes>
    </Container> */}
  </>
  )
}

