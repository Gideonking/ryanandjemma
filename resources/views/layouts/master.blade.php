<!DOCTYPE html>
<html lang="en">

<head>
	@include('layouts.head')
</head>

<body>
	<canvas class="fireworks"></canvas>
	<div class="playground">
		@include('layouts.nav')
		<div id="barba-wrapper">
			<div class="barba-container">
				@yield('content')
			</div>
		</div>
		@include('layouts.footer')
	</div>
</body>

</html>
