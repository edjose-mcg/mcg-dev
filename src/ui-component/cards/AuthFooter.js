// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="/" target="_blank" underline="hover">
      mycaregorithm.com
    </Typography>
    <Typography variant="subtitle2" component={Link} href="/" target="_blank" underline="hover">
      &copy; 2024
    </Typography>
  </Stack>
);

export default AuthFooter;
