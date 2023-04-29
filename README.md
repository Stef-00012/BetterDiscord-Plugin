# `EnableCustomFunctions.plugin.js`
## Avaible functions
- ### `findByProps(...props)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1090280191416352800)
#### Example:
```js
findByProps('getAPIBaseURL')
```


- ### `getActionHandler(store, actionHandler)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099723941314048020)
#### Example:
```js
getActionHandler('ChannelStore', 'CHANNEL_CREATE');
```


- ### `getFunction(functionName)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099724648389808220)
#### Example:
```js
getFunction('getChannel')
```


- ### `getStore(store)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099725409492422656)
#### Example
```js
getStore('ChannelStore')
```


- ### `searchFunction(query)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099726086209814638)
#### Example:
```js
searchFunction('user')
```


- ### `searchStore(query)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099726632069115924)
#### Example:
```js
searchStore('channel')
```


- ### `searchExperiment(experiment)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097941394825412789)
#### Example:
```js
searchExperiment('2021-12_soundboard')
```


- ### `listServerFeatures()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097942131542331433)
#### Example:
```js
listServerFeatures()
```


- ### `setEmoji(serverId, channelName, emoji)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1090280784126025752)
#### Example:
```js
setEmoji('1089540433010491392', 'support', '🆘')
```


- ### `getAllFunctions()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099720606880104519)
#### Example:
```js
getAllFunctions()
```


- ### `addAllFeatures(serverId)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097935744523313162)
#### Example:
```js
addAllFeatures('1089540433010491392')
```


- ### `enableExperiments()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1090279880878460950)
#### Example:
```js
enableExperiments()
```


- ### `listExperiments()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097932371946389614)
#### Example:
```js
listExperiments()
```


- ### `convertToMedia(channelId)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1098270676588167258)
#### Example:
```js
convertToMedia('1093451591400558613')
```


- ### `testNotification(data)` (`data` is optional)
#### Source: [Discord server](https://discord.gg/discord-603970300668805120) - [Channel Post](https://discord.com/channels/603970300668805120/1093424070462292029)
#### Example:
```js
testNotification({
  avatar: 'https://cdn.discordapp.com/avatars/1060289353059946607/a_85ef89511154380d3d2c65a528259784.png?size=4096', //avatar to display in the notification
  user: 'Stef', //username to display in the notificaiton
  content: 'This is a default message', //text to display in the notification
  sound: 'mute', //sound to play with the notification
  volume: 1 //volume of the notification
})
```


- ### `addTopics(channelId, topics)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1100482530521649252)
#### Example:
```js
addTopics('1089808002359504946', [
  {
    topic: 'Just a chat', //topic title
    summ_short: 'Just a chat between users', //topic description
    people: ['495643575669751818', '329671025312923648', '913877854243131405'], //IDs of the users in the topic
    start_id: '1101782766602960957', //ID of the first message of the topic
    end_id: '1101785821796905061', //ID of the last message of the topic
    count: 69 //message count
  }
])
```


- ### `addDM(userId)`
#### Source: [Discord server](https://discord.gg/discord-603970300668805120) - [Channel Post](https://discord.com/channels/603970300668805120/1101570562368745492)
#### Example:
```js
addDM('643945264868098049') //this adds Discord system account to your dms
```


- ### `checkPomelo(username)`
#### Source: [Discord server](https://discord.gg/discord-603970300668805120) - [Channel Post](https://discord.com/channels/603970300668805120/1099791239710265455)
#### Example:
```js
checkPomelo('Stef_DP')
```
