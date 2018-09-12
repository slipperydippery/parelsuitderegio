<?php

use Illuminate\Database\Seeder;

class ThemesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('themes')->delete();

        $themes = [
            [
                'id' => '1',
                'title' => 'Naar een toekomstbestendige arbeidsmarkt',
                'description' => '',
            ],
            [
                'id' => '2',
                'title' => 'Werken aan een veilige en gezonde werkomgeving',
                'description' => '',
            ],
            [
                'id' => '3',
                'title' => 'Werken aan duurzame inzetbaarheid',
                'description' => '',
            ],
            [
                'id' => '4',
                'title' => 'Aantrekkelijke werkomgeving',
                'description' => '',
            ],
        ];

        DB::table('themes')->insert($themes);
    }
}
