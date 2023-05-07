# `EnableCustomFunctions.plugin.js`
## Avaible functions
- ### `findByProps(...props)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1090280191416352800)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
findByProps('getAPIBaseURL')
```
https://user-images.githubusercontent.com/81536172/236669341-6aa68e3f-0292-4a0c-9938-14621c95c97d.mp4


- ### `getActionHandler(store, actionHandler)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099723941314048020)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
getActionHandler('ChannelStore', 'CHANNEL_CREATE');
```
https://user-images.githubusercontent.com/81536172/236669346-9fa4e7d5-961a-48ef-83f3-53ea82ae6425.mp4


- ### `getFunction(functionName, position = 0)` (`position` is optional)
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099724648389808220)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
getFunction('getChannel', 0)
```
https://user-images.githubusercontent.com/81536172/236669379-9a8f7c1c-e65e-44b3-a3df-978decdd3b9d.mp4


- ### `getStore(store)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099725409492422656)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example
```js
getStore('ChannelStore')
```
https://user-images.githubusercontent.com/81536172/236669386-18ed0088-5eee-4bc4-9792-e3ca80e422ac.mp4


- ### `searchFunctions(query)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099726086209814638)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
searchFunctions('user')
```
https://user-images.githubusercontent.com/81536172/236669272-d6e992b5-1d00-4ec4-991b-9b444dadc27d.mp4


- ### `searchStores(query)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099726632069115924)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Contributors: [syndicated#6591](https://discord.com/users/112511479806246912) (`112511479806246912`)
#### Example:
```js
searchStores('channel')
```
https://user-images.githubusercontent.com/81536172/236669276-7be35fda-f4e6-4034-aaa8-800daf1e0af2.mp4


- ### `searchExperiment(experiment)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097941394825412789)
#### Author: [Davri#0015](https://discord.com/users/457579346282938368) (`457579346282938368`)
#### Example:
```js
searchExperiment('2021-12_soundboard')
```
https://user-images.githubusercontent.com/81536172/236669267-9ed520b9-c614-4dfd-9787-34ccdef450aa.mp4


- ### `listAllServerFeatures()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097942131542331433)
#### Author: [HumanCat222#0001](https://discord.com/users/676018450115854347) (`676018450115854347`)
#### Example:
```js
listAllServerFeatures()
```
https://user-images.githubusercontent.com/81536172/236669391-5062172f-3608-4761-b7d1-983396216243.mp4


- ### `listServerFeatures(serverName)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097942131542331433)
#### Author: [HumanCat222#0001](https://discord.com/users/676018450115854347) (`676018450115854347`)
#### Contributors: [Stef#6705](https://discord.com/users/) (``)
#### Example:
```js
listServerFeatures('discord experiment hub')
```
https://user-images.githubusercontent.com/81536172/236669243-6fd1ec38-2117-4c15-b21b-f366748e132a.mp4


- ### `getAllFunctions()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099720606880104519)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
getAllFunctions()
```
https://user-images.githubusercontent.com/81536172/236669368-23b147c7-1551-427b-beae-b53d94bf86b7.mp4


- ### `addAllFeatures(serverId)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097935744523313162)
#### Author: [proxy#1000](https://discord.com/users/711325368333893722) (`711325368333893722`)
#### Example:
```js
addAllFeatures('1089540433010491392')
```
https://user-images.githubusercontent.com/81536172/236669295-66d909ef-1125-45d4-bdaf-405d846bf6d8.mp4


- ### `addFeatures(serverId, features)`
#### Source: [Discord Server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097935744523313162)
#### Author: [proxy#1000](https://discord.com/users/711325368333893722) (`711325368333893722`)
#### Example:
```js
addFeatures('1089540433010491392', ['INTERNAL_EMPLOYEE_ONLY'])
```
https://user-images.githubusercontent.com/81536172/236669312-6bc31615-a3b5-46bc-93a8-c01bd8c10983.mp4


