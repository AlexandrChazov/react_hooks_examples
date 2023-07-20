import { memo } from 'react';

const Posts = memo(function Posts() {
    let items = [];
    for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }
    return (
        <ul className="items">
            {items}
        </ul>
    );
});



function SlowPost({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // ни чего не делаем, просто ждём 1 мс чтобы замедлить код
    }

    return (
        <li className="item">
            Post #{index + 1}
        </li>
    );
}

export default Posts;