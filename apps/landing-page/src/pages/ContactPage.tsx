import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/albertocruz6/';
  const twitterUrl = 'https://x.com/alberto_cruzsal';
  const emailAddress = 'a.cruz.salaman@ieee.org';

  return (
    <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ my: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}
        >
          Contact
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '0.95rem', sm: '1rem' }, mb: 3 }}
        >
          Get in touch with me here.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            aria-label="LinkedIn"
            component="a"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#0077B5',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E0',
              '&:hover': {
                backgroundColor: '#F5F5F5',
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
          </IconButton>

          <IconButton
            aria-label="X/Twitter"
            component="a"
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#000000',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E0',
              '&:hover': {
                backgroundColor: '#F5F5F5',
              },
            }}
          >
            <XIcon sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
          </IconButton>

          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            component="a"
            href={`mailto:${emailAddress}`}
            sx={{
              textTransform: 'none',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            Email
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ContactPage;
