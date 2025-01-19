import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button className={'h-10 px-6 font-semibold hover:bg-blue-800 rounded-md bg-black text-white'} onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}