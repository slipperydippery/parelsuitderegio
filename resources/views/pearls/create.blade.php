@extends('layouts.master')

@section('content')
    <h1>Create a pearl</h1>
    {!! Form::open(['route' => 'pearls.store']) !!}
    	@include('pearls.partials.form', ['submittext' => 'Creeer nieuwe parel'])
    {!! Form::close() !!}

@stop