import './styles/global.scss'
import { SideBar } from './components/SideBar/SideBar';
import { Content } from './components/Content/Content';
import { MoviesProvider } from './MoviesContext';


export function App() {
  return (
    <MoviesProvider>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar/>

      <Content/>
    </div>
    </MoviesProvider>
  )
}