import iconReact from '../../../images/icon-react.svg';
import iconNodeJS from '../../../images/icon-nodejs.svg';
import iconNestJS from '../../../images/icon-nestjs.svg';
import iconNginx from '../../../images/icon-nginx.svg';

interface TTool {
  imgClass: string;
  imgSrc: string;
  imgAlt: string;
}

const TOOLS: TTool[] = [
  {
    imgClass: 'tools__item-image_type_react',
    imgSrc: iconReact,
    imgAlt: 'React'
  },
  {
    imgClass: 'tools__item-image_type_nodejs',
    imgSrc: iconNodeJS,
    imgAlt: 'NodeJs'
  },
  {
    imgClass: 'tools__item-image_type_nest',
    imgSrc: iconNestJS,
    imgAlt: 'NestJS'
  },
  {
    imgClass: 'tools__item-image_type_nginx',
    imgSrc: iconNginx,
    imgAlt: 'Nginx'
  }
];

export default TOOLS;
