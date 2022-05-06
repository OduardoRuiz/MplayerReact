
import { Grid } from '@mui/material';
import AdicionaMusica from './components/AdicionaMusica';
import Header from './components/Header';
import ListaMusica from './components/ListaMusica';
import TocadorMusica from './components/TocadorMusica';

function App() {
  return (
    <>
      <Header />
      <Grid container style={{ marginTop: '80px' }}>
        <Grid item md={7} xs={12}>
          <AdicionaMusica />
          <ListaMusica />
        </Grid>
        <Grid item md={5}  xs={12}>
          <TocadorMusica />
        </Grid>
      </Grid>
    </>

  );
}

export default App;
