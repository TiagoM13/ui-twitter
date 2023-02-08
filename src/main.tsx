import React from 'react';
import ReactDOM from 'react-dom/client';

import { Tweet } from './components/Tweet/Tweet';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

import './global.css';
import { Separator } from './components/Separator/Separator';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className='timeline'>
          <Header title="Home" />

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/TiagoM13.png" alt="Tiago Mota" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <Separator />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
