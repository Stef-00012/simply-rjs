# Description

A node package for `revolt.js` made from [Stef#6705](https://discord.com/users/694986201739952229)/[Stef](https://app.revolt.chat/@01FEY7JBN0B1VG5D98BEBAE7KA), go to the [Functions](https://github.com/Stef-00012/simply-rjs#functions) part for see all the current features (it is still in developement so don't have alot function, in the future i will add more :-))

# Install

```
npm i simply-rjs
```

## Requirements

Node.js<br />revolt.js

# Functions

### • Chatbot
let the bot talks with the people into the specified channels

```js
import { Chatbot } from 'symply-rjs';
client.on('message', async (message) => {
  Chatbot({
    client: client, //revolt.js client [required]
    message: message, //message object [required]
    channels: ['01FEY83CT3VFG9YCR3JVGPJHPH'], //channels where the chatbot is enabled (channels ids) [required]
    bot: { 
      age: '50', //custom age of the bot [optional]
      birthmonth: 'January', //custom birth month of the bot [optional]
      birthdaynum: '1', //custom birth day number of the bot [optional]
      gender: 'male', //custom gender od the bot [optional]
      favorites: { 
        actor: 'my actor', //custom favorite actor of the bot [optional]
        actress: 'my actress', //custom favorite actress of the bot [optional]
        artist: 'my artist', //custom favorite artist of the bot [optional]
        author: 'my author', //custom favorite author of the bot [optional]
        band: 'my band', //custom favorite band of the bot [optional]
        book: 'my book', //custom favorite book of the bot [optional]
        color: 'my color', //custom favorite color of the bot [optional]
        food: 'my food', //custom favorite food of the bot [optional]
        movie: 'my movie', //custom favorite movie of the bot [optional]
        opera: 'my opera', //custom favorite opera of the bot [optional]
        season: 'my season', //custom favorite season of the bot [optional]
        show: 'my show', //custom favorite show of the bot [optional]
        song: 'my song', //custom favorite song of the bot [optional]
        sport: 'my sport', //custom favorite sport of the bot [optional]
        subject: 'my subject' //custom favorite subject of the bot [optional]
      },
      ownername: 'Stef', //name of bot's owner [optional]
      botname: 'my bot', //name of the bot [optional]
      unknowncharactererror: 'Could you repeat?' //error to send if the bot receives an unknown character
    }
  })
})
```

