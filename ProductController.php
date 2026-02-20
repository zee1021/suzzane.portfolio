code:   php artisan make:controller ProductController

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Criteria: Implemented an array based on a chosen theme (Tech Gadgets)
        $products = [
            ['name' => 'MacBook Pro', 'category' => 'Laptop', 'price' => 120000, 'stock' => 5],
            ['name' => 'iPhone 15', 'category' => 'Mobile', 'price' => 60000, 'stock' => 12],
            ['name' => 'iPad Air', 'category' => 'Tablet', 'price' => 35000, 'stock' => 8],
            ['name' => 'AirPods Pro', 'category' => 'Audio', 'price' => 15000, 'stock' => 20],
            ['name' => 'Apple Watch', 'category' => 'Wearable', 'price' => 25000, 'stock' => 10],
        ];

        return view('products.index', compact('products'));
    }
}
