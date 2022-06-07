import React from 'react';
import Button from '@mui/material/Button';
import {
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

export default function ModalView(props) {
  const {
    name,
    value,
    description,
    photo,
    origen,
    measureUnit,
    compositionMaterial,
  } = props.item;
  console.log('props', props);
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <CardMedia component='img' height='540' image={photo} />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            type='text'
            fullWidth
            value={name}
          />
          <TextField
            margin='dense'
            id='description'
            label='Description'
            type='text'
            fullWidth
            value={description}
          />
          <TextField
            margin='dense'
            id='value'
            label='Value'
            type='text'
            fullWidth
            value={value}
          />
          <TextField
            margin='dense'
            id='origen'
            label='Origen'
            type='text'
            fullWidth
            value={origen}
          />
          <TextField
            margin='dense'
            id='measureUnit'
            label='Measure Unit'
            type='text'
            fullWidth
            value={measureUnit}
          />
          <TextField
            margin='dense'
            id='compositionMaterial'
            label='Composition Material'
            type='text'
            fullWidth
            value={compositionMaterial}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
