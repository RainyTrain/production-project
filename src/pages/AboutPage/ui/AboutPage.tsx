import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');
  return <div>{t('About page')}</div>;
};

export default About;
