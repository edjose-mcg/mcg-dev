import { useEffect, useState } from 'react';
import { useMsal } from "@azure/msal-react";
// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

// import Cases from './Cases';
import Case1 from './cases/Case1';
import Case2 from './cases/Case2';
import Case3 from './cases/Case3';
import Case4 from './cases/Case4';
import Case5 from './cases/Case5';
import Case6 from './cases/Case6';
import Case7 from './cases/Case7';
import Case8 from './cases/Case8';
import Case9 from './cases/Case9';
import Case10 from './cases/Case10';
import Case11 from './cases/Case11';
import Case12 from './cases/Case12';
import Case13 from './cases/Case13';
import Case14 from './cases/Case14';
import Case15 from './cases/Case15';
import Case16 from './cases/Case16';
import Kidney from './cases/Kidney';
import Nasopharynx from './cases/Nasopharynx';
import OralCavity from './cases/OralCavity';
import Stomach from './cases/Stomach';
import ExistingCases from './ExistingCases';

import Orgs from './_Orgs';
import Organizations from './Organizations';
import Admins from './Admins';
import Users from './Users';

//Icons
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Divider from '@mui/material/Divider';
import GroupsIcon from '@mui/icons-material/Groups';
import DomainAddIcon from '@mui/icons-material/DomainAdd';

import CaseDrawer from './CaseDrawer'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const { instance } = useMsal();
  const myAccount = instance.getActiveAccount();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      {/* Welcome Message */}
      {myAccount ? <Grid item xs={12} id="totals">
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h1 style={{ marginLeft: "24px", marginBottom: "0", marginTop: "28px" }}>
              Welcome back, <span style={{ fontSize: "24px" }}>{myAccount.name}</span>
            </h1>
          </Grid>
        </Grid>
      </Grid> : <></>}

      <Grid item xs={12}>
        <Divider style={{ marginTop: "3px" }} />
      </Grid>

      {/* Cases */}
      <Grid item xs={12} id="totals" style={{ marginTop: "-10px" }}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12} style={{ margin: "0 15px" }}>
            <h2 style={{ marginBottom: "-5px", marginLeft: "15px" }}><MedicalServicesIcon style={{ verticalAlign: "bottom" }} /> Create a New Case</h2>
            <CaseDrawer />
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12} style={{ margin: "0 15px" }}>
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
            <h2 style={{ margin: "20px 30px -5px" }}><NextWeekIcon style={{ verticalAlign: "bottom" }} /> Existing Cases</h2>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div style={{ margin: "0 15px" }}>
              <ExistingCases />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider style={{ marginTop: "35px" }} />
      </Grid>

      {/* Statistics */}
      <Grid item xs={12} id="totals" style={{ margin: "0 15px" }}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h2 style={{ marginBottom: "-5px", marginLeft: "10px" }}><AssessmentIcon style={{ verticalAlign: "sub" }} /> Statistics</h2>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ margin: "0 15px" }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider style={{ marginTop: "35px" }} />
      </Grid>

      {/* App Owners */}
      <Grid item xs={12} id="usersTable" style={{ paddingLeft: "40px", paddingRight: "15px" }}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h2 style={{ marginBottom: "-5px", marginLeft: "10px" }}><DomainAddIcon style={{ verticalAlign: "sub" }} /> My Owners, Organizations, Admins, Users, & Patients</h2>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Orgs />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider style={{ marginTop: "35px" }} />
      </Grid>

      {/* Organizations */}
      <Grid item xs={12} id="usersTable" style={{ paddingLeft: "40px", paddingRight: "15px" }}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h2 style={{ marginBottom: "-5px", marginLeft: "10px" }}><CorporateFareIcon style={{ verticalAlign: "sub" }} /> My Organizations</h2>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Organizations />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider style={{ marginTop: "35px" }} />
      </Grid>

      {/* Admins */}
      <Grid item xs={12} id="usersTable" style={{ paddingLeft: "40px", paddingRight: "15px" }}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h2 style={{ marginBottom: "-5px", marginLeft: "10px" }}><GroupsIcon style={{ verticalAlign: "sub" }} /> My Admins</h2>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Admins />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider style={{ marginTop: "35px" }} />
      </Grid>

      {/* Users - Roles */}
      <Grid item xs={12} id="usersTable" style={{ paddingLeft: "40px", paddingRight: "15px" }}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <h2 style={{ marginBottom: "-5px", marginLeft: "10px" }}><GroupIcon style={{ verticalAlign: "sub" }} /> My Users</h2>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Users />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
