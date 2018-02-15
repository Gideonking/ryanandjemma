@extends('layouts.master')

@section('content')

<div class="intro__container js--cutout">
    <div class="intro__cutout" data-depth="0.05">
   		<img class="intro__cutout-bg" src="/img/bg-cutout-photo.jpg" />
	</div>
    <div class="intro__cutout" data-depth="0.07">
        <img class="intro__cutout-img intro__cutout-img--bottom" src="/img/bg-cutout-heart-3.png">
    </div>
    <div class="intro__cutout" data-depth="0.10">
        <img class="intro__cutout-img intro__cutout-img--middle" src="/img/bg-cutout-heart-2.png">
    </div>
    <div class="intro__cutout" data-depth="0.12">
        <img class="intro__cutout-img intro__cutout-img--top" src="/img/bg-cutout-heart-1.png">
    </div>
    <div class="intro__cutout" data-depth="0.02">
   		<span class="intro__names intro__names--groom">Ryan</span>
	</div>
    <div class="intro__cutout" data-depth="0.02">
   		<span class="intro__names intro__names--bride">Jemma</span>
	</div>
</div>

@endsection
