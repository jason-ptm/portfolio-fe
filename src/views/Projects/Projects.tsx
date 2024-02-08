import { Box, Divider, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ContentLimitator, Item } from '../../components';
import { IProject } from '../../model/Projects';
import colors from '../../utils/constants/colors.json';
import './style/index.css';

interface IProjectsProps {}

interface IProjectContainerProps {
  project: IProject;
}

const ProjectContainer: React.FC<IProjectContainerProps> = ({ project }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      { pathname: '' },
      {
        state: {
          project,
        },
      }
    );
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '2px',
        padding: '40px 20px',
        flexBasis: '250px',
        flexGrow: 1,
        maxWidth: '450px',
        cursor: 'pointer',
        height: '350px',
        gap: '20px',
        '&:hover': {
          backgroundColor: `${colors[theme.palette.mode].black[200]}47`,
        },
      }}
      onClick={handleClick}
    >
      {<Item size={70} icon={project.icon} />}
      <Typography fontWeight={700} fontSize={18} align="center">
        {project.title}
      </Typography>
      <Divider
        orientation="horizontal"
        sx={{
          width: '40px',
          height: '1px',
          backgroundColor: colors[theme.palette.mode].blue[500],
        }}
      />
      <Typography fontWeight={300} fontSize={14} align="center">
        {project.shortDescription}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
        {project.technologies.map((icon, index) => (
          <Item size={35} icon={icon} key={index} />
        ))}
      </Box>
    </Box>
  );
};

const Projects: React.FC<IProjectsProps> = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [projects, setProjects] = useState<IProject[]>(
    t('projects.items', { returnObjects: true })
  );

  useEffect(() => {
    setProjects(t('projects.items', { returnObjects: true }) as IProject[]);
  }, [i18n.language]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '200px 0',
      }}
    >
      <ContentLimitator>
        <Typography variant="h3" fontWeight={700} align="center">
          {t('projects.title')}
        </Typography>
        <Typography
          fontSize={18}
          align="center"
          sx={{ marginTop: '30px' }}
          color={colors[theme.palette.mode].black[400]}
        >
          {t('projects.description')}
        </Typography>
        <Box
          sx={{
            marginTop: '30px',
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          {projects.map((project) => (
            <ProjectContainer key={project.icon} project={project} />
          ))}
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default Projects;
