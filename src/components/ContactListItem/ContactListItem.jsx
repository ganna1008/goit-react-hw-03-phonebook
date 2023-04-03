import PropTypes from 'prop-types';
import { ContactItem, ContactItemButton } from './ContactListItem.style';

export const ContactListItem = ({
  contact: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <ContactItemButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ContactItemButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
