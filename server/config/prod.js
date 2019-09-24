//En heroku se levantan estas variables durante producccion 
module.exports={
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURL: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
//1081753686504-5pmfntn3a0fc5qjvu56or1ov503p8kvi.apps.googleusercontent.com
//ma4t54JudWg-T1hTQjuNkits