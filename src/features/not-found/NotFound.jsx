import { Link } from 'react-router';
import { ROUTE_PATHS } from '../../app/router/paths';

export default function NotFound() {
  return (
    <div>
      <h3>404 - Page not found</h3>
      <Link to={ROUTE_PATHS.home}>Go home</Link>
    </div>
  );
}

