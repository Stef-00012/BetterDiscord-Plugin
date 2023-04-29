# `EnableCustomFunctions.plugin.js`
## Avaible functions
- ### `findByProps(...props)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1090280191416352800)
#### Example:
```js
findByProps('getAPIBaseURL')
```
![findByProps](https://user-images.githubusercontent.com/81536172/235297115-dc50cd0d-5276-45b9-b0a2-8dc842ba377e.png)


- ### `getActionHandler(store, actionHandler)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099723941314048020)
#### Example:
```js
getActionHandler('ChannelStore', 'CHANNEL_CREATE');
```
![getActionHandler](https://user-images.githubusercontent.com/81536172/235297144-9c08d2a8-cafd-4578-bc65-2de5535397db.png)


- ### `getFunction(functionName)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099724648389808220)
#### Example:
```js
getFunction('getChannel')
```
![getFunction](https://user-images.githubusercontent.com/81536172/235297195-de02fc9a-8719-4d03-897c-1c5684e3c2a6.png)


- ### `getStore(store)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099725409492422656)
#### Example
```js
getStore('ChannelStore')
```
![getStore](https://user-images.githubusercontent.com/81536172/235297226-9cc39aab-9f54-4e51-a3b6-ccffdb917952.png)


- ### `searchFunctions(query)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099726086209814638)
#### Example:
```js
searchFunctions('user')
```
![searchFunctions](https://user-images.githubusercontent.com/81536172/235309148-f91fddb1-7512-4617-9fdc-f7f879eb297b.png)


- ### `searchStores(query)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099726632069115924)
#### Example:
```js
searchStores('channel')
```
![searchStores](https://user-images.githubusercontent.com/81536172/235309184-39abe493-6ac9-4abd-b1ac-62e0f60b3847.png)


- ### `searchExperiment(experiment)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097941394825412789)
#### Example:
```js
searchExperiment('2021-12_soundboard')
```
![searchExperiment](https://user-images.githubusercontent.com/81536172/235297357-97ca84b6-b3d2-45b9-b504-d9adf30a58ac.png)


- ### `listServerFeatures()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097942131542331433)
#### Example:
```js
listServerFeatures()
```
![listServerFeatures](https://user-images.githubusercontent.com/81536172/235297414-2e7bd40d-1449-4364-bc10-5a31fcaebe97.png)


- ### `getAllFunctions()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1099720606880104519)
#### Example:
```js
getAllFunctions()
```
![getAllFunctions](https://user-images.githubusercontent.com/81536172/235297553-f4dcea7b-c792-48bd-8f1a-14d8215303d3.png)


- ### `addAllFeatures(serverId)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097935744523313162)
#### Example:
```js
addAllFeatures('1089540433010491392')
```
![addAllFeatures](https://user-images.githubusercontent.com/81536172/235297665-d2936988-7f70-47e8-900f-0dea8d7fb2d1.png)


- ### `addFeatures(serverId, features)`
#### Source: [Discord Server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097935744523313162)
#### Example:
```js
addFeatures('1089540433010491392', ['INTERNAL_EMPLOYEE_ONLY'])
```
![addFeatures](https://user-images.githubusercontent.com/81536172/235309318-27a504f4-faa4-42cd-8123-6769bbf6e469.png)


- ### `enableExperiments()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1090279880878460950)
#### Example:
```js
enableExperiments()
```
![enableExperiments](https://user-images.githubusercontent.com/81536172/235297789-113f1c0e-dc1f-474f-9d18-98af67459124.png)


- ### `listExperiments()`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1097932371946389614)
#### Example:
```js
listExperiments()
```
![listExperiments](https://user-images.githubusercontent.com/81536172/235297808-f3d7c957-bafc-4d3d-9f30-84e7b376ae73.png)


- ### `convertToMedia(channelId)`
#### Source: [Discord server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1098270676588167258)
#### Example:
```js
convertToMedia('1093451591400558613')
```
![convertToMedia](https://user-images.githubusercontent.com/81536172/235297895-0638d9a9-1703-4fcf-992e-32c739bfd081.png)


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
![testNotification](https://user-images.githubusercontent.com/81536172/235298784-988237d7-f3d5-4302-bc8d-542f98ae0f15.png)


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
![addTopics](https://user-images.githubusercontent.com/81536172/235298818-53371193-3f58-48eb-96ac-b58f3e663625.png)


- ### `addDM(userId)`
#### Source: [Discord server](https://discord.gg/discord-603970300668805120) - [Channel Post](https://discord.com/channels/603970300668805120/1101570562368745492)
#### Example:
```js
addDM('643945264868098049') //this adds Discord system account to your dms
```
![addDM](https://user-images.githubusercontent.com/81536172/235298869-40eace7e-bd20-4115-8aaa-eba1ba812f60.png)


- ### `checkPomelo(username)`
#### Source: [Discord server](https://discord.gg/discord-603970300668805120) - [Channel Post](https://discord.com/channels/603970300668805120/1099791239710265455)
#### Example:
```js
checkPomelo('Stef_DP')
```
![checkPomelo](https://user-images.githubusercontent.com/81536172/235298937-f0432755-4777-4a39-b373-a9d82317497b.png)


- ### `searchActionHandlers(query)`
#### Source: [Discord Server](https://discord.gg/RmK8aGkSuZ) - [Channel Post](https://discord.com/channels/1089540433010491392/1101909086456512682)
#### Example:
```js
searchActionHandlers('channel')
```
![searchActionHandlers](https://user-images.githubusercontent.com/81536172/235314678-a1af4c90-035d-4015-97fe-2cf4dab16f80.png)