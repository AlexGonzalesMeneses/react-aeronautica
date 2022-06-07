import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AirplanemodeActive } from '@mui/icons-material';
import { fetchAlbum } from '../services/fetch';
import { deleteAlbum } from '../services/fetch';
import ModalItem from './ModalItem';
import ModalView from './ModalView';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Aeronautical web made by Brenda Cordova
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  const [album, setAlbum] = React.useState([]);
  const [item, setItem] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    fetchAlbum().then((album) => setAlbum(album));
  }, []);

  const handleClick = (item) => {
    setItem(item);
    setOpen(true);
  };

  const handleDelete = ({ id }) => {
    deleteAlbum(id);
    setAlbum(album.filter((item) => item.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <AirplanemodeActive />
          <Typography variant='h6' color='inherit' noWrap>
            Aeronautical Web App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {album.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                  }}
                >
                  <CardMedia component='img' height='140' image={card.photo} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.name}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' onClick={() => handleClick(card)}>
                      View
                    </Button>
                    <Button size='small' onClick={() => handleDelete(card)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {item && <ModalView item={item} open={open} setOpen={setOpen} />}
        </Container>
        <ModalItem album={album} setAlbum={setAlbum} />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='text.secondary'
          component='p'
        >
          Aeronautical Inventory App
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
