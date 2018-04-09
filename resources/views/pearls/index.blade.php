@extends('layouts.master')

@section('content')
    <h1>Alle parels</h1>
    @foreach ($pearls as $pearl) 
    	<a href="{{ URL::route('pearls.edit', $pearl->id) }}">
			<h3>{{ $pearl->title }} </h3>
		</a>
    @endforeach
@stop