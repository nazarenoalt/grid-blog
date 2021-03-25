const blog_items = document.querySelectorAll('.blog');

blog_items.forEach(item => {
    const item_height = item.clientHeight;
    const cell = 50;
    item.style.maxHeight = `${cell*10}px`;
    if(item_height > cell*9) {
        item.classList.add('s7')
    } else if(item_height <= cell*9 && item_height > cell*8) {
        item.classList.add('s6')
    } else if(item_height <= cell*8 && item_height > cell*7) {
        item.classList.add('s5')
    } else if(item_height <= cell*7 && item_height > cell*6) {
        item.classList.add('s4')
    } else if(item_height <= cell*6 && item_height > cell*5) {
        item.classList.add('s3')
    } else if(item_height <= cell*5 && item_height > cell*4) {
        item.classList.add('s2')
    } else if(item_height <= cell*4 && item_height > cell*3) {
        item.classList.add('s1')
    }
})