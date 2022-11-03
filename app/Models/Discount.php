<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;
    
    public $timestamps = false;

    public function Book()
    {
        return $this->belongsTo(Book::class);
    }
}
