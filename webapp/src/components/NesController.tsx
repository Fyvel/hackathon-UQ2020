import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import styles from './NesController.module.scss'

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'IDLE'

export default function NesController() {

	const context = useContext(AppContext)

	const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		event.stopPropagation()
		console.log('Select click')
		if (!context) return
		!context.user
			? context.signIn()
			: context.signOut()
	}

	const handleStart = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		event.stopPropagation()
		console.log('Start click')

		if (!context?.user) {
			alert('☝ Use the SELECT button first to authenticate')
			return
		}
		if (context?.robot) {
			context.disconnectPi(context.robot)
			context.setRobot(null)
			return
		}
		const robotName = await context.connectPi(context.user.uid)
		robotName && context.setRobot(robotName)
	}

	const handleDirection = async (direction: Direction) => {
		if (!context?.user || !context?.robot) return
		context.updateState(context.robot, direction)
	}

	return (
		<div className={styles.content}>
			<div className={styles.wire}></div>
			<div className={styles.controller}>
				<div className={styles.inner}>
					{context?.user && <h1>Ready Player</h1>}
					{context?.robot && <h2>✅ <b>{context.robot}</b></h2>}
					<span className={styles.grey}></span>

					<div className={styles.midButtons}>
						<button className={styles.select} onClick={handleSelect}> </button>
						<button className={styles.start} onClick={handleStart}> </button>
					</div>

					<div className={styles.dpad}>
						<span className={styles.plus}></span>
						<span className={styles.plus2}></span>
						<button className={styles.thumb1}
							onMouseUp={e => handleDirection('IDLE')}
							onTouchStart={e => handleDirection('LEFT')}>
						</button>
						<button className={styles.thumb2}
							onMouseUp={e => handleDirection('IDLE')}
							onTouchStart={e => handleDirection('UP')}>
						</button>
						<button className={styles.thumb3}
							onMouseUp={e => handleDirection('IDLE')}
							onTouchStart={e => handleDirection('RIGHT')}>
						</button>
						<button className={styles.thumb4}
							onMouseUp={e => handleDirection('IDLE')}
							onTouchStart={e => handleDirection('DOWN')}>
						</button>
					</div>

					<button className={styles.b}></button>
					<button className={styles.a}></button>
				</div>
			</div>
		</div>
	)
}