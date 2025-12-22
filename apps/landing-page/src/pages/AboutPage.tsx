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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Box
            component="img"
            src="/alberto_image.jpg"
            alt="Alberto Cruz"
            sx={{
              width: { xs: '200px', sm: '250px', md: '300px' },
              height: { xs: '200px', sm: '250px', md: '300px' },
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow:
                '0 0 15px 3px rgba(255, 215, 0, 0.3), 0 0 30px 6px rgba(255, 215, 0, 0.15)',
              border: '2px solid rgba(255, 215, 0, 0.5)',
              transition: 'all 0.4s ease-in-out',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.15)',
                boxShadow:
                  '0 0 25px 8px rgba(255, 215, 0, 0.5), 0 0 50px 15px rgba(255, 215, 0, 0.25)',
                border: '3px solid rgba(255, 215, 0, 0.8)',
              },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
