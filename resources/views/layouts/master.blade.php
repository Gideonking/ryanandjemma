<!DOCTYPE html>
<html lang="en">
  <head>
    @include('layouts.head')
  </head>

  <body>
    @include('layouts.nav')

    <div class="container">
      @yield('content')
    </div>

    <div class="container">
      @include('layouts.footer')
    </div>
  </body>
</html>
