<?php

namespace App\Http\Controllers\Api;

use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class FilterApi extends Controller
{
    public function index()
    {
        try {
            $categories = Category::orderBy('category_name')->get();
            $authors = Author::orderBy('author_name')->get();
            $stars = [1,2,3,4,5];
            return response()->json([
                'categories' => $categories,
                'authors' => $authors,
                'star' => $stars
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Server error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
