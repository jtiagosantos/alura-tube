import axios from 'axios';
import { IFindManyFavorites } from '../interfaces/find-many-favorites.interface';
import { TFavorite } from '../types/favorite.type';

export class FindManyFavoritesServices {
  public static async execute({ where }: IFindManyFavorites) {
    const { username } = where;

    const { data } = await axios.get<Array<TFavorite>>(
      `https://api.github.com/users/${username}/following`,
    );

    return data;
  }
}
