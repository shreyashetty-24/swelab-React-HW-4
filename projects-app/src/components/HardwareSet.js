import { Typography, LinearProgress } from '@mui/material';

// Reusable: shows one hardware set's usage (e.g. "HWSet1: 50 / 100").
// Props: name, checkedOut, capacity
function HardwareSet({ name, checkedOut, capacity }) {
  const percent = (checkedOut / capacity) * 100;

  return (
    <div className="hw-set">
      <Typography variant="body2" className="hw-label">
        {name}: {checkedOut} / {capacity}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={percent}
        aria-label={`${name} usage`}
        sx={{ height: 8, borderRadius: 4 }}
      />
    </div>
  );
}

export default HardwareSet;
