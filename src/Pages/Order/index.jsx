import { Stack,Box,Button, Typography } from "@mui/material";
import PageContainer from "../../Components/PageContainer";
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import oneisteh from "../../assets/one.png"
import { Link } from "react-router-dom";
const Order=()=>{
    return(
        <>
        <PageContainer>

          <Stack marginTop="30px" className="sats" flexDirection="row" justifyContent="center"  alignItems="center" gap="30px">

          <Box className="satnal"  border="1px solid #A1A1A1" width="200px" >
    <Button sx={{color:"#A1A1A1"}}>
    Satınalmalara qayıt
    </Button>
</Box>

<Typography variant="h4">
Yoxla
</Typography>

          </Stack>





<Stack className="sats" marginTop="30px" gap="5%" flexDirection="row" justifyContent="center">

          <Stack flexDirection="column">

<Box className="oders1box"  sx={{backgroundColor:"#E6E8E7"}} border="1px solid" padding="30px" width="750px">
<Stack className="personsdsa" flexDirection="row" gap="20px">
  <Box sx={{backgroundColor:"white",color:"black"}} border="1px solid" height="50px" borderRadius="50%" width="100px" padding='30px'>
    <PersonIcon/>
  </Box>

  <Stack flexDirection="column" gap="10px">
    <Typography width="300px">
    Artıq hesabınız var və ya qeydiyyatdan keçmək istəyirsiniz?
    </Typography>
    <Typography>
    Hesabınıza daxil olun və endirim əldə edin
    </Typography>
  </Stack>


<Stack flexDirection="row" gap='10px'>
<Link to="/ordernext">

  <Button sx={{border:"1px solid #5E3928",color:"white",width:"100px",height:"50px",backgroundColor:"#5E3928"}}>
Daxil ol
  </Button>

</Link>



  <Button className="qyed" sx={{border:"1px solid #5E3928",color:"black",width:"150px",height:"50px",backgroundColor:"white"}}>
  Qeydiyyatdan kec
  </Button>
</Stack>





</Stack>



</Box>


<Stack flexDirection="column" marginTop="30px">

<Box>

<Stack className="personnews" flexDirection="row" gap="10px">

<Typography backgroundColor=" #0B3F37  " color='white' border="1px solid" width="40px">
  1
</Typography>
<Typography>
Şəxsi məlumat
</Typography>
</Stack>

<Stack className="textfileds" marginTop="20px" flexDirection="row" gap="10px">

<Stack className="tftx" flexDirection="column" gap="10px">

<TextField id="outlined-basic" label="Имя" variant="outlined" />
<TextField id="outlined-basic" label="Телефон" variant="outlined" />
<TextField id="outlined-basic" label="Страна" variant="outlined" />
</Stack>
<Stack className="tftx" flexDirection="column" gap="10px">

<TextField className="tftx" id="outlined-basic" label="Фамилия" variant="outlined" />
<TextField id="outlined-basic" label="E-mail" variant="outlined" />
<TextField id="outlined-basic" label="Город" variant="outlined" />
</Stack>
</Stack>



</Box>


<Box className="ordersdrslines"  marginTop="40px" border="1px solid #E6E8E7" width="450px">

</Box>

<Box className='runs' marginTop="40px">
  <Stack className="twokur" flexDirection="column">

<Stack className="twokur" flexDirection="row" gap="10px">

<Typography backgroundColor=" #0B3F37  " color='white' border="1px solid" width="40px">
  2
</Typography>
<Typography>
Çatdırılma
</Typography>
</Stack>
<Stack className="twokur" flexDirection="row" gap="10px" alignItems="center">
<Checkbox sx={{color:"#5E3928"}} {...label} />
<Typography color="#5E3928">
Götürmə
</Typography>
</Stack>

<Typography className="twokura" width="300px">
Rəsmi mağazamızdan Bazhana 8-B, Kyiv, 02132 Ukrayna ünvanından ala bilərsiniz.
</Typography>

<Stack className="twokura" flexDirection="row" gap="10px" alignItems="center">
<Checkbox  {...label} />
<Typography color="#A1A1A1">
Yeni poçt
</Typography>
</Stack>


<Typography className="twokura" width="300px">
Rəsmi mağazamızdan Bazhana 8-B, Kyiv, 02132 Ukrayna ünvanından ala bilərsiniz.
</Typography>



<Stack className="twokura" flexDirection="row" gap="10px" alignItems="center">
<Checkbox  {...label} />
<Typography color="#A1A1A1">
Kuryer “Nova Poshta”
</Typography>
</Stack>


<Typography className="twokura" width="300px">
Rəsmi mağazamızdan Bazhana 8-B, Kyiv, 02132 Ukrayna ünvanından ala bilərsiniz.
</Typography>



  </Stack>








</Box>

<Box className="ordersdrslines"  marginTop="40px" border="1px solid #E6E8E7" width="450px">

</Box>


<Box marginTop="40px">
<Stack  className="twokur" flexDirection="row" gap="10px">

<Typography backgroundColor=" #0B3F37  " color='white' border="1px solid" width="40px">
  3
</Typography>
<Typography>
Ödəniş
</Typography>
</Stack>
<Stack className="twokur" flexDirection="row" gap="10px" alignItems="center">
<Checkbox sx={{color:"#5E3928"}} {...label} />
<Typography color="#5E3928">
Qəbul edildikdən sonra
</Typography>
</Stack>

<Stack className="twokur" flexDirection="row" gap="10px" alignItems="center">
<Checkbox sx={{color:"#5E3928"}} {...label} />
<Typography color="#A1A1A1">
Kartla onlayn ödəniş
</Typography>
</Stack>
</Box>

</Stack>
          </Stack>

<Stack flexDirection="column">


<Stack width="400px" className="trash1" marginTop="10px" flexDirection="row"  justifyContent="space-between" alignItems="center">

<Stack flexDirection="row" gap="10px" alignItems="center">
    <img style={{width:"100px"}} src={oneisteh} alt="" />
</Stack>


<Stack flexDirection="column">
    <Typography>
    8l hidrolat istehsalı üçün distillə
    </Typography>

<Typography>
2 ədəd.
</Typography>
</Stack>
<Stack flexDirection="column"


 >

<Typography  className="fivesttext" sx={{textDecorationLine: 'line-through'}}>
1953
</Typography>


<Typography  className="fivesttext"  variant="h5" sx={{color:"red"}}>
5000
</Typography>
</Stack>

</Stack>
<Box className="ordersdrslines" border="1px solid #E6E8E7" width="400px">

</Box>

<Stack width="400px" className="trash1" marginTop="10px" flexDirection="row"  justifyContent="space-between" alignItems="center">

<Stack flexDirection="row" gap="10px" alignItems="center">
    <img style={{width:"100px"}} src={oneisteh} alt="" />
</Stack>


<Stack flexDirection="column">
    <Typography>
    8l hidrolat istehsalı üçün distillə
    </Typography>

<Typography>
2 ədəd.
</Typography>
</Stack>
<Stack flexDirection="column"

 
 >

<Typography sx={{textDecorationLine: 'line-through'}}>
1953
</Typography>


<Typography variant="h5" sx={{color:"red"}}>
5000
</Typography>
</Stack>

</Stack>








<Stack border="1px solid" width='450px' padding="40px" className="basketbox2" flexDirection="column" gap="20px">

<Stack flexDirection="row" >
  <Button sx={{border:"1px solid #5E3928",color:"black",width:"200px",height:"50px",backgroundColor:"white"}}>
  İçəri girmək
  </Button>
  <Button sx={{border:"1px solid #5E3928",color:"white",width:"300px",height:"50px",backgroundColor:"#5E3928"}}>
  İçəri girmək
  </Button>

</Stack>




<Stack flexDirection="row" gap="20px" alignItems="center">

<Stack flexDirection="column" gap="20px">
<Typography>
Ümumi
</Typography>
<Typography variant="h4">
10 953 грн
</Typography>


</Stack>


<Box>
<AddShoppingCartIcon className="shopingsd" sx={{fontSize:"140px",color:"#A1A1A1",marginTop:"-210px",marginLeft:'100px'}}/>
</Box>






</Stack>

<Box className="finifsdlines" marginTop="10px" border="1px solid #E6E8E7" width="300px" >

</Box>
<Stack flexDirection="row" gap="20px" alignItems="center">
<AirportShuttleIcon/>
<Typography>
Pulsuz çatdırılma var!
</Typography>
</Stack>
<Link to="/orderregs">

<Button className="betsellerbuton" sx={{background:"#5E3928",color:"white",width:"400px"}} >Yoxla</Button>
</Link>


</Stack>
</Stack>


</Stack>












        
        </PageContainer>
     
        
        </>
    )
}

export default Order ;