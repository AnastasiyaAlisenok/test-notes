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

export const field = {
  width: '100%',
  height: '100px',
  border: '1px solid #747474',
  color: '#000000',
};

export const tagsContainer = {
  color: '#000000',
  width: '100%',
  fontSize: '10px',
  minHeight: '10px',
};

export const tagStyle = {
  display: 'inline',
  marginRight: '5px',
};

export const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#f09a06',
  '&:hover': {
    backgroundColor: '#fdbd4e',
  },
}));
