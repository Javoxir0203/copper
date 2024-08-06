import PageContainer from "../../Components/PageContainer"
import { Box,Button, Stack, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
const Orderlogin=()=>{
    return(
        <>
<PageContainer>
    
<Box margin="40px" className="satnal"  border="1px solid #A1A1A1" width="200px" >
    <Button  sx={{color:"#A1A1A1"}}>
    Satınalmalara qayıt
    </Button>
</Box>

<Box padding="40px">

<Box className="loginsdboxsd" margin="auto" height="370px"  border="1px solid white "  padding="40px"

box-shadow= "0px 0px 55px 0px"


>
    <Stack alignItems="center" gap="10px" flexDirection="column" >

    <Typography variant="h3">
    Səlahiyyət
    </Typography>
    <Stack gap="30px" flexDirection="column">

    <TextField className="textfiledlog" sx={{width:"300px",height:"40px"}} id="outlined-basic" label="E-mail" variant="outlined" />
    <TextField  className="textfiledlog" sx={{width:"300px",height:"40px"}} id="outlined-basic" label="Parol" variant="outlined" />
    </Stack>

    <Typography marginTop="10px" sx={{color:"#5E3928"}} >
    Şifrəni unutmusan ?
    </Typography>
    <Button  className="daxil" sx={{backgroundColor:"#5E3928",width:"400px",padding:"10px",color:"white"}}>
        Daxil ol
    </Button>
    <Button  className="daxil2"  sx={{backgroundColor:"#0B3F37",width:"400px",padding:"10px",color:"white"}}>
        <Stack gap="30px" flexDirection="row">
        <Typography  >
        Hesabınız yoxdur?
    </Typography>
    <Typography  >
    Qeydiyyat
    </Typography>
        </Stack>
    </Button>
    </Stack>

</Box>
</Box>








</PageContainer>

        </>
    )
}

export default Orderlogin