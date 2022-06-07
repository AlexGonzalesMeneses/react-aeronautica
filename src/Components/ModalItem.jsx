import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { postAlbum } from '../services/fetch';

export default function ModalItem(props) {
  const { album, setAlbum } = props;
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    name: '',
    description: '',
    value: '',
    photo: '',
    origen: '',
    measureUnit: '',
    compositionMaterial: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    postAlbum(item);
    setOpen(false);
    setAlbum([...album, item]);
  };

  return (
    <>
      <Button variant='outlined' onClick={handleOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            type='text'
            fullWidth
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          <TextField
            margin='dense'
            id='description'
            label='Description'
            type='text'
            fullWidth
            onChange={(e) => setItem({ ...item, description: e.target.value })}
          />
          <TextField
            margin='dense'
            id='value'
            label='Value'
            type='text'
            fullWidth
            onChange={(e) => setItem({ ...item, value: e.target.value })}
          />
          <TextField
            margin='dense'
            id='photo'
            label='Photo'
            type='text'
            fullWidth
            onChange={(e) => setItem({ ...item, photo: e.target.value })}
          />
          <TextField
            margin='dense'
            id='origen'
            label='Origen'
            type='text'
            fullWidth
            onChange={(e) => setItem({ ...item, origen: e.target.value })}
          />
          <TextField
            margin='dense'
            id='measureUnit'
            label='Measure Unit'
            type='text'
            fullWidth
            onChange={(e) => setItem({ ...item, measureUnit: e.target.value })}
          />
          <TextField
            margin='dense'
            id='compositionMaterial'
            label='Composition Material'
            type='text'
            fullWidth
            onChange={(e) =>
              setItem({ ...item, compositionMaterial: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
