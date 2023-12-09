import { Link, NavLink } from 'react-router-dom';
import SvgLogo from '../SvgLogo/SvgLogo';

const Header = () => {
  return (
    <div className="bg-green">
      <div className="smOnly:px-2  md:container py-6 flex items-center justify-between">
        <Link
          className="text-white flex gap-1 items-center text-base md:text-2xl font-semibold uppercase"
          to="/"
        >
          <p>Easy</p>
          <SvgLogo size={40} fill={'white'} />
          <p>Rent</p>
        </Link>
        <nav className="text-white flex gap-[2px] md:gap-5 items-center text-sm md:text-base uppercase">
          <NavLink to="/" className="px-1 md:px-2 py-1 rounded-[10px]">
            <p>Searh</p>
          </NavLink>
          <NavLink to="/favorite" className="px-2 py-1 rounded-[10px]">
            <p>Favorite</p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
