import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";

import './Status.css';

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
]

const Status = () => {
  return (
    <main className='status' >
      <Header title="Tweet" />

      <Tweet
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure corrupti fuga praesentium quos distinctio voluptate provident alias autem culpa ullam, saepe tempore hic neque velit! Officiis vel aperiam quidem odit?"
      />

      <Separator />

      <form className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/TiagoM13.png" alt="Tiago Mota" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  );
}

export default Status;
