<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('profiles')->insert([
            'name' => 'John',
            'lastname' => 'Doe',
            'email' => 'correo@gmail.com',
            'country' => 'Mexico',
            'city' => 'CDMX',
            'summary' => 'Mi curiosidad innata me impulsa a explorar tendencias en tecnologías de la información',
        ]);
    }
}
