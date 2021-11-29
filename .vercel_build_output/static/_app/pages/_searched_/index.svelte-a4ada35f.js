import {
	Q as M,
	S as O,
	i as R,
	s as A,
	e as f,
	k as D,
	t as y,
	c as p,
	a as m,
	n as N,
	g as U,
	d as h,
	D as j,
	b as u,
	f as T,
	E as d,
	F,
	R as Q,
	h as V,
	G as C,
	T as z,
	U as H,
	A as J
} from '../../chunks/vendor-2a03ac52.js';
import { g as q } from '../../chunks/navigation-51f4a605.js';
import '../../chunks/singletons-12a22614.js';
const K = () => {
		const t = M('__svelte__');
		return {
			page: { subscribe: t.page.subscribe },
			navigating: { subscribe: t.navigating.subscribe },
			get preloading() {
				return (
					console.error('stores.preloading is deprecated; use stores.navigating instead'),
					{ subscribe: t.navigating.subscribe }
				);
			},
			session: t.session
		};
	},
	L = {
		subscribe(t) {
			return K().page.subscribe(t);
		}
	};
function B(t, a, o) {
	const i = t.slice();
	return (i[2] = a[o]), i;
}
function G(t) {
	let a,
		o,
		i,
		r,
		e,
		n,
		s = t[2].trackName + '',
		l,
		w,
		_,
		b = t[2].artistName + '',
		v,
		E,
		I,
		S;
	return {
		c() {
			(a = f('button')),
				(o = f('img')),
				(r = D()),
				(e = f('div')),
				(n = f('div')),
				(l = y(s)),
				(w = D()),
				(_ = f('div')),
				(v = y(b)),
				(E = D()),
				this.h();
		},
		l(g) {
			a = p(g, 'BUTTON', { class: !0 });
			var c = m(a);
			(o = p(c, 'IMG', { src: !0, alt: !0, class: !0 })),
				(r = N(c)),
				(e = p(c, 'DIV', { class: !0 }));
			var k = m(e);
			n = p(k, 'DIV', { class: !0 });
			var $ = m(n);
			(l = U($, s)), $.forEach(h), (w = N(k)), (_ = p(k, 'DIV', { class: !0 }));
			var x = m(_);
			(v = U(x, b)), x.forEach(h), k.forEach(h), (E = N(c)), c.forEach(h), this.h();
		},
		h() {
			j(o.src, (i = t[2].artworkUrl100)) || u(o, 'src', i),
				u(o, 'alt', 'img'),
				u(o, 'class', 'w-24 h-24 rounded-2xl drop-shadow-3xl'),
				u(n, 'class', 'text-base h-12 overflow-hidden'),
				u(_, 'class', 'text-xs h-12 font-bold'),
				u(e, 'class', 'grid grid-rows-2 text-center'),
				u(
					a,
					'class',
					'p-3 gap-3 flex bg-white rounded-md bg-opacity-20 border-2 border-white border-opacity-30'
				);
		},
		m(g, c) {
			T(g, a, c),
				d(a, o),
				d(a, r),
				d(a, e),
				d(e, n),
				d(n, l),
				d(e, w),
				d(e, _),
				d(_, v),
				d(a, E),
				I ||
					((S = F(a, 'click', function () {
						Q(q(`${t[1].params.searched}/${t[2].trackId}`)) &&
							q(`${t[1].params.searched}/${t[2].trackId}`).apply(this, arguments);
					})),
					(I = !0));
		},
		p(g, c) {
			(t = g),
				c & 1 && !j(o.src, (i = t[2].artworkUrl100)) && u(o, 'src', i),
				c & 1 && s !== (s = t[2].trackName + '') && V(l, s),
				c & 1 && b !== (b = t[2].artistName + '') && V(v, b);
		},
		d(g) {
			g && h(a), (I = !1), S();
		}
	};
}
function P(t) {
	let a,
		o,
		i = t[0],
		r = [];
	for (let e = 0; e < i.length; e += 1) r[e] = G(B(t, i, e));
	return {
		c() {
			(a = f('section')), (o = f('div'));
			for (let e = 0; e < r.length; e += 1) r[e].c();
			this.h();
		},
		l(e) {
			a = p(e, 'SECTION', {});
			var n = m(a);
			o = p(n, 'DIV', { class: !0 });
			var s = m(o);
			for (let l = 0; l < r.length; l += 1) r[l].l(s);
			s.forEach(h), n.forEach(h), this.h();
		},
		h() {
			u(
				o,
				'class',
				'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grod-flow row gap-3'
			);
		},
		m(e, n) {
			T(e, a, n), d(a, o);
			for (let s = 0; s < r.length; s += 1) r[s].m(o, null);
		},
		p(e, [n]) {
			if (n & 3) {
				i = e[0];
				let s;
				for (s = 0; s < i.length; s += 1) {
					const l = B(e, i, s);
					r[s] ? r[s].p(l, n) : ((r[s] = G(l)), r[s].c(), r[s].m(o, null));
				}
				for (; s < r.length; s += 1) r[s].d(1);
				r.length = i.length;
			}
		},
		i: C,
		o: C,
		d(e) {
			e && h(a), z(r, e);
		}
	};
}
function W(t, a, o) {
	let i;
	H(t, L, (e) => o(1, (i = e)));
	let r = [];
	return (
		J(async () => {
			let e = i.params.searched,
				s = await (await fetch(`https://itunes.apple.com/search?term=${e}&entity=song`)).json();
			o(0, (r = s.results)), console.log(r);
		}),
		[r, i]
	);
}
class ee extends O {
	constructor(a) {
		super();
		R(this, a, W, P, A, {});
	}
}
export { ee as default };
