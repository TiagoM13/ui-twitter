import { FormEvent, KeyboardEvent, useState } from "react";

import { Tweet } from "../../components/Tweet/Tweet";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";

import './Status.css';

const Status = () => {
  const [newAnswers, setNewAnswers] = useState('');
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ]);

  const createNewAnswer = (event: FormEvent) => {
    event.preventDefault();

    setAnswers([newAnswers, ...answers]);
    setNewAnswers('');
  }

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers]);
      setNewAnswers('');
    }
  }

  return (
    <main className='status' >
      <Header title="Tweet" />

      <Tweet
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure corrupti fuga praesentium quos distinctio voluptate provident alias autem culpa ullam, saepe tempore hic neque velit! Officiis vel aperiam quidem odit?"
      />

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/TiagoM13.png" alt="Tiago Mota" />
          <textarea
            id="tweet"
            value={newAnswers}
            placeholder="Tweet your answer"
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => setNewAnswers(event.target.value)}
          />
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
