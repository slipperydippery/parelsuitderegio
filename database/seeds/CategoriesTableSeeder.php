<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->delete();

        $categories = [
            [
                'id' => '1',
                'title' => 'Arbeidsmarkt & mobiliteit', 
                'description' => '',
            ],
            [
                'id' => '2',
                'title' => 'Loopbaan & professionalisering', 
                'description' => '',
            ],
            [
                'id' => '3',
                'title' => 'Veilig, gezond & vitaal werken', 
                'description' => '',
            ],
        ];

        DB::table('categories')->insert($categories);
    }
}
