const puppeteer = require('puppeteer');
module.exports = async (competitors) => {
	const space = ' '
	let productsData = []

	for (competitor of competitors) {
		productsData.push({ name: competitor.url, products: [] })

		const browser = await puppeteer.launch({
			headless: true,
		});
		const page = await browser.newPage();
		await page.goto(competitor.url), { waitUntil: 'domcontentloaded' };

		if (competitor.popupPath) {
			await page.click(competitor.popupPath)
		}

		for (product of competitor.products) {
			await page.click(competitor.clickPath, { delay: 200 })
			await page.type(competitor.searchPath, `${space}${product.name}`, { delay: 200 });
			await page.keyboard.press('Enter')

			await page.waitForSelector(product.selector)

			let priceString = await page.evaluate((selector) => {
				return document.querySelector(selector).innerText
			}, product.selector)
			let price = parseFloat(priceString.match(/[\d\.]+/))
			let index = competitors.indexOf(competitor)
			productsData[index].products.push({ name: product.name, price })

		}

		await browser.close();
		console.log(`${competitor.url} is ready`)
	}
	// let dataJson = JSON.stringify(productsData)
	return productsData
};