import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import './Tweet.css';

interface TweetProps {
  content: string;
}

export const Tweet = ({ content }: TweetProps) => {
  return (
    <Link to="/tweet" className="tweet">
      <img src="https://github.com/TiagoM13.png" alt="Tiago Mota" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Tiago Mota</strong>
          <span>@tiago_m13</span>
        </div>
        <p>{content}</p>

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
    </Link>
  );
}
