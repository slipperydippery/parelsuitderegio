<?php

use Illuminate\Database\Seeder;

class PearlsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pearls')->delete();

        $pearls = [
            [
                'id' => '1',
                'title' => 'Tweede&shy;graads PLUS',
                'subtitle' => 'Doorscholing van tweedegraads docenten',
                'description' => 'De Rode Loper, een samenwerkingsverband van 41 scholen in de regio Den Haag, wil tweedegraads docenten stimuleren een eerstegraads bevoegdheid te halen. Zij ontwikkelde samen met de Hogeschool Utrecht Tweedegraads PLUS modules op masterniveau over uiteenlopende onderwerpen. 
                Nieuwsgierig naar het hoe en waarom? Bekijk de animatie of lees een van de documenten hieronder voor de details van dit verhaal.',
            ],
            [
                'id' => '2',
                'title' => 'Slimmer Werken TV',
                'subtitle' => 'Vernieuwende films om leraren aan het vak te binden',
                'description' => 'Het platform Noord-Holland-Noord  (Platform NHN) zocht naar een nieuwe manier om docenten aan het vak te binden. Daarom ontwikkelde het platform Slimmer Werken TV; een serie van 14 documentaires voor docenten. De films worden bij voorkeur in teamverband bekeken aan de hand van een speciaal ontwikkelde kijkmethode. Het doel is om docenten de kennis uit de films te laten gebruiken in hun dagelijkse lespraktijk. De films zijn beschikbaar voor elke docent en school.
                Wilt u weten hoe en waarom u Slimmer Werken TV kunt inzetten in uw organisatie? Bekijk de animatie of lees een van de documenten hieronder.',
            ],
            [
                'id' => '3',
                'title' => 'Banen&shy;afspraak',
                'subtitle' => '30 schoonmakers uit de SW gedetacheerd bij de Gooise Scholen Federatie',
                'description' => 'De Gooise Scholen Federatie (GSF) bestaat uit 8 samenwerkende scholen in de Gooi en Vechtstreek. Vijf jaar geleden zochten zij een betere oplossing voor de schoonmaakwerkzaamheden van alle scholen. Zij kozen ervoor om via detachering 30 schoonmakers in dienst te nemen via het sociaal werkbedrijf. Dat levert een verrassend resultaat. Deze parel inspireert om banen te creëren voor mensen met een arbeidsbeperking. Benieuwd naar het verhaal van de GSF? Bekijk de animatie of lees een van de documenten op deze pagina voor de details.',
            ],
            [
                'id' => '4',
                'title' => 'Loopbaanscans',
                'subtitle' => '75 loopbaanscans met subsidie',
                'description' => 'Vereniging Ons Middelbaar Onderwijs (OMO) stimuleert al haar medewerkers om talenten te ontplooien en om het beste uit zich zelf te halen. Ter ondersteuning geeft de vereniging haar medewerkers de mogelijkheid om een loopbaanscan te doen. Zij koopt 75 scans in voor drie specifieke doelgroepen. In eerste instantie is er weinig animo. Maar met een nieuwe aanpak blijkt de vraag groter dan het aanbod.
Nieuwsgierig waarom en hoe OMO dit heeft aangepakt? Bekijk de animatie of lees het hele verhaal in de parelbeschrijving. Je vindt de details in de factsheet. ',
            ],
            [
                'id' => '5',
                'title' => 'Veranderlandschap',
                'subtitle' => 'Trektocht naar een excellent schoolklimaat ',
                'description' => 'De ontwikkeling van De Christelijke Scholengemeenschap Jan Arentsz (Jan Arentsz) is in 2012, tot stilstand gekomen. Het aantal aanmeldingen loopt terug, de school heeft geen onderscheidend karakter en excelleert niet. Traditionele veranderstrategieën bieden geen duurzame oplossing. Daarom kiest Jan Arentsz voor een tegendraadse benadering; teamleiders en het team worden eigenaar van het veranderproces en trekken samen door het veranderlandschap van Jan Arentsz naar een excellent schoolklimaat. Met resultaat. Benieuwd naar dit opmerkelijke verhaal? Bekijk de animatie of een van de documenten op deze pagina voor de details.',
            ],
            [
                'id' => '6',
                'title' => 'Professionaliseringsportaal',
                'subtitle' => 'Professionaliseringsportaal voor duurzame ontwikkeling',
                'description' => 'ORION is een onafhankelijk netwerk van 13 scholen in Zuidoost-Brabant. In samenwerking met Voion en een webontwikkelaar ontwikkelden zij een professionaliseringsportaal voor alle medewerkers. Het portaal bevat informatie over persoonlijke en professionele groei, talentontwikkeling, mobiliteit, werkplezier en vitaliteit. Het portaal geeft medewerkers van ORION zelf de regie over hun professionalisering en  biedt ondersteuning bij de gesprekkencyclus. Het portaal  is nu live en er ligt een blauwdruk voor andere scholen. Wil je weten waarom en hoe ORION het portaal heeft ontwikkeld? Klik dan op de animatiefilm of een van de informatiebuttons op deze pagina.',
            ],
            [
                'id' => '7',
                'title' => 'Job Twinning',
                'subtitle' => 'Job Twinning als tussenstap naar hybride docentschap',
                'description' => 'In september 2015 startte een pilot Job Twinning: een laagdrempelige professionaliseringsactiviteit waarbij docenten en professionals uit het bedrijfsleven voor een aantal weken aan elkaar gekoppeld werden om van en met elkaar te leren. Wil je meer weten over Job Twinning en de resultaten van de pilot? Op deze pagina vindt je alle details.',
            ],
            [
                'id' => '8',
                'title' => 'Strategisch Beleidsplan',
                'subtitle' => 'Een gedragen strategisch beleidsplan ',
                'description' => 'Het Meridiaan College wilde een strategisch beleidsplan maken dat echt van de school is. Want, zo redeneerde het College van Bestuur, een plan waarvan iedereen zich eigenaar voelt , zal ook beter te realiseren zijn. Daarom is gekozen om het strategisch  plan 2017-2021 via co-creatie te ontwikkelen. Het CvB organiseerde een dag waarop alle betrokkenen van de vier scholen van het Meridiaan College volgens een strak format met elkaar in gesprek gingen. Samen legden zij de bouwstenen  voor de komende jaren. Benieuwd naar dit mooie verhaal? Bekijk de animatie of een van de documenten op deze pagina voor de details.',
            ],
            [
                'id' => '9',
                'title' => 'Arbo Aanpak',
                'subtitle' => 'Arbo aanpakken werkt in je voordeel',
                'description' => 'Acht jaar geleden had Winkler Prins weinig grip op de veiligheids- en gezondheidsrisico’s in school. Het bestuur zette Arbo daarom op de agenda, richtte de arbo-organisatie anders in en medewerkers werden goed opgeleid. De problemen werden stap-voor-stap opgelost en de school is nu veilig en gezond. Benieuwd naar de aanpak van Winkler Prins? Bekijk de animatie of een van de documenten op deze pagina voor de details.',
            ],
            [
                'id' => '10',
                'title' => 'Identiteit vertalen',
                'subtitle' => 'Van papier naar werkvloer',
                'description' => 'Greijdanus is een schoolbestuur met een gereformeerde identiteit. Via de gesprekkencyclus tracht Greijdanus haar identiteit, kernwaarden en doelen te vertalen naar de werkvloer. Daarbij is leren en ontwikkelen door zelfevaluatie op basis van feedback het uitgangspunt. Nieuwsgierig naar de aanpak van Greijdanus? Bekijk de animatie of een van de documenten op deze pagina.',
            ],
            [
                'id' => '11',
                'title' => 'Zin in lesgeven',
                'subtitle' => 'Route naar leraarschap voor zij-instromers',
                'description' => 'Mensen die vanuit een andere baan willen gaan lesgeven in het voortgezet onderwijs, zij-instromers, hebben niet altijd een goed beeld van het docentvak. Met de cursus ‘zin in lesgeven’ kunnen zij zich serieus oriënteren op werken in het voortgezet onderwijs. Na een aantal dagen weet de kandidaat of lesgeven iets voor hem is. Wil je meer weten over deze cursus? Bekijk de animatie of een van de documenten op deze pagina.',
            ],
            [
                'id' => '12',
                'title' => 'Bovenbestuurlijke samenwerking',
                'subtitle' => 'Bovenbestuurlijke samenwerking werkt bij PLANA',
                'description' => 'PLANA, een samenwerkingsverband van vier schoolbesturen, werd ooit opgezet om het lerarentekort op de arbeidsmarkt aan te pakken. Inmiddels werken de schoolbesturen succesvol samen op het gebied van instroom, strategische personeelsplanning, mobiliteit, professionalisering en opleiding. Meer weten over deze bovenbestuurlijke samenwerking? Bekijk de animatie of een van de documenten op deze pagina.',
            ],
            [
                'id' => '13',
                'title' => 'Sociale en fysieke veiligheid',
                'subtitle' => 'SOML neemt cursusaanbod sociale en fysieke veiligheid in eigen hand',
                'description' => 'Bij SOML, een schoolbestuur met vier scholengemeenschappen in Midden Limburg, staat veiligheid hoog op de agenda. Sinds 2016 organiseert zij cursussen voor sociale en fysieke veiligheid intern. Dat biedt verschillende voordelen.',
            ],
            [
                'id' => '14',
                'title' => 'Professionaliseringsbeleid',
                'subtitle' => 'Esprit Scholen investeert in professionalisering op alle niveaus',
                'description' => 'Professionalisering van medewerkers is van groot belang bij het bereiken van strategische doelen. Een goede aansluiting van het professionaliseringsbeleid op het strategisch beleid is daarom essentieel. Esprit Scholen, een scholengroep van 12 scholen in Amsterdam, slaagt er in om hun strategische missie en visie te vertalen in passend professionaliseringsbeleid voor al het personeel.',
            ],
            [
                'id' => '15',
                'title' => 'Opscholingstraject',
                'subtitle' => 'Van bekwaam naar bevoegd',
                'description' => 'Meer dan 10% van alle lessen in het vo en het beroepsonderwijs wordt verzorgd door docenten die (nog) niet of onvoldoende bevoegd zijn. Vooral in de tekortvakken op het VMBO blijkt dat geregeld leraren met een afgeronde Pabo-opleiding worden aangesteld. Deze leraren zijn weliswaar zeer bekwaam, maar nog niet officieel bevoegd. Verschillende hogescholen bieden een verkorte leerweg waarmee deze docenten een beperkte bevoegdheid kunnen halen. Benieuwd naar de ervaringen van deelnemers en de mogelijkheden om een verkort leertraject te volgen? Bekijk de animatie of een van de documenten op deze pagina voor de details.',
            ],
            [
                'id' => '16',
                'title' => 'Banenmarkt',
                'subtitle' => 'Comenius College zoekt Comenius Collega',
                'description' => 'In 2016 kampte het Comenius College met een groot aantal onvervulde vacatures. De traditionele werving- en selectieprocedure leverde niet voldoende op. Daarom organiseerde het Comenius College een banenmarkt, voornamelijk gericht op de tekortvakken. In deze parel leest u over de organisatie van de banenmarkt en de resultaten en krijgt u tips om zelf een banenmarkt te organiseren.',
            ],
            [
                'id' => '17',
                'title' => 'Trainees voor de klas',
                'subtitle' => 'Trainees voor de klas',
                'description' => 'In 2008 was de gemiddelde leeftijd van het lerarenkorps van het Joke Smit College 55 jaar. Daarom startte de school met het project Student wordt docent en met traineeships om het team te verjongen. De gemiddelde leeftijd op het Joke Smit College is inmiddels gedaald naar 35 jaar. Maar naast de verjonging hebben de activiteiten ook een positief effect op de dynamiek in de school: het Joke Smit College is een lerende organisatie geworden waarin medewerkers zich blijven ontwikkelen.',
            ],
        ];

          
        DB::table('pearls')->insert($pearls);
    }
}
