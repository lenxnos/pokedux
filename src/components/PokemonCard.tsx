import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { FC } from 'react';

interface Props {
  name: string;
  image: string;
}

const PokemonCard: FC<Props> = ({ name, image  }) => (
  <Card
    title={name}
    cover={<img src={image} alt={name} />}
    style={{ width: 250 }}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>
);

export default PokemonCard;
