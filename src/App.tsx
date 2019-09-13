import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { useInterval } from './hooks/useInterval';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const App: React.FC = () => {
  const [ip, setIp] = useState('⌛');

  useInterval(async () => {
    const response = await fetch('/api/machine-ip').then(response => response.json());
    setIp(response.address);
  }, 1000);

  return (
    <Container>
      <Grid container={true} alignContent={'center'} alignItems={'center'} style={{minHeight: '100vh'}}>
        <Typography variant={'h1'}>Hello from ip:</Typography>
        <Typography variant={'h1'}><Box fontWeight={900}>{ip}</Box></Typography>
      </Grid>
    </Container>
  );
};

export default App;
