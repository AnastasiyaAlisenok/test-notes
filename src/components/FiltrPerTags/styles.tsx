export const containerStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  paddingLeft: '25px',
};

export const formControlStyle = {
  m: 1,
  width: 150,
  fontSize: '8px',
  boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
};

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 5;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 150,
      backgroundColor: '#fff',
      fontSize: '12px',
    },
  },
};
