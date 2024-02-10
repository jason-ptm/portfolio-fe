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
import { Item } from '..';
import { ISkillsSection } from '../../model/Resume';
import * as colors from '../../utils/constants/colors.json';
import './style/index.css';
import { darkModeKey } from '../../utils';

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
          color={
            theme.palette.mode === darkModeKey
              ? colors[theme.palette.mode].black[1000]
              : colors[theme.palette.mode].black[100]
          }
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
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: `0px 0px 12px 2px rgba(${
          theme.palette.mode === darkModeKey ? '70,70,70' : '217,208,217'
        },1)`,
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
                <ListItemIcon>
                  {<Item size={30} icon={item.icon} />}
                </ListItemIcon>
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
