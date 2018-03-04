require('./bootstrap');

$(function () {
	/* BARBA */
	var lastElementClicked;
	Barba.Pjax.start();

	Barba.Dispatcher.on('linkClicked', function (e) {
		clickedElem = e;
	});

	var GsapTransition = Barba.BaseTransition.extend({
		start: function () {
			Promise
				.all([this.newContainerLoading, this.out()])
				.then(this.in.bind(this));
		},
		out: function () {
			var t = Barba.Utils.deferred(),
				i = new TimelineMax;

			i.to("body", 5, {
				backgroundColor: '#000000'
			});

			return i.eventCallback("onComplete", function () {
				t.resolve();
			}), t.promise;
		},
		in: function () {
			var _this = this,
				i = ($(this.newContainer), new TimelineMax);

			i.to("body", 5, {
				backgroundColor: 'red'
			});

			i.eventCallback("onComplete", function () {
				_this.done();
			});
		}
	});

	var FadeTransition = Barba.BaseTransition.extend({
		start: function () {
			Promise
				.all([this.newContainerLoading, this.fadeOut()])
				.then(this.fadeIn.bind(this));
		},
		fadeOut: function () {
			return $(this.oldContainer).animate({
				opacity: 0
			}).promise();
		},
		fadeIn: function () {
			var _this = this;
			var $el = $(this.newContainer);

			$(this.oldContainer).hide();

			$el.css({
				visibility: 'visible',
				opacity: 0
			});

			$el.animate({
				opacity: 1
			}, 400, function () {
				_this.done();
			});
		}
	});

	Barba.Pjax.getTransition = function () {
		trans = FadeTransition;
		if ($(clickedElem).hasClass('home')) trans = GsapTransition;
		return trans;
	};

	/* Anime Fireworks */
	var canvasEl = document.querySelector('.fireworks'),
		ctx = canvasEl.getContext('2d'),
		numberOfParticules = 30,
		pointerX = 0,
		pointerY = 0,
		tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown',
		colors = ['#F69AAF', '#FFC6C5', '#FFA09B', '#F0AACB'],
		centerX = window.innerWidth / 2,
		centerY = window.innerHeight / 2;

	function setCanvasSize() {
		canvasEl.width = window.innerWidth * 2;
		canvasEl.height = window.innerHeight * 2;
		canvasEl.style.width = window.innerWidth + 'px';
		canvasEl.style.height = window.innerHeight + 'px';
		canvasEl.getContext('2d').scale(2, 2);
	}

	function updateCoords(e) {
		pointerX = e.clientX || e.touches[0].clientX;
		pointerY = e.clientY || e.touches[0].clientY;
	}

	function setParticuleDirection(p) {
		var angle = anime.random(0, 360) * Math.PI / 180;
		var value = anime.random(50, 180);
		var radius = [-1, 1][anime.random(0, 1)] * value;
		return {
			x: p.x + radius * Math.cos(angle),
			y: p.y + radius * Math.sin(angle)
		}
	}

	function createParticule(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.color = colors[anime.random(0, colors.length - 1)];
		p.radius = anime.random(16, 32);
		p.endPos = setParticuleDirection(p);
		p.draw = function () {
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
			ctx.fillStyle = p.color;
			ctx.fill();
		}
		return p;
	}

	function createCircle(x, y) {
		var p = {};
		p.x = x;
		p.y = y;
		p.color = '#FFC6C5';
		p.radius = 0.1;
		p.alpha = .5;
		p.lineWidth = 6;
		p.draw = function () {
			ctx.globalAlpha = p.alpha;
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
			ctx.lineWidth = p.lineWidth;
			ctx.strokeStyle = p.color;
			ctx.stroke();
			ctx.globalAlpha = 1;
		}
		return p;
	}

	function renderParticule(anim) {
		for (var i = 0; i < anim.animatables.length; i++) {
			anim.animatables[i].target.draw();
		}
	}

	function animateParticules(x, y) {
		var circle = createCircle(x, y);
		var particules = [];
		for (var i = 0; i < numberOfParticules; i++) {
			particules.push(createParticule(x, y));
		}
		anime.timeline().add({
				targets: particules,
				x: function (p) {
					return p.endPos.x;
				},
				y: function (p) {
					return p.endPos.y;
				},
				radius: 0.2,
				duration: anime.random(1200, 1800),
				easing: 'easeOutExpo',
				update: renderParticule
			})
			.add({
				targets: circle,
				radius: anime.random(80, 160),
				lineWidth: 0,
				alpha: {
					value: 0,
					easing: 'linear',
					duration: anime.random(600, 800),
				},
				duration: anime.random(1200, 1800),
				easing: 'easeOutExpo',
				update: renderParticule,
				offset: 0
			});
	}

	var render = anime({
		duration: Infinity,
		update: function () {
			ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
		}
	});

	document.addEventListener(tap, function (e) {
		render.play();
		updateCoords(e);
		animateParticules(pointerX, pointerY);
	}, false);
	
	setCanvasSize();
	window.addEventListener('resize', setCanvasSize, false);
});
