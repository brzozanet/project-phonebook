import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { Button } from "@mui/material";
import css from "./ContactsList.module.css";

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactsItem}>
          <span className={css.contactsName}>
            {contact.name}: {contact.number}
          </span>
          <Button type="submit" onClick={() => handleDelete(contact.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
