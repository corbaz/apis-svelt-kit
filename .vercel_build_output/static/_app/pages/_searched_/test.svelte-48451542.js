import {
	S as o,
	i as r,
	s as c,
	t as i,
	g as l,
	f as u,
	G as s,
	d
} from '../../chunks/vendor-2a03ac52.js';
function f(a) {
	let t;
	return {
		c() {
			t = i('test 2');
		},
		l(e) {
			t = l(e, 'test 2');
		},
		m(e, n) {
			u(e, t, n);
		},
		p: s,
		i: s,
		o: s,
		d(e) {
			e && d(t);
		}
	};
}
class p extends o {
	constructor(t) {
		super();
		r(this, t, null, f, c, {});
	}
}
export { p as default };
