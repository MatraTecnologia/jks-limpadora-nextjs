export const site = {
  name: 'JKS Limpadora',
  persona: 'Rei da Limpeza',
  since: 1990,
  url: 'https://www.jkslimpadora.com.br',
  description:
    'Limpeza técnica pós-incêndio, pós-enchente, ambientes pós-morte, acumuladores e higienização especializada. Equipe própria, atuação em todo o Brasil, atendimento todos os dias das 7h às 21h. Desde 1990.',
  address: {
    street: 'Rua Ilha da Juventude, 90',
    complement: 'Bloco A, Conjunto 12',
    district: 'Jaraguá',
    city: 'São Paulo',
    state: 'SP',
    zip: '02820-000',
  },
  phones: [
    { label: '(11) 3975-4633', href: 'tel:+551139754633' },
    { label: '(11) 4203-1438', href: 'tel:+551142031438' },
  ],
  whatsapp: [
    { name: 'Sr. João', number: '5511960405313', label: '(11) 96040-5313' },
    { name: 'Sra. Helena', number: '5511995302648', label: '(11) 99530-2648' },
    { name: 'Sr. Carlos', number: '5511991233530', label: '(11) 99123-3530' },
  ],
  hours: 'Segunda a domingo, das 7h às 21h',
  hoursShort: '7h às 21h, todos os dias',
  social: {
    instagram: 'https://www.instagram.com/jkslimpadora_reidalimpeza',
    facebook: 'https://www.facebook.com/jkslimpadora.reidalimpeza',
    youtube: 'https://www.youtube.com/channel/UCXLJkEUehOs-ZF6nJKBcfAA',
    linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-passos-b3546a65',
  },
  video: 'https://www.canva.com/design/DAGD2PVCT9U/3EF7CXSIQSNJSfoET0SB6A/watch',
};

export const defaultMessage = 'Olá, gostaria de solicitar um orçamento com a JKS Limpadora.';

export const waLink = (number: string, text: string = defaultMessage) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

export const mainWhatsapp = site.whatsapp[0];

export const fullAddress = `${site.address.street}, ${site.address.complement} · ${site.address.district}, ${site.address.city} - ${site.address.state} · CEP ${site.address.zip}`;

export const mapsEmbed =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(`${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`) +
  '&output=embed';
