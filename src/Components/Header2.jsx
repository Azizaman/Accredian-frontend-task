
import img_1 from '../assets/img_1.png';
import Button from '@mui/material/Button';

export function Header2() {
  return (
    <div className='py-10 flex justify-between items-center px-10'>
      {/* Left Side: Logo and Button */}
      <div className='flex items-center space-x-4 px-40'>
        <img src={img_1} alt="Logo" className='h-8' /> {/* Adjust size if needed */}
        <Button variant="contained" className='rounded'>Courses</Button>
      </div>

      {/* Right Side: Navigation Links */}
      <div className='flex space-x-5'>
        <div className='py-2'>Refer & Earn</div>
        <div className='py-2'>Resources</div>
        <div className='py-2'>About Us</div>
        <button className='px-5 py-2 bg-gray-300  border border-white rounded align-middle'>Login</button>
        <button className='px-5 py-2 bg-blue-600 text-white border border-blue-400 rounded align-middle'>Try for free</button>
      </div>
    </div>
  );
}
