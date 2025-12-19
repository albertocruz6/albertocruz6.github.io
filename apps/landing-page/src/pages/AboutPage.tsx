import { Container, Typography, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ my: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
        >
          About
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '0.95rem', sm: '1rem' }, mb: 2 }}
        >
          This is the about page. Add your information here.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
