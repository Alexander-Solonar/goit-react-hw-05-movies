import { useEffect, useState } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as API from '../components/servise/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      const response = await API.searchMovies(query);
      setMovies(response);
    })();
  }, [query]);

  const handleSubmit = (values, { resetForm }) => {
    values.search === ''
      ? setSearchParams({})
      : setSearchParams({ query: values.search });
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
