import { Stack } from '@mui/material';

import './App.css';
import BodyApp from './components/BodyApp'
import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'

function App() {
  return (
    <Stack className='App' height="100vh">
      <HeaderApp />
      <BodyApp />
      <FooterApp />
    </Stack>
  );
}

export default App;
