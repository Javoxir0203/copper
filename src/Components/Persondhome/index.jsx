import { Typography,Box } from "@mui/material"

const PersonHome=({tittle,date,name,src})=>{
    return(
        <>

        <Box
        className="persondresponsive"
        border="1px solid"
        width="400px"
        padding="20px"
        >


<Box>
<img
          style={{ width: "60px", objectFit: "contain", textAlign: "center" }}
          src={src}
        />
</Box>


<Typography variant="h4">
    {name}
</Typography>




<Typography className="perosndtitle" width="350px">
    {tittle}
</Typography>


<Typography variant="h5">
    {date}
</Typography>













        </Box>
        
        </>
    )
}

export default PersonHome