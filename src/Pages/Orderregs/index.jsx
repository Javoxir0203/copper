import PageContainer from "../../Components/PageContainer"
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Stack, Typography } from "@mui/material";
import groupone from "../../assets/groupone.png"
import { Link } from "react-router-dom";
const Orderregst=()=>{
    return(
        <>
        <PageContainer>


<Box >

<Stack gap="30px" padding="30px" alignItems="center" flexDirection="column">

    <Stack marginTop="40px" justifyContent="center" flexDirection="row" >

<CheckIcon sx={{fontSize:"280px"}}/>
<img style={{width:"70px",marginLeft:"-60px",color:"#0B3F37"}} src={groupone} alt="" />
    </Stack>
    <Typography variant="h3">
    Sifarişiniz üçün təşəkkür edirik
    </Typography>
    <Typography>
    Qısa zamanda sizinlə əlaqə saxlayacağıq
    </Typography>
    <Link to="/orderlogin">
    
    <Button className="homebuton"  sx={{backgroundColor:"#5E3928",width:"500px",color:"white"}}>
    Ev
    </Button>
    </Link>

</Stack>

</Box>


        </PageContainer>
        </>
    )
}
export default Orderregst