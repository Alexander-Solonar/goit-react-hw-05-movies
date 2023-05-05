import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as API from '../components/servise/api';
import MovesList from 'components/moviesList';

const Movies = () => {
  const [collectionMovies, setCollectionMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      const response = await API.searchMovies(query);
      setCollectionMovies(response);
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
      <MovesList
        collection={collectionMovies}
        locationFrom={{ from: location }}
      />
    </div>
  );
};

export default Movies;
