import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';
import useFetchData from '../services/useFetchData';

export const Home = () => {
  const url = 'http://localhost:3004/posts';
  const { data } = useFetchData(url);

  return (
    <div className="home">
      <Header />
      <CardList data={data} />
    </div>
)};

export default Home;