- ### `enableExperiments()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1090279880878460950)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
enableExperiments()
```
https://user-images.githubusercontent.com/81536172/236669284-db69dd86-5924-468e-87e3-69310680fc6f.mp4


- ### `listExperiments()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097932371946389614)
#### Author: [proxy#1000](https://discord.com/users/711325368333893722) (`711325368333893722`)
#### Example:
```js
listExperiments()
```
https://user-images.githubusercontent.com/81536172/236669397-8b7cd351-177f-42a2-8520-c7762d1ec823.mp4


- ### `convertToMedia(channelId)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1098270676588167258)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
convertToMedia('1093451591400558613')
```
https://user-images.githubusercontent.com/81536172/236669333-62b06e22-2218-47d8-b8e0-92b9c6fd15f4.mp4


- ### `testNotification(data)` (`data` is optional)
#### Source: [Discord server](https://discord.gg/discord-603970300668805120) - [Channel Post](https://discord.com/channels/603970300668805120/1093424070462292029)
#### Author: [Chilli#1234](https://discord.com/users/1060289353059946607) (`1060289353059946607`)
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
https://user-images.githubusercontent.com/81536172/236669280-733166e0-7807-4485-9332-6cd553435b7f.mp4


- ### `addTopics(channelId, topics)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1100482530521649252)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
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
https://user-images.githubusercontent.com/81536172/236669323-7810ebe7-ff2b-4ab0-b57a-5c5ace84298e.mp4


- ### `addDM(userId)`
#### Source: [Discord server](https://discord.gg/discord-603970300668805120) - [Channel Post](https://discord.com/channels/603970300668805120/1101570562368745492)
#### Author: [RedNix#0816](https://discord.com/users/701339955087278091) (`701339955087278091`)
#### Example:
```js
addDM('643945264868098049') //this adds Discord system account to your dms
```
https://user-images.githubusercontent.com/81536172/236669304-0572df0e-942f-4c44-a1e2-c9a097c9732f.mp4


- ### `searchActionHandlers(query)`
#### Source: [Discord Server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1101909086456512682)
#### Author: [✨Tolgchu✨#1452](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
searchActionHandlers('channel')
```
https://user-images.githubusercontent.com/81536172/236669261-fc5149e6-d0c5-43d6-ae0a-f1e95312fbe7.mp4


- ### `getAllFriendInvites()`
#### Source: [Discord Server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1102558838848225290)
#### Author: [](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
getAllFriendInvites()
```
https://user-images.githubusercontent.com/81536172/236669357-5d4d8d70-9635-415e-b9ea-2feb6aaaa35e.mp4


- ### `getFriendInvite(inviteCode)`
#### Source: [Discord Server]() - [Channel Post]()
#### Author: [](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
getFriendInvite('')
```
https://user-images.githubusercontent.com/81536172/236669372-f4ea8a6f-bee2-4ab8-aaf9-21698040bf00.mp4


- ### `createFriendInvite()`
#### Source: [Discord Server]() - [Channel Post]()
#### Author: [](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
createFriendInvite()
```
https://user-images.githubusercontent.com/81536172/236669337-f718e112-a60c-47cf-9b99-5e4c93adc477.mp4


- ### `revokeAllFriendInvites()`
#### Source: [Discord Server]() - [Channel Post]()
#### Author: [](https://discord.com/users/329671025312923648) (`329671025312923648`)
#### Example:
```js
revokeAllFriendInvites()
```
https://user-images.githubusercontent.com/81536172/236669249-4e1df840-54eb-4535-8137-b785f0c93459.mp4

## ToDo:
- [ ] Add image to `listServerFeatures`, `getAllFriendInvites`, `getFriendInvite`, `createFriendInvite` and `revokeAllFriendInvites` functions
- [ ] Update all images to show BD popups
- [ ] Add invite code to `getFriendInvite` example
- [ ] Add a GUI to the plugin so users don't have to use the console
- [ ] Use BetterDiscord's Webpack module (`BdApi.Webpack`) instead of discord integrated one (`webpackChunkdiscord_app`)
