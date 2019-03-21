<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE-edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ERP Admin</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
        <link href="{{ asset("css/app.css") }}" rel="stylesheet" type="text/css">
    </head>
    <body data-gr-c-s-loaded="true">
        <div class="container-fluid">
            <main  id="app" > </main>
        </div>
        <script type="text/javascript" src="{{ asset('js/bootstrap/bootstrap.min.js') }}" ></script>
        <script type="text/javascript" src="{{ asset('js/jquery-3.3.1.slim.min.js') }}" ></script>
        <script type="text/javascript" src="{{ asset('js/popper/popper.min.js') }}" ></script>
        <script type="text/javascript" src="{{ asset('js/feather/feather-icons-4.9.0.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('static/bundles/admin.js') }}" ></script>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>