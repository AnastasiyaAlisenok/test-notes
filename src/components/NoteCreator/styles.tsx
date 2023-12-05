import { styled, Button, ButtonProps } from '@mui/material';

export const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#f09a06',
  '&:hover': {
    backgroundColor: '#fdbd4e',
  },
}));
