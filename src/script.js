import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

// DB에서 글 가져오기
export async function loadPosts() {
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });

  if (error) {
    console.error('불러오기 실패:', error);
    return [];
  }
  return data;
}
