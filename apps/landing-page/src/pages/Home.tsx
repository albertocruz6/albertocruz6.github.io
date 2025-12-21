import { Container, Box, Typography } from '@mui/material';
import AnimatedText from '../components/AnimatedText/AnimatedText';

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ my: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '3.6rem' },
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          <AnimatedText>¡Hola!</AnimatedText>
          <br />
          Esta página está en construcción.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
