import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { League, Response } from './utils/FixturesTypes'; // Importando apenas Fixture
import { extractNumberFromString, formatDate, standingTextColor } from './utils/functions';
import { Standing } from './utils/StandingsTypes';

function App() {
  const [allFixtures, setAllFixtures] = useState<Response[]>([]);
  const [standings, setStandings] = useState<Standing[]>([]);

  console.log({ standings })

  useEffect(() => {
    axios.get<Response[]>('http://localhost:3333/fixtures')
      .then(response => {
        setAllFixtures(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    axios.get<League, any>('http://localhost:3333/response')
      .then(response => {
        const result = response.data[0].league.standings[0]
        setStandings(result);
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
        <h2>Tabela</h2>
        <div className="mx-auto bg-white p-6 py-4 rounded-lg shadow-md">
          <table className="table-fixed border-separate border-spacing-1 w-full">
            <thead className="border-b border-b-slate-500 text-black">
              <tr>
                <td className="w-2/5">
                  Classificação
                </td>
                <td>
                  P
                </td>
                <td>
                  J
                </td>
                <td>
                  V
                </td>
                <td>
                  E
                </td>
                <td>
                  D
                </td>
                <td>
                  GP
                </td>
                <td>
                  GC
                </td>
                <td>
                  SG
                </td>
              </tr>
            </thead>
            <tbody>
              {standings.map(standing => (
                <tr key={standing.rank} className={standing.team.id !== 134 ? "opacity-50" : "opacity-100"}>
                  <td className="flex items-center gap-2 pr-4">
                    <span className={`text-lg ${standingTextColor(standing.description)}`}>
                      {standing.rank}
                    </span>
                    <span>
                      {standing.team.name}
                    </span>
                    <span className="ml-auto">
                      <div className={`statusClass status-${standing.status}`}>&nbsp;</div>
                    </span>
                  </td>
                  <td className="font-bold">
                    {standing.points}
                  </td>
                  <td>
                    {standing.all.played}
                  </td>
                  <td>
                    {standing.all.win}
                  </td>
                  <td>
                    {standing.all.draw}
                  </td>
                  <td>
                    {standing.all.lose}
                  </td>
                  <td>
                    {standing.all.goals.for}
                  </td>
                  <td>
                    {standing.all.goals.against}
                  </td>
                  <td>
                    {standing.goalsDiff}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2>Jogos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {allFixtures.length > 0 ? (
            allFixtures.map(fixture => (
              <div key={fixture.fixture.id} className="mx-auto bg-white p-6 py-4 rounded-lg shadow-md w-64">
                <div className="w-full text-center">
                  <h3 className="text-md">
                    {formatDate(fixture.fixture.date)}
                  </h3>
                  <h3 className="text-xs">
                    {fixture.fixture.venue.name}
                  </h3>
                </div>
                <div className="grid grid-cols-3 my-2">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img src={fixture.teams.home.logo} alt={fixture.teams.home.name} className={fixture.teams.home.id === 134 ? "w-14" : "max-w-8 max-y-8"} />
                    {/* <h4>{fixture.teams.home.name}</h4> */}
                  </div>
                  <div className="grid grid-cols-3 items-center gap-2">
                    <span className="text-2xl font-bold">
                      {fixture.score.fulltime.home}
                    </span>
                    <span className="text-lg font-thin text-center">x</span>
                    <span className="text-2xl font-bold">
                      {fixture.score.fulltime.away}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center">
                    <img src={fixture.teams.away.logo} alt={fixture.teams.away.name} className={fixture.teams.away.id === 134 ? "w-14" : "max-w-8 max-y-8"} />
                    {/* <h4>{fixture.teams.away.name}</h4> */}
                  </div>
                </div>
                <div className="w-full text-center">
                  <h3 className="text-xs">
                    Rodada {extractNumberFromString(fixture.league.round)}
                  </h3>
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
