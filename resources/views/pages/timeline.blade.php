@extends('layouts.master') 

@section('content')

<div class="barba-container timeline-container" data-namespace="timeline">
	<div class="full-container">
		<div class="container">
			<div class="row">
				<div class="col-md-3 timeline__panel--left">
					<div class="fixed-content">
						<a class="btn-main btn-main--dark barba--fromtimeline js--preventrefresh" href="/story">
							Go Back
						</a>
						<h2 class="intro__text-date"><span class="intro__text-blur">S</span><span class="intro__text-blur">T</span><span class="intro__text-blur">O</span><span class="intro__text-blur">R</span><span class="intro__text-blur">Y</span></h2>
					</div>
				</div>
				<div class="col-md-9 timeline__panel--right">
					<div class="timeline">
						<div data-vtdate="February 2011">
							<img class="timeline__icon" src="/img/memory-church.svg" />
							<h3 class="timeline__title">When We First Met</h3>
							<img class="timeline__img" src="/img/timeline/1.jpg" alt="">
						</div>
						<div data-vtdate="October 2014">
							<img class="timeline__icon" src="/img/memory-bus.svg" />
							<h3 class="timeline__title">Mission Trip</h3>
							<img class="timeline__img" src="/img/timeline/2.jpg" alt="">
						</div>
						<div data-vtdate="December 2014">
							<img class="timeline__icon" src="/img/memory-heart.svg" />
							<h3 class="timeline__title">First Date</h3>
							<img class="timeline__img" src="/img/timeline/3.jpg" alt="">
						</div>
						<div data-vtdate="December 2015">
							<img class="timeline__icon" src="/img/memory-cake.svg" />
							<h3 class="timeline__title">First Year</h3>
							<img class="timeline__img" src="/img/timeline/4.jpg" alt="">
						</div>
						<div data-vtdate="December 2016">
							<img class="timeline__icon" src="/img/memory-castle.svg" />
							<h3 class="timeline__title">Second Year</h3>
							<img class="timeline__img" src="/img/timeline/5.jpg" alt="">
						</div>
						<div data-vtdate="September 2017">
							<img class="timeline__icon" src="/img/memory-propose.svg" />
							<h3 class="timeline__title">She Said "YES"</h3>
							<img class="timeline__img" src="/img/timeline/6.jpg" alt="">
						</div>
						<div data-vtdate="December 2017">
							<img class="timeline__icon" src="/img/memory-gondola.svg" />
							<h3 class="timeline__title">Third Year</h3>
							<img class="timeline__img" src="/img/timeline/7.jpg" alt="">
						</div>
						<div data-vtdate="June 2018">
							<img class="timeline__icon" src="/img/memory-ring.svg" />
							<h3 class="timeline__title">Big Day!</h3>
							<img class="timeline__img" src="/img/timeline/8.jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row timeline__memories">
				<div class="col-md-12">
					<h1 class="memories__title text-center">Our Memories</h1>
					<div class="hr hr--short"></div>
				</div>
				<div class="container">
					<div class="memories-gallery">
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/0.jpg" title="">
							<img class="memories__img" src="/img/memories/0_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/1.jpg" title="">
							<img class="memories__img" src="/img/memories/1_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/2.jpg" title="">
							<img class="memories__img" src="/img/memories/2_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/3.jpg" title="">
							<img class="memories__img" src="/img/memories/3_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/4.jpg" title="">
							<img class="memories__img" src="/img/memories/4_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/5.jpg" title="">
							<img class="memories__img" src="/img/memories/5_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/6.jpg" title="">
							<img class="memories__img" src="/img/memories/6_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/7.jpg" title="">
							<img class="memories__img" src="/img/memories/7_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/8.jpg" title="">
							<img class="memories__img" src="/img/memories/8_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/9.jpg" title="">
							<img class="memories__img" src="/img/memories/9_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/10.jpg" title="">
							<img class="memories__img" src="/img/memories/10_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/11.jpg" title="">
							<img class="memories__img" src="/img/memories/11_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/12.jpg" title="">
							<img class="memories__img" src="/img/memories/12_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/13.jpg" title="">
							<img class="memories__img" src="/img/memories/13_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/14.jpg" title="">
							<img class="memories__img" src="/img/memories/14_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/15.jpg" title="">
							<img class="memories__img" src="/img/memories/15_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/16.jpg" title="">
							<img class="memories__img" src="/img/memories/16_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/17.jpg" title="">
							<img class="memories__img" src="/img/memories/17_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/18.jpg" title="">
							<img class="memories__img" src="/img/memories/18_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/19.jpg" title="">
							<img class="memories__img" src="/img/memories/19_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/20.jpg" title="">
							<img class="memories__img" src="/img/memories/20_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/21.jpg" title="">
							<img class="memories__img" src="/img/memories/21_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/22.jpg" title="">
							<img class="memories__img" src="/img/memories/22_thumb.jpg">
						</a>
						<a class="col-sm-3 memories__img-wrapper" href="#" data-mfp-src="/img/memories/23.jpg" title="">
							<img class="memories__img" src="/img/memories/23_thumb.jpg">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection