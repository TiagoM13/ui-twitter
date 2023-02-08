import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react';

import './Tweet.css';

export const Tweet = () => {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/TiagoM13.png" alt="Tiago Mota" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Tiago Mota</strong>
          <span>@tiago_m13</span>
        </div>
        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
          ✅ npm build: De 120s para 22s <br />
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
        </p>

        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            20
          </button>

          <button>
            <ArrowClockwise />
            20
          </button>

          <button>
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
