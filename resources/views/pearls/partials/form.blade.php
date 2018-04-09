<!-- Titel Form Input -->
<div class="form-group">
	{!! Form::label('title', 'Titel:') !!}
	{!! Form::text('title', null, ['class' => 'form-control']) !!}
</div>

<!-- Beschrijving Form Input -->
<div class="form-group">
	{!! Form::label('description', 'Beschrijving:') !!}
	{!! Form::textarea('description', null, ['class' => 'form-control']) !!}
</div>

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


<!-- Add Submit Field -->
<div class="form-group">
    {!! Form::submit($submittext, ['class' => 'btn']) !!}
</div>