import { RockEra, RealRockPhoto, CheatMealItem, CheatMealPreset, WorkoutPlan, RockQuote } from '../types';

export const ROCK_IMAGES = {
  hero: '/src/assets/images/real/the_rock_wwe_champion.jpg',
  heroAlt: '/src/assets/images/real/the_rock_hercules_2014.jpg',
  wweChampion: '/src/assets/images/real/the_rock_wwe_champion.jpg',
  wrestleMania: '/src/assets/images/real/the_rock_wrestlemania.jpg',
  classic2001: '/src/assets/images/real/the_rock_classic_2001.jpg',
  portrait2009: '/src/assets/images/real/the_rock_portrait_2009.jpg',
  hercules2014: '/src/assets/images/real/the_rock_hercules_2014.jpg',
  redCarpet: '/src/assets/images/real/the_rock_red_carpet.jpg',
  premiereSmile: '/src/assets/images/real/the_rock_premiere_smile.jpg',
  // Food & Gym visuals
  gym: '/src/assets/images/iron_paradise_gym_1793158859374.jpg',
  cheatMeal: '/src/assets/images/legendary_cheat_meal_1793158859348.jpg',
};

export const REAL_ROCK_PHOTOS: RealRockPhoto[] = [
  {
    id: 'wwe-champ',
    title: 'Campeão Mundial da WWE',
    year: '2013',
    location: 'WWE Championship Arena',
    src: ROCK_IMAGES.wweChampion,
    description: 'Foto real de Dwayne Johnson erguendo o cobiçado cinturão de ouro dos pesos pesados da WWE diante de uma arena em êxtase.'
  },
  {
    id: 'wrestlemania',
    title: 'Apoteose na WrestleMania',
    year: '2011 — 2013',
    location: 'Estádio Lotado da WWE',
    src: ROCK_IMAGES.wrestleMania,
    description: 'Registro autêntico de The Rock no ringue da WrestleMania enquanto mais de 70 mil pessoas gritam em uníssono "IF YA SMELL!".'
  },
  {
    id: 'hercules-2014',
    title: 'Premiere Mundial de Hércules',
    year: '2014',
    location: 'Sydney, Austrália',
    src: ROCK_IMAGES.hercules2014,
    description: 'Foto real tirada por Eva Rinaldi na estreia do filme épico Hércules, destacando o físico colossal construído na Iron Paradise.'
  },
  {
    id: 'attitude-era',
    title: 'Retrato Clássico The Rock',
    year: '2001',
    location: 'Estúdio WWF / WWE',
    src: ROCK_IMAGES.classic2001,
    description: 'A clássica fotografia oficial do auge da Attitude Era tirada por Jerry Avenaim, eternizando o olhar intimidador do campeão.'
  },
  {
    id: 'red-carpet',
    title: 'Carisma no Tapete Vermelho',
    year: '2018',
    location: 'Festival Internacional de Cinema',
    src: ROCK_IMAGES.premiereSmile,
    description: 'Fotografia real registrando o sorriso magnético e a elegância inconfundível de Dwayne em eventos mundiais de gala.'
  },
  {
    id: 'portrait-2009',
    title: 'Retrato Oficial Tribeca',
    year: '2009',
    location: 'Nova York, EUA',
    src: ROCK_IMAGES.portrait2009,
    description: 'Foto histórica do aclamado fotógrafo David Shankbone capturando a transição vitoriosa de The Rock para a elite de Hollywood.'
  }
];

