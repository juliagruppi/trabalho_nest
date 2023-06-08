import { unstable_HistoryRouter as HistoryRouter, BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Chat from "./pages/chat";
import Historico from "./pages/historico";
import Login from "./pages/login";
import Register from "./pages/register";
import { browserHistory } from './browserHistory';
import { LoadAuthUser } from './loadAuthUser';

function App() {
  return (
    <HistoryRouter history={browserHistory}>
        <LoadAuthUser />

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/historico" element={<Historico />} />

        </Routes>

      </HistoryRouter>
      );
}

      export default App;
