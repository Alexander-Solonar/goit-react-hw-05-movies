import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as API from '../../servise/api';
import { Audio } from 'react-loader-spinner';
import MovesList from 'components/moviesList';
import css from './Movies.module.css';

const Movies = () => {
  const [collectionMovies, setCollectionMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      try {
        setIsLoading(true);
        const response = await API.searchMovies(query);
        setCollectionMovies(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
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
      {isLoading && <Audio wrapperClass={css.loader} />}

      {!isLoading && !isError && <MovesList collection={collectionMovies} />}

      {isError && <h3>The resource you requested could not be found!</h3>}
    </div>
  );
};

export default Movies;
