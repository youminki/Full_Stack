document.addEventListener('DOMContentLoaded', () => {
    const POSTS_KEY = 'posts';

    // 데이터 관리 함수
    function getPosts() {
        const posts = localStorage.getItem(POSTS_KEY);
        if (posts) {
            return JSON.parse(posts);
        } else {
            // 초기 더미 데이터 생성
            const dummyPosts = Array.from({ length: 25 }, (_, i) => {
                const id = 25 - i;
                return {
                    id: id,
                    title: `게시물 제목 ${id}번 입니다.`,
                    author: `User${Math.floor(Math.random() * 100)}`,
                    date: `2025.10.${String(id).padStart(2, '0')}`,
                    views: Math.floor(Math.random() * 1000),
                    content: `이것은 게시물 ${id}번의 내용입니다.\n\n메탈릭 스타일의 게시판을 테스트하고 있습니다.`
                };
            });
            localStorage.setItem(POSTS_KEY, JSON.stringify(dummyPosts));
            return dummyPosts;
        }
    }

    function savePosts(posts) {
        localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    }

    // 현재 날짜 포맷 함수 (YYYY.MM.DD)
    function getCurrentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    }

    // --- 페이지별 로직 분기 ---
    const path = window.location.pathname.split("/").pop();

    // 1. 메인 페이지 (index.html) 로직
    if (path === 'index.html' || path === '') {
        const posts = getPosts();
        let postsPerPage = 5;
        let currentPage = 1;

        const tbody = document.getElementById('board-tbody');
        const paginationContainer = document.getElementById('pagination');

        function renderPosts(page) {
            tbody.innerHTML = '';
            const startIndex = (page - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            const postsToShow = posts.slice(startIndex, endIndex);

            if (postsToShow.length === 0) {
                tbody.innerHTML = '<tr><td colspan="5">게시물이 없습니다.</td></tr>';
                return;
            }

            postsToShow.forEach(post => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${post.id}</td>
                    <td class="title-cell"><a href="post.html?id=${post.id}">${post.title}</a></td>
                    <td>${post.author}</td>
                    <td>${post.date}</td>
                    <td>${post.views}</td>
                `;
                tbody.appendChild(row);
            });
        }

        function renderPagination() {
            paginationContainer.innerHTML = '';
            const totalPosts = posts.length;
            const totalPages = Math.ceil(totalPosts / postsPerPage);

            // 현재 페이지가 전체 페이지 수를 초과하는 경우, 마지막 페이지로 설정
            if (currentPage > totalPages && totalPages > 0) {
                currentPage = totalPages;
            }

            for (let i = 1; i <= totalPages; i++) {
                const pageLink = document.createElement('a');
                pageLink.href = '#';
                pageLink.textContent = i;
                if (i === currentPage) pageLink.classList.add('active');

                pageLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    renderPosts(currentPage);
                    updateActiveLink();
                });
                paginationContainer.appendChild(pageLink);
            }
        }

        function updateActiveLink() {
            const pageLinks = paginationContainer.querySelectorAll('a');
            pageLinks.forEach(link => {
                link.classList.remove('active');
                if (parseInt(link.textContent) === currentPage) {
                    link.classList.add('active');
                }
            });
        }

        // 초기 렌더링
        renderPosts(currentPage);
        renderPagination();
    }

    // 2. 글쓰기 페이지 (write.html) 로직
    if (path === 'write.html') {
        const form = document.getElementById('write-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const content = document.getElementById('content').value;

            if (!title || !author || !content) {
                alert('모든 필드를 입력해주세요.');
                return;
            }

            const posts = getPosts();
            const newPost = {
                id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
                title: title,
                author: author,
                date: getCurrentDate(),
                views: 0,
                content: content
            };

            const updatedPosts = [newPost, ...posts]; // 새 글을 맨 위에 추가
            savePosts(updatedPosts);

            window.location.href = 'index.html';
        });
    }

    // 3. 상세 보기 페이지 (post.html) 로직
    if (path === 'post.html') {
        const params = new URLSearchParams(window.location.search);
        const postId = parseInt(params.get('id'));
        const posts = getPosts();
        const post = posts.find(p => p.id === postId);

        if (post) {
            // 조회수 증가 및 저장
            post.views++;
            savePosts(posts);

            // 화면에 데이터 표시
            document.getElementById('post-title').textContent = post.title;
            document.getElementById('post-author').textContent = post.author;
            document.getElementById('post-date').textContent = post.date;
            document.getElementById('post-views').textContent = post.views;
            document.getElementById('post-content').textContent = post.content;
        } else {
            document.querySelector('.view-container').innerHTML = '<h1>게시물을 찾을 수 없습니다.</h1><a href="index.html">목록으로 돌아가기</a>';
        }
    }
});