export const ROCK_ERAS: RockEra[] = [
  {
    id: 'attitude',
    year: '1996 — 2004',
    title: 'O Campeão do Povo & Era Attitude',
    subtitle: 'Nascimento de uma Lenda nos Ringues',
    description: 'De Rocky Maivia ao wrestler mais carismático da história da WWE. Criador dos golpes mais eletrizantes do entretenimento esportivo: o lendário Rock Bottom e o People\'s Elbow.',
    highlights: [
      '10 vezes Campeão Mundial de Peso Pesado da WWE',
      'Rivalidade histórica e eletrizante com Stone Cold Steve Austin',
      'Criação da icônica levantada de sobrancelha (The People\'s Eyebrow)',
      'Mais de 70 mil pessoas nos estádios rugindo a cada bordão'
    ],
    quote: 'Finalmente... The Rock voltou para dominar a arena!',
    badge: 'WWE Legend',
    image: ROCK_IMAGES.classic2001,
    imageCaption: 'Foto real de 2001 por Jerry Avenaim no auge da Attitude Era da WWE'
  },
  {
    id: 'hollywood',
    year: '2001 — 2015',
    title: 'O Conquistador de Bilheterias',
    subtitle: 'De Escorpião Rei ao Herói de Ação Definitivo',
    description: 'Após estrear em O Retorno da Múmia, quebrou o recorde do Guinness para o maior salário em primeiro papel principal. Salvou franquias e transformou Velozes & Furiosos em um fenômeno bilionário.',
    highlights: [
      'Entrou para Velozes & Furiosos 5 como o agente Luke Hobbs',
      'Estrelou sucessos mundiais: San Andreas, Jumanji e Rampage',
      'Eleito ator mais bem pago do mundo pela Forbes consecutivamente',
      'Mais de US$ 10,5 bilhões acumulados em bilheterias globais'
    ],
    quote: 'Não existe plano B quando você decide ser o número um.',
    badge: 'Box Office King',
    image: ROCK_IMAGES.hercules2014,
    imageCaption: 'Foto real na estreia internacional de Hércules em 2014 (por Eva Rinaldi)'
  },
  {
    id: 'mogul',
    year: '2016 — Presente',
    title: 'Mogul Global & Iron Paradise',
    subtitle: 'Construindo um Império além do Cinema',
    description: 'Com apenas 7 dólares no bolso em 1995 após ser cortado da liga canadense de futebol americano, fundou a Seven Bucks Productions, a Tequila Teremana, a linha Project Rock com a Under Armour e comprou a liga XFL.',
    highlights: [
      'Fundador da Seven Bucks Productions (cinema, séries e doc)',
      'Criador da Tequila Teremana, recorde histórico de vendas',
      'Linha global Iron Paradise com fones e tênis de alta performance',
      'Rotina diária inegociável às 4h da manhã com 18 toneladas de ferro'
    ],
    quote: 'Em 1995 eu tinha 7 dólares no bolso. Sabia de duas coisas: eu estava falido e isso nunca mais iria acontecer.',
    badge: 'Seven Bucks Empire',
    image: ROCK_IMAGES.premiereSmile,
    imageCaption: 'Foto real de Dwayne em gala internacional com carisma mundial'
  },
  {
    id: 'memes',
    year: 'Eterno',
    title: 'Senhor dos Memes & WrestleMania',
    subtitle: 'A Sobrancelha, a Pochete e a Multidão em Êxtase',
    description: 'A lenda transcende as telas. A clássica foto de 1996 com gola alta preta, corrente de prata e pochete de couro virou patrimônio da humanidade. Além disso, emprestou voz e carisma ao semideus Maui em Moana e redefiniu momentos apoteóticos na WrestleMania.',
    highlights: [
      'A infame foto de gola alta e pochete com guardanapo sob o cotovelo',
      'Voz de Maui cantando o hit "You\'re Welcome" (De Nada!)',
      'O meme universal da sobrancelha sonora que quebra a internet',
      'Banquetes monumentais de domingo que desafiam a biologia humana'
    ],
    quote: 'O que posso dizer além de: De nada! (You\'re Welcome!)',
    badge: 'Pop Culture Icon',
    image: ROCK_IMAGES.wrestleMania,
    imageCaption: 'Foto real de The Rock na WrestleMania diante de milhares de torcedores'
  }
];

export const CHEAT_MEAL_ITEMS: CheatMealItem[] = [
  {
    id: 'pancakes',
    name: '12x Panquecas de Mirtilo com Xarope de Bordo',
    category: 'sweet',
    quantity: '1 torre de 30cm',
    calories: 3200,
    proteinGrams: 45,
    funFact: 'Feitas com massa aerada e regadas com 2 garrafas inteiras de Maple puro.'
  },
  {
    id: 'french_toast',
    name: '8x Fatias Grossas de Rabanada Sourdough',
    category: 'sweet',
    quantity: 'Prato monumental',
    calories: 2400,
    proteinGrams: 38,
    funFact: 'Pão de fermentação natural mergulhado em creme de canela e baunilha.'
  },
  {
    id: 'burgers',
    name: '3x Hambúrgueres Duplos com Bacon e Cheddar',
    category: 'savory',
    quantity: '3 unidades de 350g',
    calories: 3100,
    proteinGrams: 140,
    funFact: 'Carne Angus prensada na chapa com cebola caramelizada e picles.'
  },
  {
    id: 'sushi',
    name: 'Barca Imperial com 75 Peças de Sushi & Sashimi',
    category: 'savory',
    quantity: '1 barca de madeira',
    calories: 2200,
    proteinGrams: 110,
    funFact: 'O pedido favorito de domingo à noite do Dwayne assistindo esportes.'
  },
  {
    id: 'icecream',
    name: '4x Potes de Sorvete Artesanal de Pasta de Amendoim',
    category: 'dessert',
    quantity: '2 litros de puro creme',
    calories: 2800,
    proteinGrams: 52,
    funFact: 'Com pedaços macios de cookie e calda de chocolate amargo.'
  },
  {
    id: 'cookies',
    name: '8x Cookies Monstruosos Recheados de Chocolate',
    category: 'dessert',
    quantity: '8 cookies quentes',
    calories: 2100,
    proteinGrams: 28,
    funFact: 'Com massa crocante por fora e centro derretido que desafia a gravidade.'
  }
];

