import { supabase } from '@/common/lib/supabase/client';
import { VideoEntity } from '../entities/video.entity';
import { ETables } from '@/common/enums/tables.enum';
import type { IFindManyVideos } from '../interfaces/find-many-videos.interface';

export class FindManyVideosService {
  public static async execute({ userId }: IFindManyVideos) {
    const { VIDEOS } = ETables;

    const { data } = await supabase
      .from(VIDEOS)
      .select<'*', VideoEntity>()
      .eq('user_id', userId);

    return data;
  }
}
