
import TopBar from '../assets/TopBar.png';

export function Appbar() {
  return (
    <div className='flex justify-center items-center  '>
      <img
        className='w-[797px] h-[63px]'
        src={TopBar}
        alt='logo'
      />
    </div>
  );
}
