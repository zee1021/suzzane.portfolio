Create the file resources/views/products/index.blade.php. We will use some basic CSS to make it look "organized" as per the criteria.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Midterm Exam - Product List</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; margin: 50px; background: #f8f9fa; }
        .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; border-bottom: 2px solid #3490dc; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
        th { background-color: #3490dc; color: white; }
        tr:hover { background-color: #f1f1f1; }
        .price { font-weight: bold; color: #38c172; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Tech Gadget Catalog</h1>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                <tr>
                    <td>{{ $product['name'] }}</td>
                    <td>{{ $product['category'] }}</td>
                    <td class="price">₱{{ number_format($product['price'], 2) }}</td>
                    <td>{{ $product['stock'] }} units available</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
</html>
