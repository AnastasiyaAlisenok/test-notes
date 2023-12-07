import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState, SetStateAction, Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MenuProps, containerStyles } from './styles';

interface IFiterTypes {
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
}

const FiltPerTags = (props: IFiterTypes): JSX.Element => {
  const { selectedTags, setSelectedTags } = props;
  const allTags = useSelector((state: RootState) => state.allTags);
  const [tags, setTags] = useState<string[]>(allTags);

  useEffect(() => {
    setTags(allTags);
  }, [allTags]);

  const handleChange = (event: SelectChangeEvent<typeof tags>): void => {
    const {
      target: { value },
    } = event;
    if ((value as string[]).join() !== 'No tags') {
      setSelectedTags(typeof value === 'string' ? value.split(',') : value);
    }
  };

  return (
    <div style={containerStyles}>
      <FormControl
        sx={{
          m: 1,
          width: 150,
          fontSize: '8px',
        }}
      >
        <InputLabel
          sx={{
            fontSize: '12px',
          }}
          id="multiple-tags-label"
        >
          Filtr
        </InputLabel>
        <Select
          labelId="multiple-tags-label"
          id="multiple-tags"
          size="small"
          multiple
          value={selectedTags}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {tags.length > 0 ? (
            tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="No tags">No tags</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default FiltPerTags;
