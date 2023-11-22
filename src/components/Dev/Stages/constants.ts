import imageStep1 from '../../../images/image-step1.svg';
import imageStep2 from '../../../images/image-step2.svg';
import imageStep3 from '../../../images/image-step3.svg';
import imageStep4 from '../../../images/image-step4.svg';

interface TStage {
  title: string;
  descriptions: string[];
  imgClass: string;
  imgSrc: string;
  imgAlt: string;
}

const STAGES: TStage[] = [
  {
    title: 'Первый этап',
    descriptions: [
      'Ваша компания только начинает свой путь развития. Вам необходим простой сайт-визитка' +
        ' или одностраничный лэндинг для продвижения продукта.',
      'С помощью технологии веб-приложения мы разрабатываем быстрый сайт с современным' +
        ' адаптивным дизайном.'
    ],
    imgClass: 'stages__item-image_type_first',
    imgSrc: imageStep1,
    imgAlt: 'Картинка устройств'
  },
  {
    title: 'Второй этап',
    descriptions: [
      'Ваши бизнес-процессы становятся все сложнее и требуют новых функциональных' +
        ' возможностей. Мы добавляем на сайт каталог товаров с системой уведомления менеджеров.',
      'Оба блока работают в единой экосистеме и не конфликтуют между собой.'
    ],
    imgClass: 'stages__item-image_type_second',
    imgSrc: imageStep2,
    imgAlt: 'Картинка устройств'
  },
  {
    title: 'Третий этап',
    descriptions: [
      'Вы решаете сделать шаг в сторону полноценного e-commerce и запустить интернет-магазин.' +
        ' Мы разрабатываем систему приема платежей, авторизацию и гео-треккинг.',
      'Все разделы вашего корпоративного портала работают вместе над реализацией единой' +
        ' задачи.'
    ],
    imgClass: 'stages__item-image_type_third',
    imgSrc: imageStep3,
    imgAlt: 'Картинка корзины'
  },
  {
    title: 'Четвертый этап',
    descriptions: [
      'Ваша компания внедряет системы учета, CRM-модули, контроль эффективности менеджеров и' +
        ' продвинутая бизнес-аналитика. Вам требуется создание своей бизнес-экосистемы.',
      'Мы продолжаем процесс разработки и создаём уникальный продукт, связывающий все ресурсы' +
        ' компании.'
    ],
    imgClass: 'stages__item-image_type_fourth',
    imgSrc: imageStep4,
    imgAlt: 'Картинка отчетов'
  }
];

export default STAGES;
