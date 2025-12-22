import { Container, Typography, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ my: { xs: 2, sm: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Box
            component="img"
            src="/puerto-rico-flag.svg"
            alt="Puerto Rico Flag"
            sx={{
              width: { xs: '40px', sm: '50px', md: '60px' },
              height: 'auto',
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, mb: 0 }}
          >
            About
          </Typography>
          <Box
            component="img"
            src="/carolina-pr-flag.svg"
            alt="Carolina, PR Flag"
            sx={{
              width: { xs: '40px', sm: '50px', md: '60px' },
              height: 'auto',
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '0.95rem', sm: '1rem' }, mb: 2, mt: 2 }}
        >
          (Acerca de mi)
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
