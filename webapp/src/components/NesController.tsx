import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import styles from './NesController.module.scss'

export default function NesController() {

	const context = useContext(AppContext)

	const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		event.stopPropagation();
		console.log('Select click', context)
		if (!context) return
		!context.user
			? context.signIn()
			: context.signOut()
	}

	return (
		<div className={styles.content}>
			<div className={styles.wire}></div>
			<div className={styles.controller}>
				<div className={styles.inner}>
					{context?.user && <h1>Ready Player</h1>}
					<span className={styles.grey}></span>

					<div className={styles.midButtons}>
						<button className={styles.select} onClick={handleSelect}> </button>
						<button className={styles.start}> </button>
					</div>

					<div className={styles.dpad}>
						<span className={styles.plus}></span>
						<span className={styles.plus2}></span>
						<button className={styles.thumb1}></button>
						<button className={styles.thumb2}></button>
						<button className={styles.thumb3}></button>
						<button className={styles.thumb4}></button>
					</div>

					<button className={styles.b}></button>
					<button className={styles.a}></button>
				</div>
			</div>
		</div>
	)
}