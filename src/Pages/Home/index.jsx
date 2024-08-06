
import catg from "../../assets/catg.png"

import oneisteh from "../../assets/one.png"
import twoisteh from "../../assets/two.png"
import threeisteh from "../../assets/three.png"
import fooristeh from "../../assets/foor.png"
import fiveisteh from "../../assets/five.png"
import man from "../../assets/man.png"
import Lots from "../../Components/Lotsof";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PageContainer from "../../Components/PageContainer";


import PersonHome from "../../Components/Persondhome";
import Choose from "../../Components/Choose";


import AOS from 'aos';
import 'aos/dist/aos.css';





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


import cops from "../../assets/cops.jpg"
import Footer from "../../Components/Footer"
import { useEffect } from "react"












const istehsal = [
  {
    id: 0,
    img: oneisteh,
    tittle: "Çini qulplu mis çaynik",
    text: "1,953 UAH"
  },
  {
    id: 1,
    img: twoisteh,
    tittle: "Çini qulplu mis çaynik",
    text: "1,953 UAH"
  },
  {
    id: 2,
    img: threeisteh,
    tittle: "Çini qulplu mis çaynik",
    text: "1,953 UAH"
  },
  {
    id: 3,
    img: fooristeh,
    tittle: "Çini qulplu mis çaynik",
    text: "1,953 UAH"
  },
  {
    id: 4,
    img: fiveisteh,
    tittle: "Çini qulplu mis çaynik",
    text: "1,953 UAH"
  },
  {
    id: 5,
    img: oneisteh,
    tittle: "Çini qulplu mis çaynik",
    text: "1,953 UAH"
  }, {
    id: 6,
    img: twoisteh,
    tittle: "Çini qulplu mis çaynik",
    text: "1,953 UAH"
  },
]


const person = [
  {
    id: 0,
    img: man,
    name: "Иван Иванов",
    tittle: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
    date: "20.10.21"
  },
  {
    id: 1,
    img: man,
    name: "Иван Иванов",
    tittle: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
    date: "20.10.21"
  },
  {
    id: 2,
    img: man,
    name: "Иван Иванов",
    tittle: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
    date: "20.10.21"
  },
  {
    id: 3,
    img: man,
    name: "Иван Иванов",
    tittle: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
    date: "20.10.21"
  },
  {
    id: 4,
    img: man,
    name: "Иван Иванов",
    tittle: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
    date: "20.10.21"
  },
  {
    id: 5,
    img: man,
    name: "Иван Иванов",
    tittle: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
    date: "20.10.21"
  },
  {
    id: 6,
    img: man,
    name: "Иван Иванов",
    tittle: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
    date: "20.10.21"
  },
]



