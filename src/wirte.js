import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const form = document.getElementById('post-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const postData = {
    title: document.getElementById('title').value,
    nickname: document.getElementById('nickname').value,
    content: document.getElementById('content').value,
    tags: document
      .getElementById('tags')
      .value.split(',')
      .map((t) => t.trim()),
    category: '일반', // 필요시 카테고리 선택창 추가
  };

  const { error } = await supabase.from('posts').insert([postData]);

  if (error) {
    alert('저장 실패: ' + error.message);
  } else {
    alert('작성 완료!');
    window.location.href = 'index.html'; // 메인으로 이동
  }
});
