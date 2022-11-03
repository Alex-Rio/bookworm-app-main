<?php

namespace App\Http\Controllers\Api;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\DetailBookResource;
use App\Http\Resources\FilterBookCollection;

class BookApi extends Controller
{
    public function index()
    {
        try {
            $books = Book::detail()->get();

            // Resource collection
            $books = DetailBookResource::collection($books);

            return response()->json([
                'books' => $books
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Server error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function show($id)
    {
        try {
            $book = Book::detail()->findOrFail($id);

            $book = new DetailBookResource($book);

            return response()->json([
                'book' => $book
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Server error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function filter(Request $request)
    {
        try {
            $params = $request->all();
            if (!key_exists('show', $params)) {
                return response()->json([
                    'error' => 'Request is missing attribute'
                ], Response::HTTP_MISDIRECTED_REQUEST);
            }
            $filterBook = Book::group()->filter($params)->paginate($params['show'])->appends(request()->query());

            $filterBook = new FilterBookCollection($filterBook);

            return response()->json($filterBook, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Server error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
