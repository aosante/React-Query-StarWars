import { useQuery } from 'react-query';

import Planet from './Planet';

const fetchPlanets = async () => {
  const response = await fetch(`http://swapi.dev/api/planets/`);
  return response.json();
};

const Planets = () => {
  const { data, isError, isLoading, isSuccess } = useQuery(
    'planets',
    fetchPlanets
  );

  return (
    <div>
      <h2>Planets</h2>
      {isLoading && <div>Loading data...</div>}
      {isError && <div>Error fethcing data</div>}
      {isSuccess && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
