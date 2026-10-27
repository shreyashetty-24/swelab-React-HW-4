import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

function HardwareSet({ name, checkedOut, capacity, disabled, onCheckIn, onCheckOut }) {
  const [qty, setQty] = useState('');

  const handle = (callback) => {
    const amount = parseInt(qty, 10);
    if (Number.isNaN(amount) || amount <= 0) return;
    callback(amount);
    setQty('');
  };

  return (
    <div className="hw-set">
      <Typography className="hw-label">
        {name}: {checkedOut}/{capacity}
      </Typography>
      <TextField
        size="small"
        placeholder="Enter qty"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        disabled={disabled}
        inputProps={{ inputMode: 'numeric', 'aria-label': `${name} quantity` }}
        sx={{ width: 100, background: '#fff' }}
      />
      <Button variant="contained" color="inherit" size="small" disabled={disabled}
        onClick={() => handle(onCheckIn)}>
        Check In
      </Button>
      <Button variant="contained" color="inherit" size="small" disabled={disabled}
        onClick={() => handle(onCheckOut)}>
        Check Out
      </Button>
    </div>
  );
}

export default HardwareSet;