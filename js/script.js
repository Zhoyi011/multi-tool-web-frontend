// 搜索功能
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        const title = card.querySelector('.tool-title').textContent.toLowerCase();
        const desc = card.querySelector('.tool-desc').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        searchInput.value = '';
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach(card => {
            card.style.display = 'block';
        });
    }
});
