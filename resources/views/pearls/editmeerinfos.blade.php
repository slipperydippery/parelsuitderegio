@extends('layouts.master')

@section('content')
    <h1> {{ $pearl->title }} </h1>

    <section>
        <h2>Meer Info:</h2>
        @foreach ($pearl->meerinfos as $meerinfo)
            {!! Form::open(['route' => ['pearls.removemeerinfo', $pearl->id, $meerinfo->id]]) !!}
                {!! Form::hidden('pearl', $pearl->id, null) !!}
                {!! Form::hidden('meerinfo', $meerinfo->id, null) !!}
                @if($meerinfo->ismail == 0)
                    <a href=" {{ $meerinfo->adress }} " target="_blank"> {{ $meerinfo->title }} </a>
                @else
                    <a href="mailto:{{ $meerinfo->adress }}" target="_blank"> {{ $meerinfo->title }} </a>
                @endif

                <!-- Add Submit Field -->
                    {!! Form::submit('X', ['class' => 'btn', 'title' => 'verwijder deze informatie']) !!}
            {!! Form::close() !!}<br>
        @endforeach
        {!! Form::open(['route' => 'pearls.newmeerinfo']) !!}
            {!! Form::hidden('pearl', $pearl->id, null) !!}

            <div class="form-group">
                {!! Form::label('meerinfotitle', 'Titel meer informatie:') !!}
                {!! Form::text('meerinfotitle', null, ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                {!! Form::label('meerinfolink', 'Link meer informatie:') !!}
                {!! Form::text('meerinfolink', null, ['class' => 'form-control', 'placeholder' => 'http://www -of- naam@email.com']) !!}
            </div>

            <div class="form-group">
                {!! Form::label('ismail', 'Is de link een e-mailadres?') !!}
                {!! Form::checkbox('ismail', 'ismail', false); !!}
            </div>

            <div class="form-group">
                {!! Form::submit('Voeg informatie toe', ['class' => 'btn']) !!}
            </div>
        {!! Form::close() !!}
    </section>

    <a href=" {{ route('pearls.show', $pearl) }} " class="btn" > Terug naar de parel </a> <br><br>
    
@stop

@section('additional_scripts')
    <script src="http://vjs.zencdn.net/5.17.0/video.js"></script>
@stop