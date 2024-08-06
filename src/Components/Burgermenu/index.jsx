
import {
    Box,
    Dialog,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
  } from "@mui/material";
  import { Close } from "@mui/icons-material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useState } from "react";
  import NavLink from "../Navlink";
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import PersonIcon from '@mui/icons-material/Person';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <Close /> : <MenuIcon />}
          </IconButton>
          <Dialog  fullScreen open={open} onClose={() => setOpen(false)}>
            <Box sx={{background:"#5E3928",  color:"white"}} p={4} height="calc(100% - 50px)">
              <Stack flexDirection="row" justifyContent="flex-end">
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setOpen(false)}
                >
                  <Close />
                </IconButton>
              </Stack>
              <Stack justifyContent="center" marginTop="-70px"  flexDirection="row" gap="10px">
<Box sx={{background:"white",color:"black"}} border="1px solid" height="70px">
    <FavoriteBorderIcon/>
</Box>

<Box  sx={{background:"white",color:"black"}} border="1px solid" height="70px"

>
    <PersonIcon/>
</Box>


<Box  sx={{background:"white",color:"black"}} border="1px solid" height="70px">
    <ShoppingCartIcon/>
</Box>
</Stack>
              <Stack
              color="white"
          textAlign="center"
          marginTop="40px"
                gap="20px"
                flexDirection="column"
                justifyContent="center"
              >
                <NavLink to="/" title="Əsas səhifə" />
                <NavLink to="/about" title="Haqqımızda" />
                <NavLink to="/catalog" title="Catalog" />
                <NavLink to="/news" title="News" />

                <NavLink to="/cardproduct"title="CardProduct" />

                <NavLink to="/basket" title="Basket" />
                <NavLink to="/order" title="Order" />
              </Stack>


            </Box>
          </Dialog>
        </Box>
      </>
    );
  };
  
  export default BurgerMenu;
  