import React from 'react'
import styles from './NesController.module.scss'

export default function NesController() {

	return (
		<div className={styles.content}>
			<div className={styles.wire}></div>
			<div className={styles.controller}>
				<div className={styles.inner}>
					<span className={styles.grey}></span>

					<div className={styles.midButtons}>
						<a className={styles.select}> </a>
						<a className={styles.start}> </a>
					</div>

					<div className={styles.dpad}>
						<span className={styles.plus}></span>
						<span className={styles.plus2}></span>
						<span className={styles.thumb1}></span>
						<span className={styles.thumb2}></span>
						<span className={styles.thumb3}></span>
						<span className={styles.thumb4}></span>
					</div>

					<a className={styles.b}></a>
					<a className={styles.a}></a>
				</div>
			</div>
		</div>
	)
}