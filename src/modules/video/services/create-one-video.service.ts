import { supabase } from '@/common/lib/supabase/client';
import { ICreateOneVideo } from '../interfaces/create-one-video.interface';
import { VideoEntity } from '../entities/video.entity';
import { ETables } from '@/common/enums/tables.enum';

export class CreateOneVideoService {
  public static async execute(input: ICreateOneVideo) {
    const { title, url, thumbnail, playlist_id } = input;
    const { VIDEOS } = ETables;

    const { data } = await supabase
      .from(VIDEOS)
      .insert({
        title,
        url,
        thumbnail,
        playlist_id,
      })
      .select<'*', VideoEntity>();

    return data;
  }
}
