'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/Card'
import { Form } from '@/components/ui/form-elements/Form'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './Auth.module.scss'
import { AuthFields } from './AuthFields'
import { Social } from './Social'
import { useAuthForm } from './useAuthForm'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReg)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Link href={PUBLIC_URL.home()}>
					<Button variant='outline'>
						<ArrowLeft />
						Вернуться
					</Button>
				</Link>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle>
							{isReg ? 'Создать аккаунт' : 'Войти в аккаунт'}
						</CardTitle>
						<CardDescription>
							Войдите или создайте учетную запись, чтобы оформлять
							покупки!
						</CardDescription>
					</CardHeader>
					<CardContent className={styles.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields
									form={form}
									isPending={isPending}
									isReg={isReg}
								/>

								<Button disabled={isPending}>Продолжить</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className={styles.footer}>
						{isReg ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
						<button onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Войти' : 'Создать'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
