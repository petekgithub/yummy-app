import {BrowserRouter, Link} from 'react-router-dom';
import {SiCodechef} from 'react-icons/si';
import styled from 'styled-components';
import Search from 'components/Search';
import Category from 'components/Category';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <SiCodechef />
          <Logo to="/">Yummyy</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Nav = styled.div`
  padding: 6rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50% ;
  svg {
    font-size: 4rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Shadows Into Light', cursive;

`

export default App;
