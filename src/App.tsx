import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Response } from './utils/MockType'; // Importando apenas Fixture

function App() {
  const [allFixtures, setAllFixtures] = useState<Response[]>([]);
  console.log({ allFixtures })

  function formatDate(dateString: Date) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    axios.get<Response[]>('http://localhost:3333/response')
      .then(resposta => {
        setAllFixtures(resposta.data); // Define o estado com a lista de fixtures
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }, []);

  return (
    <>
      <Header.Root>
        <Header.Logo />
        <Header.Menu />
      </Header.Root>
      <Container.Root>
        <h2>Classificação</h2>
        <h2>Jogos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {allFixtures.length > 0 ? (
            allFixtures.map(fixture => (
              <div key={fixture.fixture.id} className="mx-auto bg-white p-8 rounded-lg shadow-md w-64">
                <div className="w-full text-center">
                  <h3 className="text-lg">
                    {formatDate(fixture.fixture.date)}
                  </h3>
                  <h3 className="text-xs">
                    {fixture.fixture.venue.name} - {fixture.fixture.venue.city}
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center text-center">
                    <img src={fixture.teams.home.logo} alt={fixture.teams.home.name} className="w-14" />
                    <h4>{fixture.teams.home.name}</h4>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold">
                      {fixture.score.fulltime.home}
                    </span>
                    <span className="text-xs font-thin">x</span>
                    <span className="text-lg font-bold">
                      {fixture.score.fulltime.away}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img src={fixture.teams.away.logo} alt={fixture.teams.away.name} className="w-14" />
                    <h4>{fixture.teams.away.name}</h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </Container.Root>
    </>
  );
}

export default App;
