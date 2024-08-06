
import star1 from "../../assets/star1.png"
import star2 from "../../assets/star2.png"
import star3 from "../../assets/star3.png"
import star4 from "../../assets/star4.png"
import star5 from "../../assets/star5.png"
import star6 from "../../assets/star6.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Box, Typography,Button,Stack, Container } from "@mui/material"



const Choose=()=>{
    return(
        <>




<Box>
  
<Stack justifyContent="space-between" flexDirection="column" alignItems="center" padding="10px" >


<Stack className="choosecolumns" gap="100px"  flexDirection="row">
<Stack gap='20px' alignItems="center"  color="white" >

<Box  border="1px solid" sx={{backgroundColor:" #0B3F37  ",width:"100px",height:"100px",textAlign:"center"}}>
    <img src={star1} alt="" />
</Box>

<Typography variant="h4">
Həqiqilik
</Typography>
<Typography width="200px">
Mis distillə avadanlığı qədim zamanlardan efir yağlarının çıxarılması üçün istifadə edilmişdir.
</Typography>

<Button sx={{color:" #5E3928"}} variant="text">
Daha çox oxu <ExpandMoreIcon/>
</Button>
</Stack>


<Stack gap='20px' alignItems="center" color="white" >

<Box  border="1px solid" sx={{backgroundColor:" #0B3F37  ",width:"100px",height:"100px",textAlign:"center"}}>
    <img src={star2} alt="" />
</Box>

<Typography variant="h4">
Mürəkkəblik
</Typography>
<Typography width="200px">
Mis distillə avadanlığı qədim zamanlardan efir yağlarının çıxarılması üçün istifadə edilmişdir.
</Typography>

<Button sx={{color:" #5E3928"}} variant="text">
Daha çox oxu <ExpandMoreIcon/>
</Button>
</Stack>






<Stack gap='20px' alignItems="center" color="white">

<Box border="1px solid" sx={{background: "linear-gradient(278deg, #0B3F37 -7.03%, #CB8D62 136.33%)",width:"100px",height:"100px",textAlign:"center"}}>
    <img src={star3} alt="" />
</Box>

<Typography variant="h4">
Ədalətli ödəniş
</Typography>
<Typography width="200px">
Mis distillə avadanlığı qədim zamanlardan efir yağlarının çıxarılması üçün istifadə edilmişdir.
</Typography>

<Button sx={{color:" #5E3928"}} variant="text">
Daha çox oxu <ExpandMoreIcon/>
</Button>
</Stack>








</Stack>







<Stack className="choosecolumns2" marginTop="130px"  flexDirection="row" gap="100px" justifyContent="space-between" >
<Stack  gap='20px' color="white" alignItems="center">

<Box  border="1px solid" sx={{backgroundColor:" #0B3F37  ",width:"100px",height:"100px",textAlign:"center"}}>
    <img src={star4} alt="" />
</Box>

<Typography textAlign="center" variant="h4">
Dünya üzrə çatdırılma
</Typography>
<Typography width="200px">
Mis distillə avadanlığı qədim zamanlardan efir yağlarının çıxarılması üçün istifadə edilmişdir.
</Typography>

<Button sx={{color:" #5E3928"}} variant="text">
Daha çox oxu <ExpandMoreIcon/>
</Button>
</Stack>


<Stack gap='20px' alignItems="center" color="white" >

<Box  border="1px solid" sx={{backgroundColor:" #0B3F37  ",width:"100px",height:"100px",textAlign:"center"}}>
    <img src={star5} alt="" />
</Box>

<Typography variant="h4">
Keyfiyyət təminatı
</Typography>
<Typography width="200px">
Mis distillə avadanlığı qədim zamanlardan efir yağlarının çıxarılması üçün istifadə edilmişdir.
</Typography>

<Button sx={{color:" #5E3928"}} variant="text">
Daha çox oxu <ExpandMoreIcon/>
</Button>
</Stack>






<Stack gap='20px' alignItems="center" color="white" >

<Box border="1px solid" sx={{backgroundColor:" #0B3F37  ",width:"100px",height:"100px",textAlign:"center"}}>
    <img src={star6} alt="" />
</Box>

<Typography variant="h4">
İstifadə rahatlığı
</Typography>
<Typography width="200px">
Mis distillə avadanlığı qədim zamanlardan efir yağlarının çıxarılması üçün istifadə edilmişdir.
</Typography>

<Button sx={{color:" #5E3928"}} variant="text">
Daha çox oxu <ExpandMoreIcon/>
</Button>
</Stack>








</Stack>
</Stack>

  





</Box>










        
        </>
    )
}

export default Choose