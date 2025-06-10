import { Loader } from '@/components/ui/Loader'

export default function Loading() {
	return (
		<div
			className='w-full h-full flex justify-center items-center'
			role='status'
		>
			<Loader />
		</div>
	)
}