export const CHEAT_MEAL_PRESETS: CheatMealPreset[] = [
  {
    id: 'colossus',
    title: 'O Colosso dos Deuses',
    description: 'O clássico café da manhã pós-treino de domingo: 12 panquecas gigantes + 8 rabanadas + sorvete.',
    totalCalories: 8400,
    items: ['pancakes', 'french_toast', 'icecream'],
    rockVerdict: 'Excelente! A insulina vai ao teto, mas o Mana nas pernas na segunda-feira será devastador.'
  },
  {
    id: 'sushi_master',
    title: 'A Barca Titânica de Domingo',
    description: '75 peças de salmão fresco e atum acompanhados de 4 potes de sorvete de amendoim.',
    totalCalories: 5000,
    items: ['sushi', 'icecream'],
    rockVerdict: 'Proteína pura com ômega 3 e glicogênio para reconstruir as fibras de um semideus.'
  },
  {
    id: 'carnivore_sugar',
    title: 'O Banquete da Besta',
    description: 'Hambúrgueres triplos artesanais com bacon seguidos por cookies gigantes com gotas de chocolate.',
    totalCalories: 5200,
    items: ['burgers', 'cookies'],
    rockVerdict: 'Gordura boa, carne macia e açúcar suficiente para levantar um caminhão na Iron Paradise.'
  }
];

