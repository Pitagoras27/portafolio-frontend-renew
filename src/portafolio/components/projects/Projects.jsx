import { Box, Container, Typography } from "@mui/material"

export const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: 'white',
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Typography
            gutterBottom
            variant="h4"
            align="center"
            className="marginHeaders"
          >
            Projects
        </Typography>
      </Container>
    </Box>
  )
}