const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>


      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
        }}

      >

        <SwiperSlide>
          <Box
            className="logos"
            sx={{
              background: ` 
                  url(${Bg})`,
              height: "500px",
              width: "100%",

              backgroundRepeat: "no-repeat",

              marginTop: "-10px"
            }}

          >






            <Container>
              <AppBar

                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: "10",
                  zIndex: 99,

                }}
              >
              </AppBar>
              <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
                <Stack py={3} flexDirection="row" gap="4px">
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

                  <NavLink to="/cardproduct" title="CardProduct" />

                  <NavLink to="/basket" title="Basket" />
                  <NavLink to="/order" title="Order" />
                </Stack>


                <Stack marginTop="10px" flexDirection="row" gap="10px">
                  <Box className="person" sx={{ background: "white", color: "black" }} border="1px solid" marginTop="-10px" height="50px">
                    <FavoriteBorderIcon />
                  </Box>

                  <Box sx={{ background: "white", color: "black" }} border="1px solid" marginTop="-10px"
                   height="50px"

                  >
                    <PersonIcon />
                  </Box>


                  <Box sx={{ background: "white", color: "black" }} border="1px solid" marginTop="-10px" height="50px">
                    <ShoppingCartIcon />
                  </Box>
                </Stack>


                <BurgerMenu className="brgr" />
              </Stack>


            </Container>
            <Container>

              <Stack className="betesellertops" color="white" gap="20px">

                <Box className="betseller">
                  <Typography variant="h3">
                    Bestseller
                  </Typography>
                </Box>
                <Box className="betseller" border="1px solid " width="200px">

                </Box>

                <Box className="betseller">
                  <Typography variant="h5" width="200px">
                    Efir yağları üçün distillə
                  </Typography>
                </Box>

                <Stack className="betseller" flexDirection="row" gap="20px">
                  <Box >
                    <Typography variant="h7" >
                      Qiymət
                    </Typography>
                  </Box>

                  <Box >
                    <Typography variant="h7" >
                      4,906 UAH
                    </Typography>
                  </Box>
                </Stack>

                <Button className="betsellerbuton" sx={{ background: "#5E3928", color: "white", width: "300px" }} variant="outlined">Outlined</Button>
              </Stack>
            </Container>



          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            className="logos"
            sx={{
              background: ` 
                  url(${cops})`,
              height: "500px",
              width: "100%",

              backgroundRepeat: "no-repeat",

              marginTop: "-10px"
            }}

          >






            <Container>
              <AppBar

                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: "10",
                  zIndex: 99,

                }}
              >
              </AppBar>
              <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
                <Stack py={3} flexDirection="row" gap="4px">
                  <img src={logo} alt="" />


                </Stack>

                <Stack
                  justifyContent="space-between"
                  gap="20px"
                  flexDirection="row"
                  sx={{ display: { xs: "none", md: "flex", color: "white" } }}
                >
                  <NavLink className="hy" to="/" title="Əsas səhifə" />
                  <NavLink to="/about" title="Haqqımızda" />
                  <NavLink to="/catalog" title="Catalog" />
                  <NavLink to="/news" title="News" />

                  <NavLink to="/cardproduct" title="CardProduct" />

                  <NavLink to="/basket" title="Basket" />
                  <NavLink to="/order" title="Order" />
                </Stack>


                <Stack marginTop="10px" flexDirection="row" gap="10px">
                  <Box className="person" sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <FavoriteBorderIcon />
                  </Box>

                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px"

                  >
                    <PersonIcon />
                  </Box>


                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <ShoppingCartIcon />
                  </Box>
                </Stack>


                <BurgerMenu className="brgr" />
              </Stack>


            </Container>
            <Container>

              <Stack className="betesellertops" marginTop="40px" color="white" gap="20px">

                <Box className="betseller">
                  <Typography variant="h3">
                    Bestseller
                  </Typography>
                </Box>
                <Box className="betseller" border="1px solid " width="200px">

                </Box>

                <Box className="betseller">
                  <Typography variant="h5" width="200px">
                    Efir yağları üçün distillə
                  </Typography>
                </Box>

                <Stack className="betseller" flexDirection="row" gap="20px">
                  <Box >
                    <Typography variant="h7" >
                      Qiymət
                    </Typography>
                  </Box>

                  <Box >
                    <Typography variant="h7" >
                      4,906 UAH
                    </Typography>
                  </Box>
                </Stack>

                <Button className="betsellerbuton" sx={{ background: "#5E3928", color: "white", width: "300px" }} variant="outlined">Outlined</Button>
              </Stack>
            </Container>



          </Box>
        </SwiperSlide>


        <SwiperSlide>
          <Box
            className="logos"
            sx={{
              background: ` 
                  url(${Bg})`,
              height: "500px",
              width: "100%",

              backgroundRepeat: "no-repeat",

              marginTop: "-10px"
            }}

          >






            <Container>
              <AppBar

                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: "10",
                  zIndex: 99,

                }}
              >
              </AppBar>
              <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
                <Stack py={3} flexDirection="row" gap="4px">
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

                  <NavLink to="/cardproduct" title="CardProduct" />

                  <NavLink to="/basket" title="Basket" />
                  <NavLink to="/order" title="Order" />
                </Stack>


                <Stack marginTop="10px" flexDirection="row" gap="10px">
                  <Box className="person" sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <FavoriteBorderIcon />
                  </Box>

                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px"

                  >
                    <PersonIcon />
                  </Box>


                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <ShoppingCartIcon />
                  </Box>
                </Stack>


                <BurgerMenu className="brgr" />
              </Stack>


            </Container>
            <Container>

              <Stack className="betesellertops" color="white" gap="20px">

                <Box className="betseller">
                  <Typography variant="h3">
                    Bestseller
                  </Typography>
                </Box>
                <Box className="betseller" border="1px solid " width="200px">

                </Box>

                <Box className="betseller">
                  <Typography variant="h5" width="200px">
                    Efir yağları üçün distillə
                  </Typography>
                </Box>

                <Stack className="betseller" flexDirection="row" gap="20px">
                  <Box >
                    <Typography variant="h7" >
                      Qiymət
                    </Typography>
                  </Box>

                  <Box >
                    <Typography variant="h7" >
                      4,906 UAH
                    </Typography>
                  </Box>
                </Stack>

                <Button className="betsellerbuton" sx={{ background: "#5E3928", color: "white", width: "300px" }} variant="outlined">Outlined</Button>
              </Stack>
            </Container>



          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="logos"
            sx={{
              background: ` 
                  url(${Bg})`,
              height: "500px",
              width: "100%",

              backgroundRepeat: "no-repeat",

              marginTop: "-10px"
            }}

          >






            <Container>
              <AppBar

                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: "10",
                  zIndex: 99,

                }}
              >
              </AppBar>
              <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
                <Stack py={3} flexDirection="row" gap="4px">
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

                  <NavLink to="/cardproduct" title="CardProduct" />

                  <NavLink to="/basket" title="Basket" />
                  <NavLink to="/order" title="Order" />
                </Stack>


                <Stack marginTop="10px" flexDirection="row" gap="10px">
                  <Box className="person" sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <FavoriteBorderIcon />
                  </Box>

                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px"

                  >
                    <PersonIcon />
                  </Box>


                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <ShoppingCartIcon />
                  </Box>
                </Stack>


                <BurgerMenu className="brgr" />
              </Stack>


            </Container>
            <Container>

              <Stack className="betesellertops" color="white" gap="20px">

                <Box className="betseller">
                  <Typography variant="h3">
                    Bestseller
                  </Typography>
                </Box>
                <Box className="betseller" border="1px solid " width="200px">

                </Box>

                <Box className="betseller">
                  <Typography variant="h5" width="200px">
                    Efir yağları üçün distillə
                  </Typography>
                </Box>

                <Stack className="betseller" flexDirection="row" gap="20px">
                  <Box >
                    <Typography variant="h7" >
                      Qiymət
                    </Typography>
                  </Box>

                  <Box >
                    <Typography variant="h7" >
                      4,906 UAH
                    </Typography>
                  </Box>
                </Stack>

                <Button className="betsellerbuton" sx={{ background: "#5E3928", color: "white", width: "300px" }} variant="outlined">Outlined</Button>
              </Stack>
            </Container>



          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="logos"
            sx={{
              background: ` 
                  url(${Bg})`,
              height: "500px",
              width: "100%",

              backgroundRepeat: "no-repeat",

              marginTop: "-10px"
            }}

          >






            <Container>
              <AppBar

                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: "10",
                  zIndex: 99,

                }}
              >
              </AppBar>
              <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
                <Stack py={3} flexDirection="row" gap="4px">
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

                  <NavLink to="/cardproduct" title="CardProduct" />

                  <NavLink to="/basket" title="Basket" />
                  <NavLink to="/order" title="Order" />
                </Stack>


                <Stack marginTop="10px" flexDirection="row" gap="10px">
                  <Box className="person" sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <FavoriteBorderIcon />
                  </Box>

                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px"

                  >
                    <PersonIcon />
                  </Box>


                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <ShoppingCartIcon />
                  </Box>
                </Stack>


                <BurgerMenu className="brgr" />
              </Stack>


            </Container>
            <Container>

              <Stack className="betesellertops" color="white" gap="20px">

                <Box className="betseller">
                  <Typography variant="h3">
                    Bestseller
                  </Typography>
                </Box>
                <Box className="betseller" border="1px solid " width="200px">

                </Box>

                <Box className="betseller">
                  <Typography variant="h5" width="200px">
                    Efir yağları üçün distillə
                  </Typography>
                </Box>

                <Stack className="betseller" flexDirection="row" gap="20px">
                  <Box >
                    <Typography variant="h7" >
                      Qiymət
                    </Typography>
                  </Box>

                  <Box >
                    <Typography variant="h7" >
                      4,906 UAH
                    </Typography>
                  </Box>
                </Stack>

                <Button className="betsellerbuton" sx={{ background: "#5E3928", color: "white", width: "300px" }} variant="outlined">Outlined</Button>
              </Stack>
            </Container>



          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="logos"
            sx={{
              background: ` 
                  url(${Bg})`,
              height: "500px",
              width: "100%",

              backgroundRepeat: "no-repeat",

              marginTop: "-10px"
            }}

          >






            <Container>
              <AppBar

                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: "10",
                  zIndex: 99,

                }}
              >
              </AppBar>
              <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
                <Stack py={3} flexDirection="row" gap="4px">
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

                  <NavLink to="/cardproduct" title="CardProduct" />

                  <NavLink to="/basket" title="Basket" />
                  <NavLink to="/order" title="Order" />
                </Stack>


                <Stack marginTop="10px" flexDirection="row" gap="10px">
                  <Box className="person" sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <FavoriteBorderIcon />
                  </Box>

                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px"

                  >
                    <PersonIcon />
                  </Box>


                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <ShoppingCartIcon />
                  </Box>
                </Stack>


                <BurgerMenu className="brgr" />
              </Stack>


            </Container>
            <Container>

              <Stack className="betesellertops" color="white" gap="20px">

                <Box className="betseller">
                  <Typography variant="h3">
                    Bestseller
                  </Typography>
                </Box>
                <Box className="betseller" border="1px solid " width="200px">

                </Box>

                <Box className="betseller">
                  <Typography variant="h5" width="200px">
                    Efir yağları üçün distillə
                  </Typography>
                </Box>

                <Stack className="betseller" flexDirection="row" gap="20px">
                  <Box >
                    <Typography variant="h7" >
                      Qiymət
                    </Typography>
                  </Box>

                  <Box >
                    <Typography variant="h7" >
                      4,906 UAH
                    </Typography>
                  </Box>
                </Stack>

                <Button className="betsellerbuton" sx={{ background: "#5E3928", color: "white", width: "300px" }} variant="outlined">Outlined</Button>
              </Stack>
            </Container>



          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="logos"
            sx={{
              background: ` 
                  url(${Bg})`,
              height: "500px",
              width: "100%",

              backgroundRepeat: "no-repeat",

              marginTop: "-10px"
            }}

          >






            <Container>
              <AppBar

                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: "10",
                  zIndex: 99,

                }}
              >
              </AppBar>
              <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
                <Stack py={3} flexDirection="row" gap="4px">
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

                  <NavLink to="/cardproduct" title="CardProduct" />

                  <NavLink to="/basket" title="Basket" />
                  <NavLink to="/order" title="Order" />
                </Stack>


                <Stack marginTop="10px" flexDirection="row" gap="10px">
                  <Box className="person" sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <FavoriteBorderIcon />
                  </Box>

                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px"

                  >
                    <PersonIcon />
                  </Box>


                  <Box sx={{ background: "white", color: "black" }} border="1px solid" height="70px">
                    <ShoppingCartIcon />
                  </Box>
                </Stack>


                <BurgerMenu className="brgr" />
              </Stack>


            </Container>
            <Container>

              <Stack className="betesellertops" color="white" gap="20px">

                <Box className="betseller">
                  <Typography variant="h3">
                    Bestseller
                  </Typography>
                </Box>
                <Box className="betseller" border="1px solid " width="200px">

                </Box>

                <Box className="betseller">
                  <Typography variant="h5" width="200px">
                    Efir yağları üçün distillə
                  </Typography>
                </Box>

                <Stack className="betseller" flexDirection="row" gap="20px">
                  <Box >
                    <Typography variant="h7" >
                      Qiymət
                    </Typography>
                  </Box>

                  <Box >
                    <Typography variant="h7" >
                      4,906 UAH
                    </Typography>
                  </Box>
                </Stack>

                <Button className="betsellerbuton" sx={{ background: "#5E3928", color: "white", width: "300px" }} variant="outlined">Outlined</Button>
              </Stack>
            </Container>



          </Box>
        </SwiperSlide>

      </Swiper>



      <Box>
        <Container>


          <Box>
            <Typography textAlign="center" variant="h4">
              Bizim istehsal
            </Typography>



            <div data-aos="fade-down">




              <Stack className="istehsalscolmn" flexDirection="row" justifyContent="center" gap="30px">
                <Box className="efir"  >
                  <img width="200px" src={oneisteh} alt="" />
                  <Typography textAlign="center" variant="h5" color="white" marginTop="-40px">
                    Efir yağları üçün
                  </Typography>
                </Box>


                <Box className="efir"  >
                  <img width="200px" src={twoisteh} alt="" />
                  <Typography textAlign="center" variant="h5" color="white" marginTop="-40px">
                    Hidrozollar üçün
                  </Typography>
                </Box>


                <Box className="efir" >
                  <img width="200px" src={threeisteh} alt="" />
                  <Typography textAlign="center" variant="h5" color="white" marginTop="-40px">
                    Mis qablar
                  </Typography>
                </Box>
              </Stack>


              <Stack className="istehsalscolmn" marginTop="40px" flexDirection="row" justifyContent="center" gap="30px">
                <Box className="efir" >
                  <img width="200px" src={fooristeh} alt="" />


                  <Typography textAlign="center" sx={{ border: "1px solid" }} variant="h5" color="black" marginTop="-40px">
                    Efir yağları üçün
                  </Typography>

                </Box>


                <Box className="efir" >
                  <img width="200px" src={fiveisteh} alt="" />
                  <Typography textAlign="center" variant="h5" color="black" marginTop="-40px">
                    Hidrozollar üçün
                  </Typography>
                </Box>


                <Box className="efir" sx={{ backgroundImage: `url(${twoisteh})`, height: "220px", lightgray: "0% 0% / 100px 100px", backgroundSize: "cover" }}  >

                  <Typography variant="h5" color="black" marginTop="20px">
                    -30 %
                  </Typography>

                  <Typography variant="h5" color="black" marginLeft="150px" marginTop="20px">
                    -50 %
                  </Typography>

                  <Typography variant="h5" color="black" marginTop="30px">
                    -80 %
                  </Typography>
                  <Typography variant="h5" color="black" marginTop="10px">
                    Endirimlər və təkliflər
                  </Typography>
                </Box>





              </Stack>

            </div>









          </Box>













        </Container>
      </Box>






      <Box sx={{ backgroundColor: "darkgray", width: "100%", padding: "20px", marginTop: "40px" }}>

        <Box marginTop="70px">
          <Typography variant="h4" textAlign="center">
            Ən çox satılan
          </Typography>
        </Box>


        <Stack className="relatves" alignItems="center">
          <Container>
            <div data-aos="fade-down">


              <Grid
                className="layhsbox"
                my={2}
                mb={5}
                container
                spacing={2}
                justifyContent="center"
              >
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}

                >
                  {istehsal.map((texnika) => (
                    <SwiperSlide>
                      <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                        <Lots tittle={texnika.tittle} src={texnika.img} />
                      </Grid>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
            </div>
          </Container>

          <Button className="outlindesbutons" sx={{ backgroundColor: "#5E3928", margin: "auto", color: "white", width: "200px" }} variant="outlined">Outlined</Button>


        </Stack>
      </Box>




      <Box>

        <Box marginTop="40px">
          <Typography variant="h4" textAlign="center">
            yeni əşyalar
          </Typography>
        </Box>

        <Stack alignItems="center">
          <Container>

            <div data-aos="zoom-in-down">


              <Grid
                className="layhsbox"
                my={2}
                mb={5}
                container
                spacing={2}
                justifyContent="center"
              >
                <Swiper
                  padding="20px"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}

                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}


                >
                  {istehsal.map((texnika) => (
                    <SwiperSlide>
                      <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                        <Lots tittle={texnika.tittle} src={texnika.img} />
                      </Grid>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
            </div>

          </Container>

          <Button className="outlindesbutons" sx={{ backgroundColor: "#5E3928", margin: "auto", color: "white", width: "200px" }} variant="outlined">Outlined</Button>


        </Stack>
      </Box>




      <Box className="responsvpohots">
        <img width="100%" src={catg} alt="" />
      </Box>


      <Box>

        <Box marginTop="40px">
          <Typography variant="h4" textAlign="center">
            tövsiyə edirik
          </Typography>
        </Box>

        <Stack alignItems="center">
          <Container>

            <Grid
              className="layhsbox"
              my={2}
              mb={5}
              container
              spacing={2}
              justifyContent="center"
            >
              <Swiper
                padding="20px"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}


                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}

              >
                {istehsal.map((texnika) => (
                  <SwiperSlide>
                    <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                      <Lots tittle={texnika.tittle} src={texnika.img} />
                    </Grid>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Container>

          <Button className="outlindesbutons" sx={{ backgroundColor: "#5E3928", margin: "auto", color: "white", width: "200px" }} variant="outlined">Outlined</Button>


        </Stack>
      </Box>



      <Box marginTop="30px" sx={{ backgroundColor: "darkgray", width: "100%", padding: "20px" }}>

        <Box marginTop="40px">
          <Typography variant="h4" textAlign="center">
            Endirimlər
          </Typography>
        </Box>
        <Container>

        <Stack alignItems="center">
          <Container>

            <Grid
              className="layhsbox"
              my={2}
              mb={5}
              container
              spacing={2}
              justifyContent="center"
            >
              <Swiper
                padding="20px"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}


                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}

              >
                {istehsal.map((texnika) => (
                  <SwiperSlide>
                    <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                      <Lots tittle={texnika.tittle} src={texnika.img} />
                    </Grid>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Container>

          <Button className="outlindesbutons" sx={{ backgroundColor: "#5E3928", margin: "auto", color: "white", width: "200px" }} variant="outlined">Outlined</Button>


        </Stack>
        </Container>
      </Box>




      <Box marginTop="40px">
        <Typography variant="h4" textAlign="center">
          Bizim haqqımızda nə düşünürlər
        </Typography>



        <Container>

          <Grid
            className="layhsbox"
            my={2}
            mb={5}
            container
            spacing={2}
            justifyContent="center"
          >
            <Swiper
              padding="20px"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}

              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}

            >
              {person.map((texnika) => (
                <SwiperSlide>
                  <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                    <PersonHome tittle={texnika.tittle} name={texnika.name} date={texnika.date} src={texnika.img} />
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>

        </Container>












      </Box>




      <Box sx={{ backgroundColor: "darkgrey" }}>
        <Choose />
      </Box>




      <Footer />


















    </>
  )
}

export default Home