const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];

const BASE_URL = 'https://nusentiment.app/';

const nu = {
	browser: null,
	page: null,
	initialize: async () => {
		nu.browser = await puppeteer.launch({ headless: true });
		nu.page = await nu.browser.newPage();
		await nu.page.emulate(iPhone);
		await nu.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
		console.log(`>>> Visited ${BASE_URL} @ ${new Date()}`);
		await nu.browser.close();
	}
};

module.exports = nu;
