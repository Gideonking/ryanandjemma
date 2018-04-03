@extends('layouts.master') 

@section('content')

<div class="barba-container" data-namespace="info">
	<div class="full-container">
		<div class="container intro__container">
			<div class="row intro__row flex-v flex-v-stack--tablet">
				<div class="js-parallax--initial col-md-6 intro__container--initials">
					<img class="intro__initials" src="/img/alphabet-I.png" alt="" data-depth="0.2">
				</div>
				<div class="js-parallax--info col-md-6 intro__container--info">
					<div data-depth="0.4">
						<h2 class="intro__text-name">JEMMA</h2>
						<img class="intro__text-icon" src="/img/info-icon.svg" alt="">
						<h2 class="intro__text-name">RYAN</h2>
						<h2 class="intro__text-date">WEDDING</h2>
						<div class="intro__text-additional">
							<p><strong>Venue:</strong> Crossline Church</p>
							<p><strong>Address:</strong> 23331 Moulton Pkwy, Laguna Hills, CA 92653</p>
							<p><strong>Date/Time:</strong> 06.02.2018 3:45PM</p>
						</div>
						<a class="btn-main js-ga-tracking" href="https://www.google.com/maps/dir//Crossline+Community+Church,+23331+Moulton+Pkwy,+Laguna+Hills,+CA+92653/@33.62577,-117.7350119,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x80dce8797e3aac09:0x3b4a44410dd3b3f!2m2!1d-117.7328232!2d33.62577!3e0" target="_blank" data-gt="LinkDirections">
							Get Directions
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection