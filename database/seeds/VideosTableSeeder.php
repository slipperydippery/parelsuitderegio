<?php

use Illuminate\Database\Seeder;

class VideosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('videos')->delete();

        $videos = [
            [
                'id' => '1',
                'title' => 'Arbeidsmarkt & mobiliteit', 
                'description' => '',
                'adress' => 'XXdfvsQHcTU',
                'pearl_id' => '1',
            ],
            [
                'id' => '2',
                'title' => 'Opleiding & professionalisering', 
                'description' => '',
                'adress' => 'a9pIS8oiIqk',
                'pearl_id' => '2',
                
            ],
            [
                'id' => '3',
                'title' => 'Veilig, gezond & vitaal werken', 
                'description' => '',
                'adress' => 'XXdfvsQHcTU',
                'pearl_id' => '3',
            ],
            [
                'id' => '4',
                'title' => 'Veilig, gezond & vitaal werken', 
                'description' => '',
                'adress' => 'XXdfvsQHcTU',
                'pearl_id' => '4',
            ],
            [
                'id' => '5',
                'title' => 'Veilig, gezond & vitaal werken', 
                'description' => '',
                'adress' => 'XXdfvsQHcTU',
                'pearl_id' => '5',
            ],
            [
                'id' => '6',
                'title' => 'Veilig, gezond & vitaal werken', 
                'description' => '',
                'adress' => 'XXdfvsQHcTU',
                'pearl_id' => '6',
            ],
            [
                'id' => '7',
                'title' => 'Veilig, gezond & vitaal werken', 
                'description' => '',
                'adress' => 'XXdfvsQHcTU',
                'pearl_id' => '7',
            ],
            [
                'id' => '8',
                'title' => 'Veilig, gezond & vitaal werken', 
                'description' => '',
                'adress' => 'XXdfvsQHcTU',
                'pearl_id' => '8',
            ],
        ];
        DB::table('videos')->insert($videos);
    }
}




