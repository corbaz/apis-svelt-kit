var le = Object.defineProperty,
	ce = Object.defineProperties;
var fe = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty,
	G = Object.prototype.propertyIsEnumerable;
var X = (n, e, s) =>
		e in n ? le(n, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (n[e] = s),
	S = (n, e) => {
		for (var s in e || (e = {})) W.call(e, s) && X(n, s, e[s]);
		if (C) for (var s of C(e)) G.call(e, s) && X(n, s, e[s]);
		return n;
	},
	F = (n, e) => ce(n, fe(e));
var Q = (n, e) => {
	var s = {};
	for (var t in n) W.call(n, t) && e.indexOf(t) < 0 && (s[t] = n[t]);
	if (n != null && C) for (var t of C(n)) e.indexOf(t) < 0 && G.call(n, t) && (s[t] = n[t]);
	return s;
};
import {
	S as ue,
	i as he,
	s as de,
	e as _e,
	c as pe,
	a as me,
	d as $,
	b as V,
	f as k,
	t as ge,
	g as we,
	h as be,
	j as L,
	k as ye,
	l as w,
	m as D,
	n as ve,
	o as q,
	p as H,
	q as M,
	r as O,
	u as b,
	v as U,
	w as I,
	x as p,
	y as Ee,
	z as $e,
	A as ke,
	B,
	C as z
} from './chunks/vendor-2a03ac52.js';
import { i as Re } from './chunks/singletons-12a22614.js';
function Z(n) {
	let e, s, t;
	const r = [n[2] || {}];
	var a = n[0][1];
	function o(i) {
		let l = { $$slots: { default: [Le] }, $$scope: { ctx: i } };
		for (let c = 0; c < r.length; c += 1) l = B(l, r[c]);
		return { props: l };
	}
	return (
		a && (e = new a(o(n))),
		{
			c() {
				e && L(e.$$.fragment), (s = w());
			},
			l(i) {
				e && D(e.$$.fragment, i), (s = w());
			},
			m(i, l) {
				e && q(e, i, l), k(i, s, l), (t = !0);
			},
			p(i, l) {
				const c = l & 4 ? H(r, [M(i[2] || {})]) : {};
				if ((l & 1049 && (c.$$scope = { dirty: l, ctx: i }), a !== (a = i[0][1]))) {
					if (e) {
						O();
						const f = e;
						b(f.$$.fragment, 1, 0, () => {
							U(f, 1);
						}),
							I();
					}
					a
						? ((e = new a(o(i))), L(e.$$.fragment), p(e.$$.fragment, 1), q(e, s.parentNode, s))
						: (e = null);
				} else a && e.$set(c);
			},
			i(i) {
				t || (e && p(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				e && b(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				i && $(s), e && U(e, i);
			}
		}
	);
}
function x(n) {
	let e, s, t;
	const r = [n[3] || {}];
	var a = n[0][2];
	function o(i) {
		let l = { $$slots: { default: [Se] }, $$scope: { ctx: i } };
		for (let c = 0; c < r.length; c += 1) l = B(l, r[c]);
		return { props: l };
	}
	return (
		a && (e = new a(o(n))),
		{
			c() {
				e && L(e.$$.fragment), (s = w());
			},
			l(i) {
				e && D(e.$$.fragment, i), (s = w());
			},
			m(i, l) {
				e && q(e, i, l), k(i, s, l), (t = !0);
			},
			p(i, l) {
				const c = l & 8 ? H(r, [M(i[3] || {})]) : {};
				if ((l & 1041 && (c.$$scope = { dirty: l, ctx: i }), a !== (a = i[0][2]))) {
					if (e) {
						O();
						const f = e;
						b(f.$$.fragment, 1, 0, () => {
							U(f, 1);
						}),
							I();
					}
					a
						? ((e = new a(o(i))), L(e.$$.fragment), p(e.$$.fragment, 1), q(e, s.parentNode, s))
						: (e = null);
				} else a && e.$set(c);
			},
			i(i) {
				t || (e && p(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				e && b(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				i && $(s), e && U(e, i);
			}
		}
	);
}
function ee(n) {
	let e, s, t;
	const r = [n[4] || {}];
	var a = n[0][3];
	function o(i) {
		let l = {};
		for (let c = 0; c < r.length; c += 1) l = B(l, r[c]);
		return { props: l };
	}
	return (
		a && (e = new a(o())),
		{
			c() {
				e && L(e.$$.fragment), (s = w());
			},
			l(i) {
				e && D(e.$$.fragment, i), (s = w());
			},
			m(i, l) {
				e && q(e, i, l), k(i, s, l), (t = !0);
			},
			p(i, l) {
				const c = l & 16 ? H(r, [M(i[4] || {})]) : {};
				if (a !== (a = i[0][3])) {
					if (e) {
						O();
						const f = e;
						b(f.$$.fragment, 1, 0, () => {
							U(f, 1);
						}),
							I();
					}
					a
						? ((e = new a(o())), L(e.$$.fragment), p(e.$$.fragment, 1), q(e, s.parentNode, s))
						: (e = null);
				} else a && e.$set(c);
			},
			i(i) {
				t || (e && p(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				e && b(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				i && $(s), e && U(e, i);
			}
		}
	);
}
function Se(n) {
	let e,
		s,
		t = n[0][3] && ee(n);
	return {
		c() {
			t && t.c(), (e = w());
		},
		l(r) {
			t && t.l(r), (e = w());
		},
		m(r, a) {
			t && t.m(r, a), k(r, e, a), (s = !0);
		},
		p(r, a) {
			r[0][3]
				? t
					? (t.p(r, a), a & 1 && p(t, 1))
					: ((t = ee(r)), t.c(), p(t, 1), t.m(e.parentNode, e))
				: t &&
				  (O(),
				  b(t, 1, 1, () => {
						t = null;
				  }),
				  I());
		},
		i(r) {
			s || (p(t), (s = !0));
		},
		o(r) {
			b(t), (s = !1);
		},
		d(r) {
			t && t.d(r), r && $(e);
		}
	};
}
function Le(n) {
	let e,
		s,
		t = n[0][2] && x(n);
	return {
		c() {
			t && t.c(), (e = w());
		},
		l(r) {
			t && t.l(r), (e = w());
		},
		m(r, a) {
			t && t.m(r, a), k(r, e, a), (s = !0);
		},
		p(r, a) {
			r[0][2]
				? t
					? (t.p(r, a), a & 1 && p(t, 1))
					: ((t = x(r)), t.c(), p(t, 1), t.m(e.parentNode, e))
				: t &&
				  (O(),
				  b(t, 1, 1, () => {
						t = null;
				  }),
				  I());
		},
		i(r) {
			s || (p(t), (s = !0));
		},
		o(r) {
			b(t), (s = !1);
		},
		d(r) {
			t && t.d(r), r && $(e);
		}
	};
}
function qe(n) {
	let e,
		s,
		t = n[0][1] && Z(n);
	return {
		c() {
			t && t.c(), (e = w());
		},
		l(r) {
			t && t.l(r), (e = w());
		},
		m(r, a) {
			t && t.m(r, a), k(r, e, a), (s = !0);
		},
		p(r, a) {
			r[0][1]
				? t
					? (t.p(r, a), a & 1 && p(t, 1))
					: ((t = Z(r)), t.c(), p(t, 1), t.m(e.parentNode, e))
				: t &&
				  (O(),
				  b(t, 1, 1, () => {
						t = null;
				  }),
				  I());
		},
		i(r) {
			s || (p(t), (s = !0));
		},
		o(r) {
			b(t), (s = !1);
		},
		d(r) {
			t && t.d(r), r && $(e);
		}
	};
}
function te(n) {
	let e,
		s = n[6] && se(n);
	return {
		c() {
			(e = _e('div')), s && s.c(), this.h();
		},
		l(t) {
			e = pe(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var r = me(e);
			s && s.l(r), r.forEach($), this.h();
		},
		h() {
			V(e, 'id', 'svelte-announcer'),
				V(e, 'aria-live', 'assertive'),
				V(e, 'aria-atomic', 'true'),
				V(e, 'class', 'svelte-1j55zn5');
		},
		m(t, r) {
			k(t, e, r), s && s.m(e, null);
		},
		p(t, r) {
			t[6] ? (s ? s.p(t, r) : ((s = se(t)), s.c(), s.m(e, null))) : s && (s.d(1), (s = null));
		},
		d(t) {
			t && $(e), s && s.d();
		}
	};
}
function se(n) {
	let e;
	return {
		c() {
			e = ge(n[7]);
		},
		l(s) {
			e = we(s, n[7]);
		},
		m(s, t) {
			k(s, e, t);
		},
		p(s, t) {
			t & 128 && be(e, s[7]);
		},
		d(s) {
			s && $(e);
		}
	};
}
function Ue(n) {
	let e, s, t, r;
	const a = [n[1] || {}];
	var o = n[0][0];
	function i(c) {
		let f = { $$slots: { default: [qe] }, $$scope: { ctx: c } };
		for (let u = 0; u < a.length; u += 1) f = B(f, a[u]);
		return { props: f };
	}
	o && (e = new o(i(n)));
	let l = n[5] && te(n);
	return {
		c() {
			e && L(e.$$.fragment), (s = ye()), l && l.c(), (t = w());
		},
		l(c) {
			e && D(e.$$.fragment, c), (s = ve(c)), l && l.l(c), (t = w());
		},
		m(c, f) {
			e && q(e, c, f), k(c, s, f), l && l.m(c, f), k(c, t, f), (r = !0);
		},
		p(c, [f]) {
			const u = f & 2 ? H(a, [M(c[1] || {})]) : {};
			if ((f & 1053 && (u.$$scope = { dirty: f, ctx: c }), o !== (o = c[0][0]))) {
				if (e) {
					O();
					const d = e;
					b(d.$$.fragment, 1, 0, () => {
						U(d, 1);
					}),
						I();
				}
				o
					? ((e = new o(i(c))), L(e.$$.fragment), p(e.$$.fragment, 1), q(e, s.parentNode, s))
					: (e = null);
			} else o && e.$set(u);
			c[5]
				? l
					? l.p(c, f)
					: ((l = te(c)), l.c(), l.m(t.parentNode, t))
				: l && (l.d(1), (l = null));
		},
		i(c) {
			r || (e && p(e.$$.fragment, c), (r = !0));
		},
		o(c) {
			e && b(e.$$.fragment, c), (r = !1);
		},
		d(c) {
			e && U(e, c), c && $(s), l && l.d(c), c && $(t);
		}
	};
}
function Ae(n, e, s) {
	let { stores: t } = e,
		{ page: r } = e,
		{ components: a } = e,
		{ props_0: o = null } = e,
		{ props_1: i = null } = e,
		{ props_2: l = null } = e,
		{ props_3: c = null } = e;
	Ee('__svelte__', t), $e(t.page.notify);
	let f = !1,
		u = !1,
		d = null;
	return (
		ke(() => {
			const h = t.page.subscribe(() => {
				f && (s(6, (u = !0)), s(7, (d = document.title || 'untitled page')));
			});
			return s(5, (f = !0)), h;
		}),
		(n.$$set = (h) => {
			'stores' in h && s(8, (t = h.stores)),
				'page' in h && s(9, (r = h.page)),
				'components' in h && s(0, (a = h.components)),
				'props_0' in h && s(1, (o = h.props_0)),
				'props_1' in h && s(2, (i = h.props_1)),
				'props_2' in h && s(3, (l = h.props_2)),
				'props_3' in h && s(4, (c = h.props_3));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 768 && t.page.set(r);
		}),
		[a, o, i, l, c, f, u, d, t, r]
	);
}
class Oe extends ue {
	constructor(e) {
		super();
		he(this, e, Ae, Ue, de, {
			stores: 8,
			page: 9,
			components: 0,
			props_0: 1,
			props_1: 2,
			props_2: 3,
			props_3: 4
		});
	}
}
const Ie = 'modulepreload',
	re = {},
	je = '/_app/',
	j = function (e, s) {
		return !s || s.length === 0
			? e()
			: Promise.all(
					s.map((t) => {
						if (((t = `${je}${t}`), t in re)) return;
						re[t] = !0;
						const r = t.endsWith('.css'),
							a = r ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${t}"]${a}`)) return;
						const o = document.createElement('link');
						if (
							((o.rel = r ? 'stylesheet' : Ie),
							r || ((o.as = 'script'), (o.crossOrigin = '')),
							(o.href = t),
							document.head.appendChild(o),
							r)
						)
							return new Promise((i, l) => {
								o.addEventListener('load', i), o.addEventListener('error', l);
							});
					})
			  ).then(() => e());
	},
	m = [
		() =>
			j(
				() => import('./pages/__layout.svelte-3ca0525f.js'),
				[
					'pages/__layout.svelte-3ca0525f.js',
					'assets/pages/__layout.svelte-89752b18.css',
					'chunks/vendor-2a03ac52.js',
					'chunks/homeIcon-f3c1107f.js',
					'chunks/navigation-51f4a605.js',
					'chunks/singletons-12a22614.js'
				]
			),
		() =>
			j(
				() => import('./error.svelte-00971fcd.js'),
				['error.svelte-00971fcd.js', 'chunks/vendor-2a03ac52.js']
			),
		() =>
			j(
				() => import('./pages/index.svelte-115bcccd.js'),
				[
					'pages/index.svelte-115bcccd.js',
					'assets/pages/index.svelte-e7a9bf84.css',
					'chunks/vendor-2a03ac52.js',
					'chunks/navigation-51f4a605.js',
					'chunks/singletons-12a22614.js'
				]
			),
		() =>
			j(
				() => import('./pages/_searched_/__layout.svelte-bc7889c0.js'),
				[
					'pages/_searched_/__layout.svelte-bc7889c0.js',
					'chunks/vendor-2a03ac52.js',
					'chunks/homeIcon-f3c1107f.js',
					'chunks/navigation-51f4a605.js',
					'chunks/singletons-12a22614.js'
				]
			),
		() =>
			j(
				() => import('./pages/_searched_/index.svelte-a4ada35f.js'),
				[
					'pages/_searched_/index.svelte-a4ada35f.js',
					'chunks/vendor-2a03ac52.js',
					'chunks/navigation-51f4a605.js',
					'chunks/singletons-12a22614.js'
				]
			),
		() =>
			j(
				() => import('./pages/_searched_/test.svelte-48451542.js'),
				['pages/_searched_/test.svelte-48451542.js', 'chunks/vendor-2a03ac52.js']
			),
		() =>
			j(
				() => import('./pages/_searched_/_songId_.svelte-1c6b77ad.js'),
				['pages/_searched_/_songId_.svelte-1c6b77ad.js', 'chunks/vendor-2a03ac52.js']
			)
	],
	K = decodeURIComponent,
	Pe = [
		[/^\/$/, [m[0], m[2]], [m[1]]],
		[/^\/([^/]+?)\/?$/, [m[0], m[3], m[4]], [m[1]], (n) => ({ searched: K(n[1]) })],
		[/^\/([^/]+?)\/test\/?$/, [m[0], m[3], m[5]], [m[1]], (n) => ({ searched: K(n[1]) })],
		[
			/^\/([^/]+?)\/([^/]+?)\/?$/,
			[m[0], m[3], m[6]],
			[m[1]],
			(n) => ({ searched: K(n[1]), songId: K(n[2]) })
		]
	],
	Te = [m[0](), m[1]()];
function Ne(n) {
	let e = n.baseURI;
	if (!e) {
		const s = n.getElementsByTagName('base');
		e = s.length ? s[0].href : n.URL;
	}
	return e;
}
let ne = '';
function Ce(n) {
	(ne = n.base), n.assets;
}
function J() {
	return { x: pageXOffset, y: pageYOffset };
}
function ie(n) {
	return n.composedPath().find((s) => s instanceof Node && s.nodeName.toUpperCase() === 'A');
}
function ae(n) {
	return n instanceof SVGAElement ? new URL(n.href.baseVal, document.baseURI) : new URL(n.href);
}
class Ve {
	constructor({ base: e, routes: s, trailing_slash: t, renderer: r }) {
		(this.base = e),
			(this.routes = s),
			(this.trailing_slash = t),
			(this.navigating = 0),
			(this.renderer = r),
			(r.router = this),
			(this.enabled = !0),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	init_listeners() {
		'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			});
		let e;
		addEventListener('scroll', () => {
			clearTimeout(e),
				(e = setTimeout(() => {
					const a = F(S({}, history.state || {}), { 'sveltekit:scroll': J() });
					history.replaceState(a, document.title, window.location.href);
				}, 200));
		});
		const s = (a) => {
			const o = ie(a);
			o && o.href && o.hasAttribute('sveltekit:prefetch') && this.prefetch(ae(o));
		};
		let t;
		const r = (a) => {
			clearTimeout(t),
				(t = setTimeout(() => {
					s(a);
				}, 20));
		};
		addEventListener('touchstart', s),
			addEventListener('mousemove', r),
			addEventListener('click', (a) => {
				if (
					!this.enabled ||
					a.button ||
					a.which !== 1 ||
					a.metaKey ||
					a.ctrlKey ||
					a.shiftKey ||
					a.altKey ||
					a.defaultPrevented
				)
					return;
				const o = ie(a);
				if (!o || !o.href) return;
				const i = ae(o),
					l = i.toString();
				if (l === location.href) {
					location.hash || a.preventDefault();
					return;
				}
				const c = (o.getAttribute('rel') || '').split(/\s+/);
				if (
					o.hasAttribute('download') ||
					(c && c.includes('external')) ||
					(o instanceof SVGAElement ? o.target.baseVal : o.target) ||
					!this.owns(i)
				)
					return;
				const f = o.hasAttribute('sveltekit:noscroll'),
					u = l.indexOf('#'),
					d = location.href.indexOf('#'),
					h = u >= 0 ? l.substring(0, u) : l,
					y = d >= 0 ? location.href.substring(0, d) : location.href;
				history.pushState({}, '', i.href),
					h === y && window.dispatchEvent(new HashChangeEvent('hashchange')),
					this._navigate(i, f ? J() : null, !1, [], i.hash),
					a.preventDefault();
			}),
			addEventListener('popstate', (a) => {
				if (a.state && this.enabled) {
					const o = new URL(location.href);
					this._navigate(o, a.state['sveltekit:scroll'], !1, []);
				}
			});
	}
	owns(e) {
		return e.origin === location.origin && e.pathname.startsWith(this.base);
	}
	parse(e) {
		if (this.owns(e)) {
			const s = e.pathname.slice(this.base.length) || '/',
				t = decodeURI(s),
				r = this.routes.filter(([i]) => i.test(t)),
				a = new URLSearchParams(e.search);
			return { id: `${s}?${a}`, routes: r, path: s, decoded_path: t, query: a };
		}
	}
	async goto(
		e,
		{ noscroll: s = !1, replaceState: t = !1, keepfocus: r = !1, state: a = {} } = {},
		o
	) {
		const i = new URL(e, Ne(document));
		return this.enabled && this.owns(i)
			? (history[t ? 'replaceState' : 'pushState'](a, '', e),
			  this._navigate(i, s ? J() : null, r, o, i.hash))
			: ((location.href = i.href), new Promise(() => {}));
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(e) {
		const s = this.parse(e);
		if (!s) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return this.renderer.load(s);
	}
	async _navigate(e, s, t, r, a) {
		const o = this.parse(e);
		if (!o) throw new Error('Attempted to navigate to a URL that does not belong to this app');
		if (
			(this.navigating || dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.navigating++,
			o.path !== '/')
		) {
			const i = o.path.endsWith('/');
			((i && this.trailing_slash === 'never') ||
				(!i &&
					this.trailing_slash === 'always' &&
					!(o.path.split('/').pop() || '').includes('.'))) &&
				((o.path = i ? o.path.slice(0, -1) : o.path + '/'),
				history.replaceState({}, '', `${this.base}${o.path}${location.search}`));
		}
		await this.renderer.handle_navigation(o, r, !1, { hash: a, scroll: s, keepfocus: t }),
			this.navigating--,
			this.navigating || dispatchEvent(new CustomEvent('sveltekit:navigation-end'));
	}
}
function oe(n) {
	return n instanceof Error || (n && n.name && n.message) ? n : new Error(JSON.stringify(n));
}
function De(n) {
	let e = 5381,
		s = n.length;
	if (typeof n == 'string') for (; s; ) e = (e * 33) ^ n.charCodeAt(--s);
	else for (; s; ) e = (e * 33) ^ n[--s];
	return (e >>> 0).toString(36);
}
function He(n) {
	const e = n.status && n.status >= 400 && n.status <= 599 && !n.redirect;
	if (n.error || e) {
		const s = n.status;
		if (!n.error && e) return { status: s || 500, error: new Error() };
		const t = typeof n.error == 'string' ? new Error(n.error) : n.error;
		return t instanceof Error
			? !s || s < 400 || s > 599
				? (console.warn(
						'"error" returned from load() without a valid status code \u2014 defaulting to 500'
				  ),
				  { status: 500, error: t })
				: { status: s, error: t }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof t}"`
					)
			  };
	}
	if (n.redirect) {
		if (!n.status || Math.floor(n.status / 100) !== 3)
			return {
				status: 500,
				error: new Error(
					'"redirect" property returned from load() must be accompanied by a 3xx status code'
				)
			};
		if (typeof n.redirect != 'string')
			return {
				status: 500,
				error: new Error('"redirect" property returned from load() must be a string')
			};
	}
	if (n.context)
		throw new Error(
			'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
		);
	return n;
}
function Me(n) {
	const e = z(n);
	let s = !0;
	function t() {
		(s = !0), e.update((o) => o);
	}
	function r(o) {
		(s = !1), e.set(o);
	}
	function a(o) {
		let i;
		return e.subscribe((l) => {
			(i === void 0 || (s && l !== i)) && o((i = l));
		});
	}
	return { notify: t, set: r, subscribe: a };
}
function Be(n, e) {
	const s = typeof n == 'string' ? n : n.url;
	let t = `script[data-type="svelte-data"][data-url=${JSON.stringify(s)}]`;
	e && typeof e.body == 'string' && (t += `[data-body="${De(e.body)}"]`);
	const r = document.querySelector(t);
	if (r && r.textContent) {
		const a = JSON.parse(r.textContent),
			{ body: o } = a,
			i = Q(a, ['body']);
		return Promise.resolve(new Response(o, i));
	}
	return fetch(n, e);
}
class Ke {
	constructor({ Root: e, fallback: s, target: t, session: r, host: a }) {
		(this.Root = e),
			(this.fallback = s),
			(this.host = a),
			this.router,
			(this.target = t),
			(this.started = !1),
			(this.session_id = 1),
			(this.invalid = new Set()),
			(this.invalidating = null),
			(this.current = { page: null, session_id: 0, branch: [] }),
			(this.cache = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: Me({}), navigating: z(null), session: z(r) }),
			(this.$session = null),
			(this.root = null);
		let o = !1;
		this.stores.session.subscribe(async (i) => {
			if (((this.$session = i), !o || !this.router)) return;
			this.session_id += 1;
			const l = this.router.parse(new URL(location.href));
			l && this.update(l, [], !0);
		}),
			(o = !0);
	}
	async start({ status: e, error: s, nodes: t, page: r }) {
		const a = [];
		let o = {},
			i,
			l;
		try {
			for (let c = 0; c < t.length; c += 1) {
				const f = c === t.length - 1,
					u = await this._load_node({
						module: await t[c],
						page: r,
						stuff: o,
						status: f ? e : void 0,
						error: f ? s : void 0
					});
				if ((a.push(u), u && u.loaded))
					if (u.loaded.error) {
						if (s) throw u.loaded.error;
						l = { status: u.loaded.status, error: u.loaded.error, path: r.path, query: r.query };
					} else u.loaded.stuff && (o = S(S({}, o), u.loaded.stuff));
			}
			i = l
				? await this._load_error(l)
				: await this._get_navigation_result_from_branch({ page: r, branch: a });
		} catch (c) {
			if (s) throw c;
			i = await this._load_error({ status: 500, error: oe(c), path: r.path, query: r.query });
		}
		if (i.redirect) {
			location.href = new URL(i.redirect, location.href).href;
			return;
		}
		this._init(i);
	}
	async handle_navigation(e, s, t, r) {
		this.started &&
			this.stores.navigating.set({
				from: { path: this.current.page.path, query: this.current.page.query },
				to: { path: e.path, query: e.query }
			}),
			await this.update(e, s, t, r);
	}
	async update(e, s, t, r) {
		var l;
		const a = (this.token = {});
		let o = await this._get_navigation_result(e, t);
		if (a !== this.token) return;
		if ((this.invalid.clear(), o.redirect))
			if (s.length > 10 || s.includes(e.path))
				o = await this._load_error({
					status: 500,
					error: new Error('Redirect loop'),
					path: e.path,
					query: e.query
				});
			else {
				this.router
					? this.router.goto(o.redirect, { replaceState: !0 }, [...s, e.path])
					: (location.href = new URL(o.redirect, location.href).href);
				return;
			}
		if (
			(o.reload
				? location.reload()
				: this.started
				? ((this.current = o.state), this.root.$set(o.props), this.stores.navigating.set(null))
				: this._init(o),
			r)
		) {
			const { hash: c, scroll: f, keepfocus: u } = r;
			u || ((l = getSelection()) == null || l.removeAllRanges(), document.body.focus());
			const d = Math.round(pageYOffset),
				h = document.documentElement.scrollHeight - innerHeight;
			await 0;
			const y = Math.round(pageYOffset),
				R = document.documentElement.scrollHeight - innerHeight;
			if (y === Math.min(d, R) || h - d == R - y) {
				const A = c && document.getElementById(c.slice(1));
				f ? scrollTo(f.x, f.y) : A ? A.scrollIntoView() : scrollTo(0, 0);
			}
		} else await 0;
		if (((this.loading.promise = null), (this.loading.id = null), !this.router)) return;
		const i = o.state.branch[o.state.branch.length - 1];
		i && i.module.router === !1 ? this.router.disable() : this.router.enable();
	}
	load(e) {
		return (
			(this.loading.promise = this._get_navigation_result(e, !1)),
			(this.loading.id = e.id),
			this.loading.promise
		);
	}
	invalidate(e) {
		return (
			this.invalid.add(e),
			this.invalidating ||
				(this.invalidating = Promise.resolve().then(async () => {
					const s = this.router && this.router.parse(new URL(location.href));
					s && (await this.update(s, [], !0)), (this.invalidating = null);
				})),
			this.invalidating
		);
	}
	_init(e) {
		this.current = e.state;
		const s = document.querySelector('style[data-svelte]');
		s && s.remove(),
			(this.root = new this.Root({
				target: this.target,
				props: S({ stores: this.stores }, e.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _get_navigation_result(e, s) {
		if (this.loading.id === e.id && this.loading.promise) return this.loading.promise;
		for (let t = 0; t < e.routes.length; t += 1) {
			const r = e.routes[t];
			let a = t + 1;
			for (; a < e.routes.length; ) {
				const i = e.routes[a];
				if (i[0].toString() === r[0].toString()) i[1].forEach((l) => l()), (a += 1);
				else break;
			}
			const o = await this._load({ route: r, info: e }, s);
			if (o) return o;
		}
		return await this._load_error({
			status: 404,
			error: new Error(`Not found: ${e.path}`),
			path: e.path,
			query: e.query
		});
	}
	async _get_navigation_result_from_branch({ page: e, branch: s }) {
		const t = s.filter(Boolean),
			r = t.find((l) => l.loaded && l.loaded.redirect),
			a = {
				redirect: r && r.loaded ? r.loaded.redirect : void 0,
				state: { page: e, branch: s, session_id: this.session_id },
				props: { components: t.map((l) => l.module.default) }
			};
		for (let l = 0; l < t.length; l += 1) {
			const c = t[l].loaded;
			a.props[`props_${l}`] = c ? await c.props : null;
		}
		(!this.current.page ||
			e.path !== this.current.page.path ||
			e.query.toString() !== this.current.page.query.toString()) &&
			(a.props.page = e);
		const o = t[t.length - 1],
			i = o.loaded && o.loaded.maxage;
		if (i) {
			const l = `${e.path}?${e.query}`;
			let c = !1;
			const f = () => {
					this.cache.get(l) === a && this.cache.delete(l), d(), clearTimeout(u);
				},
				u = setTimeout(f, i * 1e3),
				d = this.stores.session.subscribe(() => {
					c && f();
				});
			(c = !0), this.cache.set(l, a);
		}
		return a;
	}
	async _load_node({ status: e, error: s, module: t, page: r, stuff: a }) {
		const o = {
				module: t,
				uses: { params: new Set(), path: !1, query: !1, session: !1, stuff: !1, dependencies: [] },
				loaded: null,
				stuff: a
			},
			i = {};
		for (const c in r.params)
			Object.defineProperty(i, c, {
				get() {
					return o.uses.params.add(c), r.params[c];
				},
				enumerable: !0
			});
		const l = this.$session;
		if (t.load) {
			const { started: c } = this,
				f = {
					page: {
						host: r.host,
						params: i,
						get path() {
							return (o.uses.path = !0), r.path;
						},
						get query() {
							return (o.uses.query = !0), r.query;
						}
					},
					get session() {
						return (o.uses.session = !0), l;
					},
					get stuff() {
						return (o.uses.stuff = !0), S({}, a);
					},
					fetch(d, h) {
						const y = typeof d == 'string' ? d : d.url,
							{ href: R } = new URL(y, new URL(r.path, document.baseURI));
						return o.uses.dependencies.push(R), c ? fetch(d, h) : Be(d, h);
					}
				};
			s && ((f.status = e), (f.error = s));
			const u = await t.load.call(null, f);
			if (!u) return;
			(o.loaded = He(u)), o.loaded.stuff && (o.stuff = o.loaded.stuff);
		}
		return o;
	}
	async _load({ route: e, info: { path: s, decoded_path: t, query: r } }, a) {
		const o = `${t}?${r}`;
		if (!a) {
			const _ = this.cache.get(o);
			if (_) return _;
		}
		const [i, l, c, f] = e,
			u = f ? f(i.exec(t)) : {},
			d = this.current.page && {
				path: s !== this.current.page.path,
				params: Object.keys(u).filter((_) => this.current.page.params[_] !== u[_]),
				query: r.toString() !== this.current.page.query.toString(),
				session: this.session_id !== this.current.session_id
			},
			h = { host: this.host, path: s, query: r, params: u };
		let y = [],
			R = {},
			Y = !1,
			A = 200,
			T;
		l.forEach((_) => _());
		e: for (let _ = 0; _ < l.length; _ += 1) {
			let g;
			try {
				if (!l[_]) continue;
				const E = await l[_](),
					v = this.current.branch[_];
				if (
					!v ||
					E !== v.module ||
					(d.path && v.uses.path) ||
					d.params.some((P) => v.uses.params.has(P)) ||
					(d.query && v.uses.query) ||
					(d.session && v.uses.session) ||
					v.uses.dependencies.some((P) => this.invalid.has(P)) ||
					(Y && v.uses.stuff)
				) {
					g = await this._load_node({ module: E, page: h, stuff: R });
					const P = _ === l.length - 1;
					if (g && g.loaded) {
						if (
							(g.loaded.error && ((A = g.loaded.status), (T = g.loaded.error)), g.loaded.redirect)
						)
							return { redirect: g.loaded.redirect, props: {}, state: this.current };
						g.loaded.stuff && (Y = !0);
					} else if (P && E.load) return;
				} else g = v;
			} catch (E) {
				(A = 500), (T = oe(E));
			}
			if (T) {
				for (; _--; )
					if (c[_]) {
						let E,
							v,
							N = _;
						for (; !(v = y[N]); ) N -= 1;
						try {
							if (
								((E = await this._load_node({
									status: A,
									error: T,
									module: await c[_](),
									page: h,
									stuff: v.stuff
								})),
								E && E.loaded && E.loaded.error)
							)
								continue;
							y = y.slice(0, N + 1).concat(E);
							break e;
						} catch {
							continue;
						}
					}
				return await this._load_error({ status: A, error: T, path: s, query: r });
			} else g && g.loaded && g.loaded.stuff && (R = S(S({}, R), g.loaded.stuff)), y.push(g);
		}
		return await this._get_navigation_result_from_branch({ page: h, branch: y });
	}
	async _load_error({ status: e, error: s, path: t, query: r }) {
		const a = { host: this.host, path: t, query: r, params: {} },
			o = await this._load_node({ module: await this.fallback[0], page: a, stuff: {} }),
			i = [
				o,
				await this._load_node({
					status: e,
					error: s,
					module: await this.fallback[1],
					page: a,
					stuff: (o && o.loaded && o.loaded.stuff) || {}
				})
			];
		return await this._get_navigation_result_from_branch({ page: a, branch: i });
	}
}
async function We({
	paths: n,
	target: e,
	session: s,
	host: t,
	route: r,
	spa: a,
	trailing_slash: o,
	hydrate: i
}) {
	const l = new Ke({ Root: Oe, fallback: Te, target: e, session: s, host: t }),
		c = r ? new Ve({ base: n.base, routes: Pe, trailing_slash: o, renderer: l }) : null;
	Re(c),
		Ce(n),
		i && (await l.start(i)),
		c && (a && c.goto(location.href, { replaceState: !0 }, []), c.init_listeners()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { We as start };
