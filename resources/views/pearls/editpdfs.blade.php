@extends('layouts.master')

@section('content')
    <h1> {{ $pearl->title }} </h1>

    <section>
        <h2>PDFs:</h2>
        @foreach ($pearl->pdfs as $pdf)
            {!! Form::open(['route' => ['pearls.removepdf', $pearl->id, $pdf->id]]) !!}
                {!! Form::hidden('pearl', $pearl->id, null) !!}
                {!! Form::hidden('pdf', $pdf->id, null) !!}
                @if($pdf->ismail == 0)
                    <a href=" {{ $pdf->adress }} " target="_blank"> {{ $pdf->title }} </a>
                @else
                    <a href="mailto:{{ $pdf->adress }}" target="_blank"> {{ $pdf->title }} </a>
                @endif

                <!-- Add Submit Field -->
                    {!! Form::submit('X', ['class' => 'btn', 'title' => 'verwijder deze informatie']) !!}
            {!! Form::close() !!}<br>
        @endforeach
        {!! Form::open(['route' => 'pearls.newpdf', 'files' => true]) !!}
            {!! Form::hidden('pearl', $pearl->id, null) !!}

            <div class="form-group">
                {!! Form::label('pdftitle', 'Type PDF:') !!}
                {!! Form::text('pdftitle', null, ['class' => 'form-control', 'placeholder' => 'Parelbeschrijving, Factsheet, Tips & Tricks, of Stappenplan']) !!}
            </div>

            <!-- PDF Form Input -->
            <div class="form-group">
                {!! Form::label('pdf', 'PDF (.pdf):') !!}
                {!! Form::file('pdf', ['accept' => '.pdf']) !!}
            </div>

            <div class="form-group">
                {!! Form::submit('Voeg pdf toe', ['class' => 'btn']) !!}
            </div>
        {!! Form::close() !!}
    </section>

    <a href=" {{ route('pearls.show', $pearl) }} " class="btn" > Terug naar de parel </a> <br><br>
    
@stop

@section('additional_scripts')
    <script src="http://vjs.zencdn.net/5.17.0/video.js"></script>
@stop