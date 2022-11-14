import axios from 'axios';
import type { IFindOneBio } from '../interfaces/find-one-bio.interface';
import type { TFindOneBioResponse } from '../types/find-one-bio-response.type';

export class FindOneBioService {
  public static async execute({
    where,
  }: IFindOneBio): Promise<TFindOneBioResponse> {
    const { username } = where;

    const { data } = await axios.get(
      `https://api.github.com/users/${username}`,
    );

    return data;
  }
}
