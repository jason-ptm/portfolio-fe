import ArticleIcon from '@mui/icons-material/Article';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContentLimitator, ItemLayout, ItemsContainer } from '../../components';
import { ISection } from '../../model/Resume';
import './style/index.css';

// images
import LogoCisco from '../../assets/logos/logo-cisco.png';
import LogoCoursera from '../../assets/logos/logo-coursera.png';
import LogoGoogle from '../../assets/logos/logo-google.png';
import LogoSena from '../../assets/logos/logo-sena.png';
import LogoUd from '../../assets/logos/logo-ud.png';

interface IResumeProps {}

interface ISectionProps {
  section: ISection;
}

const Menu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const useMedia = useMediaQuery('(max-width: 589px)');
  const [items, setItems] = useState(
    t('resume.sections', { returnObjects: true }) as ISection[]
  );
  const [selectedOption, setSelectedOption] = useState(items[0].label);

  useEffect(() => setSelectedOption(items[0].label), []);

  useEffect(() => {
    setItems(t('resume.sections', { returnObjects: true }));
  }, [i18n.language]);

  return (
    <Box
      sx={{
        height: 'auto',
        minHeight: '100px',
        flexBasis: '150px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            position: !useMedia ? 'sticky' : 'static',
            height: '200px',
          }}
        >
          {items.map((item) => (
            <Box
              key={item.label}
              color={
                selectedOption === item.label ? theme.palette.primary.main : ''
              }
              sx={{
                cursor: 'pointer',
                transition: 'all 1s',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
              }}
              onClick={() => setSelectedOption(item.label)}
            >
              {selectedOption === item.label && <HorizontalRuleIcon />}
              <Typography variant="h6" fontWeight={600}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const SectionView: React.FC<ISectionProps> = ({ section }) => {
  const getIconOrganization = (key?: string) => {
    switch (key) {
      case 'ud':
        return <img src={LogoUd} width={40} height={40} />;
      case 'sena':
        return <img src={LogoSena} width={40} height={40} />;
      case 'cisco':
        return (
          <img
            src={LogoCisco}
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
          />
        );
      case 'google':
        return <img src={LogoGoogle} width={30} height={30} />;
      case 'coursera':
        return (
          <img
            src={LogoCoursera}
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        );
      default:
        return <ArticleIcon sx={{ color: '#ffffff' }} />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" fontWeight={800}>
        {section.title}
      </Typography>
      {section.items.map((item, index) => (
        <ItemLayout
          key={index}
          icon={getIconOrganization(item.icon)}
          startDate={item.startDate}
          endDate={item.endDate}
          title={item.title}
          subtitle={item.subtitle}
          text={item.text}
        />
      ))}
    </Box>
  );
};

const Resume: React.FC<IResumeProps> = () => {
  const { t, i18n } = useTranslation();
  const [sections, setSections] = useState(
    t('resume.sections', { returnObjects: true }) as ISection[]
  );

  useEffect(() => {
    setSections(t('resume.sections', { returnObjects: true }));
  }, [i18n.language]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <ContentLimitator>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '80px',
            justifyContent: 'space-between',
          }}
        >
          <Menu />
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: '350px',
              maxWidth: '850px',
              display: 'flex',
              flexDirection: 'column',
              gap: '150px',
            }}
          >
            {sections.map((section) =>
              section.label === 'skills' ? (
                <Box key={section.label}>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ marginBottom: '25px' }}
                  >
                    {section.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      gap: '40px',
                    }}
                  >
                    {section.items.map((sectionItems) => (
                      <ItemsContainer
                        key={sectionItems.title}
                        title={sectionItems.title}
                        items={sectionItems.items}
                        color={sectionItems.color ? sectionItems.color : ''}
                      />
                    ))}
                  </Box>
                </Box>
              ) : (
                <SectionView key={section.label} section={section} />
              )
            )}
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default Resume;
