
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,
  } from "@mui/material";
  



import copersd from "../../assets/bg-image.png"
import df from "../../assets/df.png"
import PageContainer from "../../Components/PageContainer";
import forest from "../../assets/forest.jpg"

import vec1 from "../../assets/vectorone.jpg"
import vec2 from "../../assets/vectortwo.jpg"
import vec3 from "../../assets/Vectorthree.jpg"
import Choose from "../../Components/Choose";

import groupone from "../../assets/groupone.png"
import grouptwo from "../../assets/grouptwo.png"
import lock from "../../assets/lock.jpg"

const About=()=>{
    return(
        <>


<PageContainer>



<Box sx={{backgroundColor:"darkgrey",marginTop:"-120px"}} >
    <Stack className="aboutsoneresp" alignItems="center" flexDirection="row" justifyContent="center" gap="10%">

<Stack className="aboutstwosds" flexDirection="column" gap="10px">

<Typography className="bizmhaqda" variant="h2">
Bizim haqqımızda
</Typography>
<Box className="haqdaline" border="1px solid #031412" width="400px">

</Box>


<Stack className="locksresp" flexDirection="row" alignItems="center">

<Stack className="locktext" flexDirection="row" alignItems="center" gap="10px">
    <img className="lokspohots" style={{width:"80px",padding:"10px"}} src={lock} alt="" />
    <Typography className="mis" variant="h4" marginTop="30px" width="500px">
    Biz misdən hazırlanmış hər şeyi sevirik
    </Typography>
</Stack>
<Box>
    <img className="lokspohots2" style={{width:"80px",marginTop:"60px"}} src={lock} alt="" />
</Box>
</Stack>

<Stack>
    <Typography variant="h4">
    İvan İvanov 
    </Typography>
</Stack>
</Stack>









<Stack className="grupspohtos" flexDirection="row" alignItems="center">
    <img className="gorupsonepho" style={{width:"200px"}} src={groupone} alt="" />
    <img className="gorupstows" style={{width:"200px",marginTop:"350px"}}  src={grouptwo} alt="" />
</Stack>
    </Stack>



</Box>




<Box>
    <Stack className="persontst" flexDirection="row" gap="20%" padding="10%" justifyContent="center">

    <Stack>
        <Typography variant="h4">
        Müştərilərimiz
        </Typography>
        <Typography maxWidth="400px">
        Biz özümüzdən tələb edirik ki, hər gün müştərilərimiz üçün daha yaxşı olaq və onların hər biri üçün ən yaxşı həllər tapaq.
        </Typography>
    </Stack>

    <Stack >
        <Typography color="#E4A16F" variant="h4">
        Müştəri sayğacı
        </Typography>
        <Typography variant="h2" >
        12 346
        </Typography>
    </Stack>
    </Stack>
</Box>


<Box className="heightpsotos" sx={{background:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${copersd})`,backgroundSize:"100%",height:"500px",padding:"0px"}}>
    <Stack position="relative" alignItems="center" justifyContent="center" flexDirection="row">
<Box >
    <Typography position="absolute" left="-60px"  color="white" variant="h1" className="coperstexts">
    COPPER PRO
    </Typography>
</Box>


<Stack flexDirection="column">
    <Typography color="white" textAlign="center" variant="h2">
    Bizim tariximiz
    </Typography>
    <Stack className="historytext" flexDirection="row" gap="30px" alignItems="center">
        <Typography className="rusiantext" color="white" width="400px">
        Сумка-мессенджер мужская тесьма, жилет нейтра 8 бит. Chartreuse Disrupt посадил птицу на лебеду jianbing. Хэштег для позднего завтрака с питьевым уксусом, скейтборд с тильдой холодного отжима. Крафтовый пивной шалфей занимает кардиган из ретро-фарма и стол, а также фланель из кейтара для гастропабов. Unicorn jean шорты quinoa подлинный cronut tilde twee YOLO, потроха эстетичный yuccie iPhone truffaut seitan. Создавайте пивные путники, лесорубы, суккуленты своими руками, Helvetica Vexillologist, следующий уровень разбудили толстовку с капюшоном keffiyeh tumblr schlitz chambray пишущую машинку. Плитка метро шестиугольника keffiyeh.
        </Typography>

        <Typography className="rusiantext" color="white" width="400px">
        Сумка-мессенджер мужская тесьма, жилет нейтра 8 бит. Chartreuse Disrupt посадил птицу на лебеду jianbing. Хэштег для позднего завтрака с питьевым уксусом, скейтборд с тильдой холодного отжима. Крафтовый пивной шалфей занимает кардиган из ретро-фарма и стол, а также фланель из кейтара для гастропабов. Unicorn jean шорты quinoa подлинный cronut tilde twee YOLO, потроха эстетичный yuccie iPhone truffaut seitan. Создавайте пивные путники, лесорубы, суккуленты своими руками, Helvetica Vexillologist, следующий уровень разбудили толстовку с капюшоном keffiyeh tumblr schlitz chambray пишущую машинку. Плитка метро шестиугольника keffiyeh.
        </Typography>
    </Stack>
</Stack>




    </Stack>
</Box>



<Box sx={{backgroundColor:"darkgrey",padding:"40px"}}>
    <Stack className="loctresp" marginTop="30px" flexDirection="row" gap="20%" justifyContent='center'>

    <Stack gap="10px">
        <Typography variant="h4">
        Coğrafiyamız
        </Typography>
        <Typography width="200px">
        Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.
        </Typography>
    </Stack>
    <Stack className="dfsd" width="400px">
        <img src={df} alt="" />
    </Stack>
    </Stack>
</Box>






<Box>

<Stack className="valuesd" flexDirection="row" gap="20px" justifyContent="center" marginTop="40px" padding="10px">




<Stack className="forttphot" width="600px">
    <img className="forphotos" src={forest} alt="" />
</Stack>

<Stack gap="20px">
   <Typography variant="h5">
   Bizim dəyərlərimiz
   </Typography>
   <Typography className="info" width="400px" >
   İstehsalımız Ukraynada yerləşir, lakin 50-dən çox ölkədən olan müştərilər mağazamızdan alınan mallardan zövq alırlar.
   </Typography>

<Box className="boxsresp">

<Stack flexDirection="row" gap="10px" alignItems="center">
    <img style={{width:"60px"}} src={vec1} alt="" />
    <Typography>
    Səmərəlilik
    </Typography>
</Stack>


<Stack flexDirection="row" gap="10px" alignItems="center" >
    <img style={{width:"60px"}} src={vec2} alt="" />
    <Typography>
    Keyfiyyətli məhsul və xidmət
    </Typography>
</Stack>





<Stack flexDirection="row" gap="10px" alignItems="center">
    <img style={{width:"60px"}} src={vec3} alt="" />
    <Typography>
    Çeviklik
    </Typography>
</Stack>
</Box>



</Stack>







</Stack>


</Box>


<Box sx={{background:"darkgrey"}}>
    <Choose/>
</Box>








</PageContainer>



        
        </>
    )
}

export default About