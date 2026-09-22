import Header from './Header';
import CardPizza from './CardPizza';
import Napolitana from '../assets/images/napolitana.png';
import Hawaiana from '../assets/images/hawaiana.png';
import Pepperoni from '../assets/images/pepperoni.png';

const Home = () => {
  return (
    <main>
      <Header />

      <div className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-auto">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
              img={Napolitana}
            />
          </div>
          <div className="col-auto">
            <CardPizza
              name="Hawaiana"
              price={6950}
              ingredients={['mozzarella', 'piña', 'Jamón', '']}
              img={Hawaiana}
            />
          </div>
          <div className="col-auto">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={['mozzarella', 'pepperoni', 'orégano']}
              img={Pepperoni}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
