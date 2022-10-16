import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { MouseEventHandler } from 'react';

interface Props {
  isFavorite: boolean,
  onClick: MouseEventHandler<HTMLElement>
}

const StarButton = ({ isFavorite, onClick }: Props) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} /> 
}

export default StarButton;