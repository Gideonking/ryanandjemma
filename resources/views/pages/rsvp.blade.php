@extends('layouts.master') 

@section('content')

<div class="barba-container" data-namespace="rsvp">
	<div class="full-container">
		<div class="container intro__container">
			<div class="row intro__row flex-v flex-v-stack--tablet">
				<div class="js-parallax--initial col-md-6 intro__container--initials">
					<img class="intro__initials" src="/img/alphabet-R.png" alt="" data-depth="0.2">
				</div>
				<div class="js-parallax--info col-md-6 intro__container--info">
					<div data-depth="0.4">
						<h2 class="intro__text-name">JEMMA</h2>
						<img class="intro__text-icon" src="/img/rsvp-icon.svg" alt="">
						<h2 class="intro__text-name">RYAN</h2>
						<h2 class="intro__text-date">JOIN US</h2>
						<a class="typeform-share button btn-main" href="https://ryanchoi3.typeform.com/to/cg4TRc" data-mode="popup" target="_blank">RSVP</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	(function(){
		var qs, js, q, s, d = document,
			gi = d.getElementById,
			ce = d.createElement,
			gt = d.getElementsByTagName,
			id = "typef_orm_share",
			b = "https://embed.typeform.com/";
		
		if (!gi.call(d, id)) {
			js = ce.call(d, "script");
			js.id = id;
			js.src = b + "embed.js"; q=gt.call(d,"script")[0];
			q.parentNode.insertBefore(js,q);
		}
	})();
</script>

@endsection