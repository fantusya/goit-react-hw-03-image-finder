import idleImg from 'images/idle.png';

import { IdleImage } from './IdleMessage.styled';

const idleMessage = () => {
  return (
    <div>
      <IdleImage src={idleImg} alt="type something to search" />
    </div>
  );
};

export default idleMessage;
