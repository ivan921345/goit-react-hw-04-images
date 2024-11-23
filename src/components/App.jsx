import { useEffect, useState } from 'react';
import '../styles/styles.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import * as API from '../services/api';
import 'react-toastify/dist/ReactToastify.css';
import Notiflix from 'notiflix';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      Notiflix.Loading.custom('Loading...', {
        customSvgUrl:
          'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
      });
    } else {
      Notiflix.Loading.remove();
    }
  }, [isLoading]);

  const onSearchbarSubmit = async (values, { resetForm }) => {
    try {
      setQuery(values.query);
      setIsLoading(true);
      const resp = await API.fetchImages(values.query);

      if (resp.hits.length === 0) {
        Notiflix.Notify.failure(
          'No results found, please try a different query'
        );
        throw new Error();
      } else {
        setImages(resp.hits);
        resetForm();
        Notiflix.Notify.success(`Found about ${resp.totalHits} results`);
      }
    } catch (error) {
      Notiflix.Notify.failure(
        'There was some errors, please reload the page and try again'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onLoadMoreButtonClick = async () => {
    try {
      setIsLoading(true);
      setPage(prevPage => prevPage + 1);
      const resp = await API.fetchImages(query, page);
      setImages(prevImages => [...prevImages, ...resp.hits]);
    } catch (error) {
      Notiflix.Notify.failure(
        'There has ocurred an error, please reload page and try again'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSearchbarSubmit} />
      <ImageGallery images={images} />
      {images.length === 0 ? '' : <Button onClick={onLoadMoreButtonClick} />}
    </div>
  );
};

export default App;
