/*  STYLES  */

import { PIBContextProvider } from './components/PIBContextProvider/PIBContextProvider';
import { MainRouter } from './router/MainRouter/MainRouter';
import './styles/global.css';
import './styles/root.css';

export function App() {
  return (
    <>
      <PIBContextProvider>
        <MainRouter />
      </PIBContextProvider>
    </>
  )
}