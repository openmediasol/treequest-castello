const CASTELLO_DATABASE = {
    // =====================
    // CENTROS EDUCATIVOS DE CASTELLÓN
    // Fuente: Ayuntamiento de Castellón (castello.es)
    // Datos actualizados: Enero 2026
    // =====================
    schools: [
        // CEIP PÚBLICOS (36 centros)
        { id: "ceip-benadresa", name: "CEIP Benadresa", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Crta Ribesalbes, 51-YR, 12006", phone: "964 558 900", email: "12000765@edu.gva.es" },
        { id: "ceip-bernat-artola", name: "CEIP Bernat Artola", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Columbretes, 5, 12003", phone: "964 558 910", email: "12001277@edu.gva.es" },
        { id: "ceip-bisbe-climent", name: "CEIP Bisbe Climent", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ San Roque, 2, 12004", phone: "964 558 920", email: "12000832@edu.gva.es" },
        { id: "ceip-blasco-ibanez", name: "CEIP Blasco Ibáñez", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Pintor Soler Blasco, 5, 12005", phone: "964 558 930", email: "12003699@edu.gva.es" },
        { id: "ceip-carles-salvador", name: "CEIP Carles Salvador", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Mª Teresa González, 3, 12005", phone: "964 558 940", email: "12003547@edu.gva.es" },
        { id: "ceip-castalia", name: "CEIP Castàlia", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Maestro Caballero, 33, 12004", phone: "964 739 580", email: "12000844@edu.gva.es" },
        { id: "ceip-censal", name: "CEIP Censal", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Avda. Chatellerault, 6, 12005", phone: "964 738 765", email: "12004254@educ.gva.es" },
        { id: "ceip-cervantes", name: "CEIP Cervantes", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Concepción Arenal, 2, 12004", phone: "964 558 960", email: "12000819@edu.gva.es" },
        { id: "ceip-ejercito", name: "CEIP Ejército", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Lepanto, 5, 12006", phone: "964 558 970", email: "12000807@edu.gva.es" },
        { id: "ceip-el-pinar", name: "CEIP El Pinar", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Avda. de los Pinos, s/n, Grao 12100", phone: "964 738 845", email: "12006445@edu.gva.es" },
        { id: "ceip-enric-soler-godes", name: "CEIP Enric Soler i Godes", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Pintor López, s/n, 12004", phone: "964 558 980", email: "12004473@edu.gva.es" },
        { id: "ceip-enriqueta-agut", name: "CEIP Enriqueta Agut", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Villavieja, 13, 12003", phone: "964 739 500", email: "12003225@edu.gva.es" },
        { id: "ceip-estepar", name: "CEIP Estepar", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Músico Pascual Asensio Hernández, 30, 12006", phone: "964 558 990", email: "12005866@edu.gva.es" },
        { id: "ceip-fadrell", name: "CEIP Fadrell", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Cronista Revest, 27, 12005", phone: "964 739 300", email: "12001371@edu.gva.es" },
        { id: "ceip-gaeta-huguet", name: "CEIP Gaetà Huguet", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Avda. Barcelona, 6, 12004", phone: "964 739 310", email: "12004242@edu.gva.es" },
        { id: "ceip-gregal", name: "CEIP Gregal", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Gran Vía T. Monteblanco, 19, 12006", phone: "964 739 320", email: "12004461@edu.gva.es" },
        { id: "ceip-guitarrista-tarrega", name: "CEIP Guitarrista Tárrega", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Cmno. de la Ratlla, s/n, 12005", phone: "964 739 330", email: "12003705@edu.gva.es" },
        { id: "ceip-herrero", name: "CEIP Herrero", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Moyano, 6-8, 12002", phone: "964 739 340", email: "12001368@edu.gva.es" },
        { id: "ceip-illes-columbretes", name: "CEIP Illes Columbretes", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Cmno. dels Mestrets, 2, 12004", phone: "964 739 350", email: "12003493@edu.gva.es" },
        { id: "ceip-isabel-ferrer", name: "CEIP Isabel Ferrer", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Cmno. La Plana, 11, 12004", phone: "964 739 360", email: "12004321@edu.gva.es" },
        { id: "ceip-isidoro-andres", name: "CEIP Isidoro Andrés Villarroya", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Rio Volga, 20, 12005", phone: "964 739 370", email: "12000790@edu.gva.es" },
        { id: "ceip-jaume-i", name: "CEIP Jaume I", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "Cmno. Viejo Alcora, 15, 12006", phone: "964 739 380", email: "12001356@edu.gva.es" },
        { id: "ceip-juan-ripolles", name: "CEIP Juan G. Ripollés", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Rio Adra, 3, 12006", phone: "964 739 390", email: "12007051@edu.gva.es" },
        { id: "ceip-la-marina", name: "CEIP La Marina", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ De la Marinería, s/n, Grao 12100", phone: "964 739 710", email: "12000856@edu.gva.es" },
        { id: "ceip-lilla", name: "CEIP L'Illa", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Alqueria, 31, Grao 12100", phone: "964 739 720", email: "12003559@edu.gva.es" },
        { id: "ceip-manel-garcia-grau", name: "CEIP Manel Garcia Grau", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Ceramista Manolo Safont, 4, 12006", phone: "964 558 460", email: "12006731@edu.gva.es" },
        { id: "ceip-mestre-armelles", name: "CEIP Mestre Antonio Armelles", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ L'Illa Baleato, 34, 12006", phone: "964 739 510", email: "12000868@edu.gva.es" },
        { id: "ceip-mestre-canos", name: "CEIP Mestre Canós Sanmartín", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Tenerías, 40, 12003", phone: "964 739 520", email: "12000820@edu.gva.es" },
        { id: "ceip-mestre-carles-selma", name: "CEIP Mestre Carles Selma", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Tossal del Rey, s/n, 12006", phone: "964 739 530", email: "12001502@edu.gva.es" },
        { id: "ceip-mestre-vicent-artero", name: "CEIP Mestre Vicent Artero", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Pintor Sorolla, 16, 12006", phone: "964 739 540", email: "12003882@edu.gva.es" },
        { id: "ceip-pintor-castell", name: "CEIP Pintor Castell", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Ceramista Godofredo Buenosaires, 18, 12005", phone: "964 739 550", email: "12004333@edu.gva.es" },
        { id: "ceip-san-agustin", name: "CEIP San Agustín", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ La Escuela, s/n, 12004", phone: "964 739 560", email: "12000777@edu.gva.es" },
        { id: "ceip-sanchis-yago", name: "CEIP Sanchis Yago", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Germán Mozón i Gamón, s/n, 12003", phone: "964 739 570", email: "12003471@edu.gva.es" },
        { id: "ceip-sebastian-elcano", name: "CEIP Sebastián Elcano", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Magallanes, 10, Grao 12100", phone: "964 739 730", email: "12001401@edu.gva.es" },
        { id: "ceip-tombatossals", name: "CEIP Tombatossals", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ Dr. Juan Bautista Palomo Martí, 102, 12004", phone: "964 739 590", email: "12006585@edu.gva.es" },
        { id: "ceip-vicent-marca", name: "CEIP Vicent Marçà", type: "público", level: "infantil-primaria", points: 0, active: false,
          address: "C/ José María Mulet Ortiz, 3, 12006", phone: "964 726 850", email: "12008028@edu.gva.es" },

        // COLEGIOS CONCERTADOS (7 centros)
        { id: "col-escuelas-pias", name: "Colegio Escuelas Pías", type: "concertado", level: "infantil-eso", points: 0, active: false,
          address: "Pza Escuelas Pías, 27, 12002", phone: "964 211 300", email: "secretaria.castellon@escolapiosbetania.es" },
        { id: "col-grans-menuts", name: "Colegio Grans i Menuts", type: "concertado", level: "infantil-primaria", points: 0, active: false,
          address: "Partida Marrada - Cuadra la Torta, 4, 12006", phone: "964 202 425", email: "secretaria@gransimenuts.com" },
        { id: "col-lope-castellon", name: "Colegio Lope Castellón", type: "concertado", level: "infantil-eso", points: 0, active: false,
          address: "C/ Ricardo Catalá, 36-38, 12006", phone: "964 340 711", email: "info@lope-castellon.es" },
        { id: "col-consolacion", name: "Colegio Ntra. Sra. de la Consolación", type: "concertado", level: "infantil-bachillerato", points: 0, active: false,
          address: "Av. Virgen del Lidón, 49, 12003", phone: "964 220 700", email: "direcciontitular@consolacioncas.org" },
        { id: "col-ramiro-izquierdo", name: "Centro Ramiro Izquierdo", type: "concertado", level: "infantil-eso", points: 0, active: false,
          address: "Camino Caminás, 82, 12003", phone: "964 270 368", email: "cramiroizquierdo@hotmail.com" },
        { id: "col-madre-vedruna", name: "Colegio Madre Vedruna Sagrado Corazón", type: "concertado", level: "infantil-bachillerato", points: 0, active: false,
          address: "Av. Casalduch, 25, 12005", phone: "964 222 762", email: "afa@afavedruna.es" },
        { id: "col-mater-dei", name: "Mater Dei Castellón", type: "concertado", level: "infantil-bachillerato", points: 0, active: false,
          address: "Ctra. Nac. 340, km 9,7, 12006", phone: "964 398 528", email: "info@materdei.es" },

        // IES PÚBLICOS (12 centros)
        { id: "ies-bovalar", name: "IES Bovalar", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "C/ Ceramista Manolo Safont, 2, 12006", phone: "964 399 015", email: "12005799@edu.gva.es" },
        { id: "ies-caminas", name: "IES El Caminàs", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "C/ Pintor Soler Blasco, 3, 12005", phone: "964 738 995", email: "12004217@edu.gva.es" },
        { id: "ies-cremor", name: "IES Crémor", type: "público", level: "eso-fp", points: 0, active: false,
          address: "Camino Cuadra del Borriolenc, s/n, 12006", phone: "964 379 340", email: "12008521@edu.gva.es" },
        { id: "ies-francesc-ribalta", name: "IES Francesc Ribalta", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "Av. Rey D. Jaime, 35, 12001", phone: "964 738 965", email: "12001228@edu.gva.es" },
        { id: "ies-juan-bautista-porcar", name: "IES Juan Bautista Porcar", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "C/ Herrero, 76, 12005", phone: "964 739 285", email: "12005374@edu.gva.es" },
        { id: "ies-la-plana", name: "IES La Plana", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "Camino La Plana, 13, 12003", phone: "964 399 005", email: "12005738@edu.gva.es" },
        { id: "ies-matilde-salvador", name: "IES Matilde Salvador", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "Av. Casalduch, 120, 12005", phone: "964 738 990", email: "12005261@edu.gva.es" },
        { id: "ies-miquel-peris", name: "IES Miquel Peris i Segarra", type: "público", level: "eso-fp", points: 0, active: false,
          address: "Av. del Mar, 431, Grao 12100", phone: "964 739 275", email: "12003997@edu.gva.es" },
        { id: "ies-penyagolosa", name: "IES Penyagolosa", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "C/ Moncofa, 5, 12003", phone: "964 738 970", email: "12001231@edu.gva.es" },
        { id: "ies-politecnico", name: "IES Politécnico", type: "público", level: "eso-fp", points: 0, active: false,
          address: "C/ Cantó de Castàlia, 1, 12006", phone: "964 738 975", email: "12001307@edu.gva.es" },
        { id: "ies-sos-baynat", name: "IES Sos Baynat", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "C/ Moncofa, 3, 12003", phone: "964 739 270", email: "12003523@edu.gva.es" },
        { id: "ies-vicent-castell", name: "IES Vicent Castell i Doménech", type: "público", level: "eso-bachillerato", points: 0, active: false,
          address: "C/ L'Illa Baleato, 18, 12006", phone: "964 739 280", email: "12004205@edu.gva.es" },

        // COLEGIOS PRIVADOS (5 centros)
        { id: "col-agora-lledo", name: "Agora Lledó International School", type: "privado", level: "infantil-bachillerato", points: 0, active: false,
          address: "Cno. Caminàs, 175, 12004", phone: "964 723 170", email: "info@lledo.edu.es" },
        { id: "col-san-cristobal", name: "Colegio San Cristóbal", type: "privado", level: "infantil-bachillerato", points: 0, active: false,
          address: "C/ San Jorge del Maestrazgo, 2-4, 12003", phone: "964 228 758", email: "info@sancristobalsl.com" },
        { id: "col-la-magdalena", name: "Colegio La Magdalena", type: "privado", level: "infantil-eso", points: 0, active: false,
          address: "Partida La Magdalena, s/n, 12005", phone: "964 398 474", email: "info@colegiolamagdalena.com" },
        { id: "col-elians-british", name: "Elian's British School", type: "privado", level: "infantil-bachillerato", points: 0, active: false,
          address: "Ronda Norte de Circunvalación, 346, 12004", phone: "964 261 241", email: "recepcioncastellon@iepgroup.es" },
        { id: "col-quatre-camins", name: "Quatre Camins", type: "privado", level: "infantil-primaria", points: 0, active: false,
          address: "Av. Vila-Real, 50, 12006", phone: "616 611 300", email: "info@quatrecamins.com" }
    ],

    // =====================
    // PARQUES DE CASTELLÓN
    // =====================
    parks: [
        { 
            id: "sensal", 
            name: "Parque Sensal", 
            description: "Jardín botánico moderno con especies exóticas y colecciones temáticas.",
            location: "Avenida Sensal",
            area: "28.500 m²"
        },
        { 
            id: "ribalta", 
            name: "Parque Ribalta", 
            description: "BIC Histórico, pulmón romántico de la ciudad inaugurado en 1876.",
            location: "Centro histórico",
            area: "42.000 m²"
        },
        { 
            id: "pinar", 
            name: "El Pinar", 
            description: "Gran bosque de pinos junto al Grao, área natural de recreo.",
            location: "Grao de Castellón",
            area: "89.000 m²"
        },
        { 
            id: "litoral", 
            name: "Parque Litoral", 
            description: "Vegetación adaptada a la salinidad y dunas costeras.",
            location: "Litoral norte",
            area: "35.000 m²"
        },
        { 
            id: "royo", 
            name: "Parque Geólogo José Royo", 
            description: "Parque con paseo junto al río, conocido por sus jacarandas.",
            location: "Riberas del río Millars",
            area: "52.000 m²"
        },
        {
            id: "auditorio",
            name: "Parque Auditorio",
            description: "Parque urbano con vistas al mar, zona de ocio y esparcimiento.",
            location: "Zona de Benicassim",
            area: "18.500 m²"
        },
        {
            id: "comunicaciones",
            name: "Parque Comunicaciones",
            description: "Parque de barrio con equipamientos públicos y zonas verdes.",
            location: "Avenida de las Comunicaciones",
            area: "22.000 m²"
        },
        {
            id: "merida",
            name: "Parque Mérida",
            description: "Espacio verde de recreo con instalaciones deportivas.",
            location: "Zona de Mérida",
            area: "31.000 m²"
        },
        {
            id: "meridiano",
            name: "Parque Meridiano",
            description: "Parque con vegetación mediterránea adaptada al clima local.",
            location: "Paseo Meridiano",
            area: "19.000 m²"
        },
        {
            id: "panderola",
            name: "Parque Panderola",
            description: "Área verde natural con senderos y espacios para la biodiversidad.",
            location: "Zona de Panderola",
            area: "45.000 m²"
        },
        {
            id: "pontdeferro",
            name: "Parque Pont de Ferro",
            description: "Parque junto al puente histórico, con paseos junto al agua.",
            location: "Riberas del río",
            area: "26.000 m²"
        },
        {
            id: "rafalafena",
            name: "Parque Rafalafena",
            description: "Espacio verde comunitario con vegetación nativa y senderos.",
            location: "Zona de Rafalafena",
            area: "38.000 m²"
        }
    ],
    speciesMapping: {
        // Parque Sensal
        "Phytolacca dioica": { name: "Ombú", qty: 1, park: "Parque Sensal", sponsor: "Ángel Gallardo", rarity: "Legendario" },
        "Ceratonia siliqua": { name: "Algarrobo", qty: 62, park: "Parque Sensal", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Cupressus sempervirens": { name: "Ciprés Común", qty: 28, park: "Parque Sensal", sponsor: "Biozeo", rarity: "Común" },
        "Lagerstroemia indica": { name: "Lilo de Indias", qty: 15, park: "Parque Sensal", sponsor: "OpenMS", rarity: "Raro" },
        "Washingtonia robusta": { name: "Palmera Washingtonia", qty: 12, park: "Parque Sensal", sponsor: "Biozeo", rarity: "Común" },
        
        // Parque Ribalta
        "Celtis australis": { name: "Almez", qty: 144, park: "Parque Ribalta", sponsor: "OpenMS", rarity: "Común" },
        "Platanus x hispanica": { name: "Plátano de Sombra", qty: 89, park: "Parque Ribalta", sponsor: "Ayto Castelló", rarity: "Común" },
        "Cedrus libani": { name: "Cedro del Líbano", qty: 8, park: "Parque Ribalta", sponsor: "OpenMS", rarity: "Raro" },
        "Magnolia grandiflora": { name: "Magnolia", qty: 22, park: "Parque Ribalta", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Quercus ilex": { name: "Encina", qty: 34, park: "Parque Ribalta", sponsor: "Ayto Castelló", rarity: "Común" },
        "Ficus carica": { name: "Higuera", qty: 5, park: "Parque Ribalta", sponsor: "OpenMS", rarity: "Infrecuente" },
        
        // Parque El Pinar
        "Pinus pinea": { name: "Pino Piñonero", qty: 2378, park: "El Pinar", sponsor: "Biozeo", rarity: "Común" },
        "Pinus halepensis": { name: "Pino Carrasco", qty: 1245, park: "El Pinar", sponsor: "Ayto Castelló", rarity: "Común" },
        "Juniperus oxycedrus": { name: "Enebro", qty: 156, park: "El Pinar", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Tetraclinis articulata": { name: "Sándalo", qty: 23, park: "El Pinar", sponsor: "Biozeo", rarity: "Raro" },
        
        // Parque Litoral
        "Atriplex halimus": { name: "Atriplex Halófita", qty: 234, park: "Parque Litoral", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Ephedra nevadensis": { name: "Efedra", qty: 145, park: "Parque Litoral", sponsor: "OpenMS", rarity: "Raro" },
        "Suaeda vera": { name: "Suaeda", qty: 189, park: "Parque Litoral", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Ammophila arenaria": { name: "Barrón", qty: 456, park: "Parque Litoral", sponsor: "Ayto Castelló", rarity: "Común" },
        
        // Parque Geólogo José Royo
        "Jacaranda mimosifolia": { name: "Jacaranda", qty: 24, park: "Parque Geólogo José Royo", sponsor: "OpenMS", rarity: "Raro" },
        "Acacia dealbata": { name: "Acacia", qty: 18, park: "Parque Geólogo José Royo", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Sambucus nigra": { name: "Saúco", qty: 12, park: "Parque Geólogo José Royo", sponsor: "OpenMS", rarity: "Infrecuente" },
        "Populus alba": { name: "Álamo Blanco", qty: 16, park: "Parque Geólogo José Royo", sponsor: "Ayto Castelló", rarity: "Común" },
        "Salix alba": { name: "Sauce Blanco", qty: 14, park: "Parque Geólogo José Royo", sponsor: "OpenMS", rarity: "Común" },
        
        // Parque Auditorio
        "Nerium oleander": { name: "Adelfa", qty: 67, park: "Parque Auditorio", sponsor: "Biozeo", rarity: "Común" },
        "Pistacia lentiscus": { name: "Lentisco", qty: 45, park: "Parque Auditorio", sponsor: "OpenMS", rarity: "Infrecuente" },
        "Arbutus unedo": { name: "Madroño", qty: 28, park: "Parque Auditorio", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Rhamnus alaternus": { name: "Aladierno", qty: 34, park: "Parque Auditorio", sponsor: "Ayto Castelló", rarity: "Común" },
        
        // Parque Comunicaciones
        "Acer negundo": { name: "Arce Negundo", qty: 56, park: "Parque Comunicaciones", sponsor: "OpenMS", rarity: "Común" },
        "Fraxinus angustifolia": { name: "Fresno", qty: 38, park: "Parque Comunicaciones", sponsor: "Biozeo", rarity: "Común" },
        "Liquidambar styraciflua": { name: "Liquidámbar", qty: 22, park: "Parque Comunicaciones", sponsor: "OpenMS", rarity: "Infrecuente" },
        "Tilia platyphyllos": { name: "Tilo", qty: 18, park: "Parque Comunicaciones", sponsor: "Biozeo", rarity: "Infrecuente" },
        
        // Parque Mérida
        "Catalpa bignonioides": { name: "Catalpa", qty: 31, park: "Parque Mérida", sponsor: "OpenMS", rarity: "Infrecuente" },
        "Koelreuteria paniculata": { name: "Koelreuteria", qty: 24, park: "Parque Mérida", sponsor: "Biozeo", rarity: "Raro" },
        "Hibiscus syriacus": { name: "Hibisco Sirio", qty: 42, park: "Parque Mérida", sponsor: "OpenMS", rarity: "Común" },
        "Spiraea cantoniensis": { name: "Espirea", qty: 19, park: "Parque Mérida", sponsor: "Biozeo", rarity: "Infrecuente" },
        
        // Parque Meridiano
        "Cupressus arizonica": { name: "Ciprés de Arizona", qty: 46, park: "Parque Meridiano", sponsor: "Ayto Castelló", rarity: "Común" },
        "Pinus sylvestris": { name: "Pino Silvestre", qty: 35, park: "Parque Meridiano", sponsor: "OpenMS", rarity: "Infrecuente" },
        "Abies alba": { name: "Abeto Blanco", qty: 12, park: "Parque Meridiano", sponsor: "Biozeo", rarity: "Raro" },
        "Thuja occidentalis": { name: "Tuya", qty: 28, park: "Parque Meridiano", sponsor: "OpenMS", rarity: "Común" },
        
        // Parque Panderola
        "Ulmus minor": { name: "Olmo Común", qty: 58, park: "Parque Panderola", sponsor: "Ayto Castelló", rarity: "Infrecuente" },
        "Castanea sativa": { name: "Castaño", qty: 16, park: "Parque Panderola", sponsor: "OpenMS", rarity: "Infrecuente" },
        "Sorbus aucuparia": { name: "Serbal", qty: 22, park: "Parque Panderola", sponsor: "Biozeo", rarity: "Raro" },
        "Prunus avium": { name: "Cerezo Silvestre", qty: 19, park: "Parque Panderola", sponsor: "OpenMS", rarity: "Infrecuente" },
        
        // Parque Pont de Ferro
        "Acer campestre": { name: "Arce Común", qty: 41, park: "Parque Pont de Ferro", sponsor: "Biozeo", rarity: "Infrecuente" },
        "Sambucus ebulus": { name: "Saúco Herbáceo", qty: 35, park: "Parque Pont de Ferro", sponsor: "OpenMS", rarity: "Raro" },
        "Hedera helix": { name: "Hiedra Común", qty: 67, park: "Parque Pont de Ferro", sponsor: "Ayto Castelló", rarity: "Común" },
        "Vitis vinifera": { name: "Vid Silvestre", qty: 28, park: "Parque Pont de Ferro", sponsor: "OpenMS", rarity: "Infrecuente" },
        
        // Parque Rafalafena
        "Ilex aquifolium": { name: "Acebo", qty: 33, park: "Parque Rafalafena", sponsor: "Biozeo", rarity: "Raro" },
        "Laurus nobilis": { name: "Laurel", qty: 47, park: "Parque Rafalafena", sponsor: "OpenMS", rarity: "Común" },
        "Buxus sempervirens": { name: "Boj", qty: 89, park: "Parque Rafalafena", sponsor: "Ayto Castelló", rarity: "Común" },
        "Taxus baccata": { name: "Tejo", qty: 7, park: "Parque Rafalafena", sponsor: "Biozeo", rarity: "Raro" }
    }
};
