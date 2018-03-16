@extends('layouts.master') 

@section('content')

<div class="bubble-container">
	<canvas id="bubble-canvas"></canvas>
</div>

<div class="full-container">
	<div class="container intro__container">
		<div class="row centering centering--vert">
			<div class="js-parallax--initial col-md-6">
				<img class="intro__initials" src="/img/JR.png" alt="" data-depth="0.2">
			</div>
			<div class="js-parallax--info col-md-6">
				<div data-depth="0.4">
					<h2 class="intro__text-name">JEMMA</h2>
					<img class="intro__text-icon" src="/img/wed-icon.svg" alt="">
					<h2 class="intro__text-name">RYAN</h2>
					<h2 class="intro__text-date">06.02.2018</h2>
					<p class="intro__text-guest">Be Our Guest</p>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection