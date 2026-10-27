import { useState } from 'react';
import { Typography } from '@mui/material';
import ProjectItem from './ProjectItem';
import './Projects.css';
import Header from './Header';
const makeHardware = (set1, set2) => [
  { name: 'HWSet1', checkedOut: set1, capacity: 100 },
  { name: 'HWSet2', checkedOut: set2, capacity: 100 },
];

const USERS = ['list', 'of', 'authorized', 'users'];

const INITIAL_PROJECTS = [
  { id: 1, name: '1', members: USERS, hardware: makeHardware(50, 0), joined: false },
  { id: 2, name: '2', members: USERS, hardware: makeHardware(50, 0), joined: true },
  { id: 3, name: '3', members: USERS, hardware: makeHardware(0, 0), joined: false },
];

function Projects() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  const handleToggleJoin = (projectId) => {
    setProjects((current) =>
      current.map((p) => (p.id === projectId ? { ...p, joined: !p.joined } : p))
    );
  };

  const handleAdjustHardware = (projectId, hwName, delta) => {
    setProjects((current) =>
      current.map((p) =>
        p.id !== projectId
          ? p
          : {
              ...p,
              hardware: p.hardware.map((hw) =>
                hw.name !== hwName
                  ? hw
                  : { ...hw, checkedOut: Math.min(hw.capacity, Math.max(0, hw.checkedOut + delta)) }
              ),
            }
      )
    );
  };

  return (
    <main className="projects-page">
      <Header title="Projects" />
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          onToggleJoin={handleToggleJoin}
          onAdjustHardware={handleAdjustHardware}
        />
      ))}
    </main>
  );
}

export default Projects;