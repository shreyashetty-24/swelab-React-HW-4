import { Button, Typography } from '@mui/material';
import HardwareSet from './HardwareSet';

function ProjectItem({ project, onToggleJoin, onAdjustHardware }) {
  const { id, name, members, hardware, joined } = project;

  return (
    <section className={`project-item ${joined ? 'joined' : ''}`}>
      <Typography className="project-name">{name}</Typography>
      <Typography className="project-members">{members.join(', ')}</Typography>

      <div className="project-hardware">
        {hardware.map((hw) => (
          <HardwareSet
            key={hw.name}
            name={hw.name}
            checkedOut={hw.checkedOut}
            capacity={hw.capacity}
            disabled={!joined}
            onCheckIn={(qty) => onAdjustHardware(id, hw.name, -qty)}
            onCheckOut={(qty) => onAdjustHardware(id, hw.name, qty)}
          />
        ))}
      </div>

      <Button variant="contained" color="inherit" onClick={() => onToggleJoin(id)}
        sx={{ minWidth: 80 }}>
        {joined ? 'Leave' : 'Join'}
      </Button>
    </section>
  );
}

export default ProjectItem;