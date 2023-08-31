import type {Telegram} from '@twa-dev/types';

declare global {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Window {
		Telegram: Telegram;
	}
}

export default window.Telegram.WebApp;
