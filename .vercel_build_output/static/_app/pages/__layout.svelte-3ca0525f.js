import {
	S as D,
	i as G,
	s as M,
	e as _,
	k,
	c as p,
	a as $,
	n as b,
	d,
	b as i,
	D as y,
	f as x,
	E as h,
	F as T,
	G as w,
	H as q,
	I as C,
	j as H,
	m as N,
	J as O,
	o as S,
	K as U,
	L as V,
	M as z,
	x as A,
	u as F,
	v as J
} from '../chunks/vendor-2a03ac52.js';
import { b as K, h as L } from '../chunks/homeIcon-f3c1107f.js';
import { g as P } from '../chunks/navigation-51f4a605.js';
import '../chunks/singletons-12a22614.js';
var Q = '/_app/assets/apple-logo-a493ce07.png';
function R(o) {
	let t, a, r, n, l, s, e, c, f, m, j, v, E;
	return {
		c() {
			(t = _('div')),
				(a = _('img')),
				(n = k()),
				(l = _('button')),
				(s = _('img')),
				(c = k()),
				(f = _('button')),
				(m = _('img')),
				this.h();
		},
		l(g) {
			t = p(g, 'DIV', { class: !0 });
			var u = $(t);
			(a = p(u, 'IMG', { alt: !0, class: !0, src: !0 })),
				(n = b(u)),
				(l = p(u, 'BUTTON', { class: !0 }));
			var I = $(l);
			(s = p(I, 'IMG', { alt: !0, class: !0, src: !0 })),
				I.forEach(d),
				(c = b(u)),
				(f = p(u, 'BUTTON', { class: !0 }));
			var B = $(f);
			(m = p(B, 'IMG', { alt: !0, class: !0, src: !0 })), B.forEach(d), u.forEach(d), this.h();
		},
		h() {
			i(a, 'alt', 'logo'),
				i(a, 'class', 'h-6 mr-2'),
				y(a.src, (r = Q)) || i(a, 'src', r),
				i(s, 'alt', 'back'),
				i(s, 'class', 'h-4'),
				y(s.src, (e = K)) || i(s, 'src', e),
				i(l, 'class', 'flex items-center justify-center text-white'),
				i(m, 'alt', 'back'),
				i(m, 'class', 'h-6 ml-2'),
				y(m.src, (j = L)) || i(m, 'src', j),
				i(f, 'class', 'flex items-center justify-center text-white'),
				i(
					t,
					'class',
					'fixed z-50 bg-black w-full flex flex-row justify-end py-3 px-10 md:px-20 lg:px-52'
				);
		},
		m(g, u) {
			x(g, t, u),
				h(t, a),
				h(t, n),
				h(t, l),
				h(l, s),
				h(t, c),
				h(t, f),
				h(f, m),
				v || ((E = [T(l, 'click', o[0]), T(f, 'click', o[1])]), (v = !0));
		},
		p: w,
		i: w,
		o: w,
		d(g) {
			g && d(t), (v = !1), q(E);
		}
	};
}
function W(o) {
	return [
		() => {
			window.history.back();
		},
		() => {
			P('/');
		}
	];
}
class X extends D {
	constructor(t) {
		super();
		G(this, t, W, R, M, {});
	}
}
function Y(o) {
	let t, a, r, n;
	t = new X({});
	const l = o[1].default,
		s = C(l, o, o[0], null);
	return {
		c() {
			H(t.$$.fragment), (a = k()), (r = _('div')), s && s.c(), this.h();
		},
		l(e) {
			N(t.$$.fragment, e), (a = b(e)), (r = p(e, 'DIV', { class: !0, style: !0 }));
			var c = $(r);
			s && s.l(c), c.forEach(d), this.h();
		},
		h() {
			i(r, 'class', 'w-full min-h-screen px-10 md:px-20 lg:px-52 py-20'),
				O(
					r,
					'background-image',
					'linear-gradient(to right top, #D7DFEA, #8B9BAF, #5A677C, #6E5372)'
				);
		},
		m(e, c) {
			S(t, e, c), x(e, a, c), x(e, r, c), s && s.m(r, null), (n = !0);
		},
		p(e, [c]) {
			s && s.p && (!n || c & 1) && U(s, l, e, e[0], n ? z(l, e[0], c, null) : V(e[0]), null);
		},
		i(e) {
			n || (A(t.$$.fragment, e), A(s, e), (n = !0));
		},
		o(e) {
			F(t.$$.fragment, e), F(s, e), (n = !1);
		},
		d(e) {
			J(t, e), e && d(a), e && d(r), s && s.d(e);
		}
	};
}
function Z(o, t, a) {
	let { $$slots: r = {}, $$scope: n } = t;
	return (
		(o.$$set = (l) => {
			'$$scope' in l && a(0, (n = l.$$scope));
		}),
		[n, r]
	);
}
class lt extends D {
	constructor(t) {
		super();
		G(this, t, Z, Y, M, {});
	}
}
export { lt as default };
