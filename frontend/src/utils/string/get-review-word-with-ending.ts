export const getReviewWordWithEnding = (reviewCount: number): string => {
	const lastDigit = reviewCount % 10
	const lastTwoDigits = reviewCount % 100

	if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
		return `${reviewCount} отзывов`
	}

	switch (lastDigit) {
		case 1:
			return `${reviewCount} отзыв`
		case 2:
		case 3:
		case 4:
			return `${reviewCount} отзыва`
		default:
			return `${reviewCount} отзывов`
	}
}
