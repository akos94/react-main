import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import DashboardCard from './dashboardcard';

export default function Dashboard() {

  const [dashboards, setDashboards] = useState([])

  useEffect (() => {
    fetch('http://localhost:8000/dashboard')
      .then(res => res.json())
      .then(data => setDashboards(data))
  }, [])

  return (
    <Grid container spacing={3}>
      {dashboards.map(dashboard => (
        <Grid item key={dashboard.id} xs={12} md={6} lg={4}>  
          <DashboardCard dashboard={dashboard}/>
        </Grid>
      ))}
    </Grid>
    
  );
}