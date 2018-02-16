<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function index() {
        return view('pages.index');
    }
    public function test1() {
        return view('pages.test1');
    }
    public function test2() {
        return view('pages.test2');
    }
    public function test3() {
        return view('pages.test3');
    }
}