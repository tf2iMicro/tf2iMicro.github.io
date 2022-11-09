const passport = require('passport');
const { Strategy } = require('passport-discord');
const DiscordUser = require('../database/models/user');

const PORT = 3000;

passport.serializeUser((user, done) => {
    console.log(`Serializing User: ${user.id}`);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log(`Deserializing User: ${id}`);

    try {
        const user = await DiscordUser.findById(id);
        if (!user) throw new Error('User not found');
        console.log(user);
        done(null, user);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});

async function discordVerifyFunction(accessToken, refreshToken, profile, done) {
    const { id: userId, username, discriminator } = profile;

    try {
        const user = await DiscordUser.findOne({ userId });

        if (user) {
            await user.updateOne({
                username: `${username}#${discriminator}`
            });

            return done(null, user);
        } else {
            const newUser = await new DiscordUser({ userId, username }).save();

            return done(null, newUser);
        }
    } catch (err) {
        console.log(err);
        return done(err, null);
    }
}

passport.use(
    new Strategy(
        {
            clientID: '792132143483715654',
            clientSecret: 't5l4rh3Vo5xPA4J20j09NwYIHMIJAiE2',
            callbackURL: `http://localhost:${PORT}/auth/discord/redirect`,
            scope: ['identify']
        },
        discordVerifyFunction
    )
);

module.exports = { discordVerifyFunction };
