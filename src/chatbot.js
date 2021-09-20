const fetch = require('node-fetch')
 module.exports = async (options) => {
   if (typeof options !== 'object') return;
    if (!options.message) {
      throw new Error('Simply-rjs Error: message is a required parameter')
    }
    if (!options.channels) {
      throw new Error('Simply-rjs Error: channels is a required parameter')
    }
    if (!Array.isArray(options.channels)) {
      throw new TypeError('Simply-rjs Error: channels parameter must be an array')
    }
    if (!options.client) {
      throw new Error('Simply-rjs Error: client is a required parameter')
    }
    if (options.client.constructor.name !== 'Client') {
      throw new TypeError('Simply-rjs Error:vclient parameter must be a revolt.js client')
    }
    if (!options.bot) {
      options.bot = {}
    }
    if (!options.bot.age) {
      options.bot.age = '16'
    }
    if (typeof options.bot.age !== 'string') {
      throw new TypeError('Simply-rjs Error: bot age must be a string, integer or number')
    }
    if (!options.bot.birthmonth) {
      options.bot.birthmonth = 'August';
    }
    if (!options.bot.birthdaynum) {
      options.bot.birthdaynum = '16';
    }
    let birthyear = parseInt(new Date().toLocaleDateString().split('/')[2] - options.bot.age);
    let birthdate = `${options.bot.birthmonth} ${options.bot.birthdaynum}, ${birthyear}`;
    let birthday = `${options.bot.birthmonth} ${options.bot.birthdaynum}`
    if (!options.bot.gender) {
      options.bot.gender = 'female';
    }
    if (typeof options.bot.gender !== 'string') {
      throw new TypeError('Simply-rjs Error: bot gender parameter must be a string')
    }
    if (!options.bot,favorites) {
      options.bot.favorites = {}
    }
    if (!options.bot.favorites.actor) {
      options.bot.favorites.actor = 'Tom Hanks';
    }
    if (typeof options.bot.favorites.actor !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite actor parameter must be a string')
    }
    if (!options.bot.favorites.actress) {
      options.bot.favorites.actress = 'Julia Roberts'
    }
    if (typeof options.bot.favorites.actress !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite actress parameter must be a string')
    }
    if (!options.bot.favorites.artist) {
      options.bot.favorites.artist = 'Leonardo da Vinci'
    }
    if (typeof options.bot.favorites.artist !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite artist parameter must be a string')
    }
    if (!options.bot.favorites.author) {
      options.bot.favorites.author = 'Ernest Hemingway'
    }
    if (typeof options.bot.favorites.author !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite author parameter must be a string')
    }
    if (!options.bot.favorites.band) {
      options.bot.favorites.band = 'Beatles'
    }
    if (typeof options.bot.favorites.band !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite band parameter must be a string')
    }
    if (!options.bot.favorites.book) {
      options.bot.favorites.book = 'The Odyssey'
    }
    if (typeof options.bot.favorites.book !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite book parameter must be a string')
    }
    if (!options.bot.favorites.color) {
      options.bot.favorites.color = 'green'
    }
    if (typeof options.bot.favorites.color !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite color parameter must be a string')
    }
    if (!options.bot.favorites.food) {
      options.bot.favorites.food = 'electricity'
    }
    if (typeof options.bot.favorites.food !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite food parameter must be a string')
    }
    if (!options.bot.favorites.movie) {
      options.bot.favorites.movie = 'Matrix'
    }
    if (typeof options.bot.favorites.movie !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite movie parameter must be a string')
    }
    if (!options.bot.favorites.opera) {
      options.bot.favorites.opera = 'Carmen'
    }
    if (typeof options.bot.favorites.opera !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite opera parameter must be a string')
    }
    if (!options.bot.favorites.season) {
      options.bot.favorites.season = 'Spring'
    }
    if (typeof options.bot.favorites.season !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite season parameter must be a string')
    }
    if (!options.bot.favorites.show) {
      options.bot.favorites.show = 'Discovery'
    }
    if (typeof options.bot.favorites.show !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite show parameter must be a string')
    }
    if (!options.bot.favorites.song) {
      options.bot.favorites.song = 'Imagine by the Beatles'
    }
    if (typeof options.bot.favorites.song !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite song parameter must be a string')
    }
    if (!options.bot.favorites.sport) {
      options.bot.favorites.sport = 'baseball'
    }
    if (typeof options.bot.favorites.sport !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite sport parameter must be a string')
    }
    if (!options.bot.favorites.subject) {
      options.bot.favorites.subject = 'making friends'
    }
    if (typeof options.bot.favorites.subject !== 'string') {
      throw new TypeError('Simply-rjs Error: bot favorite subject parameter must be a string')
    }
    if (!options.bot.ownername) {
      options.bot.ownername = `Simply-rjs`
    }
    if (typeof options.bot.ownername !== 'string') {
      throw new TypeError('Simply-rjs Error: bot ownername parameter must be a string')
    }
    if (!options.bot.botname) {
      options.bot.botname = client.user.username
    }
    if (typeof options.bot.botname !== 'string') {
      throw new TypeError('Simply-rjs Error: bot botname parameter must be a string')
    }
    if (options.message.author.bot) return;
    try {
    options.channels.forEach(channel => {
      if (!client.channels.get(channel._id)) {
        throw new TypeError('Simply-rjs Error: one of the given channel ids is not valid')
      }
      if (options.channels.includes(options.message.channel._id)) {
        var ranges = [
          '\ud83c[\udf00-\udfff]',
          '\ud83d[\udc00-\ude4f]',
          '\ud83d[\ude80-\udeff]'
        ];
        let input = options.message.content.replace(new RegExp(ranges.join('|'), 'g'), '.')
        fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${input}&age=${options.bot.age}&birthyear=${birthyear}&birthdate=${birthdate}&birthday=${birthday}&favoriteactor=${options.bot.favorites.actor}&favoriteactress=${options.bot.favorites.actress}$favoriteartist=${options.bot.favorites.artist}&favoriteauthor=${options.bot.favorites.author}&favoriteband=${options.bot.favorites.band}&favoritebook=${options.bot.favorites.book}&favoritecolor=${options.bot.favorites.color}&favoritefood=${options.bot.favorites.food}&favoritemovie=${options.bot.favorites.movie}&favoriteopera=${options.bot.favorites.opera}&favoriteseason=${options.bot.favorites.season}&favoriteshow=${options.bot.favorites.show}&favoritesong=${options.bot.favorites.song}&favoritesport=${options.bot.favorites.sport}&favoritesubject=${options.bot.favorites.subject}&gender=${options.bot.gender}&ownername=${options,bot.ownername}&botname=${options.bot.botname}`).then(res => res.json()).then(json => {
          let reply = json.message.replace('@here', '<here mention>').replace('@everyone', '<everyone mention>').replace(new RegExp('/<@([A-z0-9]{26})>/g'), '<user/role mention>')
          options.message.channel.sendMessage({ content: `${reply.toString()}` })
        })
      }
    })
    } catch (err) {
      console.log(`Simply-rjs Error: ${err.stack}`)
    }
  }