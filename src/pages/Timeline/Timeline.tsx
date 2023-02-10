import { FormEvent, useState } from "react";

import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";

import './Timeline.css';

const Timeline = () => {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ]);

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  }

  return (
    <main className='timeline'>
      <Header title="Home" />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/TiagoM13.png" alt="Tiago Mota" />
          <textarea
            id="tweet"
            value={newTweet}
            placeholder="What's happening?"
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  );
}

export default Timeline;
