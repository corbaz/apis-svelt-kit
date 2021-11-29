import {
	S as b,
	i as D,
	s as j,
	e as f,
	t as C,
	k,
	c as m,
	a as w,
	g as N,
	d as p,
	n as S,
	b as a,
	D as x,
	f as O,
	E as u,
	h as q,
	G as y
} from '../../chunks/vendor-2a03ac52.js';
function G(n) {
	let s,
		e,
		t,
		r = n[0].trackName + '',
		_,
		E,
		l,
		g,
		I,
		d,
		c,
		v;
	return {
		c() {
			(s = f('section')),
				(e = f('div')),
				(t = f('h1')),
				(_ = C(r)),
				(E = k()),
				(l = f('img')),
				(I = k()),
				(d = f('audio')),
				(c = f('source')),
				this.h();
		},
		l(o) {
			s = m(o, 'SECTION', {});
			var i = w(s);
			e = m(i, 'DIV', { class: !0 });
			var h = w(e);
			t = m(h, 'H1', { class: !0 });
			var R = w(t);
			(_ = N(R, r)),
				R.forEach(p),
				(E = S(h)),
				(l = m(h, 'IMG', { src: !0, alt: !0, class: !0 })),
				(I = S(h)),
				(d = m(h, 'AUDIO', { class: !0 }));
			var U = w(d);
			(c = m(U, 'SOURCE', { src: !0, type: !0 })),
				U.forEach(p),
				h.forEach(p),
				i.forEach(p),
				this.h();
		},
		h() {
			a(t, 'class', 'text-3xl font-bold text-center mb-8 text-indigo-300'),
				x(l.src, (g = n[0].artworkUrl100)) || a(l, 'src', g),
				a(l, 'alt', 'img'),
				a(l, 'class', 'w-48 md:w-56 lg:w-64 rounded-2xl drop-shadow-3xl mb-12'),
				x(c.src, (v = n[0].previewUrl)) || a(c, 'src', v),
				a(c, 'type', 'audio/mpeg'),
				(d.controls = !0),
				a(d, 'class', 'drop-shadow-3xl '),
				a(e, 'class', 'flex flex-col items-center justify-center');
		},
		m(o, i) {
			O(o, s, i), u(s, e), u(e, t), u(t, _), u(e, E), u(e, l), u(e, I), u(e, d), u(d, c);
		},
		p(o, [i]) {
			i & 1 && r !== (r = o[0].trackName + '') && q(_, r),
				i & 1 && !x(l.src, (g = o[0].artworkUrl100)) && a(l, 'src', g),
				i & 1 && !x(c.src, (v = o[0].previewUrl)) && a(c, 'src', v);
		},
		i: y,
		o: y,
		d(o) {
			o && p(s);
		}
	};
}
async function H({ page: n }) {
	let s = n.params.songId;
	return {
		props: {
			songResults: (
				await (await fetch(`https://itunes.apple.com/search?term=${s}&entity=song`)).json()
			).results[0]
		}
	};
}
function A(n, s, e) {
	let { songResults: t } = s;
	return (
		(n.$$set = (r) => {
			'songResults' in r && e(0, (t = r.songResults));
		}),
		[t]
	);
}
class M extends b {
	constructor(s) {
		super();
		D(this, s, A, G, j, { songResults: 0 });
	}
}
export { M as default, H as load };
