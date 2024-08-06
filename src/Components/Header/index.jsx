


import BurgerMenu from "../../Components/Burgermenu";
import NavLink from "../../Components/Navlink";

import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,
  } from "@mui/material";

  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import PersonIcon from '@mui/icons-material/Person';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import Bg from "../../assets/BG.png"
  import logo from "../../assets/logo.png"
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  import { Swiper, SwiperSlide } from 'swiper/react';
  
  
  import 'swiper/css';
  import { Autoplay } from "swiper/modules";

import cops from "../../assets/cops.jpg"

const Header=()=>{
    return(
        <>
         <AppBar
                    sx={{
                 
                  position: "sticky",
                  color:"white",
                  top: "10",
                  zIndex: 99,
                   
                }}
              >
 <Box
          className="logos"
            sx={{
                background: ` 
                  url(${Bg})`,
                height: "78px",
                width:"100%",
                
                backgroundRepeat:"no-repeat",
                
                marginTop:"-10px"
                }}
       >

               
              <Container>
          
            <Stack  justifyContent="space-between"   flexDirection="row" alignItems="center">
              <Stack    py={2} flexDirection="row" gap="4px">
                <img src={logo} alt="" />

              
              </Stack>

              <Stack
                justifyContent="space-between"
                gap="20px"
                flexDirection="row"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <NavLink to="/" title="Əsas səhifə" />
                <NavLink to="/about" title="Haqqımızda" />
                <NavLink to="/catalog" title="Catalog" />
                <NavLink to="/news" title="News" />

                <NavLink to="/cardproduct"title="CardProduct" />

                <NavLink to="/basket" title="Basket" />
                <NavLink to="/order" title="Order" />
              </Stack>


<Stack  flexDirection="row" gap="10px">
<Box className="person" sx={{background:"white",color:"black"}} border="1px solid" height="50px">
    <FavoriteBorderIcon/>
</Box>

<Box   sx={{background:"white",color:"black"}} border="1px solid" height="50px"

>
    <PersonIcon/>
</Box>


<Box   sx={{background:"white",color:"black"}} border="1px solid" height="50px">
    <ShoppingCartIcon/>
</Box>
</Stack>


              <BurgerMenu className="brgr" />
            </Stack>

        </Container>




          </Box>
            </AppBar>


        </>
    )
}

export default Header