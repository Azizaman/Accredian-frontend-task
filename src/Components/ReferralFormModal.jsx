import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function ReferralFormModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    referrer: '',
    referee: '',
    email: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://accredian-backend-task-i46m.onrender.com/api/referrals', formData);
      alert('Referral submitted successfully');
      handleClose();
    } catch (error) {
      console.error(error);
      alert('Error submitting referral');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h2 id="modal-modal-title">Refer a Course</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Referrer Name"
            name="referrer"
            value={formData.referrer}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Referee Name"
            name="referee"
            value={formData.referee}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Referee Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
