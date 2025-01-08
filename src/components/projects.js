import React, { useEffect, useState } from 'react';
import { Box, Zoom, Typography, Collapse } from '@mui/material';

import letterGeneratorImage from './letterhome.jpg';
import milletConnectImage from './milletconnect.jpg';

function PortfolioProjects() {
  const [checked, setChecked] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    setChecked(true); 
  }, []);

  const handleProjectClick = (projectId) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: 'Letter Generator',
      image: letterGeneratorImage,
      tools: 'Node.js, Express.js, MySQL, JavaScript, HTML, CSS',
      description:
        'The Letter Generator project enables users to create various types of letters, such as leave applications, job applications, complaint letters, and more. It uses Node.js and Express.js for the backend, with MySQL for storing templates and user inputs, making letter creation efficient and customizable.',
    },
    {
      id: 2,
      title: 'MilletConnect',
      image: milletConnectImage,
      tools: 'Node.js, Express.js, MySQL, React.js, MobileViT v2',
      description:
        'MilletConnect is a comprehensive platform designed to promote millet awareness, nutrition, and health tracking. It incorporates advanced features like millet identification using machine learning, a disease-based search that suggests millets suitable for specific health conditions, and a nutritional tracker to help users monitor their dietary intake.',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center',
        padding: 4,
        backgroundColor: '#F9F9FF', // Light background color for contrast
      }}
    >
      {projects.map((project) => (
        <React.Fragment key={project.id}>
          <Zoom
            in={checked}
            style={{ transitionDelay: checked ? `${project.id * 200}ms` : '0ms' }}
          >
            <Box
              sx={{
                width: '75%', // Reduced the width slightly
                maxWidth: 700, // Adjusted the maximum width
                height: 270, // Adjusted height for balance
                padding: 2, // Adds inner padding
                backgroundImage: `url(${project.image})`,
                backgroundSize: '75%', // Image is smaller than the box
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '16px', // Rounded corners for a modern look
                border: '4px solid rgba(196, 176, 255, 0.8)', // Light purple border
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                backgroundColor: 'white', // Fallback color
                '&:hover': {
                  transform: 'scale(1.05)', // Slight zoom effect on hover
                  boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
                },
              }}
              onClick={() => handleProjectClick(project.id)}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#5A3E85',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                }}
              >
                {project.title}
              </Typography>
            </Box>
          </Zoom>

          <Collapse in={openProject === project.id} timeout="auto" unmountOnExit>
            <Box
              sx={{
                width: '75%',
                maxWidth: 700,
                padding: 3,
                marginTop: 2,
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                border: '2px solid rgba(196, 176, 255, 0.6)',
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: 2, color: '#5A3E85' }}
              >
                Tools Used:
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 3 }}>
                {project.tools}
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: 2, color: '#5A3E85' }}
              >
                Brief Description:
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
            </Box>
          </Collapse>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default PortfolioProjects;
