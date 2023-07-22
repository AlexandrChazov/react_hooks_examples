import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [page, setPage] = useState(`users`);
  const [info, setInfo] = useState([]);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  console.log("render App");

  useEffect(() => {
    let isIgnoreResponse = false;

    console.log("render useEffect");
    fetch(`https://jsonplaceholder.typicode.com/${page}/1`)
      .then(response => response.json())
      .then(json => {
        // нужно для ситуации когда ответ от сервера ещё не пришёл, а пользователь уже изменил "page"
        // и значит данные потеряли свою актуальность
        if (!isIgnoreResponse) {
          setInfo(json)
        }
      })
    return () => {
      // если пользователь поменяет страницу данные будут считаться уже не актуальными
      isIgnoreResponse = true;
      console.log("Exit effect")      // при первоначальной отрисовке console.log не сработает
    }                                 // он сработает при выходе из эффекта, перед новым срабатыванием
  }, [page])                    // при изменении page

  useEffect(() => {
    console.log("ComponentDidMount");
    window.addEventListener('mousemove', listenMouse);
    return () => {                                                 // убираем EventListener, сработает при
      window.removeEventListener('mousemove', listenMouse);   // выходе из эффекта,
    }                                                              // т.е при демонтаже компоненты
  }, [])

  function listenMouse(event) {
    setMousePosition({
      ...mousePosition,
      x: event.clientX,
      y: event.clientY
    })
  }

    return (
      <div>
        <div>{page}</div>
        <button onClick={() => setPage("users")} type="button" className="btn btn-primary">users</button>
        <button onClick={() => setPage("posts")} type="button" className="btn btn-secondary">posts</button>
        <button onClick={() => setPage("albums")} type="button" className="btn btn-success">albums</button>
        <pre>{JSON.stringify(info, null, 2)}</pre>
        <div>{JSON.stringify(mousePosition, null, 2)}</div>
      </div>
    );
  }

export default App;
