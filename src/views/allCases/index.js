// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

import ExistingCases from '../dashboard/Default/ExistingCases';
import Case1 from '../dashboard/Default/cases/Case1';
import Case2 from '../dashboard/Default/cases/Case2';
import Case3 from '../dashboard/Default/cases/Case3';
import Case4 from '../dashboard/Default/cases/Case4';
import Case5 from '../dashboard/Default/cases/Case5';
import Case6 from '../dashboard/Default/cases/Case6';
import Case7 from '../dashboard/Default/cases/Case7';
import Case8 from '../dashboard/Default/cases/Case8';
import Case9 from '../dashboard/Default/cases/Case9';
import Case10 from '../dashboard/Default/cases/Case10';
import Case11 from '../dashboard/Default/cases/Case11';
import Case12 from '../dashboard/Default/cases/Case12';
import Case13 from '../dashboard/Default/cases/Case13';
import Case14 from '../dashboard/Default/cases/Case14';
import Case15 from '../dashboard/Default/cases/Case15';
import Case16 from '../dashboard/Default/cases/Case16';
import Kidney from '../dashboard/Default/cases/Kidney';
import Stomach from '../dashboard/Default/cases/Stomach';
import OralCavity from '../dashboard/Default/cases/OralCavity';
import Nasopharynx from '../dashboard/Default/cases/Nasopharynx';

//Icons
import MedicalServicesIcon from '@mui/icons-material/SupervisorAccount';
import NextWeekIcon from '@mui/icons-material/NextWeek';

// ==============================|| CASES PAGE ||============================== //

const AllCasesPage = () => (
  <MainCard>
    <Typography variant="body2" style={{ paddingBottom: "15px" }}>
      <h2 style={{ marginLeft: "10px", marginBottom: "30px" }}><MedicalServicesIcon style={{ verticalAlign: "bottom" }} /> Create a New Case</h2>

      <Grid item xs={12} id="totals">
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing} style={{ marginBottom: "20px" }}>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case1 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case2 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case3 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case4 />
              </Grid>
            </Grid>

            <Grid container spacing={gridSpacing} style={{ marginBottom: "20px" }}>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case5 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case6 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case7 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Kidney />
              </Grid>
            </Grid>

            <Grid container spacing={gridSpacing} style={{ marginBottom: "20px" }}>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <OralCavity />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case9 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case10 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case11 />
              </Grid>
            </Grid>

            <Grid container spacing={gridSpacing} style={{ marginBottom: "20px" }}>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case12 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case8 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Nasopharynx />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case13 />
              </Grid>
            </Grid>

            <Grid container spacing={gridSpacing} style={{ marginBottom: "20px" }}>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case14 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case15 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Case16 />
              </Grid>
              <Grid item sm={6} xs={12} md={3} lg={3}>
                <Stomach />
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12} style={{ paddingTop: "0" }}>
            <h2 style={{ margin: "20px 10px 0px" }}><NextWeekIcon style={{ verticalAlign: "bottom" }} /> Existing Cases</h2>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ExistingCases />
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  </MainCard>
);
export default AllCasesPage;
