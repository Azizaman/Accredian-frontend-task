import { useState } from 'react';
import table1 from '../assets/table1.png';
import { Button } from '@mui/material';
import { ReferralFormModal } from './ReferralFormModal'; // Ensure the correct path

export function Table2() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='flex flex-col items-center py-6'>
      <img className='w-[1200px] h-[700px] object-cover' src={table1} alt="adver" /> 
      <div className='flex justify-center mt-4'>
        <Button 
          variant="contained" 
          className='bg-blue-600 text-white py-2 px-7 rounded-lg'
          onClick={handleClickOpen}
        >
          Refer Now
        </Button>
      </div>
      <ReferralFormModal open={open} handleClose={handleClose} />
    </div>
  );
}
