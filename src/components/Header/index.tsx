import HeaderMobile from './HeaderMobile.tsx';
import HeaderDesktop from './HeaderDesktop.tsx';
import { useIsMobile } from '../../hooks/useIsMobile.ts';

export default function Header({ index = 0 }) {
  const isMobile = useIsMobile();

  return isMobile
    ? <HeaderMobile index={index} />
    : <HeaderDesktop index={index} />;
}
