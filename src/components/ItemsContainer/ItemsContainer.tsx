import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ISkillsSection } from '../../model/Resume';
import './style/index.css';

// images
import LogoBitbucket from './../../assets/logos/logo-bitbucket.png';
import LogoCss from './../../assets/logos/logo-css.png';
import LogoFigma from './../../assets/logos/logo-figma.png';
import LogoGit from './../../assets/logos/logo-git.png';
import LogoGithub from './../../assets/logos/logo-github.png';
import LogoHtml from './../../assets/logos/logo-html.png';
import LogoJira from './../../assets/logos/logo-jira.png';
import LogoJs from './../../assets/logos/logo-js.png';
import LogoLang from './../../assets/logos/logo-lang.png';
import LogoNode from './../../assets/logos/logo-node.png';
import LogoReact from './../../assets/logos/logo-react.png';
import LogoSlack from './../../assets/logos/logo-slack.png';
import ColombiaFlag from './../../assets/logos/logo-spanish.png';
import LogoSql from './../../assets/logos/logo-sql.png';
import LogoWordpress from './../../assets/logos/logo-wordpress.png';

interface IItemsContainerProps {
  title: string;
  items?: ISkillsSection[];
  color: string;
}
interface IContainerHeader {
  color: string;
  title: string;
}

const ContainerHeader: React.FC<IContainerHeader> = ({ color, title }) => {
  const theme = useTheme();

  const getBackgroundGradient = () => {
    switch (color) {
      case 'blue':
        return 'linear-gradient(to right, #8e2de2, #4a00e0)';
      case 'red':
        return 'linear-gradient(to right, #f12711, #f5af19)';
      default:
        return 'linear-gradient(to right, #56ab2f, #a8e063)';
    }
  };

  return (
    <>
      <Box sx={{ padding: '40px  0', position: 'relative' }}>
        <Box
          sx={{
            width: '100%',
            top: 0,
            left: 0,
            height: '100%',
            position: 'absolute',
            background: getBackgroundGradient(),
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 50%)',
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            width: '100%',
            top: 0,
            left: 0,
            height: '100%',
            position: 'absolute',
            background: getBackgroundGradient(),
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
            opacity: 0.4,
            zIndex: -1,
          }}
        />
        <Typography
          variant="h4"
          align="center"
          color={theme.palette.background.default}
          fontWeight={700}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

const ItemsContainer: React.FC<IItemsContainerProps> = ({
  title,
  items,
  color,
}) => {
  const getItemIcon = (icon: string) => {
    switch (icon) {
      case 'bitbucket':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoBitbucket}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'flag':
        return (
          <LazyLoadImage
            effect="blur"
            src={ColombiaFlag}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'css':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoCss}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'js':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoJs}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'figma':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoFigma}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'git':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoGit}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'github':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoGithub}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'html':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoHtml}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'jira':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoJira}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'lang':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoLang}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'node':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoNode}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'sql':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoSql}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'react':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoReact}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'slack':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoSlack}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'word':
        return (
          <LazyLoadImage
            effect="blur"
            src={LogoWordpress}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: '8px',
        overflow: 'hidden',
        flexBasis: '250px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ContainerHeader title={title} color={color} />
      <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
        <List
          sx={{
            flex: 1,
            width: '60%',
            minWidth: '250px',
            maxWidth: '400px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {items?.map((item) => (
            <ListItem key={item.label}>
              <ListItemButton sx={{ borderRadius: '4px' }}>
                <ListItemIcon>{getItemIcon(item.icon)}</ListItemIcon>
                <ListItemText
                  primary={<Typography align="center">{item.label}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ItemsContainer;
