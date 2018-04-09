<?php

use Illuminate\Database\Seeder;

class MeerinfosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meerinfos')->delete();

        $meerinfos = [
            [
                'id' => '1',
                'title' => 'Website loopbaan4daagse', 
                'alt' => 'loopbaan4daagse',
                'adress' => 'http://www.promotion-loopbaan4daagse.nl/',
                'ismail' => '0',
                'pearl_id' => '4'
            ],
            [
                'id' => '2',
                'title' => 'Informatie Sectorplan-VO', 
                'alt' => 'Informatie Sectorplan-VO',
                'adress' => 'http://www.voion.nl/sectorplan',
                'ismail' => '0',
                'pearl_id' => '4'
            ],
            [
                'id' => '3',
                'title' => 'Informatie over loopbaan', 
                'alt' => 'Informatie over loopbaan',
                'adress' => 'http://www.voion.nl/programmalijnen/loopbaan-en-professionalisering/loopbaan/loopbaan',
                'ismail' => '0',
                'pearl_id' => '4'
            ],
            [
                'id' => '4',
                'title' => 'Contact Projectleider', 
                'alt' => 'Marga van der Zanden',
                'adress' => 'mm.vanderzanden@omo.nl',
                'ismail' => '1',
                'pearl_id' => '4'
            ],
            [
                'id' => '5',
                'title' => 'Informatie professionaliseren', 
                'alt' => 'Informatie professionaliseren',
                'adress' => 'http://www.voion.nl/programmalijnen/loopbaan-en-professionalisering',
                'ismail' => '0',
                'pearl_id' => '5'
            ],
            [
                'id' => '6',
                'title' => 'Contact', 
                'alt' => 'Contact',
                'adress' => 'directiesecretariaat@ja.nl',
                'ismail' => '1',
                'pearl_id' => '5'
            ],
            [
                'id' => '7',
                'title' => ' Informatie loopbaan & professionalisering', 
                'alt' => ' Informatie loopbaan & professionalisering',
                'adress' => 'http://www.voion.nl/programmalijnen/loopbaan-en-professionalisering',
                'ismail' => '0',
                'pearl_id' => '6'
            ],
            [
                'id' => '8',
                'title' => ' Contact Voion', 
                'alt' => ' Contact Voion',
                'adress' => ' info@voion.nl',
                'ismail' => '1',
                'pearl_id' => '6'
            ],
            [
                'id' => '9',
                'title' => 'Contact ', 
                'alt' => 'Contact ',
                'adress' => 'info@jobtwinning.nl',
                'ismail' => '1',
                'pearl_id' => '7'
            ],
            [
                'id' => '10',
                'title' => 'Info professionaliseren ', 
                'alt' => 'Info professionaliseren ',
                'adress' => 'http://www.voion.nl/programmalijnen/loopbaan-en-professionalisering/professionaliseren-in-school/professionaliseren-in-school',
                'ismail' => '0',
                'pearl_id' => '8'
            ],
            [
                'id' => '11',
                'title' => 'Informatie over arbobeleid ', 
                'alt' => 'Informatie over arbobeleid ',
                'adress' => 'http://www.voion.nl/programmalijnen/veilig-gezond-en-vitaal-werken/wetgeving-en-beleid/arbobeleid',
                'ismail' => '0',
                'pearl_id' => '9'
            ],
            [
                'id' => '12',
                'title' => 'Meer schoolvoorbeelden', 
                'alt' => 'Meer schoolvoorbeelden',
                'adress' => 'http://www.arbocatalogus-vo.nl/arbobeleid/',
                'ismail' => '0',
                'pearl_id' => '9'
            ],
            [
                'id' => '13',
                'title' => 'Gesprekkencyclus', 
                'alt' => 'Gesprekkencyclus',
                'adress' => 'http://www.voion.nl/programmalijnen/loopbaan-en-professionalisering/loopbaanbeleid-en-ontwikkeling/gesprekkencyclus',
                'ismail' => '0',
                'pearl_id' => '10'
            ],
            [
                'id' => '14',
                'title' => 'Zin in lesgeven', 
                'alt' => 'Zin in lesgeven',
                'adress' => 'https://www.windesheim.nl/werk-en-studie/opleidingen-en-cursussen/educatie/school-en-docentontwikkeling/leraar4life/studieprogramma/',
                'ismail' => '0',
                'pearl_id' => '11'
            ],
            [
                'id' => '15',
                'title' => 'Wordleraarinhetvo.nl', 
                'alt' => 'Wordleraarinhetvo.nl',
                'adress' => 'http://wordleraarinhetvo.nl/',
                'ismail' => '0',
                'pearl_id' => '11'
            ],
            [
                'id' => '16',
                'title' => 'Subsidie zij-instroom', 
                'alt' => 'Subsidie zij-instroom',
                'adress' => 'http://www.voion.nl/programmalijnen/arbeidsmarkt-en-mobiliteit/werken-in-het-voortgezet-onderwijs/zij-instroom',
                'ismail' => '0',
                'pearl_id' => '11'
            ],
            [
                'id' => '17',
                'title' => 'regionale samenwerking', 
                'alt' => 'regionale samenwerking',
                'adress' => 'http://www.voion.nl/programmalijnen/arbeidsmarkt-en-mobiliteit/samenwerking-netwerken/samen-aan-de-slag-met-arbeidsmarktvraagstukken',
                'ismail' => '0',
                'pearl_id' => '12'
            ],
            [
                'id' => '18',
                'title' => 'sociale veiligheid', 
                'alt' => 'sociale veiligheid',
                'adress' => 'https://www.voion.nl/programmalijnen/veilig-gezond-en-vitaal-werken/sociale-veiligheid/sociale-veiligheid',
                'ismail' => '0',
                'pearl_id' => '13'
            ],
            [
                'id' => '19',
                'title' => 'fysieke veiligheid', 
                'alt' => 'fysieke veiligheid',
                'adress' => 'https://www.voion.nl/programmalijnen/veilig-gezond-en-vitaal-werken/fysieke-veiligheid/veilig-werken ',
                'ismail' => '0',
                'pearl_id' => '13'
            ],
            [
                'id' => '20',
                'title' => 'strategisch HRM', 
                'alt' => 'strategisch HRM',
                'adress' => 'https://www.voion.nl/programmalijnen/loopbaan-en-professionalisering/professionaliseren-in-school/professionaliseren-in-school/strategisch-hrm',
                'ismail' => '0',
                'pearl_id' => '14'
            ],
            [
                'id' => '21',
                'title' => 'financieringsmiddelen', 
                'alt' => 'financieringsmiddelen',
                'adress' => 'https://www.voion.nl/programmalijnen/loopbaan-en-professionalisering/financieringsmiddelen-voor-professionalisering/financieringsmiddelen-voor-professionalisering',
                'ismail' => '0',
                'pearl_id' => '14'
            ],
            [
                'id' => '22',
                'title' => 'sociale veiligheid', 
                'alt' => 'sociale veiligheid',
                'adress' => 'https://www.voion.nl/programmalijnen/veilig-gezond-en-vitaal-werken/sociale-veiligheid/sociale-veiligheid',
                'ismail' => '0',
                'pearl_id' => '17'
            ],
            [
                'id' => '23',
                'title' => 'fysieke veiligheid', 
                'alt' => 'fysieke veiligheid',
                'adress' => 'https://www.voion.nl/programmalijnen/veilig-gezond-en-vitaal-werken/fysieke-veiligheid/veilig-werken ',
                'ismail' => '0',
                'pearl_id' => '17'
            ],
        ]; 
        DB::table('meerinfos')->insert($meerinfos);
    }
}
