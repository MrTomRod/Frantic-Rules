"use strict"

const cacheName = 'frantic-rules-pwa'
const filesToCache = [
	// home dir
	'/',
	'/frantic_rules.html',
	'/frantic.json',

	// css
	'/css/frantic.css',
	'/css/bootstrap.min.css',

	// js
	'/js/main.js',
	'/js/bootstrap.min.js',
	'/js/jquery-3.5.1.min.js',
	
	'/svg/2nd-chance.svg',
	'/svg/all-draw-one.svg',
	'/svg/anti-counter.svg',
	'/svg/black-hole.svg',
	'/svg/black-jack.svg',
	'/svg/black-wish.svg',
	'/svg/capitalism.svg',
	'/svg/chargenado.svg',
	'/svg/charity.svg',
	'/svg/colour-blockade.svg',
	'/svg/colour-swap.svg',
	'/svg/communism.svg',
	'/svg/counterattack.svg',
	'/svg/crowdfunding.svg',
	'/svg/curse.svg',
	'/svg/distributor.svg',
	'/svg/doomsday.svg',
	'/svg/double-taxation.svg',
	'/svg/earthquake.svg',
	'/svg/edison.svg',
	'/svg/epic-fail.svg',
	'/svg/equality.svg',
	'/svg/event-manager.svg',
	'/svg/exchange.svg',
	'/svg/expansion.svg',
	'/svg/fantastic.svg',
	'/svg/fantastic-four.svg',
	'/svg/finish-line.svg',
	'/svg/friday-the-13th.svg',
	'/svg/fuck-you.svg',
	'/svg/gambling-man.svg',
	'/svg/gift.svg',
	'/svg/identity-theft.svg',
	'/svg/inequality.svg',
	'/svg/last-chance.svg',
	'/svg/looping.svg',
	'/svg/loot.svg',
	'/svg/lucky-bastard.svg',
	'/svg/market.svg',
	'/svg/mating-season.svg',
	'/svg/merry-christmas.svg',
	'/svg/mexican-standoff.svg',
	'/svg/mimicry.svg',
	'/svg/nice-try.svg',
	'/svg/number-wish.svg',
	'/svg/open-hands.svg',
	'/svg/parasite.svg',
	'/svg/plague.svg',
	'/svg/plus-one.svg',
	'/svg/random-chance.svg',
	'/svg/recession.svg',
	'/svg/recharge.svg',
	'/svg/recycling.svg',
	'/svg/repeat.svg',
	'/svg/rewind.svg',
	'/svg/riot.svg',
	'/svg/robin-hood.svg',
	'/svg/russian-roulette.svg',
	'/svg/seppuku.svg',
	'/svg/skip.svg',
	'/svg/special-charge.svg',
	'/svg/special-favours.svg',
	'/svg/special-seal.svg',
	'/svg/supercharge.svg',
	'/svg/surprise-party.svg',
	'/svg/the-all-seeing-eye.svg',
	'/svg/the-end.svg',
	'/svg/thief.svg',
	'/svg/third-time-lucky.svg',
	'/svg/time-bomb.svg',
	'/svg/tornado.svg',
	'/svg/troublecharger.svg',
	'/svg/troublemaker.svg',
	'/svg/trust-fall.svg',
	'/svg/tsunami.svg',
	'/svg/update.svg',
	'/svg/vandalism.svg'
]

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(filesToCache);
		})
		)
})

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
		)
})