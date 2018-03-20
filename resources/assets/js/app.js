require('./bootstrap');

$(function () {
	/* BARBA */
	var lastElementClicked;

	Barba.Dispatcher.on('linkClicked', function (e) {
		clickedElem = e;
	});
	
	var Homepage = Barba.BaseView.extend({
		namespace: 'homepage',
		onEnter: function() {
			$('.water').wavify({
				height: -49,
				amplitude: 50,
				speed: .25,
				bones: 3,
				color: '#f57576'
			});
			
			var tl = new TimelineMax,
				tl2 = new TimelineMax,
				tl3 = new TimelineMax;

			tl.to(".start-hide", 0.5, {
				opacity: 1
			}).fromTo(".wave", 1.5, {
				css: {
					paddingTop: '100vh'
				}
			}, {
				css: {
					paddingTop: '0vh'
				}
			}).from("#barba-wrapper", 0.5, {
				opacity: 0
			}).to(".wave", 0, {
				css: {
					opacity: 0,
					paddingTop: '100vh'
				}
			}).from(".navbar", 0.5, {
				opacity: 0
			});
			
			tl2.from(".intro__container--initials", 1.25, {
				ease: Power4.easeOut,
				css: {
					right: '-100%',
					opacity: 0
				}
			}, 2.5);
			
			tl3.from(".intro__container--info", 1, {
				bottom: -40,
				opacity: 0
			}, 3);
		},
		onEnterCompleted: function() {
			barbaHomepageOnly();
		},
		onLeave: function() {
			
		},
		onLeaveCompleted: function() {
			
		}
	});

	var GsapTransitionHome = Barba.BaseTransition.extend({
		start: function () {
			Promise
				.all([this.newContainerLoading, this.out()])
				.then(this.in.bind(this));
		},
		out: function () {
			var barbaDefer = Barba.Utils.deferred(),
				tl = new TimelineMax;

			tl.to("body", 5, {
				backgroundColor: '#000000'
			});

			return tl.eventCallback("onComplete", function () {
				barbaDefer.resolve();
			}), barbaDefer.promise;
		},
		in: function () {
			var _this = this,
				tl = ($(this.newContainer), new TimelineMax);

			tl.to("body", 5, {
				backgroundColor: 'red'
			});

			tl.eventCallback("onComplete", function () {
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
		var trans = FadeTransition;
		if ($(clickedElem).hasClass('barba--homepage')) trans = GsapTransitionHome;
		return trans;
	};
	
	Homepage.init();
	Barba.Pjax.start();
	
	/* Prevent BarbaJS refresh when same page redirection */
	var links = $('a[href]');
		var cbk = function(e) {
		 if(e.currentTarget.href === window.location.href) {
		   e.preventDefault();
		   e.stopPropagation();
		 }
	};

	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', cbk);
	}
	
	/* Mediacheck */
	mediaCheck({
		media: '(max-width: 420px)',
		entry: function () {
			console.log('starting 420');
		},
		exit: function () {
			console.log('leaving 420');
		},
		both: function () {
			console.log('changing state');
		}
	});
	
	/* General */
	$('body').on('click', '.nav__toggle', function() {
		$('html, body').toggleClass('mobile-nav-open');
		if ($('html, body').hasClass('mobile-nav-open')) {
			var tl = new TimelineMax;

			tl.to(".container--zoomout", 0.3, {
				css: {
					transform: 'scale(0.85)',
					opacity: 0.3,
					left: '50vw'
				}
			}).to(".nav--right", 0, {
				css: {
					display: 'block'
				}
			}).to(".nav--right", 0.3, {
				opacity: 1,
				left: 0
			}, 0.2);
		} else {
			var tl2 = new TimelineMax,
				tl3 = new TimelineMax;

			tl2.fromTo(".nav--right", 0.3, {
				opacity: 1,
				left: 0
			}, {
				opacity: 0,
				left: -20
			}).to(".nav--right", 0, {
				css: {
					display: 'none'
				}
			});
			
			tl3.to(".container--zoomout", 0.3, {
				css: {
					transform: 'scale(1)',
					opacity: 1,
					left: '0vw'
				}
			}, 0.1);
		}
	});
});

function barbaHomepageOnly() {
	/* Bubble Canvas */
	var Canvas = document.getElementById('bubble-canvas');
	var ctx = Canvas.getContext('2d');

	var resize = function () {
		Canvas.width = Canvas.clientWidth;
		Canvas.height = Canvas.clientHeight;
	};

	window.addEventListener('resize', resize);
	resize();

	var elements = [];
	var presets = {};

	presets.r = function (x, y, s, dx, dy) {
		return {
			x: x,
			y: y,
			r: 12 * s,
			w: 5 * s,
			dx: dx,
			dy: dy,
			draw: function (ctx, t) {
				this.x += this.dx;
				this.y += this.dy;

				ctx.beginPath();
				ctx.arc(this.x + +Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + +Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
				ctx.fillStyle = "#fda3a6";
				ctx.fill();
			}
		}
	};

	for (var x = 0; x < Canvas.width; x++) {
		for (var y = 0; y < Canvas.height; y++) {
			if (Math.round(Math.random() * 8000) == 1) {
				var s = ((Math.random() * 5) + 1) / 10;
				elements.push(presets.r(x, y, s, 0, 0));
			}
		}
	}

	setInterval(function () {
		ctx.clearRect(0, 0, Canvas.width, Canvas.height);

		var time = new Date().getTime();
		for (var e in elements)
			elements[e].draw(ctx, time);
	}, 10);

	/* Parallax */
	var scene = $('.js-parallax--initial')[0];
	var parallaxInstance = new Parallax(scene);

	var scene2 = $('.js-parallax--info')[0];
	var parallaxInstance = new Parallax(scene2);
}