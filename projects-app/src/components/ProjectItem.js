import { Button, Chip, Typography } from '@mui/material';
import HardwareSet from './HardwareSet';

// Reusable: one row/card for a single project.
// Props: project (object), onToggleJoin (function from parent)
function ProjectItem({ project, onToggleJoin }) {
  const { id, name, members, hardware, joined } = project;

  return (
    <section className={`project-item ${joined ? 'joined' : ''}`}>
      <div className="project-info">
        <Typography variant="h6" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Authorized users: {members.join(', ')}
        </Typography>
        {joined && <Chip label="Joined" color="success" size="small" sx={{ mt: 1 }} />}
      </div>

      <div className="project-hardware">
        {hardware.map((hw) => (
          <HardwareSet
            key={hw.name}
            name={hw.name}
            checkedOut={hw.checkedOut}
            capacity={hw.capacity}
          />
        ))}
      </div>

      <div className="project-action">
        <Button
          variant={joined ? 'outlined' : 'contained'}
          color={joined ? 'error' : 'primary'}
          onClick={() => onToggleJoin(id)}
        >
          {joined ? 'Leave' : 'Join'}
        </Button>
      </div>
    </section>
  );
}

export default ProjectItem;
