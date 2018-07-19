@extends('layouts.master')

@section('content')
    <h1> {{ $pearl->title }} </h1>

    <section>
        <h2>Gerelateerde parels</h2>
        @foreach($pearl->links as $link)
            {!! Form::open(['route' => ['pearls.removelink', $pearl->id, $link->id]]) !!}
                {!! Form::hidden('pearl', $pearl->id, null) !!}
                {!! Form::hidden('link', $link->id, null) !!}
                <span>{{ $link->title }} </span>
                <!-- Add Submit Field -->
                    {!! Form::submit('X', ['class' => 'btn', 'title' => 'verwijder deze relatie']) !!}
            {!! Form::close() !!}<br>
        @endforeach
        {!! Form::open(['route' => 'pearls.newlink']) !!}
            <!-- voeg gerelateerde parel toe Form Input -->
            {!! Form::hidden('pearl', $pearl->id, null) !!}

            <div class="form-group">
                {!! Form::label('link', 'Voeg nog een gerelateerde parel toe:') !!}
                {!! Form::select('link', $unrelated, null, ['class' => 'form-control']) !!}
            </div>

            <!-- Add Submit Field -->
            <div class="form-group">
                {!! Form::submit('Voeg gerelateerde parel toe', ['class' => 'btn']) !!}
            </div>
        {!! Form::close() !!}
    </section>

    <a href=" {{ route('pearls.show', $pearl) }} " class="btn" > Terug naar de parel </a> <br><br>
    
@stop

@section('additional_scripts')
    <script src="http://vjs.zencdn.net/5.17.0/video.js"></script>
@stop