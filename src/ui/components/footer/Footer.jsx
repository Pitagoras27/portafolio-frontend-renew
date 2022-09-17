import { Box, Container } from "@mui/system";
import ornametFooter from "../../../assets/imgs/mycellaneous/ornamentFooter.svg";

export const Footer = () => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box className="shape shape-bottom">
          <img src={ornametFooter} alt="Footer bg" />
        </Box>
      </Box>
      <Box sx={{
        background: 'linear-gradient( #1c3643, #273b47 25%, #1e5372);',
        padding: '50px',
        width: '100%'
      }}>
        <Container maxWidth="lg">
          Footer!
        </Container>
      </Box>
    </>
  )
}