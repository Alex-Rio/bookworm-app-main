<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
{
    use HasFactory;
    use Filterable;

    public $timestamps = false;
    protected $table = 'review';
    protected $filterable = [
        'sort',
        'star'
    ];
     /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'rating_start' => 'integer'
    ];
    public function scopeGroup($query, $book)
    {
        return $query
        ->where('book_id', $book)
        ->selectRaw("count(case when rating_start  = 1 then 1 else null end) as one_star")
        ->selectRaw("count(case when rating_start  = 2 then 1 else null end) as two_star")
        ->selectRaw("count(case when rating_start  = 3 then 1 else null end) as three_star")
        ->selectRaw("count(case when rating_start  = 4 then 1 else null end) as four_star")
        ->selectRaw("count(case when rating_start  = 5 then 1 else null end) as five_star")
        ->selectRaw("count(rating_start) as count_star")
        ->selectRaw("ROUND(AVG(CAST(rating_start as INT)),2) as avg_star");
    }
    public function sortDesc($query)
    {
        return $query
        ->orderBy('review_date', 'DESC');
    }
    public function sortAsc($query)
    {
        return $query
        ->orderBy('review_date', 'ASC');
    }
    public function filterStar($query, $value)
    {
        if (is_numeric($value)) {
            if ($value == 0) {
                return $query
                ->where(DB::raw('CAST(rating_start as INT)'),'>=',$value);
            }
            return $query
            ->where(DB::raw('CAST(rating_start as INT)'),'=',$value);
        }
        return $query;
    }
}
