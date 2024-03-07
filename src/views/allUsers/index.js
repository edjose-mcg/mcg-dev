// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import Users from '../dashboard/Default/Users';

//Icons
import GroupIcon from '@mui/icons-material/Group';

// ==============================|| ALL USERS PAGE ||============================== //

const AllUsersPage = () => (
  <MainCard>
    <Typography variant="body2" style={{ paddingBottom: "15px" }}>
      <h2 style={{ marginLeft: "10px", marginBottom: "30px" }}><GroupIcon style={{ verticalAlign: "sub" }} /> My Users</h2>
      <Users />
    </Typography>
  </MainCard>
);

export default AllUsersPage;
