import { supabase } from '@/common/lib/supabase/client';
import { PlaylistEntity } from '../entities/playlist.entity';
import { ETables } from '@/common/enums/tables.enum';
import type { ICreateOnePlaylist } from '../interfaces/create-one-playlist.interface';

export class CreateOnePlaylistService {
  public static async execute(input: ICreateOnePlaylist) {
    const { name, userId } = input;
    const { PLAYLISTS } = ETables;

    const { data } = await supabase
      .from(PLAYLISTS)
      .insert({
        name,
        user_id: userId,
      })
      .select<'*', PlaylistEntity>();

    return data;
  }
}
