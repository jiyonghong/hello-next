import { Link } from '../../routes';

const Header = () => (
  <div>
    <Link route="/">
      <a>Home</a>
    </Link>
    <Link route="/about">
      <a>About</a>
    </Link>
    <Link route="/post/1">
      <a>Post</a>
    </Link>
  </div>
);

export default Header;