export const WORKOUT_PLANS: WorkoutPlan[] = [
  {
    id: 'chest',
    title: 'Peitoral de Titã & Tríceps de Ferro',
    targetGroup: 'Peito, Ombros Anteriores & Tríceps',
    duration: '85 minutos',
    intensity: 'Intensidade Extrema (4:30 AM)',
    quote: 'Não deixe o peso controlar você. Você é quem dita o ritmo da gravidade nesta sala.',
    exercises: [
      { name: 'Supino Inclinado com Halteres Pesados', sets: '4 séries', reps: '12, 10, 8, 6 reps', tip: 'Controle excêntrico de 3 segundos na descida.' },
      { name: 'Supino Reto com Barra', sets: '4 séries', reps: '8 a 10 reps', tip: 'Pausa explosiva no peito, sem quicar a barra.' },
      { name: 'Crucifixo Inclinado no Cabo (Flyes)', sets: '4 séries', reps: '15 reps', tip: 'Aperto isométrico de 2 segundos no ponto máximo.' },
      { name: 'Paralelas com Peso no Cinto (Dips)', sets: '3 séries', reps: 'Até a falha muscular', tip: 'Incline o tronco levemente para focar o peitoral inferior.' },
      { name: 'Tríceps Corda na Polia (Drop Set)', sets: '4 séries', reps: '12 + 12 reps', tip: 'Abra as cordas no final da extensão com força total.' }
    ]
  },
  {
    id: 'back',
    title: 'Costas de Prata (Silverback Protocol)',
    targetGroup: 'Dorsais, Trapézios & Rombóides',
    duration: '90 minutos',
    intensity: 'Foco Absoluto e Cargas Pesadas',
    quote: 'Uma árvore forte precisa de raízes profundas e um tronco inquebrável.',
    exercises: [
      { name: 'Barra Fixa com Pegada Aberta', sets: '4 séries', reps: 'Até a falha', tip: 'Puxe com os cotovelos, ativando a grande dorsal.' },
      { name: 'Levantamento Terra (Deadlift)', sets: '5 séries', reps: '8, 6, 4, 3, 2 reps', tip: 'Trave a respiração diafragmática e empurre o chão.' },
      { name: 'Remada Unilateral com Halter Pesado', sets: '4 séries', reps: '10 a 12 reps por braço', tip: 'Sem girar o quadril, foco no esmagamento lateral.' },
      { name: 'Puxada Alta no Pulley', sets: '4 séries', reps: '12 reps', tip: 'Alterne a pegada supinada na última repetição.' },
      { name: 'Encolhimento de Ombros com Barra (Shrugs)', sets: '4 séries', reps: '15 reps pesadas', tip: 'Segure 3 segundos no topo para construir trapézios montanhosos.' }
    ]
  },
  {
    id: 'legs',
    title: 'Pernas de Aço & Destruição de Quadríceps',
    targetGroup: 'Quadríceps, Isquiotibiais & Panturrilhas',
    duration: '95 minutos',
    intensity: 'Dia de não conseguir descer escadas',
    quote: 'Nenhum campeão constrói um palácio sobre pernas de palito de fósforo.',
    exercises: [
      { name: 'Agachamento Livre com Barra', sets: '5 séries', reps: '12, 10, 8, 6, 4 reps', tip: 'Desça abaixo dos 90 graus com postura ereta e firme.' },
      { name: 'Leg Press 45° Carregado de Anilhas', sets: '4 séries', reps: '15 a 20 reps', tip: 'Não trave os joelhos no final do movimento.' },
      { name: 'Passada Andando com Halteres (Walking Lunges)', sets: '3 voltas na academia', reps: '20 passos cada', tip: 'Joelho quase tocando o piso, queimação profunda.' },
      { name: 'Stiff com Barra para Posterior', sets: '4 séries', reps: '10 a 12 reps', tip: 'Sinta o alongamento completo dos isquiotibiais.' },
      { name: 'Elevação de Panturrilha em Pé', sets: '5 séries', reps: '20 reps lentas', tip: '2 segundos no topo, 2 segundos no ponto mais fundo.' }
    ]
  },
  {
    id: 'shoulders',
    title: 'Ombros de Canhão (Boulder Shoulders)',
    targetGroup: 'Deltoides Anterior, Lateral e Posterior',
    duration: '75 minutos',
    intensity: 'Volume Alto e Pump Eletrizante',
    quote: 'Quando você entrar na sala, seus ombros devem avisar que você chegou antes das suas palavras.',
    exercises: [
      { name: 'Desenvolvimento Sentado com Halteres', sets: '4 séries', reps: '12, 10, 8, 8 reps', tip: 'Trajetória suave sem bater os halteres no alto.' },
      { name: 'Elevação Lateral com Halteres (Triple Drop)', sets: '4 séries', reps: '10 + 10 + 10 reps', tip: 'Mantenha os cotovelos ligeiramente flexionados.' },
      { name: 'Face Pulls na Polia Alta', sets: '4 séries', reps: '15 a 20 reps', tip: 'Excelente para saúde dos manguitos e deltoide posterior.' },
      { name: 'Elevação Frontal com Disco de 20kg', sets: '3 séries', reps: '12 reps', tip: 'Suba até a linha dos olhos com controle absoluto.' }
    ]
  }
];

export const ROCK_QUOTES: RockQuote[] = [
  {
    id: 'smell',
    en: "If ya smell what The Rock is cookin'!",
    pt: "Se você cheira o que o The Rock está cozinhando!",
    context: 'O bordão mais famoso da história do entretenimento esportivo mundial.',
    audioKey: 'smell'
  },
  {
    id: 'finally',
    en: "Finally... The Rock has come back!",
    pt: "Finalmente... The Rock voltou!",
    context: 'Abertura de todos os retornos apoteóticos aos estádios e arenas.',
    audioKey: 'finally'
  },
  {
    id: 'name',
    en: "It doesn't matter what your name is!",
    pt: "Não importa qual é o seu nome!",
    context: 'Resposta clássica quando qualquer oponente tentava falar no microfone.',
    audioKey: 'name'
  },
  {
    id: 'respect',
    en: "Blood, sweat and respect. First two you give, last one you earn.",
    pt: "Sangue, suor e respeito. Os dois primeiros você entrega, o último você conquista.",
    context: 'A filosofia de vida fundamental gravada nas paredes da Iron Paradise.',
    audioKey: 'mana'
  },
  {
    id: 'worker',
    en: "Always be the hardest worker in the room.",
    pt: "Seja sempre a pessoa que mais trabalha na sala.",
    context: 'O conselho que Dwayne repete aos jovens atletas e empreendedores.',
    audioKey: 'focus'
  },
  {
    id: 'mana',
    en: "Mana is in our spirit. Lead with love, anchor in gratitude.",
    pt: "O Mana está em nosso espírito. Lidere com amor, ancore-se na gratidão.",
    context: 'Homenagem às suas raízes polinésias e à sua família samoana.',
    audioKey: 'mana'
  }
];
