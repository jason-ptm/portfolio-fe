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
import LogoSql from './../../assets/logos/logo-sql.png';
import LogoReact from './../../assets/logos/logo-react.png';
import LogoSlack from './../../assets/logos/logo-slack.png';
import LogoWordpress from './../../assets/logos/logo-wordpress.png';
import ColombiaFlag from './../../assets/logos/logo-spanish.png';

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
          <img
            src={LogoBitbucket}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'flag':
        return (
          <img
            src={ColombiaFlag}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'css':
        return (
          <img
            src={LogoCss}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'js':
        return (
          <img
            src={LogoJs}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'figma':
        return (
          <img
            src={LogoFigma}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'git':
        return (
          <img
            src={LogoGit}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'github':
        return (
          <img
            src={LogoGithub}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'html':
        return (
          <img
            src={LogoHtml}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'jira':
        return (
          <img
            src={LogoJira}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'lang':
        return (
          <img
            src={LogoLang}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'node':
        return (
          <img
            src={LogoNode}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'sql':
        return (
          <img
            src={LogoSql}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'react':
        return (
          <img
            src={LogoReact}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'slack':
        return (
          <img
            src={LogoSlack}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'word':
        return (
          <img
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
        flexBasis: '200px',
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
