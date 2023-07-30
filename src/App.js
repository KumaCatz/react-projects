import Welcome from './welcome/components/Welcome';
import ActorCard from './actors/components/ActorCard';
import Dogapi from './dogapi/components/Dogapi';
import MoviesList from './movie/components/MoviesList';
import Forms from './forms/components/Forms';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      <ActorCard />
      {/* <Dogapi /> */}
    </div>
  );
}

export default App;
