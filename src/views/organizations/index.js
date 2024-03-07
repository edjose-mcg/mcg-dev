// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import Organizations from '../dashboard/Default/Organizations';

//Icons
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

// ==============================|| ORGANIZATIONS PAGE ||============================== //

const OrganizationsPage = () => (
  <MainCard>
    <Typography variant="body2" style={{ paddingBottom: "15px" }}>
      <h2 style={{ marginLeft: "10px", marginBottom: "30px" }}><CorporateFareIcon style={{ verticalAlign: "sub" }} /> My Organizations</h2>
      <Organizations />
    </Typography>
  </MainCard>
);

export default OrganizationsPage;
