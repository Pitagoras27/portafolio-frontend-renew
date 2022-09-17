import { Typography } from "@mui/material";

export const Brand = ({ mobileDisplay, deskDisplay, deviceAligment }) => {
  return (
    <>
      <Typography
        sx={{
          display: { xs: mobileDisplay, md: deskDisplay},
          mr: 1,
          fontSize: '1.5em'
        }} 
        component="span"
      >
        {`<`}
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: mobileDisplay, md: deskDisplay },
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Carlos Dev
      </Typography>
      <Typography 
        sx={{ 
          display: { xs: mobileDisplay, md: deskDisplay},
          ml: 1,
          fontSize: '1.5em',
          flexGrow: deviceAligment,
          mr: 4
        }}
        component="span">
          {`/>`}
      </Typography>
    </>
  )
}