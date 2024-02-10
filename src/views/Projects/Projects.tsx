import { Box, Divider, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContentLimitator, Item } from '../../components';
import { IProject } from '../../model/Projects';
import colors from '../../utils/constants/colors.json';
import './style/index.css';
import { darkModeKey } from '../../utils';

interface IProjectsProps {}

interface IProjectContainerProps {
  project: IProject;
}

const ProjectContainer: React.FC<IProjectContainerProps> = ({ project }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        boxShadow: `0px 0px 12px 2px rgba(${
          theme.palette.mode === darkModeKey ? '70,70,70' : '217,208,217'
        },1)`,
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
    >
      {<Item size={70} icon={project.id} />}
      <Typography fontWeight={700} fontSize={18} align="center">
        {project.title}
      </Typography>
      <Divider
        orientation="horizontal"
        sx={{
          width: '50px',
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
      id="projects"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '200px 0',
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
          color={
            theme.palette.mode === darkModeKey
              ? colors[theme.palette.mode].black[700]
              : colors[theme.palette.mode].black[400]
          }
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
            <ProjectContainer key={project.id} project={project} />
          ))}
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default Projects;
