import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Click</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
