import { List } from '@mui/icons-material';
import { Stack, Box } from '@mui/material';
import { header, listIcon } from './styles';

const Header = (): JSX.Element => {
  return (
    <Box sx={header}>
      <Stack
        sx={{ width: '5%' }}
        useFlexGap
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <List sx={listIcon} />
        <span>Notes</span>
      </Stack>
    </Box>
  );
};

export default Header;
