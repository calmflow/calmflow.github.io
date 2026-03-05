// 블로그 데이터 (나중에 data.json으로 분리)
const posts = [
  { title: '첫 번째 글', date: '2026-03-05', content: '바닐라 JS로 블로그 만들기 시작!' },
  { title: '두 번째 글', date: '2026-03-04', content: '오늘은 CSS 스트로크 공부를 했다.' },
  { title: '세 번째 글', date: '2026-03-03', content: 'JavaScript의 closure 개념을 공부했다.' },
];

// 화면에 글 목록을 뿌려주는 함수
function renderPosts() {
  const listElement = document.getElementById('post-list');

  posts.forEach((post) => {
    const postDiv = document.createElement('article');
    postDiv.className = 'post-card';
    postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <small>${post.date}</small>
            <p>${post.content}</p>
        `;
    listElement.appendChild(postDiv);
  });
}

// 페이지 로드 시 실행
renderPosts();
