import { supabase } from '@/common/lib/supabase/client';
import { PlaylistEntity } from '../entities/playlist.entity';
import { ETables } from '@/common/enums/tables.enum';
import type { IFindManyPlaylists } from '../interfaces/find-many-playlists.interface';

export class FindManyPlaylistsService {
  public static async execute({ userId }: IFindManyPlaylists) {
    const { PLAYLISTS } = ETables;

    const { data } = await supabase
      .from(PLAYLISTS)
      .select<'*', PlaylistEntity>()
      .order('id', { ascending: true })
      .eq('user_id', userId);

    return data;
  }
}
