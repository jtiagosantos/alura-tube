import { supabase } from '@/common/lib/supabase/client';
import { ICreateOnePlaylist } from '../interfaces/create-one-playlist.interface';
import { PlaylistEntity } from '../entities/playlist.entity';
import { ETables } from '@/common/enums/tables.enum';

export class CreateOnePlaylistService {
  public static async execute(input: ICreateOnePlaylist) {
    const { name } = input;
    const { PLAYLISTS } = ETables;

    const { data } = await supabase
      .from(PLAYLISTS)
      .insert({
        name,
      })
      .select<'*', PlaylistEntity>();

    return data;
  }
}
