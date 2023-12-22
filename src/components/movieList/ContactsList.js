import { ContactsItem } from 'components/movieCard/ContactsItem';

export const ContactsList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <ContactsItem item={item} onDelete={onDelete} key={item.id} />
      ))}
    </ul>
  );
};
