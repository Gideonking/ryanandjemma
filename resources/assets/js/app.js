require('./bootstrap');

var desktopVer = true,
	pageIntroduced = false,
	currentColor = '#f57576',
	waterColor = {
		'homepage': '#F57576',
		'story': '#C6A5FF',
		'timeline': '#ffffff',
		'info': '#6BA5B7',
		'rsvp': '#F7C987',
		'gift': '#55B788'
	},
	parallaxScene1 = null,
	parallaxInstance1 = null,
	parallaxScene2 = null,
	parallaxInstance2 = null;

$(function () {
	/* Mediacheck */
	mediaCheck({
		media: '(max-width: 768px)',
		entry: function () {
			desktopVer = false;
		},
		exit: function () {
			desktopVer = true;
			if ($('body').hasClass('mobile-nav-open')) {
				$('html, body').removeClass('mobile-nav-open');
				mobileNavClose();
			}
		}
	});
	
	/* BARBA */
	var lastElementClicked;

	Barba.Dispatcher.on('linkClicked', function (e) {
		clickedElem = e;
	});
	
	var HomepageIntro = Barba.BaseView.extend({
		namespace: 'homepage',
		onEnter: function() {
			if (!pageIntroduced) {
				barbaAllIntro(waterColor['homepage']);
				pageIntroduced = true;
			}
		},
		onEnterCompleted: function() {
			barbaHomepageScript();
		},
		onLeave: function() {
			
		},
		onLeaveCompleted: function() {
			
		}
	});
	
	var StoryIntro = Barba.BaseView.extend({
		namespace: 'story',
		onEnter: function() {
			if (!pageIntroduced) {
				barbaAllIntro(waterColor['story']);
				pageIntroduced = true;
			}
		},
		onEnterCompleted: function() {
			barbaHomepageScript();
		}
	});
	
	var InfoIntro = Barba.BaseView.extend({
		namespace: 'info',
		onEnter: function() {
			if (!pageIntroduced) {
				barbaAllIntro(waterColor['info']);
				pageIntroduced = true;
			}
		},
		onEnterCompleted: function() {
			barbaHomepageScript();
		}
	});
	
	var RsvpIntro = Barba.BaseView.extend({
		namespace: 'rsvp',
		onEnter: function() {
			if (!pageIntroduced) {
				barbaAllIntro(waterColor['rsvp']);
				pageIntroduced = true;
			}
		},
		onEnterCompleted: function() {
			barbaHomepageScript();
		}
	});
	
	var GiftIntro = Barba.BaseView.extend({
		namespace: 'gift',
		onEnter: function() {
			if (!pageIntroduced) {
				barbaAllIntro(waterColor['gift']);
				pageIntroduced = true;
			}
		},
		onEnterCompleted: function() {
			barbaHomepageScript();
		}
	});

	var desktopTransition = Barba.BaseTransition.extend({
		start: function () {
			Promise
				.all([this.newContainerLoading, this.outro()])
				.then(this.intro.bind(this));
		},
		outro: function () {
			var barbaDefer = Barba.Utils.deferred(),
				tl = new TimelineMax,
				tl2 = new TimelineMax,
				tl3 = new TimelineMax,
				changeColor = waterColor['homepage'];
			
			if ($(clickedElem).hasClass('barba--homepage')) currentColor = waterColor['homepage'];
			else if ($(clickedElem).hasClass('barba--story')) currentColor = waterColor['story'];
			else if ($(clickedElem).hasClass('barba--totimeline')) currentColor = waterColor['timeline'];
			else if ($(clickedElem).hasClass('barba--info')) currentColor = waterColor['info'];
			else if ($(clickedElem).hasClass('barba--rsvp')) currentColor = waterColor['rsvp'];
			else if ($(clickedElem).hasClass('barba--gift')) currentColor = waterColor['gift'];
			
			$('html, body').css({
				overflowY: 'hidden'
			});
			
			tl.to(".bubble-canvas", 1.75, {
				css: {
					backgroundColor: currentColor
				}
			});

			tl2.to(".intro__container--initials", 1, {
				ease: Back.easeIn.config(0.8),
				css: {
					left: '-50%',
					opacity: 0
				}
			});

			tl3.to(".intro__container--info", 1, {
				top: -40,
				opacity: 0
			}, 0.75);

			return tl3.eventCallback("onComplete", function () {
				barbaDefer.resolve();
			}), barbaDefer.promise;
		},
		intro: function () {
			var _this = this,
				$el = $(this.newContainer),
				tl = new TimelineMax,
				tl1 = new TimelineMax;

			$(this.oldContainer).hide();

			$el.css({
				visibility: 'visible',
				opacity: 0
			});

			tl.fromTo(".intro__container--info", 1, {
				css: {
					bottom: '-40px',
					opacity: 0
				}
			}, {
				css: {
					bottom: '0px',
					opacity: 1
				}
			});

			tl1.from(".intro__container--initials", 1, {
				ease: Back.easeOut.config(0.8),
				css: {
					right: '-100%',
					opacity: 0
				}
			});
			
			$el.animate({
				opacity: 1
			}, 500, function () {
				$('html, body').css({
					overflowY: 'auto'
				});
				barbaHomepageScript($el);
				_this.done();
			});
		}
	});

	var transitionToTimeline = Barba.BaseTransition.extend({
		start: function () {
			Promise
				.all([this.newContainerLoading, this.outro()])
				.then(this.intro.bind(this));
		},
		outro: function () {
			var barbaDefer = Barba.Utils.deferred(),
				tl = new TimelineMax,
				tl2 = new TimelineMax,
				tl3 = new TimelineMax,
				tl4 = new TimelineMax,
				tl5 = new TimelineMax,
				currentColor = waterColor['timeline'];
			
			$('html, body').css({
				overflowY: 'hidden'
			});
			
			tl.to(".bubble-canvas", 1.75, {
				css: {
					backgroundColor: currentColor
				}
			});
			
			tl2.to(".navbar", 1, {
				top: -80,
				opacity: 0
			});
			
			tl3.to(".js-transition-fadeout", 1, {
				opacity: 0
			});
			
			tl4.to(".intro__text-date", 1, {
				css: {
					color: '#333333'
				}
			});
			
			tl5.staggerFromTo(".intro__text-blur", 0.5, {
				css: {
					opacity: 1,
					filter: 'blur(0px)'
				}
			}, {
				css: {
					opacity: 0,
					filter: 'blur(20px)'
				}
			}, 0.2, 1.2, "stagger");

			return tl5.eventCallback("onComplete", function () {
				barbaDefer.resolve();
			}), barbaDefer.promise;
		},
		intro: function () {
			var _this = this,
				$el = $(this.newContainer),
				tl = new TimelineMax,
				tl2 = new TimelineMax,
				tl3 = new TimelineMax,
				tl4 = new TimelineMax,
				timelineLine = CSSRulePlugin.getRule('.vtimeline:before');

			$(this.oldContainer).hide();
			
			$('.full-container').css('overflow-y', 'auto');
			$('.vtimeline-block').css('opacity', 0);

			$el.css({
				visibility: 'visible',
				opacity: 0
			});
			
			$('.timeline').verticalTimeline({
				startLeft: false,
				alternate: true,
				arrows: true
			});
			
			tl.staggerFromTo(".intro__text-blur", 0.5, {
				css: {
					opacity: 0,
					filter: 'blur(20px)'
				}
			}, {
				css: {
					opacity: 1,
					filter: 'blur(0px)'
				}
			}, 0.2, 0.1, "stagger");
			
			tl2.fromTo(timelineLine, 5, {
				cssRule: {
					height: '0%'
				}
			}, {
				cssRule: {
					height: '100%'
				}
			}, 0.5);
			
			tl3.staggerFrom(".vtimeline-icon", 0.5, {
				css: {
					width: 0,
					height: 0
				}
			}, 0.75, 0.5, "stagger");
			
			tl4.staggerFrom(".vtimeline-block", 0.5, {
				bottom: '-20',
				opacity: 0
			}, 0.75, 0.5, "stagger");
			
			barbaTimelineScript($el);
			
			$el.animate({
				opacity: 1
			}, 1000, function () {
				$('html, body').css({
					overflowY: 'auto'
				});
				_this.done();
			});
		}
	});
	
	var transitionFromTimeline = Barba.BaseTransition.extend({
		start: function () {
			Promise
				.all([this.newContainerLoading, this.outro()])
				.then(this.intro.bind(this));
		},
		outro: function () {
			var barbaDefer = Barba.Utils.deferred(),
				tl = new TimelineMax,
				tl2 = new TimelineMax,
				tl3 = new TimelineMax,
				tl4 = new TimelineMax,
				tl5 = new TimelineMax,
				currentColor = waterColor['timeline'];
			
			$('html, body').css({
				overflowY: 'hidden'
			});
			
			tl.to(".timeline-container", 1, {
				opacity: 0
			});
			
			tl2.to(".bubble-canvas-timeline", 1, {
				css: {
					transform: 'scale(5)',
					opacity: 0
				}
			}, 1);

			return tl2.eventCallback("onComplete", function () {
				barbaDefer.resolve();
			}), barbaDefer.promise;
		},
		intro: function () {
			var _this = this,
				$el = $(this.newContainer),
				tl = new TimelineMax,
				tl1 = new TimelineMax,
				tl2 = new TimelineMax;

			$(this.oldContainer).hide();
			$('.bubble-container').removeClass('initiated');
			$('.bubble-canvas-timeline').remove();
			$('.bubble-container').append('<canvas class="bubble-canvas"></canvas>');
			$('.bubble-canvas').css({ backgroundColor: waterColor['story'] });

			$el.css({
				visibility: 'visible',
				opacity: 0
			});
			
			tl2.to(".navbar", 1, {
				top: 0,
				opacity: 1
			});
			
			if (!desktopVer) {
				$('.wave-container').css('z-index', 0);

				$('.wave').animate({
					opacity: 0
				}, 500);
			} else {
				tl.fromTo(".intro__container--info", 1, {
					css: {
						bottom: '-40px',
						opacity: 0
					}
				}, {
					css: {
						bottom: '0px',
						opacity: 1
					}
				});

				tl1.from(".intro__container--initials", 1, {
					ease: Back.easeOut.config(0.8),
					css: {
						right: '-100%',
						opacity: 0
					}
				});
			}
			
			$el.animate({
				opacity: 1
			}, 500, function () {
				$('html, body, .container--zoomout').css({
					overflowY: 'auto'
				});
				barbaHomepageScript($el);
				_this.done();
			});
		}
	});

	var mobileTransition = Barba.BaseTransition.extend({
		start: function () {
			Promise
				.all([this.newContainerLoading, this.outro()])
				.then(this.intro.bind(this));
		},
		outro: function () {
			var barbaDefer = Barba.Utils.deferred(),
				tl = new TimelineMax,
				tl2 = new TimelineMax,
				changeColor = waterColor['homepage'];
			
			if ($(clickedElem).hasClass('barba--homepage')) currentColor = waterColor['homepage'];
			else if ($(clickedElem).hasClass('barba--story')) currentColor = waterColor['story'];
			else if ($(clickedElem).hasClass('barba--totimeline')) currentColor = waterColor['timeline'];
			else if ($(clickedElem).hasClass('barba--info')) currentColor = waterColor['info'];
			else if ($(clickedElem).hasClass('barba--rsvp')) currentColor = waterColor['rsvp'];
			else if ($(clickedElem).hasClass('barba--gift')) currentColor = waterColor['gift'];
			
			$('html, body').css({
				overflowY: 'hidden'
			});		
			
			$('.wave').css({
				paddingTop: '110vh',
				opacity: 1
			});
			
			$('.water').css({ 
				fill: currentColor
			});
			
			$('.wave-container').css('z-index', 10);

			tl.fromTo(".nav--right", 0.3, {
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

			tl2.to(".container--zoomout", 0.3, {
				css: {
					transform: 'scale(1)',
					opacity: 1,
					left: '0vw'
				}
			}, 0.1).to(".wave", 1.5, {
				css: {
					paddingTop: '0vh'
				}
			});
			
			$('html, body').toggleClass('mobile-nav-open');

			return tl2.eventCallback("onComplete", function () {
				barbaDefer.resolve();
			}), barbaDefer.promise;
		},
		intro: function () {
			var _this = this,
				$el = $(this.newContainer),
				tl = new TimelineMax;

			$(this.oldContainer).hide();

			$el.css({
				visibility: 'visible',
				opacity: 0
			});
			
			$('.bubble-canvas').css('background', currentColor);
			$('.wave-container').css('z-index', 0);

			$('.wave').animate({
				opacity: 0
			}, 500);
			
			$el.animate({
				opacity: 1
			}, 500, function () {
				$('html, body, .container--zoomout').css({
					overflowY: 'auto'
				});
				barbaHomepageScript($el);
				_this.done();
			});
		}
	});

	Barba.Pjax.getTransition = function () {
		var trans = !desktopVer ? mobileTransition : desktopTransition;
		if ($(clickedElem).hasClass('barba--totimeline')) trans = transitionToTimeline;
		else if ($(clickedElem).hasClass('barba--fromtimeline')) trans = transitionFromTimeline;
		return trans;
	};
	
	Barba.Pjax.init();
	
	var currentPage = Barba.HistoryManager.currentStatus().namespace;
	
	if (currentPage === 'homepage') HomepageIntro.init();
	else if (currentPage === 'story') StoryIntro.init();
	else if (currentPage === 'timeline') window.location.replace("/story");
	else if (currentPage === 'info') InfoIntro.init();
	else if (currentPage === 'rsvp') RsvpIntro.init();
	else if (currentPage === 'gift') GiftIntro.init();
	
	Barba.Pjax.start();
	
	/* Prevent BarbaJS refresh when same page redirection */
	var links = $('a.js--preventrefresh');
	var cbk = function(e) {
		 if (e.currentTarget.href === window.location.href) {
		   e.preventDefault();
		   e.stopPropagation();
		 }
	};

	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', cbk);
	}
	
	/* General */
	$('body').on('click', '.nav__toggle', function() {
		$('html, body').toggleClass('mobile-nav-open');
		if ($('html, body').hasClass('mobile-nav-open')) mobileNavOpen();
		else mobileNavClose();
	});
	
	$('body').on('click', '.container--zoomout', function() {
		if ($('body').hasClass('mobile-nav-open') && !desktopVer) {
			$('html, body').toggleClass('mobile-nav-open');
			mobileNavClose();
		}
	});
	
	$('body').on('click', '.js-ga-tracking', function() {
		var whichBtn = $(this).data('gt');
		console.log(whichBtn);
		
		gtag('event', 'buttons', {
			'event_category': whichBtn,
			'event_label': 'ghost',
			'value': whichBtn
		});
	});
});

function barbaAllIntro(color) {
	$('html, body, .container--zoomout').css('overflowY', 'hidden');
	$('.container--zoomout').css('height', '100vh');
	$('.bubble-canvas').css('background', color);
	$('.water').wavify({
		height: -49,
		amplitude: 50,
		speed: .25,
		bones: 3,
		color: color
	});

	var tl = new TimelineMax,
		tl2 = new TimelineMax,
		tl3 = new TimelineMax;
	
	tl.to(".start-hide", 0.5, {
		opacity: 1
	}).fromTo(".wave", 1.5, {
		css: {
			paddingTop: '110vh'
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
			paddingTop: '110vh'
		}
	}).from(".navbar", 0.5, {
		opacity: 0
	});

	tl2.from(".intro__container--initials", 1, {
		ease: Back.easeOut.config(0.8),
		css: {
			right: '-100%',
			opacity: 0
		}
	}, 2.5);

	tl3.from(".intro__container--info", 1, {
		bottom: -40,
		opacity: 0
	}, 3);
	
	setTimeout(function() {
		$('html, body, .container--zoomout').css('overflowY', 'auto');
		$('.container--zoomout').css('height', 'auto');
	}, 4000);
}

function barbaHomepageScript(newPage) {
	var currentPage = newPage ? newPage : $('.barba-container');
	
	if (!$('.bubble-container').hasClass('initiated')) {
		/* Bubble Canvas */
		var Canvas = $('.bubble-canvas')[0];
		var ctx = Canvas.getContext('2d');

		var resize = function () {
			Canvas.width = Canvas.clientWidth;
			Canvas.height = Canvas.clientHeight;
		};

		window.addEventListener('resize', resize);
		resize();

		var elements = [];
		var presets = {};

		presets.r = function (x, y, s, dx, dy, a) {
			return {
				x: x,
				y: y,
				r: 12 * s,
				w: 5 * s,
				dx: dx,
				dy: dy,
				a: a,
				draw: function (ctx, t) {
					this.x += this.dx;
					this.y += this.dy;
					this.a += this.a;

					ctx.beginPath();
					ctx.arc(this.x + +Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + +Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
					ctx.fillStyle = "rgba(255, 255, 255, " + a + ")";
					ctx.fill();
				}
			}
		};

		for (var x = 0; x < Canvas.width; x++) {
			for (var y = 0; y < Canvas.height; y++) {
				if (Math.round(Math.random() * 8000) == 1) {
					var s = ((Math.random() * 5) + 1) / 10,
						a = Math.random();
					elements.push(presets.r(x, y, s, 0, 0, a));
				}
			}
		}

		setInterval(function () {
			ctx.clearRect(0, 0, Canvas.width, Canvas.height);

			var time = new Date().getTime();
			for (var e in elements)
				elements[e].draw(ctx, time);
		}, 10);
		
		$('.bubble-container').addClass('initiated');
	}

	/* Parallax */
	if (parallaxInstance1) parallaxInstance1.destroy();
	if (parallaxInstance2) parallaxInstance2.destroy();
	parallaxScene1 = $(currentPage).find('.js-parallax--initial')[0];
	parallaxInstance1 = new Parallax(parallaxScene1);
	parallaxScene2 = $(currentPage).find('.js-parallax--info')[0];
	parallaxInstance2 = new Parallax(parallaxScene2);
}

function barbaTimelineScript(newPage) {
	var currentPage = newPage ? newPage : $('.barba-container');
	
	$('.bubble-canvas').remove();
	$('.bubble-container').append('<canvas class="bubble-canvas-timeline"></canvas>');
	
	/* Bubble Canvas */
	var Canvas = $('.bubble-canvas-timeline')[0];
	var ctx = Canvas.getContext('2d');

	var resize = function () {
		Canvas.width = Canvas.clientWidth;
		Canvas.height = Canvas.clientHeight;
	};

	window.addEventListener('resize', resize);
	resize();

	var elements = [];
	var presets = {};

	presets.r = function (x, y, s, dx, dy, a) {
		return {
			x: x,
			y: y,
			r: 12 * s,
			w: 5 * s,
			dx: dx,
			dy: dy,
			a: a,
			draw: function (ctx, t) {
				this.x += this.dx;
				this.y += this.dy;
				this.a += this.a;

				ctx.beginPath();
				ctx.arc(this.x + +Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + +Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
				ctx.fillStyle = "rgba(255, 197, 25, " + a + ")";
				ctx.fill();
			}
		}
	};

	for (var x = 0; x < Canvas.width; x++) {
		for (var y = 0; y < Canvas.height; y++) {
			if (Math.round(Math.random() * 8000) == 1) {
				var s = ((Math.random() * 5) + 1) / 10,
					a = Math.random();
				elements.push(presets.r(x, y, s, 0, 0, a));
			}
		}
	}

	setInterval(function () {
		ctx.clearRect(0, 0, Canvas.width, Canvas.height);

		var time = new Date().getTime();
		for (var e in elements)
			elements[e].draw(ctx, time);
	}, 10);
	
	$(function() {
		$('.memories-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return '<small>Jemma and Ryan</small>';
				}
			}
		});
		
		$('body').on('click', '.page-scroll a', function(e) {
			e.preventDefault();
			
			$('.full-container').animate({
				scrollTop: 0
			}, 1000);
		});
	});
}

function mobileNavOpen() {
	var tl = new TimelineMax;
	
	$('html, body').css('overflowY', 'hidden');

	tl.to(".container--zoomout", 0.3, {
		css: {
			transform: 'scale(0.85)',
			opacity: 0.3,
			left: '50vw',
			height: '100vh',
			overflowY: 'hidden'
		}
	}).to(".nav--right", 0, {
		css: {
			display: 'block'
		}
	}).to(".nav--right", 0.3, {
		opacity: 1,
		left: 0
	}, 0.2);
}

function mobileNavClose() {
	var tl2 = new TimelineMax,
		tl3 = new TimelineMax;
	
	$('html, body').css('overflowY', 'auto');
	
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
			left: '0vw',
			height: 'auto',
			overflowY: 'auto'
		}
	}, 0.1);
}