export default interface BitTestConfig {
	showNumbers: boolean;
	bitCount: number;
}

export const DEFAULT_CONFIG: BitTestConfig = {
	showNumbers: false,
	bitCount: 8
};
