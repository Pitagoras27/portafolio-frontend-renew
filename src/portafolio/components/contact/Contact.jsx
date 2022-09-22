import { Box, Container, Typography } from "@mui/material"
import { HeaderSection } from "../../../ui"

export const Contact = () => {
  return (
    <Box sx={{
        backgroundColor: 'white',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <HeaderSection headerTitle="Contact" idScroll="contact" />
        <Typography>Real politik</Typography>
      </Container>
    </Box>
  )
}