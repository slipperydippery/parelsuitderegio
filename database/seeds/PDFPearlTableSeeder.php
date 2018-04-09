<?php

use Illuminate\Database\Seeder;

class PDFPearlTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pdf_pearl')->delete();

        $pdf_pearl = [
            [
                'pdf_id' => '1',
                'pearl_id' => '1',
            ],
            [
                'pdf_id' => '2',
                'pearl_id' => '1',
            ],
            [
                'pdf_id' => '3',
                'pearl_id' => '1',
            ],
            [
                'pdf_id' => '4',
                'pearl_id' => '2',
            ],
            [
                'pdf_id' => '5',
                'pearl_id' => '2',
            ],
            [
                'pdf_id' => '6',
                'pearl_id' => '2',
            ],
            [
                'pdf_id' => '7',
                'pearl_id' => '3',
            ],
            [
                'pdf_id' => '8',
                'pearl_id' => '3',
            ],
            [
                'pdf_id' => '9',
                'pearl_id' => '3',
            ],
            [
                'pdf_id' => '10',
                'pearl_id' => '4',
            ],
            [
                'pdf_id' => '11',
                'pearl_id' => '4',
            ],
            [
                'pdf_id' => '12',
                'pearl_id' => '5',
            ],
            [
                'pdf_id' => '13',
                'pearl_id' => '5',
            ],
            [
                'pdf_id' => '14',
                'pearl_id' => '5',
            ],
            [
                'pdf_id' => '15',
                'pearl_id' => '6',
            ],
            [
                'pdf_id' => '16',
                'pearl_id' => '6',
            ],
            [
                'pdf_id' => '17',
                'pearl_id' => '7',
            ],
            [
                'pdf_id' => '18',
                'pearl_id' => '7',
            ],
            [
                'pdf_id' => '19',
                'pearl_id' => '7',
            ],
            [
                'pdf_id' => '20',
                'pearl_id' => '8',
            ],
            [
                'pdf_id' => '21',
                'pearl_id' => '8',
            ],
            [
                'pdf_id' => '22',
                'pearl_id' => '9',
            ],
            [
                'pdf_id' => '23',
                'pearl_id' => '9',
            ],
            [
                'pdf_id' => '24',
                'pearl_id' => '10',
            ],
            [
                'pdf_id' => '25',
                'pearl_id' => '10',
            ],
            [
                'pdf_id' => '26',
                'pearl_id' => '11',
            ],
            [
                'pdf_id' => '27',
                'pearl_id' => '11',
            ],
            [
                'pdf_id' => '28',
                'pearl_id' => '11',
            ],
            [
                'pdf_id' => '29',
                'pearl_id' => '12',
            ],
            [
                'pdf_id' => '30',
                'pearl_id' => '12',
            ],
            [
                'pdf_id' => '31',
                'pearl_id' => '12',
            ],
            [
                'pdf_id' => '32',
                'pearl_id' => '13',
            ],
            [
                'pdf_id' => '33',
                'pearl_id' => '13',
            ],
            [
                'pdf_id' => '34',
                'pearl_id' => '13',
            ],
            [
                'pdf_id' => '35',
                'pearl_id' => '14',
            ],
            [
                'pdf_id' => '36',
                'pearl_id' => '14',
            ],
            [
                'pdf_id' => '37',
                'pearl_id' => '14',
            ],
            [
                'pdf_id' => '38',
                'pearl_id' => '15',
            ],
            [
                'pdf_id' => '39',
                'pearl_id' => '15',
            ],
            [
                'pdf_id' => '40',
                'pearl_id' => '15',
            ],
            [
                'pdf_id' => '41',
                'pearl_id' => '16',
            ],
            [
                'pdf_id' => '42',
                'pearl_id' => '16',
            ],
            [
                'pdf_id' => '43',
                'pearl_id' => '17',
            ],
            [
                'pdf_id' => '44',
                'pearl_id' => '17',
            ],
            [
                'pdf_id' => '45',
                'pearl_id' => '17',
            ], 
        ];

        DB::table('pdf_pearl')->insert($pdf_pearl);
    }
}
