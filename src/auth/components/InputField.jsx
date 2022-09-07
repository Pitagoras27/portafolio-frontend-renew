import {
  Grid,
  TextField
} from "@mui/material";

export const InputField = ({
  label,
  name,
  type,
  value,
  handleChange,
  helperText,
  error
}) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          label={label}
          name={name}
          type={type}
          value={value}
          placeholder="correo@google.com"
          autoComplete="off"
          onChange={handleChange}
          helperText={helperText}
          error={error}
          fullWidth
        />
      </Grid>
    </Grid>
  )
}