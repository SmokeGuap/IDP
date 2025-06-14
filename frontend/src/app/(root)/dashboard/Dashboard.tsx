'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Button } from '@/components/ui/Button'

import { useProfile } from '@/hooks/useProfile'

import { saveTokenStorage } from '@/services/auth/auth-token.serice'
import { authService } from '@/services/auth/auth.service'

import styles from './Dashboard.module.scss'

export function Dashboard() {
	const router = useRouter()
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { user } = useProfile()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	if (!user) return null

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1>Ваши заказы</h1>
				<Button variant='ghost' onClick={() => logout()}>
					<LogOut />
					Выйти
				</Button>
			</div>
		</div>
	)
}
