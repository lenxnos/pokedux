import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { FC } from 'react';

interface Props {
  name: string;
}

const PokemonCard: FC<Props> = ({ name  }) => (
  <Card
    title={name}
    cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt={name} />}
    style={{ width: 250 }}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>
);

export default PokemonCard;
