import PageContainer from "../../Components/PageContainer"
import oneisteh from "../../assets/one.png"
import twoisteh from "../../assets/two.png"
import threeisteh from "../../assets/three.png"
import fooristeh from "../../assets/foor.png"
import fiveisteh from "../../assets/five.png"
import man from "../../assets/man.png"
import Lots from "../../Components/Lotsof"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,
  } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  import { Swiper, SwiperSlide } from 'swiper/react';
  import PersonHome from "../../Components/Persondhome"

  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  
  import 'swiper/css';
  import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const person=[
    {
        id:0,
        img:man,
        name:"Иван Иванов",
        tittle:"Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
        date:"20.10.21"
    },
    {
        id:1,
        img:man,
        name:"Иван Иванов",
        tittle:"Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
        date:"20.10.21"
    },
    {
        id:2,
        img:man,
        name:"Иван Иванов",
        tittle:"Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
        date:"20.10.21"
    },
    {
        id:3,
        img:man,
        name:"Иван Иванов",
        tittle:"Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
        date:"20.10.21"
    },
    {
        id:4,
        img:man,
        name:"Иван Иванов",
        tittle:"Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
        date:"20.10.21"
    },
    {
        id:5,
        img:man,
        name:"Иван Иванов",
        tittle:"Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
        date:"20.10.21"
    },
    {
        id:6,
        img:man,
        name:"Иван Иванов",
        tittle:"Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
        date:"20.10.21"
    },
]

const istehsal=[
    {
        id:0,
        img:oneisteh,
        tittle:"Çini qulplu mis çaynik",
        text:"1,953 UAH"
    },
    {
        id:1,
        img:twoisteh,
        tittle:"Çini qulplu mis çaynik",
        text:"1,953 UAH"
    },
    {
        id:2,
        img:threeisteh,
        tittle:"Çini qulplu mis çaynik",
        text:"1,953 UAH"
    },
    {
        id:3,
        img:fooristeh,
        tittle:"Çini qulplu mis çaynik",
        text:"1,953 UAH"
    },
    {
        id:4,
        img:fiveisteh,
        tittle:"Çini qulplu mis çaynik",
        text:"1,953 UAH"
    },
    {
        id:5,
        img:oneisteh,
        tittle:"Çini qulplu mis çaynik",
        text:"1,953 UAH"
    },    {
        id:6,
        img:twoisteh,
        tittle:"Çini qulplu mis çaynik",
        text:"1,953 UAH"
    },
]

const Cardproduct=()=>{
  const [open,Setopen]=useState(0)

    return(
        <>
        <PageContainer>








<Box>
<Container>
  <Stack className="swipers-threcard" flexDirection="row" gap="40px" marginTop="40px" >




  <Swiper
            
            style={{height:'400px',width:"600px",marginTop:"30px"}}
            
        direction={'vertical'}
    
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 4,
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












<Box className="cardprodcytstwosd">
<Typography component="h4" fontWeight="bold" textAlign="center">
  <Stack flexDirection="row">

  <img className="onest" style={{maxWidth:"400px"}} src={oneisteh} alt="" />
          <Box border="1px solid" width="30px" marginLeft="-30px" sx={{backgroundColor:"white",color:"black",height:"26px"}} className="favortesd">
  <FavoriteBorderIcon className="iconstd"/>
          </Box>
        
  </Stack>
      </Typography>
</Box>




<Box  maxWidth="450px" padding="30px">
  <Stack gap="20px">

  <Typography variant="h4">
  8l hidrolat istehsalı üçün distillə
  </Typography>

<Stack flexDirection="row" justifyContent="space-between">

  <Typography color="green">
    <Stack flexDirection="row" alignItems="center">

  Stokda var <CheckIcon/>
    </Stack>
  </Typography>
  <Typography>
  Məqalə: CP-0803
  </Typography>
</Stack>
<Box  className="stokline" border="1px solid #E6E8E7" maxWidth="400px">

</Box>
<Stack>
  <Typography variant="h4">
  Təsvir
  </Typography>
  <Typography maxWidth="400px">
  Phoenix mis distillyatoru sizin etibarlı köməkçiniz və distillə və gözəllik dünyasına bələdçi olacaq, onun köməyi ilə sevimli hidrozolları və ya spirtli içkiləri asanlıqla əldə edə bilərsiniz.
  </Typography>
</Stack>
<Box className="stokline" border="1px solid #E6E8E7" maxWidth="400px">

</Box>

<Stack justifyContent="space-between" flexDirection="row"gap="40px"> 

<Stack flexDirection="column">
  <Typography variant="h4"> 
  Qiymət
  </Typography>


<Stack flexDirection="row">

  <Button sx={{
    minWidth: '10px'
  }} onClick={()=>Setopen(open-1)}>

  <Box padding={'8px 15px'} width='inherit' border="1px solid" >
    -
  </Box>
  </Button>
  <Box padding={'8px 15px'}  border="1px solid" >
  {open}
  </Box>
  <Button sx={{
    minWidth: '15px'
  }} onClick={()=>Setopen(open+1)}>

  <Box padding={'8px 15px'}  border="1px solid"> 
  +
  </Box>
  </Button>
</Stack>


</Stack>

<Stack flexDirection="column">
  <Typography variant="h5" color="red">
  10 953 UAH
  </Typography>
  <Button className="betsellerbuton" sx={{background:"#5E3928",color:"white",width:"200px"}} variant="outlined">Serh yaz</Button>
</Stack>
</Stack>
<Box className="stokline" border="1px solid #E6E8E7" maxWidth="400px">

</Box>
<Stack justifyContent="space-between" flexDirection="row" gap="10px">
  <Typography variant="h5">
  Paylaşın
  </Typography>
  <Typography>
<InstagramIcon/>
  </Typography>
  <Typography>
<FacebookIcon/>
  </Typography>
  <Typography>
  <WhatsAppIcon/>
  </Typography>
</Stack>
  </Stack>




  
</Box>
  </Stack>







</Container>
</Box>















<Box marginLeft="30px">
    <Stack gap="20px">

    <Typography className="txtescenter" variant="h4">
    Təsvir
    </Typography>
    <Typography  className="txtescenter"   width="400px">
    eyni həcmli alquitara ilə müqayisədə soyutma üçün su. Bu gözəl cihaz uzun illər sizə xidmət edəcək və öz sahibini yüksək keyfiyyətli hidrozol ilə sevindirəcəkdir. Buxar distilləsinin bütün üstünlüklərindən həzz alın və təbii olduğuna əmin ola biləcəyiniz hidrolatlar əldə edin. Cihaz tam təchiz olunub və
    </Typography>
    </Stack>
</Box>


            <Box>
                <Stack className="reyscolumn" flexDirection="row" gap="10px" justifyContent="space-between" padding="40px">

                <Typography variant="h4">
                Rəylər
                </Typography>
                <Button className="betsellerbuton" sx={{background:"#5E3928",color:"white",width:"300px"}} variant="outlined">Serh yaz</Button>
                
                </Stack>
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
            <Box>
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
            </Box>

        </PageContainer>
        
        </>
    )
}

export default Cardproduct