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
						<div data-vtdate="December 2014">
							<h1 class="timeline__title">First Day</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sunt id provident quidem, vitae unde, nihil magni tenetur reiciendis earum quos non velit cum tempore modi, nemo dicta consequatur! Totam!</p>
						</div>
						<div data-vtdate="December 2015">
							<h1 class="timeline__title">1 Year</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sunt id provident quidem, vitae unde, nihil magni tenetur reiciendis earum quos non velit cum tempore modi, nemo dicta consequatur! Totam!</p>
						</div>
						<div data-vtdate="December 2016">
							<h1 class="timeline__title">2 Years</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sunt id provident quidem, vitae unde, nihil magni tenetur reiciendis earum quos non velit cum tempore modi, nemo dicta consequatur! Totam!</p>
						</div>
						<div data-vtdate="September 2017">
							<h1 class="timeline__title">She Said "YES"</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sunt id provident quidem, vitae unde, nihil magni tenetur reiciendis earum quos non velit cum tempore modi, nemo dicta consequatur! Totam!</p>
						</div>
						<div data-vtdate="December 2017">
							<h1 class="timeline__title">3 Years</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sunt id provident quidem, vitae unde, nihil magni tenetur reiciendis earum quos non velit cum tempore modi, nemo dicta consequatur! Totam!</p>
						</div>
						<div data-vtdate="June 2018">
							<h1 class="timeline__title">Big Day</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sunt id provident quidem, vitae unde, nihil magni tenetur reiciendis earum quos non velit cum tempore modi, nemo dicta consequatur! Totam!</p>
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
			</div>
		</div>
	</div>
</div>

@endsection