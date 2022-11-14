import { supabase } from '@/common/lib/supabase/client';
import { ETables } from '@/common/enums/tables.enum';
import { VideoEntity } from '../entities/video.entity';
import type { ICreateOneVideo } from '../interfaces/create-one-video.interface';

export class CreateOneVideoService {
  public static async execute(input: ICreateOneVideo) {
    const { title, url, thumbnail, playlistId, userId } = input;
    const { VIDEOS } = ETables;

    const { data } = await supabase
      .from(VIDEOS)
      .insert({
        title,
        url,
        thumbnail,
        playlist_id: playlistId,
        user_id: userId,
      })
      .select<'*', VideoEntity>();

    return data;
  }
}
