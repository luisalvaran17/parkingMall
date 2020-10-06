import React from 'react';
import './assets/styles/components/Contenido.css'
import RenderParking from './components/RenderParking'
import SideBar from './components/SideBar';
import Grid from '@material-ui/core/Grid';
import InfoGeneral from './components/InfoGeneral';

class Contenido extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideBar/>
        </Grid>
        <Grid item xs={8}>
          <RenderParking />
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={8}>
          <InfoGeneral/>
        </Grid>
      </Grid>
    );
  }
}
export default Contenido;