import { Box, Container, Grid, Typography } from "@mui/material";
import { categories } from "../../data";
import { CategorySelector } from "./CategorySelector";

export const SearchCategory = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        marginTop: '64px',
        paddingTop: '54px'
        
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" component="h5"
              sx={{
                margin: '10px 0',
                textAlign: 'center' 
              }}>
              This section is building now, some content is incomplete or link are disable
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <CategorySelector label="Select a topic" options={categories} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}