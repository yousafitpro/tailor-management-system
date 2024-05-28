<?php

namespace App\Models;

class Service extends Base
{
    protected $fillable = ['code', 'name', 'price', 'active', 'description'];

    public function measurementFields()
    {
        return $this->belongsToMany(MeasurementField::class)->orderBy('order');
    }

    public function orders()
    {
        return $this->hasManyThrough(Order::class, OrderService::class);
    }

    public function orderServices()
    {
        return $this->hasMany(OrderService::class);
    }

    public function scopeActive($query)
    {
        $query->where('active', 1);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('code', 'like', '%' . $search . '%')
                    ->orWhere('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ('with' === $trashed) {
                $query->withTrashed();
            } elseif ('only' === $trashed) {
                $query->onlyTrashed();
            }
        });
    }
}
