<?php

use Illuminate\Database\Seeder;

class PDFsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pdfs')->delete();

        $pdfs = [
            [
                'id' => '1',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingTweedegraadsPLUS.pdf',
            ],
            [
                'id' => '2',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetTweedegraadsPLUS.pdf',
            ],
            [
                'id' => '3',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksTweedegraadsPLUS.pdf',
            ],
            [
                'id' => '4',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingSlimmerWerkenTV.pdf',
            ],
            [
                'id' => '5',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetSlimmerWerkenTV.pdf',
            ],
            [
                'id' => '6',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksSlimmerWerkenTV.pdf',
            ],
            [
                'id' => '7',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingBanenafspraak.pdf',
            ],
            [
                'id' => '8',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetBanenafspraak.pdf',
            ],
            [
                'id' => '9',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksBanenafspraak.pdf',
            ],
            [
                'id' => '10',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingLoopbaanscans.pdf',
            ],
            [
                'id' => '11',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetLoopbaanscan.pdf',
            ],
            [
                'id' => '12',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingVeranderlandschap.pdf',
            ],
            [
                'id' => '13',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetVeranderlandschap.pdf',
            ],
            [
                'id' => '14',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksVeranderlandschap.pdf',
            ],
            [
                'id' => '15',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingProfessionaliseringsportaal.pdf',
            ],
            [
                'id' => '16',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetProfessionaliseringsportaal.pdf',
            ],
            [
                'id' => '17',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingJobTwinning.pdf',
            ],
            [
                'id' => '18',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetJobTwinning.pdf',
            ],
            [
                'id' => '19',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksJobTwinning.pdf',
            ],
            [
                'id' => '20',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingMeridiaanCollege.pdf',
            ],
            [
                'id' => '21',
                'title' => 'Stappenplan', 
                'description' => '',
                'adress' => 'StappenplanMeridiaanCollege.pdf',
            ],
            [
                'id' => '22',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingWinklerPrins.pdf',
            ],
            [
                'id' => '23',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetWinklerPrins.pdf',
            ],
            [
                'id' => '24',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingGreijdanus.pdf',
            ],
            [
                'id' => '25',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksGreijdanus.pdf',
            ],
            [
                'id' => '26',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingZij-instromers.pdf',
            ],
            [
                'id' => '27',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetZij-instromers.pdf',
            ],
            [
                'id' => '28',
                'title' => 'Stappenplan', 
                'description' => '',
                'adress' => 'StappenplanZij-instromers.pdf',
            ],
            [
                'id' => '29',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingPLANA.pdf',
            ],
            [
                'id' => '30',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetPLANA.pdf',
            ],
            [
                'id' => '31',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksPLANA.pdf',
            ],
            [
                'id' => '32',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingSOML.pdf',
            ],
            [
                'id' => '33',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetSOML.pdf',
            ],
            [
                'id' => '34',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksSOML.pdf',
            ],
            [
                'id' => '35',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingEsprit.pdf',
            ],
            [
                'id' => '36',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetEsprit.pdf',
            ],
            [
                'id' => '37',
                'title' => 'Stappenplan', 
                'description' => '',
                'adress' => 'StappenplanEsprit.pdf',
            ],
            [
                'id' => '38',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingWindesheim.pdf',
            ],
            [
                'id' => '39',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetWindesheim.pdf',
            ],
            [
                'id' => '40',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksWindesheim.pdf',
            ],
            [
                'id' => '41',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingComenius.pdf',
            ],
            [
                'id' => '42',
                'title' => 'Tips & Tricks', 
                'description' => '',
                'adress' => 'TipsAndTricksComenius.pdf',
            ],
            [
                'id' => '43',
                'title' => 'Parelbeschrijving', 
                'description' => '',
                'adress' => 'ParelbeschrijvingJokeSmit.pdf',
            ],
            [
                'id' => '44',
                'title' => 'Stappenplan', 
                'description' => '',
                'adress' => 'StappenplanJokeSmit.pdf',
            ],
            [
                'id' => '45',
                'title' => 'Factsheet', 
                'description' => '',
                'adress' => 'FactsheetJokeSmit.pdf',
            ],
             
        ];
        DB::table('pdfs')->insert($pdfs);
    }
}
