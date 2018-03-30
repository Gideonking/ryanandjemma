@extends('layouts.master') 

@section('content')

<div class="barba-container" data-namespace="gift">
	<div class="full-container">
		<div class="container intro__container">
			<div class="row intro__row flex-v flex-v-stack--tablet">
				<div class="js-parallax--initial col-md-6 intro__container--initials">
					<img class="intro__initials" src="/img/alphabet-G.png" alt="" data-depth="0.2">
				</div>
				<div class="js-parallax--info col-md-6 intro__container--info">
					<div data-depth="0.4">
						<h2 class="intro__text-name">JEMMA</h2>
						<img class="intro__text-icon" src="/img/wed-icon.svg" alt="">
						<h2 class="intro__text-name">RYAN</h2>
						<h2 class="intro__text-date">Thank You</h2>
						<a class="btn-main" href="https://www.blueprintregistry.com/registry/jemmaryan" target="_blank">
							Visit Our Registry
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection