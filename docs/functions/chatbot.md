# Chatbot

<!-- tabs:start -->
#### **table**

| parameter | type | required | description |
|-----------|------|----------|-------------|
| client | [Client](https://revolt.js.org/classes/Client.Client-1.html) | ✓ | Revolt.js client |
| message | [Message](https://revolt.js.org/classes/maps_Messages.Message.html) | ✓ | Revolt.js message object |
| channels | Array<[ChannelId](https://revolt.js.org/classes/maps_Channels.Channel.html#_id)> | ✓ | Channels where bot will talk in |
| bot | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | X | Bot informations |
| bot > age | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Age of the bot |
| bot > birthmonth | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Birth month of the bot |
| bot > birthdaynum | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Birth number of the bot |
| bot > gender | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Gender of the bot |
| bot > ownername | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | name of the owner of the bot |
| bot > botname | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | name of the bot |
| bot > favorites | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | X | Favorite things of the bot |
| bot > favorites > actor | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite actor of the bot |
| bot > favorites > actress | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite actress of the bot |
| bot > favorites > artist | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite artist of the bot |
| bot > favorites > author | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite author of the bot |
| bot > favorites > band | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite band of the bot |
| bot > favorites > book | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite book of thr bot |
| bot > favorites > color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite color of the bot |
| bot > favorites > food | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite food of the bot |
| bot > favorites > movie | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite movie of the bot |
| bot > favorites > opera | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite opera of the bot |
| bot > favorites > season | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite season of the bot |
| bot > favorites > show | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite show of the bot |
| bot > favorites > song | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite song of the bot |
| bot > favorites > sport | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite sport of the bot |
| bot > favorites > subject | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | X | Favorite subject of the bot |

#### **example**

Without optional options:

```js
const simplyrjs = require('simply-rjs')

simplyrjs.chatbot({
  client: client,
  message: message,
  channels: ['ID1'] //ids into the array cam be unlimited
})
```

With optional options:

```
const simplyrjs = require('simply-rjs')

simplyrjs.chatbot({
  client: client,
  message: message,
  channels: ['ID1'] //ids into the array cam be unlimited
  bot: {
    age: '10',
    birthmonth: 'August',
    birthdaynum: '28',
    gender: 'Male',
    ownername: 'Stef-00012',
    botname: 'simply-rjs',
    favorites: {
      actor: 'Tom Hanks',
      actress: 'Julia Roberts',
      artist: 'Leonardo da Vinci',
      author: 'Ernest Hemingway',
      band: 'Beatles',
      book: 'The Odyssey',
      color: 'green',
      food: 'electricity',
      movie: 'Matrix',
      opera: 'Carmen',
      season: 'Spring',
      show: 'Discovery',
      song: 'Imagine by the Beatles',
      sport: 'baseball',
      subject: 'making friends'
    }
  }
})
```

<!-- tabs:end -->