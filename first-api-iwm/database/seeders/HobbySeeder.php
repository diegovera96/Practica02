<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HobbySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hobbies')->insert([
            'name' => 'Futbol',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            'profile_id' => 1,
        ]);

        DB::table('hobbies')->insert([
            'name' => 'Modelado 3D',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            'profile_id' => 1,
        ]);

        DB::table('hobbies')->insert([
            'name' => 'Animales',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            'profile_id' => 1,
        ]);

        DB::table('hobbies')->insert([
            'name' => 'Tecnologia',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            'profile_id' => 1,
        ]);
    }
}
