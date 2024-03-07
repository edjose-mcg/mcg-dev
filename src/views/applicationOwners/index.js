// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import Orgs from '../dashboard/Default/_Orgs';

//Icons
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

// ==============================|| APP USERS PAGE ||============================== //

const ApplicationOwnersPage = () => (
  <MainCard>
    <Typography variant="body2" style={{ paddingBottom: "15px" }}>
      <h2 style={{ marginLeft: "10px", marginBottom: "30px" }}><CorporateFareIcon style={{ verticalAlign: "sub" }} /> App Owners</h2>
      <Orgs />
    </Typography>
  </MainCard>
);

export default ApplicationOwnersPage;
