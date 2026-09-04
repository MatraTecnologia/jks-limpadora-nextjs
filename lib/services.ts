export type ServiceTier = 'critico' | 'especializado';

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tier: ServiceTier;
  summary: string;
  lead: string;
  body: string[];
  highlights: { title: string; items: string[] };
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: 'pos-incendio-limpeza',
    title: 'Limpeza pós-incêndio',
    shortTitle: 'Pós-incêndio',
    tier: 'critico',
    summary: 'Limpeza criogênica pesada com remoção total da fuligem e eliminação de odores. É a especialidade que nos tornou referência.',
    lead: 'Referência nacional em limpeza criogênica pesada pós-incêndio, com remoção total da fuligem e eliminação de odores em imóveis residenciais, comerciais e industriais.',
    body: [
      'O fogo gera calor destrutivo e deixa para trás resíduos de plástico, metal, madeira, borracha e outros componentes químicos. Em contato com produtos inadequados, esses resíduos podem formar ácidos corrosivos e causar danos à saúde de quem ocupa o imóvel.',
      'Por isso a limpeza pós-incêndio precisa ser executada por profissionais experientes. A JKS Limpadora trabalha com equipamentos específicos, equipe treinada e produtos apropriados para cada tipo de superfície, garantindo uma limpeza completa e segura.',
      'A limpeza criogênica é o nosso método principal: ela remove a fuligem sem agredir estruturas, alcança locais de difícil acesso e devolve o ambiente em condições de uso no menor prazo possível.',
    ],
    highlights: {
      title: 'Vantagens da limpeza criogênica',
      items: [
        'Processo não poluente',
        'Não deixa resíduos líquidos',
        'Alcança locais de difícil acesso',
        'Rapidez e eficácia na remoção da fuligem',
        'Eliminação de odores de queimado',
      ],
    },
    seoDescription: 'Limpeza pós-incêndio com método criogênico: remoção total de fuligem e odores em residências, empresas e indústrias. Atendimento em todo o Brasil. JKS Limpadora, desde 1990.',
  },
  {
    slug: 'pos-enchente-limpeza',
    title: 'Limpeza pós-enchente',
    shortTitle: 'Pós-enchente',
    tier: 'critico',
    summary: 'Limpeza interna e externa, retirada de móveis e entulhos e recuperação do imóvel após inundações.',
    lead: 'Equipe especializada em recuperar residências, comércios e indústrias atingidas por enchentes, reduzindo ao máximo o comprometimento causado pela inundação.',
    body: [
      'Enchentes deixam, além do trauma, a dúvida sobre como recuperar o imóvel. A água de inundação é contaminada e o contato com ela expõe as pessoas a doenças graves. O ideal é que a limpeza seja conduzida por quem tem equipamentos e proteção adequados.',
      'A JKS Limpadora atua na limpeza interna e externa do imóvel, na retirada de móveis e entulhos provenientes da enchente e na higienização das superfícies, para que o espaço volte a ser seguro.',
      'Atendemos residências, comércios, indústrias e empresas em geral, com equipe própria e maquinário específico para cada situação.',
    ],
    highlights: {
      title: 'O que fazemos',
      items: [
        'Limpeza interna e externa do imóvel',
        'Retirada de móveis e entulhos da enchente',
        'Higienização de pisos, paredes e superfícies',
        'Lavagem de carpetes encharcados',
        'Equipe com proteção adequada contra água contaminada',
      ],
    },
    seoDescription: 'Limpeza pós-enchente para residências, comércios e indústrias: limpeza interna e externa, retirada de entulhos e higienização. JKS Limpadora, atendimento em todo o Brasil.',
  },
  {
    slug: 'ambientes-pos-morte',
    title: 'Limpeza e desinfecção pós-morte',
    shortTitle: 'Ambientes pós-morte',
    tier: 'critico',
    summary: 'Limpeza, higienização e desinfecção de locais onde ocorreram mortes, homicídios ou suicídios, com discrição e respeito.',
    lead: 'Após a liberação do local pelas autoridades, realizamos a limpeza, a higienização e a desinfecção completa de ambientes onde ocorreram mortes, com discrição e técnica.',
    body: [
      'Locais onde ocorreram mortes, homicídios ou suicídios precisam ser limpos e desinfectados por profissionais preparados. Sangue, fluidos corporais e resíduos biológicos exigem produtos, equipamentos de proteção e procedimentos específicos.',
      'A JKS Limpadora conduz todo o processo com respeito às famílias e ao ambiente, deixando a área limpa, desinfectada e segura para uso novamente.',
      'O atendimento é discreto e acontece todos os dias da semana, das 7h às 21h.',
    ],
    highlights: {
      title: 'Como atuamos',
      items: [
        'Remoção de resíduos biológicos e fluidos corporais',
        'Desinfecção completa de superfícies e mobiliário',
        'Eliminação de odores',
        'Equipe com equipamentos de proteção individual',
        'Atendimento discreto, todos os dias',
      ],
    },
    seoDescription: 'Limpeza e desinfecção de ambientes pós-morte, homicídio e suicídio, com discrição e técnica. Atendimento todos os dias em todo o Brasil. JKS Limpadora.',
  },
  {
    slug: 'acumuladores-limpeza-e-higienizacao',
    title: 'Higienização de residências de acumuladores',
    shortTitle: 'Acumuladores',
    tier: 'critico',
    summary: 'Limpeza e desinfecção especializada de imóveis de acumuladores compulsivos, devolvendo o ambiente em condições seguras de uso.',
    lead: 'Técnicos certificados para limpar e desinfectar residências de acumuladores compulsivos, com produtos adequados e legalizados, devolvendo o imóvel em condições seguras de uso.',
    body: [
      'Acumuladores compulsivos guardam grandes quantidades de objetos, em geral sem utilidade, e têm dificuldade ou impossibilidade de se desfazer deles. Na fase avançada, o acúmulo inclui itens sujos e com odores fétidos, que atraem roedores e insetos.',
      'A situação coloca em risco a saúde da própria pessoa, da família e da vizinhança, e passa a ser também uma questão de limpeza e higiene sanitária.',
      'A JKS Limpadora possui técnicos certificados para efetuar a limpeza e a desinfecção especializada desses imóveis, com produtos adequados e legalizados, deixando o ambiente seguro para uso novamente.',
    ],
    highlights: {
      title: 'Como atuamos',
      items: [
        'Retirada e descarte de objetos e resíduos acumulados',
        'Limpeza pesada de todos os cômodos',
        'Desinfecção com produtos legalizados',
        'Controle de odores',
        'Atendimento respeitoso com a família',
      ],
    },
    seoDescription: 'Limpeza e higienização de residências de acumuladores compulsivos com técnicos certificados e produtos legalizados. JKS Limpadora, desde 1990.',
  },
  {
    slug: 'livros-limpeza',
    title: 'Limpeza e higienização de livros e bibliotecas',
    shortTitle: 'Livros e bibliotecas',
    tier: 'especializado',
    summary: 'Limpeza, higienização e desinsetização de acervos, com atestados de capacidade técnica emitidos por instituições federais.',
    lead: 'Limpeza, higienização e desinsetização de livros e acervos de bibliotecas, com equipe treinada e atestados de capacidade técnica emitidos por instituições de ensino.',
    body: [
      'Uma biblioteca com poeira, insetos e fungos crescendo nos livros compromete o acervo e a saúde de quem a frequenta. Os fungos se alimentam do material onde se instalam: o primeiro efeito costuma ser a produção de manchas e, com o tempo, o enfraquecimento das fibras de papéis, couros, tecidos e filmes.',
      'Para as pessoas, as consequências mais comuns são crises alérgicas e infecções em indivíduos com o sistema imunológico fragilizado. Algumas espécies de mofo podem ainda emitir toxinas.',
      'A JKS Limpadora tem uma equipe de profissionais preparada para a limpeza, a higienização e a desinsetização de livros e bibliotecas em todo o Brasil, com atestados de capacidade técnica emitidos pela Universidade Federal de São Paulo.',
    ],
    highlights: {
      title: 'O que fazemos',
      items: [
        'Limpeza livro a livro e das estantes',
        'Higienização e controle de fungos e mofo',
        'Desinsetização do acervo',
        'Atendimento a bibliotecas, arquivos e instituições',
        'Atestados de capacidade técnica de instituições federais',
      ],
    },
    seoDescription: 'Limpeza, higienização e desinsetização de livros e bibliotecas em todo o Brasil, com atestados de capacidade técnica. JKS Limpadora.',
  },
  {
    slug: 'carpetes-limpeza',
    title: 'Limpeza de carpetes',
    shortTitle: 'Carpetes',
    tier: 'especializado',
    summary: 'Carpetes normais, usados ou encharcados, inclusive em placas, com extração e secagem rápida.',
    lead: 'Limpeza e higienização de carpetes normais, usados ou encharcados, inclusive em placas, com controle de fungos e bactérias e secagem rápida à temperatura ambiente.',
    body: [
      'Deixamos seu carpete limpo e higienizado, controlando fungos e bactérias. O método que usamos não encharca, não deixa mau cheiro, descoloração ou qualquer outro dano ao carpete.',
      'O sistema de extração e pulverização evita infiltrações, que causam o apodrecimento do piso e da base do carpete, e permite secagem rápida à temperatura ambiente.',
      'A JKS Limpadora tem equipes especializadas para carpetes normais ou encharcados, em residências, escritórios e empresas.',
    ],
    highlights: {
      title: 'Diferenciais',
      items: [
        'Sistema de extração e pulverização',
        'Secagem rápida à temperatura ambiente',
        'Não encharca nem descolore',
        'Eliminação de odores',
        'Atende carpetes em placas e encharcados',
      ],
    },
    seoDescription: 'Limpeza de carpetes normais, usados e encharcados com extração, eliminação de odores e secagem rápida. JKS Limpadora, São Paulo.',
  },
  {
    slug: 'sofas-limpeza',
    title: 'Limpeza de sofás e estofados',
    shortTitle: 'Sofás e estofados',
    tier: 'especializado',
    summary: 'Estofados livres de ácaros, bactérias, fungos e manchas, com equipe especializada.',
    lead: 'Higienização profunda de sofás e estofados, removendo poeira, ácaros, bactérias e manchas que se acumulam mesmo quando o móvel parece limpo.',
    body: [
      'Mesmo sem aspecto de sujeira, estofados acumulam grande quantidade de poeira, ácaros, bactérias, escamas de pele e microrganismos que podem causar problemas de saúde, especialmente em crianças e idosos.',
      'A JKS Limpadora tem equipe de profissionais especializados para que sua casa ou empresa tenha estofados limpos, sem bactérias, fungos, manchas e sujeira.',
    ],
    highlights: {
      title: 'Benefícios',
      items: [
        'Remoção de ácaros, bactérias e fungos',
        'Remoção de manchas e odores',
        'Proteção das fibras do tecido',
        'Ambiente mais saudável para crianças e idosos',
      ],
    },
    seoDescription: 'Limpeza e higienização de sofás e estofados: remoção de ácaros, bactérias, fungos e manchas. JKS Limpadora, São Paulo.',
  },
  {
    slug: 'colchoes-limpeza',
    title: 'Higienização de colchões',
    shortTitle: 'Colchões',
    tier: 'especializado',
    summary: 'Recuperação de 80% a 100% na remoção de sujeiras e odores, com prevenção de doenças respiratórias e de pele.',
    lead: 'Limpeza e higienização de colchões que revitaliza o aspecto, elimina odores e ajuda a prevenir doenças respiratórias e de pele causadas por ácaros.',
    body: [
      'A limpeza e a higienização de colchões são fundamentais. Além de revitalizar o aspecto de limpo, ajudam a prevenir doenças respiratórias e de pele causadas por ácaros e outros microrganismos que se alimentam de suor e da descamação da pele.',
      'A higienização realizada pela JKS Limpadora deixa os colchões limpos, higienizados e cheirosos. A estimativa de recuperação é de 80% a 100% na remoção de sujeiras e odores.',
      'Limpar e conservar custa muito menos do que trocar o móvel.',
    ],
    highlights: {
      title: 'Benefícios',
      items: [
        'Remoção de manchas e odores, inclusive cheiro de mofo',
        'Proteção das fibras contra resíduos que corroem o tecido',
        'Recuperação estimada de 80% a 100%',
        'Custo-benefício em relação à troca',
      ],
    },
    seoDescription: 'Higienização de colchões com remoção de ácaros, manchas e odores. Recuperação de 80% a 100%. JKS Limpadora, São Paulo.',
  },
  {
    slug: 'divisorias-cadeiras-limpeza',
    title: 'Limpeza de divisórias e cadeiras',
    shortTitle: 'Divisórias e cadeiras',
    tier: 'especializado',
    summary: 'Mobiliário de escritórios e consultórios limpo e higienizado contra ácaros, fungos e bactérias.',
    lead: 'Serviço especializado que elimina as impurezas das fibras do tecido de divisórias e cadeiras, mantendo escritórios e consultórios com boa aparência e ambiente saudável.',
    body: [
      'Divisórias e cadeiras acumulam impurezas nas fibras do tecido. A limpeza periódica mantém a boa aparência do mobiliário para os clientes e um ambiente mais saudável para os colaboradores.',
      'A limpeza de divisórias requer profissionais especializados, com equipamentos e produtos adequados, para que a higienização seja feita corretamente e sem danos ao material.',
      'A JKS Limpadora deixa o mobiliário 100% limpo e higienizado contra ácaros, fungos e bactérias.',
    ],
    highlights: {
      title: 'Indicado para',
      items: ['Escritórios e estações de trabalho', 'Consultórios e clínicas', 'Auditórios e salas de reunião', 'Manutenção periódica de mobiliário'],
    },
    seoDescription: 'Limpeza e higienização de divisórias e cadeiras de escritórios e consultórios contra ácaros, fungos e bactérias. JKS Limpadora.',
  },
  {
    slug: 'galpoes-industriais',
    title: 'Limpeza de galpões industriais',
    shortTitle: 'Galpões industriais',
    tier: 'especializado',
    summary: 'Limpeza de obras e galpões com equipe especializada e maquinário específico para grandes áreas.',
    lead: 'Limpeza de galpões industriais e de obras com equipe de profissionais especializados e maquinário específico para grandes áreas.',
    body: [
      'Galpões industriais exigem limpeza em escala: pisos extensos, estruturas altas e resíduos de produção ou de obra. A JKS Limpadora atende com equipe própria e maquinário específico para esse tipo de serviço.',
      'Fale conosco e faça seu orçamento.',
    ],
    highlights: {
      title: 'O que fazemos',
      items: ['Limpeza pós-obra', 'Limpeza de pisos industriais', 'Remoção de resíduos e entulhos', 'Limpeza de estruturas e áreas altas'],
    },
    seoDescription: 'Limpeza de galpões industriais e pós-obra com equipe especializada e maquinário específico. JKS Limpadora, São Paulo.',
  },
  {
    slug: 'pisos-paviflex-laminados',
    title: 'Tratamento de pisos Paviflex e laminados',
    shortTitle: 'Pisos Paviflex e laminados',
    tier: 'especializado',
    summary: 'Limpeza profunda, remoção de limo, aplicação e remoção de ceras e impermeabilização.',
    lead: 'Limpeza profunda e tratamento de pisos Paviflex, laminados e outros, internos ou externos, com aplicação e remoção de ceras e impermeabilização.',
    body: [
      'A JKS Limpadora trabalha com a melhor linha de produtos e equipamentos, junto a uma equipe de profissionais com experiência em tratamento de pisos.',
      'Atendemos pisos Paviflex, laminados e outros, em áreas internas ou externas.',
    ],
    highlights: {
      title: 'Serviços',
      items: ['Limpeza profunda', 'Retirada de sujeiras diversas', 'Remoção de limo', 'Aplicação e remoção de ceras', 'Impermeabilização'],
    },
    seoDescription: 'Limpeza e tratamento de pisos Paviflex e laminados: remoção de limo, ceras e impermeabilização. JKS Limpadora, São Paulo.',
  },
];

export const criticalServices = services.filter((s) => s.tier === 'critico');
export const specializedServices = services.filter((s) => s.tier === 'especializado');
export const getService = (slug: string) => services.find((s) => s.slug === slug);
