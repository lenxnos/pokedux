import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = () => (
  <Card
    title="Ditto"
    cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='Ditto' />}
    style={{ width: 250 }}
    extra={<StarOutlined />}
  >
    <Meta description="fire, magic" />
  </Card>
);

export default PokemonCard;
