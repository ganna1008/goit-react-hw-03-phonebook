import PropTypes from 'prop-types';
import { InputField, InputLabel } from './Filter.styled';
export const Filter = ({ filter, changeFilter }) => {
  return (
    <InputLabel>
      Find contacts by name
      <InputField type="text" value={filter} onChange={changeFilter} />
    </InputLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
