import { Typography,Box, Stack, Button,Pagination  } from "@mui/material"
import PageContainer from "../../Components/PageContainer"
import newsone from "../../assets/newsone.png"
import newsthree from "../../assets/newsthree.png"
import newstwo from "../../assets/newstwo.png"
import newsfor from "../../assets/newsfor.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const News=()=>{
    return(
        <>
        <PageContainer>
            <Box>
                <Typography padding="20px" variant="h4">
                Xəbərlər
                </Typography>
            </Box>
            <Stack className="newspagcolumns" flexDirection="row" gap="20%" justifyContent="center" marginTop="40px">

            <Stack flexDirection="column" gap="10px">
                <Box className="boexda1">
                    <img style={{width:"300px"}} src={newstwo} alt="" />
                    <Typography width="300px">
                    Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....
                    </Typography>
                    <Button sx={{color:"#5E3928"}}>
                    Daha çox oxu <ArrowRightAltIcon/>
                    </Button>
                </Box>

                <Box>
                    <img style={{width:"300px"}} src={newsone} alt="" />
                    <Typography width="300px">
                    Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....
                    </Typography>
                    <Button sx={{color:"#5E3928"}}>
                    Daha çox oxu <ArrowRightAltIcon/>
                    </Button>
                </Box>
                <Box>
                    <img style={{width:"300px"}} src={newstwo} alt="" />
                    <Typography width="300px">
                    Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....
                    </Typography>
                    <Button sx={{color:"#5E3928"}}>
                    Daha çox oxu <ArrowRightAltIcon/>
                    </Button>
                </Box>

            </Stack>

            <Stack flexDirection="column" gap="10px">
                <Box>
                    <img style={{width:"300px"}} src={newstwo} alt="" />
                    <Typography width="300px">
                    Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....
                    </Typography>
                    <Button sx={{color:"#5E3928"}}>
                    Daha çox oxu <ArrowRightAltIcon/>
                    </Button>
                </Box>

                <Box>
                    <img style={{width:"300px"}} src={newsfor} alt="" />
                    <Typography width="300px">
                    Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....
                    </Typography>
                    <Button sx={{color:"#5E3928"}}>
                    Daha çox oxu <ArrowRightAltIcon/>
                    </Button>
                </Box>
                <Box>
                    <img style={{width:"300px"}} src={newsthree} alt="" />
                    <Typography width="300px">
                    Efir yağlarının faydalarını çox qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, burada bəzi nüanslar yaranır. Müəyyən qaydalara ciddi riayət etmək lazımdır....
                    </Typography>
                    <Button sx={{color:"#5E3928"}}>
                    Daha çox oxu <ArrowRightAltIcon/>
                    </Button>
                </Box>

            </Stack>
           
            </Stack>
   <Stack  alignItems="center" padding="20px">

            <Pagination className="pgpage" count={4} variant="outlined" shape="rounded" />
   </Stack>
          
        </PageContainer>
        
        </>
    )
}

export default News