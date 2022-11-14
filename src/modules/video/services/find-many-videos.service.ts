import { supabase } from '@/common/lib/supabase/client';
import { VideoEntity } from '../entities/video.entity';
import { ETables } from '@/common/enums/tables.enum';

export class FindManyVideosService {
  public static async execute() {
    const { VIDEOS } = ETables;

    const { data } = await supabase.from(VIDEOS).select<'*', VideoEntity>();

    return data;
  }
}
