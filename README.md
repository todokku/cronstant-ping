# cronstant-ping

Uses **puppeteer** and **node-cron** to bypass Heroku's 30 minute timeout rule. Will keep dynos spinning indefinitely by sending a ping to nusentiment at 00 and 30 minutes past every hour.

_Exclude IP from Google Analytics_ to prevent data contanimation.

`node index.js` to begin.

#### Schedule Generator

http://corntab.com/
