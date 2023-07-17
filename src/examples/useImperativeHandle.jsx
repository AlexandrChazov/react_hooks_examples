import {forwardRef, useImperativeHandle, useRef} from "react";
import "./App.css"

const App = () => {
  const postRef = useRef(null);

  function handleClick() {
    // т.о. мы получили доступ к списку коментариев "CommentList" и инпуту "Add comment..." дочерних компонент
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>
        Write a comment
      </button>
      <Post ref={postRef} />
    </>
  );
}

// дочерние компоненты должны быть обёрнуты в "forwardRef"
const Post = forwardRef((props, ref) => {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  // т.е. "useImperativeHandle" как бы добавляет новые методы к родительскому ref-у
  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
        // Это работать не будет, у нас нет полного доступа к инпуту
        //    addCommentRef.current.style.opacity = 0.5;
        //    addCommentRef.current.style.display = "none";
      }
    };
  }, []);

  return (
    <>
      <article>
        <p>Welcome to my blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
});

// дочерние компоненты должны быть обёрнуты в "forwardRef"
const CommentList = forwardRef(function CommentList(props, ref) {
  const divRef = useRef(null);

  // т.е. "useImperativeHandle" как бы добавляет новые методы к родительскому ref-у
  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      }
    };
  }, []);

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className="CommentList" ref={divRef}>
      {comments}
    </div>
  );
});

// дочерние компоненты должны быть обёрнуты в "forwardRef"
const AddComment = forwardRef(function AddComment(props, ref) {
  return <input placeholder="Add comment..." ref={ref} />;
});


export default App;