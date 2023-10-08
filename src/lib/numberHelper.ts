import seedrandom from 'seedrandom';
import { get } from 'svelte/store';
import { bitTestConfig } from './stores/config';

export function generateNumber(endless = false): number {
	const tmpDate = new Date(Date.now());
	const date = Date.UTC(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());
	const prng = endless ? Math.random : seedrandom(date.toString());
	const config = get(bitTestConfig);
	const number = Math.floor(prng() * pow2(config.bitCount));
	return number;
}

export function timeUntil() {
	const tmpDate = new Date(Date.now());
	const date = Date.UTC(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());
	const endDate = date + 86400000; // Add 1 day
	return Math.floor((endDate - Date.now()) / 1000);
}

export function splitTime(seconds: number) {
	return {
		hours: Math.floor(seconds / 3600) % 60,
		minutes: Math.floor(seconds / 60) % 60,
		seconds: seconds % 60
	};
}

export function pow2(exponent: number): number {
	return 2 << (exponent - 1);
}

export function convertBinary(number: number): number[] {
	const config = get(bitTestConfig);
	const string = number.toString(2).padStart(config.bitCount, '0');

	const numbers = [];
	for (const num of string) {
		numbers.push(Number.parseInt(num));
	}

	return numbers;
}
