import type { Metadata } from 'next'

import { Catalog } from '@/components/ui/catalog/Catalog'
import { Hero } from '@/components/ui/hero/Hero'

import { PUBLIC_URL } from '@/config/url.config'

import { productService } from '@/services/product.service'

export const metadata: Metadata = {
	title: 'Покупки, которые вдохновляют – всё, что вы ищете, в одном месте'
}

export const revalidate = 60

async function getProducts() {
	const data = (await productService.getByReviews()).slice(0, 6)

	return data
}

export default async function HomePage() {
	const products = await getProducts()

	return (
		<>
			<Hero />
			<Catalog
				title='Хиты продаж'
				description='Самые популярные товары магазина.'
				linkTitle=''
				link={PUBLIC_URL.explorer()}
				products={products}
			/>
		</>
	)
}
