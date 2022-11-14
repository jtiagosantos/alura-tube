import { supabase } from '@/common/lib/supabase/client';
import { ETables } from '@/common/enums/tables.enum';
import { UserEntity } from '../entities/user.entity';
import type { IFindOneUser } from '../interfaces/find-one-user.interface';

export class FindOneUserService {
  public static async execute({ where }: IFindOneUser) {
    const { email } = where;
    const { USERS } = ETables;

    const { data } = await supabase
      .from(USERS)
      .select<'*', UserEntity>()
      .eq('email', email);

    return data?.[0];
  }
}
