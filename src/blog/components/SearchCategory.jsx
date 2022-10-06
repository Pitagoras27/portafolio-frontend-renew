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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h5"
              sx={{
                margin: '10px 0',
                textAlign: 'center' 
              }}>
              This section represents my last learning about my job how frontend developer
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CategorySelector label="Select a topic" options={categories} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}