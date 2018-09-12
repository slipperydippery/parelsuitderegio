<?php

use Illuminate\Database\Seeder;

class PearlThemeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pearl_theme')->delete();

        $pearl_theme = [
            [
                'pearl_id' => '1',
                'theme_id' => '4',
            ],
            [
                'pearl_id' => '2',
                'theme_id' => '4',
            ],
            [
                'pearl_id' => '3',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '4',
                'theme_id' => '3',
            ],
            [
                'pearl_id' => '5',
                'theme_id' => '4',
            ],
            [
                'pearl_id' => '6',
                'theme_id' => '3',
            ],
            [
                'pearl_id' => '7',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '8',
                'theme_id' => '4',
            ],
            [
                'pearl_id' => '9',
                'theme_id' => '2',
            ],
            [
                'pearl_id' => '10',
                'theme_id' => '3',
            ],
            [
                'pearl_id' => '11',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '12',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '13',
                'theme_id' => '2',
            ],
            [
                'pearl_id' => '14',
                'theme_id' => '4',
            ],
            [
                'pearl_id' => '15',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '16',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '17',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '18',
                'theme_id' => '4',
            ],
            [
                'pearl_id' => '19',
                'theme_id' => '1',
            ],
            [
                'pearl_id' => '20',
                'theme_id' => '1',
            ],
        ];
 
        DB::table('pearl_theme')->insert($pearl_theme);
    }
}
