import { Canister, query, text, update, Void  } from 'azle';

let quoteOfTheDay = '';
let name ='';

function getGreeting(): string {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    if (currentHour >= 0 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

let greetings = getGreeting()

let quotes = [
    "In the realm of coding, precision is the key to unlocking the door to innovation",
    "Programming is not just about writing code; it's a journey of continuous improvement and problem-solving",
    "A well-architected code is a testament to a developer's commitment to excellence.",
    "Programming is the art of turning complexity into simplicity through structured logic.",
    "The beauty of programming lies in the elegance of code, where each line is a brushstroke creating a masterpiece of functionality.",
    "The difference between ordinary and extraordinary is that little extra."
  ];

  let getRandomQuote =   quotes[Math.floor(Math.random() * quotes.length)];

export default Canister (

    {       
       
        getQuote: query([], text, () => {
            return getRandomQuote;
        }),

        setMessage: update([text], Void, (yourName) => {
            name = yourName;
        }),

        getPersonalisedQuote: query([], text, () => {
            return `${greetings} ${name}. Here is the quote of the day: ${getRandomQuote}`; 
        }),


        

    }

    
); 
