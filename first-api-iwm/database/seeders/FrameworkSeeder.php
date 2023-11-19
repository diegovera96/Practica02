<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FrameworkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('frameworks')->insert([
            'name' => 'Laravel',
            'level' => 'Avanzado',
            'year' => '2019',
            'profile_id' => 1,
        ]);

        DB::table('frameworks')->insert([
            'name' => 'React',
            'level' => 'Intermedio',
            'year' => '2023',
            'profile_id' => 1,
        ]);
    }
}
