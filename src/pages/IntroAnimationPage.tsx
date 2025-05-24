// pages/IntroAnimationPage.tsx
import IntroAnimation from '../components/IntroAnimation/IntroAnimation';
import useAppStore from '../store';
import logo from '../assets/images/logo.png';

const IntroAnimationPage = () => {
  const changePage = useAppStore((state) => state.changePage);

  const handleFinish = () => {
    changePage({ mainPage: 1 });   
  };

  return (
    <IntroAnimation
      logoSrc={logo}
      onFinish={handleFinish}
    />
  );
};

export default IntroAnimationPage;
