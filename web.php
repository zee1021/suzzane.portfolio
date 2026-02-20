Open routes/web.php and add this line:

use App\Http\Controllers\ProductController;

Route::get('/products', [ProductController::class, 'index']);
