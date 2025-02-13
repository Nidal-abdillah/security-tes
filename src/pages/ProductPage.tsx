import { Link, useParams, useSearchParams } from 'react-router';
export const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const handdleChangeSort = () => {
    searchParams.set('sort', 'price');
    setSearchParams(searchParams);
  };
  return (
    <div>
      <h1>This is Product page</h1>
      <h2>{params.name}</h2>
      <ul>
        <li>sort: {searchParams.get('sort')}</li>
        <li>name: {searchParams.get('name')}</li>
      </ul>
      <button onClick={handdleChangeSort}>Change sort</button>
      <br />
      <Link to={'/about'}>About Page</Link>
    </div>
  );
};
