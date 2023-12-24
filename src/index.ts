import { Canister, query, text,  } from 'azle';

let quotes = [
    "In the realm of coding, precision is the key to unlocking the door to innovation",
    "Programming is not just about writing code; it's a journey of continuous improvement and problem-solving",
    "A well-architected code is a testament to a developer's commitment to excellence.",
    "Programming is the art of turning complexity into simplicity through structured logic.",
    "The beauty of programming lies in the elegance of code, where each line is a brushstroke creating a masterpiece of functionality.",
    "The difference between ordinary and extraordinary is that little extra."
  ];

  const getRandomQuote =   quotes[Math.floor(Math.random() * quotes.length)];

export default Canister (
    {
        getQuote: query([], text, () => {
            return getRandomQuote;
        }),
    }
);
