import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";

import './Timeline.css';

const tweets = [
  'Meu primeiro tweet',
  'Teste',
  'Deu certo tweetar!'
]

const Timeline = () => {
  return (
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

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  );
}

export default Timeline;
