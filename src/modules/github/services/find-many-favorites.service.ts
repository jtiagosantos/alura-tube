import axios from 'axios';
import { TFavorite } from '../types/favorite.type';
import type { IFindManyFavorites } from '../interfaces/find-many-favorites.interface';

export class FindManyFavoritesServices {
  public static async execute({ where }: IFindManyFavorites) {
    const { username } = where;

    const { data } = await axios.get<Array<TFavorite>>(
      `https://api.github.com/users/${username}/following`,
    );

    return data;
  }
}
