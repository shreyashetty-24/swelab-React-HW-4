import { Typography } from '@mui/material';

function Header({ title }) {
  return (
    <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
      {title}
    </Typography>
  );
}

export default Header;