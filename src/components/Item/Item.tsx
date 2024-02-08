import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// images
import LogoAws from './../../assets/logos/logo-aws.png';
import LogoBitbucket from './../../assets/logos/logo-bitbucket.png';
import LogoCss from './../../assets/logos/logo-css.png';
import LogoDocker from './../../assets/logos/logo-docker.png';
import LogoFigma from './../../assets/logos/logo-figma.png';
import LogoGit from './../../assets/logos/logo-git.png';
import LogoGithub from './../../assets/logos/logo-github.png';
import LogoHtml from './../../assets/logos/logo-html.png';
import LogoJira from './../../assets/logos/logo-jira.png';
import LogoJs from './../../assets/logos/logo-js.png';
import LogoLang from './../../assets/logos/logo-lang.png';
import LogoNest from './../../assets/logos/logo-nest.svg';
import LogoNode from './../../assets/logos/logo-node.png';
import LogoReact from './../../assets/logos/logo-react.png';
import LogoSlack from './../../assets/logos/logo-slack.png';
import ColombiaFlag from './../../assets/logos/logo-spanish.png';
import LogoSql from './../../assets/logos/logo-sql.png';
import LogoWordpress from './../../assets/logos/logo-wordpress.png';
import HolperIcon from './../../assets/projects/holper.png';
import SapiolabIcon from './../../assets/projects/sapiolab.png';
import YmsIcon from './../../assets/projects/yms.png';

interface IItemProps {
  size: number;
  icon: string;
}

const Item: React.FC<IItemProps> = ({ size, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'bitbucket':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoBitbucket}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'flag':
        return (
          <LazyLoadImage
            effect="blur"
            src={ColombiaFlag}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'css':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoCss}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'js':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoJs}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'figma':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoFigma}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'git':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoGit}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'github':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoGithub}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'html':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoHtml}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'jira':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoJira}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'lang':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoLang}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'node':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoNode}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'sql':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoSql}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'react':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoReact}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'slack':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoSlack}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'word':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoWordpress}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'holper':
        return (
          <LazyLoadImage
            effect="blur"
            src={HolperIcon}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'yms':
        return (
          <LazyLoadImage
            effect="blur"
            src={YmsIcon}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'sapiolab':
        return (
          <LazyLoadImage
            effect="blur"
            src={SapiolabIcon}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'aws':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoAws}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'nest':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoNest}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'docker':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoDocker}
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        );
      default:
        return <></>;
    }
  };
  return getIcon();
};

export default Item;
