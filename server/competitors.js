module.exports = [
	{
		url: 'https://www.carmella.co.il/',
		clickPath: '#header > div.container.relative > div.mobile_only.m_icon_search > a > svg',
		searchPath: '#search',
		products: [
			{
				name: 'עגבניה',
				selector: '#Search > section > div.has_results.container > div > div > div.results_item.toggleContainer.active > div > div > div:nth-child(8) > div > div.prod_bottom > a > span > span > span.pr_row_price > span > span.right.pr_price'
			},
			{
				name: 'מלפפון',
				selector: '#Search > section > div.has_results.container > div > div > div:nth-child(3) > div > div > div:nth-child(3) > div > div.prod_bottom > a > span > span > span.pr_row_price > span > span.right.pr_price'
			},
			{
				name: 'בננה',
				selector: '#Search > section > div.has_results.container > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div > div.prod_bottom > a > span > span > span.pr_row_price > span > span.right.pr_price'
			}
		]
	},
	{
		url: 'https://noyhasade.co.il/',
		clickPath: '#site-header > div.header-main.bg-green > div > div > nav > a.mobile_search_opener.mobile_only_1024',
		searchPath: '#search-form__input',
		products: [
			{
			name: 'עגבניה',
			selector: '#page_content > div > div.results_inner.row.inner_width > div > div.products.row.products_row_5 > div.product.product_item.product_item_589.col-2 > a > div.prod_price'
		},
		{
			name: 'מלפפון',
			selector: '#page_content > div > div.results_inner.row.inner_width > div > div.products.row.products_row_5 > div.product.product_item.product_item_571.col-2 > a > div.prod_price'
		},
		{
			name: 'בננה',
			selector: '#page_content > div > div.results_inner.row.inner_width > div > div.products.row.products_row_5 > div.product.product_item.product_item_474.col-2 > a > div.prod_price'
		}
	]
	},
	// {
	// 	url: 'https://www.taam-apri.co.il/',
	// 	clickPath: '#right_srch_str_2013',
	// 	searchPath: '#right_srch_str_2013',
	// 	products: [
	// 		{
	// 		name: 'עגבניה',
	// 		selector: '#designbox_1763 > div > div > ul > li:nth-child(1) > div > div.productbox_product_son > div.prs_prices > div > div.price_line > div:nth-child(2) > span > span'
	// 	},
	// 	{
	// 		name: 'מלפפון',
	// 		selector: '#designbox_1763 > div > div > ul > li:nth-child(1) > div > div.productbox_product_son > div.prs_prices > div > div.price_line > div:nth-child(2) > span > span'
	// 	},
	// 	{
	// 		name: 'בננה',
	// 		selector: '#designbox_1763 > div > div > ul > li:nth-child(1) > div > div.productbox_product_son > div.prs_prices > div > div.price_line > div:nth-child(2) > span > span'
	// 	}
	// ]
	// },

]
