import iconBox from '../../../images/icon-box.svg';
import iconBrowser from '../../../images/icon-browser.svg';
import iconDevices from '../../../images/icon-devices.svg';
import iconInternet from '../../../images/icon-internet.svg';

interface TAdvantage {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const ADVANTAGES: TAdvantage[] = [
  {
    imgSrc: iconBox,
    imgAlt: 'Коробки',
    title: 'Модульность',
    description:
      'веб-приложение состоит из независимых частей, разрабатываемых в зависимости от текущих задач'
  },
  {
    imgSrc: iconBrowser,
    imgAlt: 'Браузер',
    title: 'Масштабируемость',
    description: 'технология веб-приложений позволяет вашей инфраструктуре расти вместе с компанией'
  },
  {
    imgSrc: iconDevices,
    imgAlt: 'Устройства',
    title: 'Универсальность',
    description: 'веб-приложение работает на любом современном устройстве и доступно из любой точки'
  },
  {
    imgSrc: iconInternet,
    imgAlt: 'Интернет',
    title: 'Кроссплатформенность',
    description:
      'веб-приложение позволяет интегрировать любое устройство с выходом в сеть в экосистему компании'
  }
];

export default ADVANTAGES;
