import { Stack , Typography, Button, Box, Container } from "@mui/material";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Lots=({ tittle, src, text })=>{
    return(
        <>
            <Box   width="100%" padding="15px" className="categboxsd">
      <Container>

      <Stack className="cnetrsd" padding="10px"
    flexDirection="column" alignItems="center" >

      <Typography component="h4" fontWeight="bold" textAlign="center">
          <Box border="1px solid" width="30px" sx={{backgroundColor:"white",color:"black",height:"26px"}} className="favortesd" position="absolute" top="30px" left="160px">
  <FavoriteBorderIcon className="iconstd"/>
          </Box>
        <img
          style={{ width: "300px", objectFit: "contain", textAlign: "center" }}
          src={src}
        />
      </Typography>
      <Typography sx={{color:"white",fontSize:"20px",width:"300px",marginTop:"-60px"}} className="caetgtext">
        {tittle}
      </Typography>

      <Typography>
        {text}

      </Typography>

      </Stack>
      </Container>
    </Box>
        </>
    )
}


export default Lots