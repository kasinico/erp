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
    <link href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/css/fontawesome.min.css')}}" rel="stylesheet" type="text/css">
{{--    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>--}}
    <link href="{{asset("assets/css/app.css") }}" rel="stylesheet" type="text/css">
</head>
<body data-gr-c-s-loaded="true">
<div class="d-flex align-items-center border-top border-top-2 wrapper vh-100"  id="app" > </div>
<script type="text/javascript" src="{{ asset('assets/js/jquery-3.3.1.slim.min.js') }}" ></script>
<script type="text/javascript" src="{{ asset('assets/js/bootstrap/bootstrap.bundle.js') }}" ></script>
<script type="text/javascript" src="{{ asset('assets/js/feather.min.js') }}" ></script>
<script type="text/javascript" src="{{ asset('assets/js/app.js') }}"></script>

<script type="text/javascript" src="{{ asset('static/bundles/admin.js') }}" ></script>
<script>
    feather.replace()
</script>
</body>
</html>