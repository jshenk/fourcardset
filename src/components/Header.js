import BandLogo from '../assets/BandLogo.png';
import Navigation from '../components/Navigation';

export default function Header({ size = 'small', className }) {
  const logoSize = {
    small: '100px',
    large: '200px',
  };
  return (
    <div className="flex justify-between px-6 pt-8 lg:px-14">
      <img
        src={BandLogo}
        height={logoSize[size]}
        width={logoSize[size]}
        alt="homepage banner"
        className="w-12 h-12 md:h-16 md:w-16"
      />
      <Navigation />
    </div>
  );
}
