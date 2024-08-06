
import {
    Box,

    Stack,
    Typography,

  } from "@mui/material";

import logo from "../../assets/logo.png"
import NavLink from "../../Components/Navlink";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer=()=>{
    return(
        <>
<Stack  className="box1" sx={{background:"#0B3F37 ",color:"white"}} flexDirection="row" justifyContent="center" gap="20%" padding="50px">


<Stack className="boxsds1s">

<Box>
    <Stack gap="10px">

    <img src={logo} alt="" />

    <Typography>

    © 2021 “Copper Pro” Bütün hüquqlar qorunur
    </Typography>
    <Typography>
    Gizlilik Siyasəti
</Typography>
    </Stack>
</Box>
</Stack>


<Stack  className="box11" gap="40px" flexDirection="row">





<Stack >

<Box>
    <Stack gap="10px">

<Typography variant="h4">

Naviqasiya
</Typography>
<Stack
          
                gap="20px"
                flexDirection="column"
        
              >
                <NavLink to="/" title="Əsas səhifə" />
                <NavLink to="/about" title="Haqqımızda" />
                <NavLink to="/catalog" title="Catalog" />
                <NavLink to="/news" title="News" />

                <NavLink to="/cardproduct"title="CardProduct" />

                <NavLink to="/basket" title="Basket" />
                <NavLink to="/order" title="Order" />
              </Stack>
    </Stack>


</Box>
</Stack>



<Stack className="katalqs">

<Box>
    <Stack className="katq" gap="20px">

    <Typography variant="h4">
    Kataloq
    </Typography>

    <Stack gap="10px">
    <Typography>
    Efir yağları üçün
    </Typography>
    <Typography>
    Hidrozollar üçün
    </Typography>

    <Typography>
    Mis qablar
    </Typography>

    <Typography>
    Mis aksesuarları
    </Typography>


    <Typography>
    Fərdi sifariş
    </Typography>


    <Typography>
    Endirimlər və təkliflər
    </Typography>
    </Stack>
    </Stack>
</Box>
</Stack>

<Stack >

<Box>
    <Stack gap="10px">

    <Typography variant="h4">

    Əlaqələr
    </Typography>


    <Typography>

    Bazhana 8-B, Kiyev, 02132 Ukrayna
</Typography>


<Typography>

+38 (096) 990 67 56
</Typography>


<Typography>

a.alambik@gmail.com
</Typography>
<Stack className="iconstfoters" flexDirection="row" gap="10px">
    <InstagramIcon/>
    <FacebookIcon/>
    <WhatsAppIcon/>
</Stack>
    </Stack>
</Box>
</Stack>
</Stack>

</Stack>


        </>
    )

}

export default Footer