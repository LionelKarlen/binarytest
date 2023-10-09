import { writable } from 'svelte/store';
import type BitTestConfig from '../types/BitTestConfig';
import { DEFAULT_CONFIG } from '../types/BitTestConfig';
import ls from 'localstorage-slim';

export const bitTestConfig = writable<BitTestConfig>(ls.get('config')??DEFAULT_CONFIG);
