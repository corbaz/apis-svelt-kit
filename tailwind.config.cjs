module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			dropShadow: {
				'3xl': '0 25px 25px rgba(0, 0, 0, 0.8)',
				rojo: '0 50px 50px rgba(0,255, 0, 0.8)'
			}
		}
	}
};
