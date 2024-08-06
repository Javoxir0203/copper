import { Typography,Box, Stack, Button } from "@mui/material"
import PageContainer from "../../Components/PageContainer"
import oneisteh from "../../assets/one.png"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
const Basket=()=>{
    return(
        <>
        <PageContainer>

  <Typography className="bash" padding="40px" variant="h3">
  Səbət
  </Typography>

  <Stack className="basketcolumns" flexDirection="row"gap="20%" padding="40px">


  <Stack flexDirection="column" gap="20px">

<Box className="basketbox1"   >

<Stack flexDirection="row" justifyContent="space-between">
  <Typography >
  Məhsul
  </Typography>
  <Typography >
  Kəmiyyət
  </Typography>
  <Typography >
  Qiymət
  </Typography>
</Stack>
<Box className="basketlines" marginTop="10px" border="1px solid #E6E8E7" width="600px" >

</Box>

<Stack className="trash1" marginTop="10px" flexDirection="row"  justifyContent="space-between" alignItems="center">

<Stack flexDirection="row" gap="10px" alignItems="center">
    <img style={{width:"100px"}} src={oneisteh} alt="" />
    <Typography>
    8l hidrolat istehsalı üçün distillə
    </Typography>
</Stack>
<Typography>
2 ədəd.
</Typography>
<Stack flexDirection="column"

 
 >

<Typography sx={{textDecorationLine: 'line-through'}}>
1953
</Typography>


<Typography variant="h5" sx={{color:"red"}}>
5000
</Typography>
</Stack>
<Box>
    <DeleteOutlineIcon/>
</Box>
</Stack>



<Stack className="trash1"  marginTop="10px" flexDirection="row"  justifyContent="space-between" alignItems="center">

<Stack  flexDirection="row" gap="10px" alignItems="center">
    <img style={{width:"100px"}} src={oneisteh} alt="" />
    <Typography>
    8l hidrolat istehsalı üçün distillə
    </Typography>
</Stack>
<Typography>
2 ədəd.
</Typography>




<Typography variant="h5" sx={{color:"red"}}>
5000
</Typography>

<Box>
    <DeleteOutlineIcon/>
</Box>
</Stack>


<Box className="satnal" marginTop="30px " border="1px solid #A1A1A1" width="200px" >
    <Button sx={{color:"#A1A1A1"}}>
    Satınalmalara qayıt
    </Button>
</Box>


</Box>
  </Stack>




<Stack className="basketbox2" flexDirection="column" gap="20px">

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
<AddShoppingCartIcon sx={{fontSize:"140px",color:"#A1A1A1"}}/>
</Box>






</Stack>

<Box marginTop="10px" border="1px solid #E6E8E7" width="300px" >

</Box>
<Stack flexDirection="row" gap="20px" alignItems="center">
<AirportShuttleIcon/>
<Typography>
Pulsuz çatdırılma var!
</Typography>
</Stack>
<Button className="betsellerbuton" sx={{background:"#5E3928",color:"white",width:"400px"}} >Yoxla</Button>


</Stack>

  </Stack>







        </PageContainer>
        
        </>
    )
}

export default Basket