<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index() {
        return view('pages.index');
    }
    public function story() {
        return view('pages.story');
    }
    public function info() {
        return view('pages.info');
    }
    public function rsvp() {
        return view('pages.rsvp');
    }
    public function gift() {
        return view('pages.gift');
    }
}