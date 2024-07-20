import { useState } from 'react';
import circles from '../assets/circles.png';
import { Button } from '@mui/material';
import { ReferralFormModal } from './ReferralFormModal'; // Ensure the correct path

export function Circlesadd() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='bg-blue-100 flex flex-col items-center py-6'>
      <img className='w-[1200px] h-[500px] object-cover' src={circles} alt="adver" /> 
      <div className='flex justify-center mt-4'>
        <Button 
          variant="contained" 
          className='bg-blue-600 text-white py-2 px-6 rounded-lg'
          onClick={handleClickOpen}
        >
          Refer Now
        </Button>
      </div>
      <ReferralFormModal open={open} handleClose={handleClose} />
    </div>
  );
}
