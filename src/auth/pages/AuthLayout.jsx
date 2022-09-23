import { Grid, Typography } from "@mui/material";
import bgAuth from "../../assets/imgs/mycellaneous/bgAuth.jpg";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bgAuth})`,
        backgroundSize: 'cover',
        padding: 4
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sm={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
