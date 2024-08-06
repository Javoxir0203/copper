

import PageContainer from "../../Components/PageContainer"
import oneisteh from "../../assets/one.png"
import twoisteh from "../../assets/two.png"
import threeisteh from "../../assets/three.png"
import fooristeh from "../../assets/foor.png"
import fiveisteh from "../../assets/five.png"
import TextField from '@mui/material/TextField';
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,
} from "@mui/material";
import { useState } from "react"
import Lots from "../../Components/Lotsof"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Catalog = () => {
    const [etirler, setEtirler] = useState([
        {
            id: 0,
            img: oneisteh,
            tittle: "Qab1",
            text: "1,953 UAH"
        },
        {
            id: 1,
            img: twoisteh,
            tittle: "Qab2",
            text: "1,953 UAH"
        },
        {
            id: 2,
            img: threeisteh,
            tittle: "Qab3",
            text: "1,953 UAH"
        },
        {
            id: 3,
            img: fooristeh,
            tittle: "Qab4",
            text: "1,953 UAH"
        },
        {
            id: 4,
            img: fiveisteh,
            tittle: "Qab5",
            text: "1,953 UAH"
        },
        {
            id: 5,
            img: oneisteh,
            tittle: "Qab6",
            text: "1,953 UAH"
        }, {
            id: 6,
            img: twoisteh,
            tittle: "Qab7",
            text: "1,953 UAH"
        },
    ])
    const [search, setSearch] = useState('')
    return (
        <>

            <PageContainer>

                <Typography variant="h4">
                    <Container>

                        Kataloq
                    </Container>
                </Typography>

                <Stack padding="20px" className="istehsalscolmnas" flexDirection="row" justifyContent="center" gap="10px">
                    <Box   >
                        <img width="100px" src={oneisteh} alt="" />
                        <Typography textAlign="center" variant="h5" color="white" marginTop="-40px">
                            Efir yağları üçün
                        </Typography>
                    </Box>


                    <Box  >
                        <img width="100px" src={twoisteh} alt="" />
                        <Typography textAlign="center" variant="h5" color="white" marginTop="-40px">
                            Hidrozollar üçün
                        </Typography>
                    </Box>


                    <Box  >
                        <img  width="100px" src={fiveisteh} alt="" />
                        <Typography textAlign="center" variant="h5" color="white" marginTop="-40px">
                           Platunim qablar
                        </Typography>
                    </Box>

                    <Box padding="5px"  sx={{boxShadow:'1px 2px 9px #F4AAB9'}}   >
                        <img width="100px" src={fooristeh} alt="" />
                        <Typography color='black' textAlign="center" variant="h5" marginTop="-40px">
                            Mis qablar
                        </Typography>
                    </Box>
                </Stack>



                <Box padding="10px"
                 className="serachs">
                    <TextField onChange={({target})=> setSearch(target.value.toLowerCase())} id="standard-basic" label="Standard" variant="standard" />
                </Box>



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
   
                {
                    etirler
                    .filter(({ tittle }) => search ? tittle.toLowerCase().startsWith(search):true)
                    .map((etir) => {
                        return (
                            <SwiperSlide>
         
                            <Grid key={etir.id} >
                                <Lots text={etir.text} tittle={etir.tittle} src={etir.img} />
                            </Grid>
                            </SwiperSlide>
                            
                        )
                    })
                }
             
            
            </Swiper>







            </PageContainer>

        </>
    )
}

export default Catalog