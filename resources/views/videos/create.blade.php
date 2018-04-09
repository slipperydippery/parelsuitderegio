@extends('layouts.master')

@section('content')
    <h1>Upload een video voor deze parel</h1>
    <form method="post" action="/videos" enctype="multipart/form-data">
    	{{ csrf_field() }}

		<!-- voor Parel Form Input -->
		<div class="form-group">
		    {!! Form::label('pearlid', 'voor Parel:') !!}
		    {!! Form::select('pearlid', $pearllist, $selectid, ['class' => 'form-control']) !!}
		</div>

    	<input type="file" name="video">
    	<button type="submit">Sla video op/</button>
    </form>

@stop