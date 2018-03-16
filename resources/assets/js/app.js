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
	
	var Canvas = document.getElementById('canvas');
	var ctx = Canvas.getContext('2d');

	var resize = function() {
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
			draw: function(ctx, t) {
				this.x += this.dx;
				this.y += this.dy;

				ctx.beginPath();
				ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
				ctx.fillStyle = "#FDA3A6";
				ctx.fill();
			}
		}
	};

	for(var x = 0; x < Canvas.width; x++) {
		for(var y = 0; y < Canvas.height; y++) {
			if(Math.round(Math.random() * 8000) == 1) {
				var s = ((Math.random() * 5) + 1) / 10;
				elements.push(presets.r(x, y, s, 0, 0));
			}
		}
	}

	setInterval(function() {
		ctx.clearRect(0, 0, Canvas.width, Canvas.height);

		var time = new Date().getTime();
		for (var e in elements)
			elements[e].draw(ctx, time);
	}, 10);
});
