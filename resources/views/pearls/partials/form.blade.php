<!-- Titel Form Input -->
<div class="form-group">
	{!! Form::label('title', 'Titel:') !!}
	{!! Form::text('title', null, ['class' => 'form-control']) !!}
</div>

<!-- Bijzin Form Input -->
<div class="form-group">
	{!! Form::label('subtitle', 'Bijzin:') !!}
	{!! Form::text('subtitle', null, ['class' => 'form-control']) !!}
</div>

<!-- Beschrijving Form Input -->
<div class="form-group">
	{!! Form::label('description', 'Beschrijving:') !!}
	{!! Form::textarea('description', null, ['class' => 'form-control']) !!}
</div>

<!-- Afbeelding Form Input -->
<div class="form-group">
	{!! Form::label('thumbnail', 'Afbeelding (.png):') !!}
	{!! Form::file('thumbnail', ['accept' => '.png']) !!}
</div>

<!-- Film Form Input -->
<div class="form-group">
	{!! Form::label('video', 'Film (.mp4):') !!}
	{!! Form::file('video', ['accept' => '.mp4']) !!}
</div>

<h3>Categorieen</h3>
@foreach($categories as $category)
<?php
	$hascategory = false;
	if(isset($pearl)) {
		foreach($pearl->categories as $pearlcategory) {
			if($pearlcategory->id == $category->id) {
				$hascategory = true;
			}
		}
	}
 ?>
	<div class="form-group">
		{!! Form::checkbox('categories[]', $category->id, $hascategory ) !!}
		{!! Form::label('description', $category->title) !!}
	</div>
@endforeach

<h3>Thema's</h3>
@foreach($themes as $theme)
<?php
	$hastheme = false;
	if(isset($pearl)) {
		foreach($pearl->themes as $pearltheme) {
			if($pearltheme->id == $theme->id) {
				$hastheme = true;
			}
		}
	}
 ?>
	<div class="form-group">
		{!! Form::checkbox('themes[]', $theme->id, $hastheme ) !!}
		{!! Form::label('description', $theme->title) !!}
	</div>
@endforeach


<!-- Add Submit Field -->
<div class="form-group">
    {!! Form::submit($submittext, ['class' => 'btn']) !!}
</div>