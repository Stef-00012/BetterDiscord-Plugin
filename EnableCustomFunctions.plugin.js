/**
 * @name EnableCustomFunctions
 * @author Stef#6705
 * @authorId 694986201739952229
 * @description Enables functions such as findByProps
 * @version 1.1.0
 * @website https://github.com/Stef-00012/BetterDiscord-Plugin/tree/main#enablecustomfunctionspluginjs
 * @source https://github.com/Stef-00012/BetterDiscord-Plugin/blob/main/EnableCustomFunctions.plugin.js
 */

module.exports = meta => ({
    start() {
        /**
         * @method findByProps
         * @author ✨Tolgchu✨#1452
         * @credits Vocane#4200
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1090280191416352800
         */
        window.findByProps = function (...props) {
            mods = webpackChunkdiscord_app.push([[Symbol()], {}, ({ c }) => Object.values(c)]);

            webpackChunkdiscord_app.pop();

            for (let m of mods) {
                try {
                    if (!m.exports || m.exports === window) continue;
                    if (props.every((x) => m.exports?.[x])) return m.exports;

                    for (let ex in m.exports) {
                        if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
                    };
                } catch { };
            };
        };

        /**
         * @method getActionHandler
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099723941314048020
         */
        window.getActionHandler = function (store, actionHandler) {
            webpackChunkdiscord_app.push([[Symbol()], {}, (e) => {
                module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default;
            }]);

            let stores = Object.values(Object.values(module._dispatcher._actionHandlers)[3].nodes).filter(s => s.name === store);
            let found;

            for (var store of stores) {
                if (!found && store.actionHandler[actionHandler]) found = store;
            };

            if (found) return found.actionHandler[actionHandler];
            else {
                BdApi.UI.showToast(`${actionHandler} action handler could not found!`, {
                    type: "error"
                })
                return console.error(`${actionHandler} action handler could not found!`);
            }
        };

        /**
         * @method getFunction
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099726086209814638
         */
        window.getFunction = function (f, position = 0) {
            return webpackChunkdiscord_app.push([[Symbol()], {}, e => Object.values(e.c)]).filter(m => m?.exports?.Z?.[f])[position]?.exports?.Z?.[f];
        };

        /**
         * @method getStore
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099725409492422656
         */
        window.getStore = function (store) {
            webpackChunkdiscord_app.push([[Symbol()], {}, (e) => {
                module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default;
            }]);

            return Object.values(Object.values(module._dispatcher._actionHandlers)[3].nodes).filter(s => s.name === store)[0];
        };

        /**
         * @method searchFunctions
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099726086209814638
         */
        window.searchFunctions = function (query) {
            return webpackChunkdiscord_app.push([[Symbol()], {}, e => Object.values(e.c)]).filter(m => typeof m?.exports?.Z === "object").map(m => Object.entries(m?.exports?.Z).filter(entry => typeof entry[1] === "function" && entry[0].toLowerCase().includes(query)).map(entry => entry[0])).filter(array => array.length !== 0);
        };

        /**
         * @method searchStores
         * @author ✨Tolgchu✨#1452
         * @contributors syndicated#6591
         */
        window.searchStores = function (query) {
            try {
                findByProps;
            } catch (error) {
                BdApi.UI.showToast('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800', {
                    type: "warn"
                })
                return console.error('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            return Object.fromEntries(findByProps('connectStores').Store.getAll().filter(store => store.getName().toLowerCase().includes(query)).map(matchingStore => [matchingStore.getName(), matchingStore]));
        };

        /**
         * @method searchExperiment
         * @author Davri#0015
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097941394825412789
         */
        window.searchExperiment = function (experiment) {
            exp = experiment
            expStore = findByProps("getGuildExperimentBucket")
            return Object.values(findByProps("getGuildCount").getGuilds()).filter(g => expStore.getGuildExperimentBucket(exp, g.id) > 0)
        };

        /**
         * @method listAllServerFeatures
         * @author HumanCat222#0001
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097942131542331433
         */
        window.listAllServerFeatures = async function () {
            let BDOutput =  []
            let guilds = await (webpackChunkdiscord_app.push([[''], {}, e => { m = []; for (let c in e.c) m.push(e.c[c]) }]), m).find(m => m?.exports?.Z?.getGuildCount).exports.Z.getGuilds()
            Object.values(guilds).forEach(guild => {
                let features = (guild.features)
                BDOutput.push(`# ${guild.name}:`)
                BDOutput.push(Array.from(features).join(', '))
                BDOutput.push('\u200b')
                BDOutput.push('\u200b')
                console.log(`${guild.name} has the following features: ${Array.from(features).join(', ')}`)
            })

            BdApi.UI.alert('There are the features for each of your servers', BDOutput)
        }
        
        /**
         * @method listServerFeatures
         * @author HumanCat222#0001
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097942131542331433
         */
        window.listServerFeatures = async function (guildName) {
            let guilds = await (webpackChunkdiscord_app.push([[''], {}, e => { m = []; for (let c in e.c) m.push(e.c[c]) }]), m).find(m => m?.exports?.Z?.getGuildCount).exports.Z.getGuilds()
            const exists = Object.values(guilds).find(guild => guild.name.toLowerCase() == guildName.toLowerCase())

            if (exists) {
                let features = (exists.features)
                BdApi.UI.alert(`These are all the features of the "${exists.name}" server`, Array.from(features).join(', '))
                console.log(`${exists.name} has the following features: ${Array.from(features).join(', ')}`)
            } else {
                BdApi.UI.showToast(`No server with the name "${guildName}" was found`, {
                    type: 'error'
                })
            }
        }

        /**
         * @method getAllFunctions
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099720606880104519
         */
        window.getAllFunctions = function () {
            return webpackChunkdiscord_app.push([[Symbol()], {}, e => Object.values(e.c)]).filter(m => typeof m?.exports?.Z === "object").map(m => Object.entries(m?.exports?.Z).filter(entry => typeof entry[1] === "function").map(entry => entry[0]));
        };

        /**
         * @method addAllFeatures
         * @author proxy#1000
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097935744523313162
         */
        window.addAllFeatures = function (guildId) {
            (webpackChunkdiscord_app.push([[Symbol()], {}, e => {
                m = [];

                for (let c in e.c) {
                    m.push(e.c[c]);
                };
            }]), m).find(m => m?.exports?.Z?.getGuildCount).exports.Z.getGuild(guildId).features = new Set(["ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", "WELCOME_SCREEN_ENABLED", "NEWS", "COMMUNITY", "MEMBER_VERIFICATION_GATE_ENABLED", "PRIVATE_THREADS", "PREVIEW_ENABLED", "SEVEN_DAY_THREAD_ARCHIVE", "THREADS_ENABLED", "THREADS_ENABLED_TESTING", "THREE_DAY_THREAD_ARCHIVE", "VANITY_URL", "PARTNERED", "MONETIZATION_ENABLED", "COMMERCE", "ANIMATED_BANNER", "BANNER", "ROLE_ICONS", "ANIMATED_ICON", "MEMBER_PROFILES", "VIP_REGIONS", "ENABLED_DISCOVERABLE_BEFORE", "MORE_EMOJI", "VERIFIED", "FEATURABLE", "HAS_DIRECTORY_ENTRY", "INVITE_SPLASH", "DISCOVERABLE", "NEW_THREAD_PERMISSIONS", "CHANNEL_BANNER", "TEXT_IN_VOICE_ENABLED", "ROLE_SUBSCRIPTIONS_ENABLED_FOR_PURCHASE", "ROLE_SUBSCRIPTIONS_ENABLED", "PREMIUM_TIER_3_OVERRIDE", "MORE_STICKERS", "RELAY_ENABLED", "INTERNAL_EMPLOYEE_ONLY", "FORCE_RELAY", "TICKETING_ENABLED", "EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT", "LINKED_TO_HUB", "AUTO_MODERATION", "BOOSTING_TIERS_EXPERIMENT_SMALL_GUILD", "BOOSTING_TIERS_EXPERIMENT_MEDIUM_GUILD", "HAD_EARLY_ACTIVITIES_ACCESS", "TICKETED_EVENTS_ENABLED", "BOT_DEVELOPER_EARLY_ACCESS", "GUILD_HOME_TEST"]);

            BdApi.UI.showToast(`All features has added to server with ${guildId} id!`, {
                type: "success"
            })
            console.log(`All features has added to server with ${guildId} id!`);
        };

        /**
         * @method listExperiments
         * @author proxy#1000
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097932371946389614
         */
        window.listExperiments = function () {
            return findByProps("getSerializedState").getSerializedState()
        };

        /**
         * @method convertToMedia
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1098270676588167258
         */
        window.convertToMedia = function (channelId) {
            try {
                findByProps;
            } catch (error) {
                BdApi.UI.showToast('Use findByProps snippet before!', {
                    type: "warn"
                })
                console.error('Use findByProps snippet before!');
                return;
            };

            let channel = findByProps('getBasicChannel').getChannel(channelId);

            channel.flags_ = 1 << 10;

            BdApi.UI.showToast(`${channel.name} channel has turned into a Media Channel!`, {
                type: "success"
            })
            console.log(`${channel.name} channel has turned into a Media Channel!`);
        };

        /**
         * @method testNotification
         * @author Chilli#1234
         * @source https://discord.gg/discord-603970300668805120 - https://discord.com/channels/603970300668805120/1093424070462292029
         */
        window.testNotification = async function (data = {}) {
            const avatar = data.avatar ?? 'https://cdn.discordapp.com/avatars/1060289353059946607/a_85ef89511154380d3d2c65a528259784.png?size=4096'
            const sendingUser = data.user ?? 'Stef'
            const content = data.content ?? 'This is a default message'
            const sound = data.sound ?? 'mute'
            const volume = data.volume ?? 1

            findByProps("showNotification").showNotification(avatar, sendingUser, content, null, {
                sound,
                volume
            })

            BdApi.UI.showToast('Successfully sent the notification!', {
                type: "success"
            })
        };

        /**
         * @method addTopics
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1100482530521649252
         */
        window.addTopics = function (channelId, topics) {
            try {
                getActionHandler;
            } catch (error) {
                return console.error('Use getActionHandler snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1099723941314048020');
            };

            getActionHandler('n', 'RECEIVE_CHANNEL_SUMMARIES')({
                channelId: channelId,
                summaries: topics
            });

            BdApi.UI.showToast('Topics are added! Be fast to see them before they gone!', {
                type: "success"
            })
            console.log('Topics are added! Be fast to see them before they gone!');
        };

        /**
         * @method addDM
         * @author RedNix#0816
         * @source https://discord.gg/discord-603970300668805120 - https://discord.com/channels/603970300668805120/1101570562368745492
         */
        window.addDM = async function (id) {
            try {
                await (webpackChunkdiscord_app.push([
                    [""],
                    {},
                    (e) => {
                        m = [];
                        for (let o in e.c) m.push(e.c[o]);
                    },
                ]), m)
                    .find((e) => e?.exports?.Z?.getAPIBaseURL)
                    .exports.Z.post({ url: "/users/@me/channels", body: { recipients: [id] } });
                
                BdApi.UI.showToast(`Successfully opened a DM with the user ${id}`, {
                    type: "success"
                })
                
                console.log(
                    "%c✅ Success\n%cUser has been added to your DMs successfully",
                    "font-size: 50px",
                    "color: green; font-size: 18px"
                );
            } catch (e) {
                BdApi.UI.showToast('Something went wrong... Check console for more details', {
                    type: "error"
                })
                console.log(
                    "%c❌ Error!\n%cUser id may be invalid, or script may be outdated. More information:",
                    "font-size: 50px",
                    "color: red; font-size: 18px",
                    e
                );
            }
        };

        /**
         * @method checkPomelo
         * @author RedNix#0816
         * @source https://discord.gg/discord-603970300668805120 - https://discord.com/channels/603970300668805120/1099791239710265455
         */
        window.checkPomelo = async function (username) {
            await (webpackChunkdiscord_app.push([
                [""],
                {},
                (e) => {
                    m = [];
                    for (let s in e.c) m.push(e.c[s]);
                },
            ]), m)
                .find((e) => e?.exports?.Z?.getAPIBaseURL)
                .exports.Z.post({
                    url: "/users/@me/pomelo-attempt",
                    body: { username: username },
                })
                .catch((e) => {
                    if ('{"message": "Unauthorized", "code": 40001}' === e.text) {
                        BdApi.UI.showToast(`The pomelo ${username} is not taken!`, {
                            type: "success"
                        })
                        console.log("%c😀 Not taken!", "font-size: 50px")
                    } else {
                        BdApi.UI.showToast(`The pomelo ${username} is already taken`, {
                            type: "danger"
                        })
                        console.log(`%c😥 ${username} is taken`, "font-size: 50px");
                    }
                });
        };

        /**
         * @method enableExperiments
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1090279880878460950
         */
        window.enableExperiments = function () {
            webpackChunkdiscord_app.push([[0], {}, (e) => {
                module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default;
            }]);

            nodes = Object.values(module._dispatcher._actionHandlers._dependencyGraph.nodes);
            userr = module.getCurrentUser();
            userr.flags = 1;
            userr.isStaff = () => true;
            userr.isStaffPersonal = () => true;

            try {
                nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: userr });
            } catch (error) { };

            module.getCurrentUser = module.getNonImpersonatedCurrentUser = () => (userr);

            nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();

            BdApi.UI.showToast('Successfully enabled the experiments!', {
                type: "success"
            })
        };

        /**
         * @method addFeatures
         * @author proxy#1000
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097935744523313162
         */
        window.addFeatures = function (guildId, features) {
            (webpackChunkdiscord_app.push([[Symbol()], {}, e => {
                m = [];

                for (let c in e.c) {
                    m.push(e.c[c]);
                };
            }]), m).find(m => m?.exports?.Z?.getGuildCount).exports.Z.getGuild(guildId).features = new Set(features);

            BdApi.UI.showToast(`The selected features have been added to the server with ID "${guildId}"`, {
                type: "success"
            })
            console.log(`%c[Featured]%c Selected features have been added to the server with ID %c${guildId}!`, 'color: #50C878', '', 'color: #FFD34F');
        };

        /**
         * @method searchActionHandlers
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1101909086456512682
         */
        window.searchActionHandlers = function (query) {
            webpackChunkdiscord_app.push([[0], {}, (e) => {
                module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default;
            }]);
            return Object.keys(Object.values(module._dispatcher._actionHandlers)[0]).filter(key => key.toLowerCase().includes(query));
        };

        /**
         * @method getAllFriendInvites
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1102558838848225290
         */
        window.getAllFriendInvites = async function () {
            try {
                findByProps;
            } catch (error) {
                BdApi.UI.showToast('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800', {
                    type: "warn"
                })
                return console.error('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            invites = await findByProps('createInvite').getAllFriendInvites()

            invitesArr = []

            for (const invite of invites) {
                invitesArr.push(`\`${JSON.stringify(invite)}\``)
            }

            BdApi.UI.alert('These are all the objects of your friend invites', invitesArr.length > 0 ? invitesArr : 'You have no friend invites')
            return invites;
        };

        /**
         * @method getFriendInvite
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1102558838848225290
         */
        window.getFriendInvite = async function (code) {
            try {
                findByProps;
            } catch (error) {
                BdApi.UI.showToast('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800', {
                    type: "warn"
                })
                return console.error('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            invites = await findByProps('createInvite').getAllFriendInvites();
            result = invites.find(invite => invite.code === code);

            if (result) {
                BdApi.UI.alert(`This the object of the invite with code "${code}"`, `\`${JSON.stringify(result)}\``)
                return result;
            } else {
                BdApi.UI.showToast(`Any friend invites with ${code} could not found!`, {
                    type: "warn"
                })
                return console.error(`Any friend invites with ${code} could not found!`);
            }
        };

        /**
         * @method getFriendInvite
         * @author ✨Tolgchu✨#1452
         * @credits !-𝐅𝐨𝐱, 𝐉𝐚𝐦𝐞𝐬𝐋𝐘𝐓𝐕𝟐 ✤#6942
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1102558838848225290
         */
        window.createFriendInvite = async function () {
            try {
                findByProps;
            } catch (error) {
                return console.error('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            invite = await findByProps('createInvite').createFriendInvite();

            BdApi.UI.alert('Here is the object of the invite you just made', JSON.stringify(invite))

            return invite;
        };

        /**
         * @method revokeAllFriendInvites
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1102558838848225290
         */
        window.revokeAllFriendInvites = async function () {
            try {
                findByProps;
            } catch (error) {
                return console.error('Use findByProps snippet before: https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            await findByProps('createInvite').revokeFriendInvites();

            BdApi.UI.showToast('Your all friend invites are successfully revoked!', {
                type: "success"
            })
            console.log('Your all friend invites are successfully revoked!');
        };
    },
    stop() { }
});