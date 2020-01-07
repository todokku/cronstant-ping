const cron = require('node-cron');
const nu = require('./nusentiment/');

cron.schedule('0,30 * * * *', async () => {
	console.log('>>> Running automated task...');
	await nu.initialize();
});
