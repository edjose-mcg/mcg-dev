// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import Admins from '../dashboard/Default/Admins';

//Icons
import GroupsIcon from '@mui/icons-material/Groups';

// ==============================|| ADMINS PAGE ||============================== //

const AdminsPage = () => (
  <MainCard>
    <Typography variant="body2" style={{ paddingBottom: "15px" }}>
      <h2 style={{ marginLeft: "10px", marginBottom: "30px" }}><GroupsIcon style={{ verticalAlign: "sub" }} /> My Admins</h2>
      <Admins />
    </Typography>
  </MainCard>
);

export default AdminsPage;
