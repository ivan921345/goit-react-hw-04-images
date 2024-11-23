import { Formik, Form, Field } from 'formik';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <Formik onSubmit={onSubmit} initialValues={{ query: '' }}>
        <Form className="SearchForm">
          <Field type="text" name="query" className="SearchForm-input" />
          <button type="submit" className="SearchForm-button">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default Searchbar;
