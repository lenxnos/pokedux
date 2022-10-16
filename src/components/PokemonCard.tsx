import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { PokemonType } from '../models/Pokemons';
import { setFavorite } from '../redux/actions';
import StarButton from './StarButton';

interface Props {
  name: string;
  image: string;
  types: PokemonType[],
  isFavorite: boolean,
}

const PokemonCard: FC<Props> = ({ name, image, types, isFavorite }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite(name))
  }

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      style={{ width: 250 }}
      extra={<StarButton isFavorite={isFavorite} onClick={handleOnFavorite} />}
    >
      <Meta description={types.map(({ name }: { name:  string }) => name).join(', ')} />
    </Card>
  );
}

export default PokemonCard;
