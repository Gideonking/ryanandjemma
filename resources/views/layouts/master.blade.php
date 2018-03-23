<!DOCTYPE html>
<html lang="en">

<head>
	@include('layouts.head')
</head>

<body class="start-hide">
	<div class="wave-container">
		<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave">
		  <defs></defs>
		  <path class="water" d="" />
		</svg>
	</div>
	@include('layouts.nav')
	<div id="barba-wrapper" class="container--zoomout">
		<div class="bubble-container">
			<canvas class="bubble-canvas" class="bubble-canvas"></canvas>
		</div>
		@yield('content')
	</div>
	@include('layouts.footer')
</body>

</html>
