import { useState, useTransition } from 'react';
import About from './About.jsx';
import Posts from './Posts.jsx';
import Contacts from './Contacts.jsx';

export default function TabContainer() {
    // startTransition это функция, которая помечает обновление стейта как транзишн
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    function selectTab(newTab) {
        startTransition(() => {
            // назначение нового состояния происходит внутри функции startTransition
            // а это означает что если мы не дожидаясь смены состояния вызовем функцию изменения состояния setTab()
            // ещё раз, то первоначальная функция изменения состояния будет отменена а вместо неё выполниться
            // следующая функция смены состояния
            setTab(newTab);
        });
    }

    return (
        <>
            <button
                isActive={tab === 'about'}
                onClick={() => selectTab('about')}
            >
                About
            </button>
            <button
                isActive={tab === 'posts'}
                onClick={() => selectTab('posts')}
            >
                Posts (slow)
            </button>
            <button
                isActive={tab === 'contact'}
                onClick={() => selectTab('contact')}
            >
                Contact
            </button>
            <hr />
            {isPending
                ? <b className="pending">Загрузка...</b>
                : <div>
                    {tab === 'about' && <About />}
                    {tab === 'posts' && <Posts />}
                    {tab === 'contact' && <Contacts />}
                  </div>}

        </>
    );
}