export const containerStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  paddingLeft: '25px',
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
