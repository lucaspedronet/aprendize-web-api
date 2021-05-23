import { FaArrowLeft } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';

type TitleBarProps = {
  goBack?: boolean;
  backTo?: string;
  title?: string;
};

export const TitleBar: React.FC<TitleBarProps> = ({ goBack = false, backTo = false, title = '' }) => {
  const history = useHistory();

  return (
    <Container>
      <span>
        {goBack && (
          <button type="button" onClick={() => history.goBack()} className="btn btn-outline">
            <FaArrowLeft />
          </button>
        )}

        {!goBack && backTo && (
          <Link to={String(backTo)}>
            <FaArrowLeft />
          </Link>
        )}
      </span>
      <h1>{title}</h1>
    </Container>
  );
};
