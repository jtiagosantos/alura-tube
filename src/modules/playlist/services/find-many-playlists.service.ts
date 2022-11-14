import { supabase } from '@/common/lib/supabase/client';
import { PlaylistEntity } from '../entities/playlist.entity';
import { ETables } from '@/common/enums/tables.enum';

export class FindManyPlaylistsService {
  public static async execute() {
    const { PLAYLISTS } = ETables;

    const { data } = await supabase
      .from(PLAYLISTS)
      .select<'*', PlaylistEntity>()
      .order('id', { ascending: true });

    return data;
  }
}
