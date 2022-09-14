import {
  Button,
  Grid,
  Link, Typography
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Buttons = ({ title, linkTitle, path } = {}) => {
  return (
    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          fullWidth
          type="submit"
          // disabled // TODO Controls this attribute
        >
          <Typography>{ title }</Typography>
        </Button>
      </Grid>

      { (path && linkTitle) && (
        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to={ path }>
            <Typography sx={{ mt: 2 }}>{ linkTitle }</Typography>
          </Link>
        </Grid>
      )}
    </Grid>   
  );
}