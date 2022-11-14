import axios from 'axios';
import { TFindOneLoginResponse } from '../types/find-one-login-response.type';
import type { IFindOneLogin } from '../interfaces/find-one-login.interface';

export class FindOneLoginService {
  public static async execute({
    where,
  }: IFindOneLogin): Promise<TFindOneLoginResponse> {
    const { email } = where;

    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${email}`,
    );

    return data.items[0];
  }
}
