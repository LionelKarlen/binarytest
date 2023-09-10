export default interface BitTestConfig {
	showNumbers: boolean;
	bitCount: number;
	fadeDisabled: boolean;
}

export const DEFAULT_CONFIG: BitTestConfig = {
	showNumbers: true,
	bitCount: 8,
	fadeDisabled: true
};
