/**
 * @name EnableCustomFunctions
 * @author Stef#6705
 * @authorId 694986201739952229
 * @description Enables functions such as findByProps
 * @version 0.2.0
 * @website https://github.com/Stef-00012/BetterDiscord-Plugin/tree/main#enablecustomfunctionspluginjs
 * @source https://github.com/Stef-00012/BetterDiscord-Plugin/blob/main/EnableCustomFunctions.plugin.js
 */

module.exports = meta => ({
    start() {
        /* START findByProps
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1090280191416352800
        */
        const _mods = webpackChunkdiscord_app.push([[Symbol()],{},({c})=>Object.values(c)]);
        webpackChunkdiscord_app.pop();
        
        window.findByProps = (...props) => {
            for (let m of _mods) {
                try {
                    if (!m.exports || m.exports === window) continue;
                    if (props.every((x) => m.exports?.[x])) return m.exports;
        
                    for (let ex in m.exports) {
                        if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
                    };
                } catch {};
            };
        };
        // END findByProps

        /* START getActionHandler
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099723941314048020
        */
        window.getActionHandler = function(store, actionHandler) {
            webpackChunkdiscord_app.push([[Symbol()], {}, (e) => {
                module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default;
            }]);
        
            let stores = Object.values(Object.values(module._dispatcher._actionHandlers)[3].nodes).filter(s => s.name === store);
            let found;
        
            for (var store of stores) {
                if (!found && store.actionHandler[actionHandler]) found = store;
            };
        
            if (found) return found.actionHandler[actionHandler];
            else return console.error(`${actionHandler} action handler could not found!`);
        };
        // END getActionHandler

        /* START getFunction
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099724648389808220
        */
        window.getFunction = function(f) {
            return webpackChunkdiscord_app.push([[Symbol()], {}, e => Object.values(e.c)]).find(m => m?.exports?.Z?.[f]).exports.Z[f];
        };
        // END getFunction

        /* START getStore
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099725409492422656
        */
        window.getStore = function(store) {
            webpackChunkdiscord_app.push([[Symbol()], {}, (e) => {
                module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default;
            }]);
            
            return Object.values(Object.values(module._dispatcher._actionHandlers)[3].nodes).filter(s => s.name === store)[0];
        };
        // END getStore
        
        /* START searchFunction
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099726086209814638
        */
        window.searchFunction = function(query) {
            return webpackChunkdiscord_app.push([[Symbol()], {}, e => Object.values(e.c)]).filter(m => typeof m?.exports?.Z === "object").map(m => Object.entries(m?.exports?.Z).filter(entry => typeof entry[1] === "function" && entry[0].toLowerCase().includes(query)).map(entry => entry[0])).filter(array => array.length !== 0);
        };
        // END searchFunction

        /* START searchStore
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099726632069115924
        */
        window.searchStore = function(query) {
            webpackChunkdiscord_app.push([[Symbol()], {}, (e) => {
                module = Object.values(e.c).find(x => x?.exports?.default?.getUsers).exports.default;
            }]);
            
            nodes = Object.values(module._dispatcher._actionHandlers._dependencyGraph.nodes);
            
            return nodes.filter(n => n.name.toLowerCase().includes(query));
        };
        // END searchStore

        /* START searchExperiment
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097941394825412789
        */
        window.searchExperiment = function(experiment) {
            exp = experiment
            expStore = findByProps("getGuildExperimentBucket")
            return Object.values(findByProps("getGuildCount").getGuilds()).filter(g => expStore.getGuildExperimentBucket(exp, g.id) > 0)
        }
        // END searchExperiment
        
        /* START listServerFeatures
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097942131542331433
        */
        window.listServerFeatures = async function() {
            let guilds = await (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.getGuildCount).exports.Z.getGuilds()
            Object.values(guilds).forEach(guild => {
                let features =(guild.features)
            console.log(`${guild.name} has the following features: ${Array.from(features).join(', ')}`)
})
        }
        // END listServerFeatures

        /* START setEmoji
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1090280784126025752
        */
        window.setEmoji = function(guildId, channelName, emoji) {
            return webpackChunkdiscord_app.push([[Symbol()], {}, e => Object.values(e.c)]).find(m => m?.exports?.Z?._dispatcher).exports.Z._dispatcher.dispatch({
                type: "CHANNEL_NAME_EMOJIS_FETCHED",
                guildId: guildId,
                response: {
                    [channelName]: emoji
                }
            });
        }
        // END setEmoji

        /* START getAllFunctions
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099720606880104519
        */
        window.getAllFunctions = function() {
            return webpackChunkdiscord_app.push([[Symbol()], {}, e => Object.values(e.c)]).filter(m => typeof m?.exports?.Z === "object").map(m => Object.entries(m?.exports?.Z).filter(entry => typeof entry[1] === "function").map(entry => entry[0]));
        }
        // END getAllFunctions

        /* START addAllFeatures
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097935744523313162
        */
        window.addAllFeatures = function(guildId) {
            (webpackChunkdiscord_app.push([[Symbol()], {}, e => {
                m = [];
                
                for (let c in e.c) {
                    m.push(e.c[c]);
                };
            }]), m).find(m => m?.exports?.Z?.getGuildCount).exports.Z.getGuild(guildId).features = new Set(["ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", "WELCOME_SCREEN_ENABLED", "NEWS", "COMMUNITY", "MEMBER_VERIFICATION_GATE_ENABLED", "PRIVATE_THREADS", "PREVIEW_ENABLED", "SEVEN_DAY_THREAD_ARCHIVE", "THREADS_ENABLED", "THREADS_ENABLED_TESTING", "THREE_DAY_THREAD_ARCHIVE", "VANITY_URL", "PARTNERED", "MONETIZATION_ENABLED", "COMMERCE", "ANIMATED_BANNER", "BANNER", "ROLE_ICONS", "ANIMATED_ICON", "MEMBER_PROFILES", "VIP_REGIONS", "ENABLED_DISCOVERABLE_BEFORE", "MORE_EMOJI", "VERIFIED", "FEATURABLE", "HAS_DIRECTORY_ENTRY", "INVITE_SPLASH", "DISCOVERABLE", "NEW_THREAD_PERMISSIONS", "CHANNEL_BANNER", "TEXT_IN_VOICE_ENABLED", "ROLE_SUBSCRIPTIONS_ENABLED_FOR_PURCHASE", "ROLE_SUBSCRIPTIONS_ENABLED", "PREMIUM_TIER_3_OVERRIDE", "MORE_STICKERS", "RELAY_ENABLED", "INTERNAL_EMPLOYEE_ONLY", "FORCE_RELAY", "TICKETING_ENABLED", "EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT", "LINKED_TO_HUB", "AUTO_MODERATION", "BOOSTING_TIERS_EXPERIMENT_SMALL_GUILD", "BOOSTING_TIERS_EXPERIMENT_MEDIUM_GUILD", "HAD_EARLY_ACTIVITIES_ACCESS", "TICKETED_EVENTS_ENABLED", "BOT_DEVELOPER_EARLY_ACCESS", "GUILD_HOME_TEST"]);
        
            return `All features has added to server with ${guildId} id!`;
        };
        // END addAllFeatures

        /* START enableExperiments
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1090279880878460950
        */
        window.enableExperiments = function() {
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
            } catch (error) {};
            
            module.getCurrentUser = module.getNonImpersonatedCurrentUser = () => (userr);
            
            return nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();
        }
        // window.enableExperiments()
        // END enableExperiments

        /* START listExperiments
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097932371946389614
        */
        window.listExperiments = function() {
            return findByProps("getSerializedState").getSerializedState()
        }
        // END listExperiments

        /* START convertToMedia
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1098270676588167258
        */
        window.convertToMedia = function(channelId) {
            try {
                findByProps;
            } catch (error) {
                return console.error('Use findByProps snippet before!');
            };
            
            let channel = findByProps("getBasicChannel").getChannel(channelId);
        
            channel.flags_ = 1 << 10;
        
            return `${channel.name} channel has turned into a Media Channel!`;
        };
        // END convertToMedia

        /* START testNotification
           SOURCE: https://discord.gg/discord-603970300668805120 - https://discord.com/channels/603970300668805120/1093424070462292029
        */
        window.testNotification = async function(data = {}) {
            const avatar = data.avatar ?? 'https://cdn.discordapp.com/avatars/1060289353059946607/a_85ef89511154380d3d2c65a528259784.png?size=4096'
            const sendingUser = data.user ?? 'Stef'
            const content = data.content ?? 'This is a default message'
            const sound = data.sound ?? 'mute'
            const volume = data.volume ?? 1

            findByProps("showNotification").showNotification(avatar, sendingUser, content, null, {
                sound,
                volume
            })
        }
        // END testNotification
        
        /* START addTopics
           SOURCE: https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1100482530521649252
        */
        window.addTopics = function(channelId, topics) {
            getActionHandler('n', 'RECEIVE_CHANNEL_SUMMARIES')({
                channelId: channelId,
                summaries: topics
            });
        
            return 'Topics are added! Be fast to see them before they gone!';
        };
        // END addTopics

        /* START addDM
           SOURCE: https://discord.gg/discord-603970300668805120 - https://discord.com/channels/603970300668805120/1101570562368745492
        */
        window.addDM = async function(id) {
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
            console.log(
                "%c✅ Success\n%cUser has been added to your DMs successfully",
                "font-size: 50px",
                "color: green; font-size: 18px"
            );
            } catch (e) {
            console.log(
                "%c❌ Error!\n%cUser id may be invalid, or script may be outdated. More information:",
                "font-size: 50px",
                "color: red; font-size: 18px",
                e
            );
            }
        }
        // END addDM

        /* START checkPomelo
           SOURCE: https://discord.gg/discord-603970300668805120 - https://discord.com/channels/603970300668805120/1099791239710265455
        */
        window.checkpomelo = async function(username) {
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
                '{"message": "Unauthorized", "code": 40001}' === e.text
                ? console.log("%c😀 Not taken!", "font-size: 50px")
                : console.log(`%c😥 ${username} is taken`, "font-size: 50px");
            });
        }
        // END checkPomelo
    },
    stop() {}
  });