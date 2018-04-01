<?php

Route::get('/', 'PageController@index')->name('home');
Route::get('/story', 'PageController@story');
Route::get('/story/timeline', 'PageController@timeline');
Route::get('/info', 'PageController@info');
Route::get('/rsvp', 'PageController@rsvp');
Route::get('/gift', 'PageController@gift');