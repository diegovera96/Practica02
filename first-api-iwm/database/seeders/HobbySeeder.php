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
            'description' => 'Me apasiona el fútbol porque es un deporte que trasciende más allá de la competición en sí misma. Cada partido es una experiencia única, llena de emociones y momentos impredecibles que pueden cambiar el rumbo en cuestión de segundos.',
            'profile_id' => 1,
        ]);

        DB::table('hobbies')->insert([
            'name' => 'Modelado 3D',
            'description' => 'El modelado 3D es otra de mis fascinaciones, ya que me permite materializar mi creatividad y plasmar ideas en formas tridimensionales. La capacidad de dar vida a conceptos abstractos a través de software especializado me ofrece un espacio para explorar mi imaginación y mejorar mis habilidades técnicas.',
            'profile_id' => 1,
        ]);

        DB::table('hobbies')->insert([
            'name' => 'Tecnologia',
            'description' => 'La tecnología es un campo que siempre me ha cautivado por su constante evolución y su impacto transformador en la sociedad. Desde la invención de dispositivos innovadores hasta el desarrollo de nuevas soluciones tecnológicas, encuentro emocionante seguir de cerca los avances que mejoran nuestra forma de vida.',
            'profile_id' => 1,
        ]);
    }
}
