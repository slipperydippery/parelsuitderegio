<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategoriesTableSeeder::class);
        $this->call(PearlsTableSeeder::class);
        $this->call(CategoryPearlTableSeeder::class);
        $this->call(LinkPearlTableSeeder::class);
        $this->call(VideosTableSeeder::class);
        $this->call(PearlVideoTableSeeder::class);
        $this->call(PDFsTableSeeder::class);
        $this->call(PDFPearlTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(MeerinfosTableSeeder::class);
    }
}
