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
                'title' => 'Professionaliserings&shy;portaal',
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
                'title' => 'Waarderings&shy;gesprekken',
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
                'title' => 'Professionaliserings&shy;beleid',
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
            [
                'id' => '18',
                'title' => 'Leeratelier',
                'subtitle' => 'Leeratelier: samen leren over leren',
                'description' => 'Hoe leert een leerling en hoe kan het onderwijs daar het beste op aansluiten? Deze vraag staat centraal in het leeratelier dat Ons Middelbaar Onderwijs oprichtte samen met andere onderwijsorganisaties. Het leeratelier is een professionele leergemeenschap waarbij over de muren van het onderwijs heen gekeken wordt.',
            ],
            [
                'id' => '19',
                'title' => 'Generatiepact',
                'subtitle' => 'Duurzaam inzetbaar met generatiepact',
                'description' => 'Ruim 25 procent van de medewerkers op het Da Capo College is ouder dan 57 jaar. En dat brengt verschillende problemen met zich mee. Het College sloot een generatiepact op maat met 9 docenten van rond de 60 jaar. Deze medewerkers gaan minder werken voor iets minder salaris, maar wel met behoud van 100 procent pensioen. Hierdoor hebben ze een betere balans tussen belasting en hersteltijd en kunnen ze met plezier hun pensioen halen. Het ziekteverzuim is teruggedrongen en de school heeft enkele jonge docenten kunnen aannemen.',
            ],
            [
                'id' => '20',
                'title' => 'Iedereen doet mee',
                'subtitle' => 'Iedereen doet mee: medewerkers met afstand tot arbeidsmarkt aan het werk op Penta College',
                'description' => 'Bij het Penta College werken al ruim drie jaar mensen met een afstand tot de arbeidsmarkt. Ze dragen hun steentje bij als hulpconciërge, in de kantine, bij de receptie of bij het verrichten van licht administratief werk.  De medewerkers zijn niet meer weg te denken bij het Penta College. Het geeft de school een brede blik op de samenleving en de medewerkers groeien enorm in hun werk en zelfvertrouwen.',
            ],
            [
                'id' => '21',
                'title' => 'Huisacademie van Quadraam',
                'subtitle' => 'Quriuz, de huisacademie van Quadraam',
                'description' => 'Het bestuur van Quadraam, heeft permanente professionalisering hoog op de agenda staan. Omdat de organisatie zelf veel expertise in huis heeft en om de scholen en medewerkers met elkaar te verbinden, zette Quadraam een eigen huisacademie op: Quriuz. Het aanbod wordt afgestemd op de behoeftes van de medewerkers en de organisatie. In principe worden alle trainingen door eigen medewerkers gegeven. Naast up-to-date kennis zorgt Quriuz voor meer verbinding tussen de verschillende Quadraamscholen en tussen de medewerkers.',
            ],
            [
                'id' => '22',
                'title' => 'Statushouders als bèta-docent',
                'subtitle' => 'Hoogopgeleide vluchtelingen als bèta-docent',
                'description' => 'De Montessori Scholengemeenschap Amsterdam stoomt samen met de gemeente Amsterdam statushouders klaar voor bèta-docent. Zij zetten samen een traject op om het lerarentekort op te vangen en tegelijk het hoge potentieel van deze vluchtelingen te benutten. Dat levert een win-win situatie voor iedereen op.',
            ],
            [
                'id' => '23',
                'title' => 'Van PAL-student naar leraar',
                'subtitle' => 'Doorstroom van studenten met bijbaan als PAL naar lerarenopleiding',
                'description' => 'Via de Pre-U kunnen studenten van het hbo of de universiteit docenten in het middelbaar onderwijs ondersteunen bij hun taken. Een bijbaan als PAL (Persoonlijke Assistent Leraar) is voor studenten een goede manier om kennis te maken met het onderwijs. Als de student enthousiast is, stroomt deze vaak door naar een lerarenopleiding. Het levert dus zowel de student als het voortgezet onderwijs voordelen op.',
            ],
            [
                'id' => '24',
                'title' => 'Samenwerking Opleidingsschool RPO Rijnmond',
                'subtitle' => 'Opleiding ‘nieuwe stijl’ levert stevigere leraren op',
                'description' => 'Het samenwerkingsplatform Opleidingsschool RPO Rijnmond leidt al sinds 2008 nieuwe en zittende leraren op. De schoolbesturen en lerarenopleidingen in het platform werken zo hecht samen, dat het de bedoeling is dat in de nabije toekomst alle aspirant-leraren in de regio het traject gaan volgen. Ook zittende leraren en zij-instromers worden door de opleidingsschool begeleid om zo het lerarentekort gezamenlijk aan te pakken.',
            ],
            [
                'id' => '25',
                'title' => 'Mediation als HR-instrument',
                'subtitle' => 'OSG Singelland kiest voor mediation bij vastgelopen (arbeids)conflicten',
                'description' => '“Mediation kan voorkomen dat de situatie onwerkbaar wordt”

                De P&O afdeling van OSG Singelland is op dit moment bezig het ziekteverzuimbeleid om te schrijven naar gezondheidsmanagement. Dat heeft een positievere insteek en gaat uit van preventie: het voorkomen van ziekteverzuim en langdurige uitval. Sinds zo’n twee jaar zet OSG Singelland mediation in bij (arbeids)conflicten. Al meerdere keren met een positief resultaat.',
            ],
            [
                'id' => '26',
                'title' => 'Dubbele bevoegdheid',
                'subtitle' => 'Dubbele bevoegdheid als oplossing voor tekortvakken',
                'description' => 'Positief voor docenten, school én leerlingen

                De Meerwaarde stimuleert aankomende en zittende docenten om een tweede bevoegdheid te halen voor tekortvakken. En dat blijkt heel positief uit te pakken voor de docenten, de school en de leerlingen. Het tekort voor wiskunde is opgelost en docenten worden duurzamer inzetbaar en blijven continu leren en ontwikkelen.',
            ],
        ];

          
        DB::table('pearls')->insert($pearls);
    }
}
