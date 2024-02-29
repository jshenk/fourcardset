import BandLogo from '../assets/BandLogo.png';
import Navigation from '../components/Navigation';

export default function Header({ size = 'small', className }) {
  const logoSize = {
    small: '100px',
    large: '200px',
  };
  return (
    <div className="flex justify-between pt-12 px-14">
      <img
        src={BandLogo}
        height={logoSize[size]}
        width={logoSize[size]}
        alt="homepage banner"
      />
      <Navigation />
    </div>
  );
}
