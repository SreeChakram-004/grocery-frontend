import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Adjust the color to match your primary color
    },
    secondary: {
      main: '#f50057', // Secondary color
    },
    error: {
      main: '#ff1744', // Error color
    },
    warning: {
      main: '#ff9800', // Warning color
    },
    info: {
      main: '#03a9f4', // Info color
    },
    success: {
      main: '#4caf50', // Success color
    },
    text: {
      primary: '#212121', // Primary text color
      secondary: '#757575', // Secondary text color
    },
    background: {
      default: '#f5f5f5', // Default background color
    },
  },
});

export default Theme;
