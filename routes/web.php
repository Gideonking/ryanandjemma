<?php

Route::get('/', 'WelcomeController@index')->name('home');
Route::get('/1', 'WelcomeController@test1');
Route::get('/2', 'WelcomeController@test2');
Route::get('/3', 'WelcomeController@test3');