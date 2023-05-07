/**
 * @name EnableCustomFunctions
 * @author Stef#6705
 * @authorId 694986201739952229
 * @description Enables functions such as findByProps
 * @version 1.3.0
 * @website https://github.com/Stef-00012/BetterDiscord-Plugin/tree/main#enablecustomfunctionspluginjs
 * @source https://github.com/Stef-00012/BetterDiscord-Plugin/blob/main/EnableCustomFunctions.plugin.js
 */

module.exports = meta => ({
    start() {
        /**
         * @method findByProps
         * @author Stef#6705
         * @credits BetterDiscord built-in
         */
        window.findByProps = function (...props) {
            return BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps(props))
        };

        /**
         * @method getStore
         * @author ✨Tolgchu✨#1452
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099725409492422656
         */
        window.getStore = function (store, extra = { first: true, position: 0 }) {
            return extra.first ?
            Object.values(Object.values(findByProps('getUsers')._dispatcher._actionHandlers)[3].nodes).filter(s => s.name == store)[extra.position] :
            Object.values(Object.values(findByProps('getUsers')._dispatcher._actionHandlers)[3].nodes).filter(s => s.name == store);
        };

        /**
         * @method getActionHandler
         * @author ✨Tolgchu✨#1452
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099723941314048020
         */
        window.getActionHandler = function (store, actionHandler) {
            let stores = getStore(store, false);
            let found;

            for (var store of stores) {
                if (!found && store.actionHandler[actionHandler]) found = store;
            };

            if (found) return found.actionHandler[actionHandler];
            else {
                BdApi.UI.showToast(`"${actionHandler}" action handler could not found!`, {
                    type: "error"
                })
                return console.error(`"${actionHandler}" action handler could not found!`);
            }
        };

        /**
         * @method getFunction
         * @author ✨Tolgchu✨#1452
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099726086209814638
         */
        window.getFunction = function (f, position = 0) {
            return BdApi.Webpack.getModule(m => m?.Z?.[f], {
                first: false
            })[position]?.Z?.[f];
        };

        /**
         * @method searchFunctions
         * @author ✨Tolgchu✨#1452
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099726086209814638
         */
        window.searchFunctions = function (query) {
            return BdApi.Webpack.getModule(m => typeof m?.Z === "object", {
                first: false
            }).map(m => Object.entries(m?.Z).filter(entry => typeof entry[1] === "function" && entry[0].toLowerCase().includes(query)).map(entry => entry[0])).filter(array => array.length !== 0);
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
                BdApi.UI.showToast('You must use the "findByProps" snippet before this one. Check the console for more info', {
                    type: "warn"
                })
                return console.error('You must use the "findByProps" snippet before this one.\nget it from https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            return Object.fromEntries(findByProps('connectStores').Store.getAll().filter(store => store.getName().toLowerCase().includes(query)).map(matchingStore => [matchingStore.getName(), matchingStore]));
        };

        /**
         * @method searchExperiment
         * @author Davri#0015
         * @contributors Stef#6705
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
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097942131542331433
         */
        window.listAllServerFeatures = async function () {
            let BDOutput =  []
            let guilds = findByProps('getGuildCount').getGuilds()
            Object.values(guilds).forEach(guild => {
                let features = (guild.features)
                BDOutput.push(`# ${guild.name}:`)
                BDOutput.push(Array.from(features).join(', '))
                BDOutput.push('\u200b')
                BDOutput.push('\u200b')
                console.log(`${guild.name} has the following features: ${Array.from(features).join(', ')}`)
            })

            BdApi.UI.alert('These are the features for each of your servers', BDOutput)
        }
        
        /**
         * @method listServerFeatures
         * @author HumanCat222#0001
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097942131542331433
         */
        window.listServerFeatures = async function (guildId) {
            let guilds = findByProps('getGuildCount').getGuilds()
            const exists = Object.values(guilds).find(guild => guild.id == guildId)

            if (exists) {
                let features = exists.features
                BdApi.UI.alert(`These are all the features of the "${exists.name}" server`, Array.from(features).join(', '))
                console.log(`These are all the features of the "${exists.name}" server: ${Array.from(features).join(', ')}`)
            } else {
                BdApi.UI.showToast(`No server found with the ID "${guildId}"`, {
                    type: 'error'
                })
                console.error(`No server found with the ID "${guildId}"`)
            }
        }

        /**
         * @method getAllFunctions
         * @author ✨Tolgchu✨#1452
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099720606880104519
         */
        window.getAllFunctions = function () {
            return BdApi.Webpack.getModule(m => typeof m?.Z === "object", {
                first: false
            }).map(m => Object.entries(m?.Z).filter(entry => typeof entry[1] === "function").map(entry => entry[0]));
        };

        /**
         * @method addAllFeatures
         * @author proxy#1000
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097935744523313162
         */
        window.addAllFeatures = function (guildId) {
            findByProps('getGuildCount').getGuild(guildId).features = new Set(["ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE", "WELCOME_SCREEN_ENABLED", "NEWS", "COMMUNITY", "MEMBER_VERIFICATION_GATE_ENABLED", "PRIVATE_THREADS", "PREVIEW_ENABLED", "SEVEN_DAY_THREAD_ARCHIVE", "THREADS_ENABLED", "THREADS_ENABLED_TESTING", "THREE_DAY_THREAD_ARCHIVE", "VANITY_URL", "PARTNERED", "MONETIZATION_ENABLED", "COMMERCE", "ANIMATED_BANNER", "BANNER", "ROLE_ICONS", "ANIMATED_ICON", "MEMBER_PROFILES", "VIP_REGIONS", "ENABLED_DISCOVERABLE_BEFORE", "MORE_EMOJI", "VERIFIED", "FEATURABLE", "HAS_DIRECTORY_ENTRY", "INVITE_SPLASH", "DISCOVERABLE", "NEW_THREAD_PERMISSIONS", "CHANNEL_BANNER", "TEXT_IN_VOICE_ENABLED", "ROLE_SUBSCRIPTIONS_ENABLED_FOR_PURCHASE", "ROLE_SUBSCRIPTIONS_ENABLED", "PREMIUM_TIER_3_OVERRIDE", "MORE_STICKERS", "RELAY_ENABLED", "INTERNAL_EMPLOYEE_ONLY", "FORCE_RELAY", "TICKETING_ENABLED", "EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT", "LINKED_TO_HUB", "AUTO_MODERATION", "BOOSTING_TIERS_EXPERIMENT_SMALL_GUILD", "BOOSTING_TIERS_EXPERIMENT_MEDIUM_GUILD", "HAD_EARLY_ACTIVITIES_ACCESS", "TICKETED_EVENTS_ENABLED", "BOT_DEVELOPER_EARLY_ACCESS", "GUILD_HOME_TEST"]);

            BdApi.UI.showToast(`Successfully added all the feature to the server with ID "${guildId}"`, {
                type: "success"
            })
            console.log(`Successfully added all the feature to the server with ID "${guildId}"`);
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
                BdApi.UI.showToast('You must use the "findByProps" snippet before this one. Check the console for more info.', {
                    type: "warn"
                })
                console.error('You must use the "findByProps" snippet before this one.\nget it from https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
                return;
            };

            let channel = findByProps('getBasicChannel').getChannel(channelId);

            channel.flags_ = 1 << 10;

            BdApi.UI.showToast(`Successfully converted ${channel.name} to a media channel`, {
                type: "success"
            })
            console.log(`Successfully converted ${channel.name} to a media channel`);
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
            console.log('Successfully sent the notification!')
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
                BdApi.UI.showToast('You must use the "getActionHandler" snippet before this one. Check the console for more info.', {
                    type: "warn"
                })
                return console.error('You must use the "getActionHandler" snippet before this one.\nget it from https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1099723941314048020');
            };

            getActionHandler('n', 'RECEIVE_CHANNEL_SUMMARIES')({
                channelId: channelId,
                summaries: topics
            });

            BdApi.UI.showToast('Successfully added the topics', {
                type: "success"
            })
            console.log('Successfully added the topics');
        };

        /**
         * @method addDM
         * @author RedNix#0816
         * @source https://discord.gg/discord-603970300668805120 - https://discord.com/channels/603970300668805120/1101570562368745492
         */
        window.addDM = async function (id) {
            try {
                findByProps('getAPIBaseURL').post({ url: "/users/@me/channels", body: { recipients: [id] } });
                
                BdApi.UI.showToast(`Successfully opened a DM with the user with ID "${id}"`, {
                    type: "success"
                })

                BdApi.UI.showConfirmationModal('Switch to DM', 'Do you want to switch to the DM you\'ve just created?', {
                    confirmText: "Yes",
                    onConfirm: () => BdApi.Webpack.getModule(m => m?.openPrivateChannel).openPrivateChannel(id),
                    cancelText: "No"
                })
                
                console.log(`Successfully opened a DM with the user with ID "${id}"`);
            } catch (e) {
                BdApi.UI.showToast('Something went wrong... Check console for more details', {
                    type: "error"
                })
                console.log('Error:', e);
            }
        };

        /**
         * @method enableExperiments
         * @author ✨Tolgchu✨#1452
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1090279880878460950
         */
        window.enableExperiments = function () {
            module = findByProps('getUsers');

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
            console.log('Successfully enabled the experiments!')
        };

        /**
         * @method addFeatures
         * @author proxy#1000
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1097935744523313162
         */
        window.addFeatures = function (guildId, features) {
            findByProps('getGuildCount').getGuild(guildId).features = new Set(features);

            BdApi.UI.showToast(`Successfully added the selected features to the server with ID "${guildId}"`, {
                type: "success"
            })
            console.log(`Successfully added the selected features to the server with ID "${guildId}"`);
        };

        /**
         * @method searchActionHandlers
         * @author ✨Tolgchu✨#1452
         * @contributors Stef#6705
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1101909086456512682
         */
        window.searchActionHandlers = function (query) {
            return Object.keys(Object.values(findByProps('getUsers')._dispatcher._actionHandlers)[0]).filter(key => key.toLowerCase().includes(query));
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
                BdApi.UI.showToast('You must use the "findByProps" snippet before this one. Check the console for more info.', {
                    type: "warn"
                })
                return console.error('You must use the "findByProps" snippet before this one.\nget it from https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            invites = await findByProps('createInvite').getAllFriendInvites()

            invitesArr = []

            for (const invite of invites) {
                invitesArr.push(`# Invite info:`)
                invitesArr.push(`**Code**: \`${invite.code}\``)
                invitesArr.push(`**Max age**: ${invite.max_age}`)
                invitesArr.push(`**Max uses**: ${invite.max_uses}`)
                invitesArr.push(`**Creation date**: ${new Date(invite.created_at).toGMTString()}`)
                invitesArr.push(`**Expiration date**: ${new Date(invite.expires_at).toGMTString()}`)
                
                invitesArr.push(`# Inviter info:`)
                invitesArr.push(`**Username**: ${invite.inviter.username}`)
                invitesArr.push(`**Discriminator**: ${invite.inviter.discriminator}`)
                invitesArr.push(`**ID**: \`${invite.inviter.id}\``)
                invitesArr.push('\u200b')
                invitesArr.push('\u200b')
            }

            BdApi.UI.alert('These are all the info of your friend invites', invites.length > 0 ? invitesArr : 'You have no friend invites')
            return invites;
        };

        /**
         * @method getFriendInvite
         * @author ✨Tolgchu✨#1452
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1102558838848225290
         */
        window.getFriendInvite = async function (code) {
            if (!code) {
                BdApi.UI.showToast('You must give insert an invite code to use this function', {
                    type: "error"
                })
                return console.error('You must give insert an invite code to use this function');
            }
            try {
                findByProps;
            } catch (error) {
                BdApi.UI.showToast('You must use the "findByProps" snippet before this one. Check the console for more info.', {
                    type: "warn"
                })
                return console.error('You must use the "findByProps" snippet before this one.\nget it from https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            invites = await findByProps('createInvite').getAllFriendInvites();
            result = invites.find(invite => invite.code === code);

            if (result) {
                BdApi.UI.alert(`This the info of the selected invite code`, [
                    `# Invite info:`,
                    `**Code**: \`${result.code}\``,
                    `**Max age**: ${result.max_age}`,
                    `**Max uses**: ${result.max_uses}`,
                    `**Creation date**: ${new Date(result.created_at).toGMTString()}`,
                    `**Expiration date**: ${new Date(result.expires_at).toGMTString()}`,
                    `# Inviter info:`,
                    `**Username**: ${result.inviter.username}`,
                    `**Discriminator**: ${result.inviter.discriminator}`,
                    `**ID**: \`${result.inviter.id}\``
                ])
                return result;
            } else {
                BdApi.UI.showToast(`No friend invites found with the code "${code}"`, {
                    type: "warn"
                })
                return console.error(`No friend invites found with the code "${code}"`);
            }
        };

        /**
         * @method createFriendInvite
         * @author ✨Tolgchu✨#1452
         * @credits !-𝐅𝐨𝐱, 𝐉𝐚𝐦𝐞𝐬𝐋𝐘𝐓𝐕𝟐 ✤#6942
         * @source https://discord.gg/RmK8aGkSuZ - https://discord.com/channels/1089540433010491392/1102558838848225290
         */
        window.createFriendInvite = async function () {
            try {
                findByProps;
            } catch (error) {
                BdApi.UI.showToast('You must use the "findByProps" snippet before this one. Check the console for more info.', {
                    type: "warn"
                })
                return console.error('You must use the "findByProps" snippet before this one.\nget it from https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            invite = await findByProps('createInvite').createFriendInvite();

            BdApi.UI.alert('Here is the info of the invite you just made', [
                `# Invite info:`,
                `**Code**: \`${invite.code}\``,
                `**Max age**: ${invite.max_age}`,
                `**Max uses**: ${invite.max_uses}`,
                `**Creation date**: ${new Date(invite.created_at).toGMTString()}`,
                `**Expiration date**: ${new Date(invite.expires_at).toGMTString()}`,
                `# Inviter info:`,
                `**Username**: ${invite.inviter.username}`,
                `**Discriminator**: ${invite.inviter.discriminator}`,
                `**ID**: \`${invite.inviter.id}\``
            ])

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
                BdApi.UI.showToast('You must use the "findByProps" snippet before this one. Check the console for more info.', {
                    type: "warn"
                })
                return console.error('You must use the "findByProps" snippet before this one.\nget it from https://discord.gg/vK5sZYdaB6 - https://discord.com/channels/1089540433010491392/1090280191416352800');
            };

            await findByProps('createInvite').revokeFriendInvites();

            BdApi.UI.showToast('Successfully revoked all you friend invites', {
                type: "success"
            })
            console.log('Successfully revoked all you friend invites');
        };
    },
    stop() {
        const functions = [
            'findByProps', 
            'getActionHandler',
            'getFunction',
            'getStore',
            'searchFunctions',
            'searchStores',
            'searchExperiment',
            'listAllServerFeatures',
            'listServerFeatures',
            'getAllFunctions',
            'addAllFeatures',
            'addFeatures',
            'enableExperiments',
            'listExperiments',
            'convertToMedia',
            'testNotification',
            'addTopics',
            'addDM',
            'searchActionHandlers',
            'getAllFriendInvites',
            'getFriendInvite',
            'createFriendInvite',
            'revokeAllFriendInvites'
        ]

        for (const fn of functions) {
            delete window[fn]
        }
    }
});