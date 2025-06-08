import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Button, TextField } from "@mui/material";

const css = {
  containerDiv: ["flex", "justify-center", "mt-5"].join(" "),
  contactForm: [
    "flex",
    "flex-col",
    "bg-white",
    "border-2",
    "p-8",
    "rounded-2xl",
    "shadow-lg",
  ].join(" "),
  label: "mb-5",
};

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map((contact) => contact.name);

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      event.target.reset();
      return alert(`${contact.name} is alredy in contacts`);
    }

    dispatch(addContact(contact));

    event.target.reset();
  };

  return (
    <div className={css.containerDiv}>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label className={css.label}>
          <TextField
            type="text"
            size="small"
            name="name"
            label="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          <TextField
            type="tel"
            size="small"
            name="number"
            label="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </form>
    </div>
  );
};
