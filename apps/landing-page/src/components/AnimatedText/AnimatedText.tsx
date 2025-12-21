import { Box } from '@mui/material';
import { keyframes } from '@mui/material/styles';

interface AnimatedTextProps {
  children: string;
  delay?: number;
}

const jumpAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AnimatedText = ({ children, delay = 0.1 }: AnimatedTextProps) => {
  const letters = children.split('');

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
      }}
    >
      {letters.map((letter, index) => (
        <Box
          key={index}
          component="span"
          sx={{
            display: 'inline-block',
            animation: `${jumpAnimation} 1.5s ease-in-out infinite`,
            animationDelay: `${index * delay}s`,
            // Preserve spaces
            minWidth: letter === ' ' ? '0.25em' : 'auto',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </Box>
      ))}
    </Box>
  );
};

export default AnimatedText;
