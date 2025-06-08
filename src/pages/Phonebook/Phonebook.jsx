import { Filter } from "../../components/Filter/Filter";
import { ContactsForm } from "../../components/ContactsForm/ContactsForm";
import { ContactsList } from "../../components/ContactsList/ContactsList";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";

const css = {
  containerDiv: ["flex", "mb-4", "gap-4"].join(" "),
  contactsDiv: ["mt-6"],
};

const Phonebook = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div className={css.containerDiv}>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <ContactsForm />
        <Filter />
      </div>
      <div className={css.contactsDiv}>
        {isLoading ? <p>Loading contacts...</p> : <ContactsList />}
        {isError && <p>Something went wrong. Try again later.</p>}
      </div>
    </div>
  );
};

export default Phonebook;
