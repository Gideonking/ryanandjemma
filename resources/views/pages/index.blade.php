@extends('layouts.master') 

@section('content')

<div class="barba-container" data-namespace="homepage">
	<div class="full-container">
		<div class="container intro__container">
			<div class="row intro__row flex-v flex-v-stack--tablet">
				<div class="js-parallax--initial col-md-6 intro__container--initials">
					<img class="intro__initials" src="/img/alphabet-JR.png" alt="" data-depth="0.2">
				</div>
				<div class="js-parallax--info col-md-6 intro__container--info">
					<div data-depth="0.4">
						<h2 class="intro__text-name">JEMMA</h2>
						<img class="intro__text-icon" src="/img/wed-icon.svg" alt="">
						<h2 class="intro__text-name">RYAN</h2>
						<h2 class="intro__text-date">06.02.2018</h2>
						<p class="intro__text-guest">Be Our Guest</p>
						<p class="intro__text-info">P.S. Please RSVP by May 2nd</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection