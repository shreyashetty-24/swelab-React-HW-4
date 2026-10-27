import { useState } from 'react';
import { Typography } from '@mui/material';
import ProjectItem from './ProjectItem';
import './Projects.css';

// Hardcoded for now; this will come from the back end later.
const INITIAL_PROJECTS = [
  {
    id: 1,
    name: 'Project Name 1',
    members: ['list', 'of', 'authorized', 'users'],
    hardware: [
      { name: 'HWSet1', checkedOut: 50, capacity: 100 },
      { name: 'HWSet2', checkedOut: 0, capacity: 100 },
    ],
    joined: true,
  },
  {
    id: 2,
    name: 'Project Name 2',
    members: ['list', 'of', 'authorized', 'users'],
    hardware: [
      { name: 'HWSet1', checkedOut: 50, capacity: 100 },
      { name: 'HWSet2', checkedOut: 0, capacity: 100 },
    ],
    joined: false,
  },
  {
    id: 3,
    name: 'Project Name 3',
    members: ['list', 'of', 'authorized', 'users'],
    hardware: [
      { name: 'HWSet1', checkedOut: 50, capacity: 100 },
      { name: 'HWSet2', checkedOut: 0, capacity: 100 },
    ],
    joined: false,
  },
];

function Projects() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  // Custom event handler: flips a project between joined / not joined.
  const handleToggleJoin = (projectId) => {
    setProjects((current) =>
      current.map((p) => (p.id === projectId ? { ...p, joined: !p.joined } : p))
    );
  };

  return (
    <main className="projects-page">
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>

      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          onToggleJoin={handleToggleJoin}
        />
      ))}
    </main>
  );
}

export default Projects;
