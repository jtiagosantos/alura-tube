import { supabase } from '@/common/lib/supabase/client';
import { ETables } from '@/common/enums/tables.enum';
import type { ICreateOneUser } from '../interfaces/create-one-user.interface';

export class CreateOneUserService {
  public static async execute({ name, email, image }: ICreateOneUser) {
    const { USERS } = ETables;

    await supabase.from(USERS).insert({ name, email, image });
  }
}
