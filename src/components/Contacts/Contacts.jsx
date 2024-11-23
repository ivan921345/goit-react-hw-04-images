const Contacts = ({ contacts = [], onDelete }) => {
  return (
    <div>
      {contacts.map(contact => (
        <li key={contact.name}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.number}</p>
          <button type="button" onClick={() => onDelete(contact.name)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Contacts;
