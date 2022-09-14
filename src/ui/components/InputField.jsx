import {
  Grid,
  TextField
} from "@mui/material";

export const InputField = ({
  label,
  name,
  type,
  value,
  multiline,
  minRows,
  handleChange,
  helperText,
  error
} = {}) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          label={label}
          name={name}
          type={type}
          value={value}
          autoComplete="off"
          onChange={handleChange}
          helperText={helperText}
          error={error}
          multiline={multiline}
          minRows={minRows}
          fullWidth
        />
      </Grid>
    </Grid>
  )
}