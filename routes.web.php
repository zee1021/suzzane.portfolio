<?php

use Illuminate\Support\Facades\Route;
// 1. VERY IMPORTANT: You must import the Controller at the top
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return view('welcome');
});

// 2. The Route to your Product List
Route::get('/products', [ProductController::class, 'index']);
