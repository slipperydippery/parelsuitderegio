@extends('layouts.master')

@section('content')
    <h1> {{ $pearl->title }} </h1>
    <section>
        <h2>Informatie</h2>

        {!! Form::model($pearl, ['method' => 'PATCH', 'route' => ['pearls.update', $pearl->id], 'files' => true]) !!}
        	@include('pearls.partials.form', ['submittext' => 'Sla wijzigingen op'])
        {!! Form::close() !!}
    </section>

    <a href=" {{ route('pearls.show', $pearl) }} " class="btn" > Bekijk de parel </a> <br><br>
    
@stop

@section('additional_scripts')
    <script src="http://vjs.zencdn.net/5.17.0/video.js"></script>
@stop