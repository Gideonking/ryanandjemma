@extends('layouts.master') 

@section('content')

<div class="barba-container" data-namespace="story">
	<div class="full-container">
		<div class="container intro__container">
			<div class="row intro__row flex-v flex-v-stack--tablet">
				<div class="js-parallax--initial col-md-6 intro__container--initials js-transition-fadeout">
					<img class="intro__initials" src="/img/alphabet-S.png" alt="" data-depth="0.2">
				</div>
				<div class="js-parallax--info col-md-6 intro__container--info">
					<div data-depth="0.4">
						<h2 class="intro__text-name js-transition-fadeout">JEMMA</h2>
						<img class="intro__text-icon js-transition-fadeout" src="/img/story-icon.svg" alt="">
						<h2 class="intro__text-name js-transition-fadeout">RYAN</h2>
						<h2 class="intro__text-date"><span class="intro__text-blur">S</span><span class="intro__text-blur">T</span><span class="intro__text-blur">O</span><span class="intro__text-blur">R</span><span class="intro__text-blur">Y</span></h2>
						<a class="btn-main barba--totimeline js--preventrefresh js-transition-fadeout js-ga-tracking" href="/story/timeline" data-gt="LinkToTimeline">
							See Our Timeline
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection