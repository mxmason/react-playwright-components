// Vitest!

import { page, userEvent } from '@vitest/browser/context'
import { expect, test, describe } from 'vitest'
import { render } from 'vitest-browser-react'
import { PushButton } from './PushButton'

describe('PushButton', () => {
	test('renders with expected ARIA state', async () => {
		render(<PushButton>A button</PushButton>)

		const pushButtonElement = page.getByRole('button')
		await expect.element(pushButtonElement).toHaveAttribute('aria-pressed', 'false')
		await expect.element(pushButtonElement).toHaveAccessibleName('A button')

	})

	test('toggles state when clicked', async () => {
		const user = userEvent.setup()
		render(<PushButton>A button</PushButton>)

		const pushButtonElement = page.getByRole('button')
		await user.click(pushButtonElement)
	
		await expect.element(pushButtonElement).toHaveAttribute('aria-pressed', 'true')
	})
	
})