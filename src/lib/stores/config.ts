import { writable } from 'svelte/store';
import type BitTestConfig from '../types/BitTestConfig';
import { DEFAULT_CONFIG } from '../types/BitTestConfig';

export const bitTestConfig = writable<BitTestConfig>(DEFAULT_CONFIG);
