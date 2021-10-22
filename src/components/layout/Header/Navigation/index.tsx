import { Link } from 'react-router-dom';
import * as S from './styles';

interface INavigation {
  isHidden: boolean;
}

const Navigation = ({ isHidden }: INavigation) => (
  <S.Nav isHidden={isHidden}>
    <ul>
      <li>
        <Link to="#">A</Link>
      </li>
      <li>
        <Link to="#">B</Link>
      </li>
      <li>
        <Link to="#">C</Link>
      </li>
      <li>
        <Link to="#">D</Link>
      </li>
      <li>
        <Link to="#">E</Link>
      </li>
    </ul>
  </S.Nav>
);

export default Navigation;
