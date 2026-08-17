# ViraChave IA

Landing Page acadêmica da **ViraChave IA**, um SaaS de inteligência artificial para corretores de imóveis autônomos. A solução atende leads no WhatsApp 24h, identifica intenção de compra, reduz curiosos e organiza visitas para que o corretor foque em vender.

## Acesse a Landing Page

**URL pública:** [projeto-vira-chave-ia-corretor-imov.vercel.app](https://projeto-vira-chave-ia-corretor-imov.vercel.app)

## Contexto acadêmico

Projeto final da disciplina **Digital Growth & AI-Driven Marketing** - MBA Impacta.

- Aluno: Lucas Wagner Pessoa Froes
- Marca: ViraChave IA
- Público: corretores de imóveis autônomos

## Proposta de conversão

O Hero replica a mensagem do anúncio Meta Ads para preservar a coerência do funil:

> Seu próximo cliente pode chegar agora

> A ViraChave IA atende e agenda visitas. Menos curiosos, mais compradores.

O único CTA da página é **“Quero testar grátis”**, repetido de forma consistente do topo ao rodapé.

## Tecnologias e performance

- HTML, CSS e JavaScript nativos
- Hero em WebP com prioridade de carregamento
- JavaScript não essencial carregado com `defer`
- Cache de assets configurado para Vercel em `vercel.json`
- Sem dependências de front-end em produção

No PageSpeed Insights, a versão publicada alcançou **100 em desempenho** nos testes Mobile e Desktop. Os relatórios também registraram 96 em acessibilidade e práticas recomendadas, pontos documentados para o próximo ciclo de otimização.

## Publicação

O projeto é estático e pode ser publicado diretamente pela Vercel:

```bash
npx vercel --prod
```

O arquivo `vercel.json` aplica cabeçalhos de cache aos arquivos em `assets/`.

## Estrutura

```text
.
├── assets/
│   ├── app.js
│   └── corretor-ia-visita-quadrada-v2.webp
├── index.html
├── vercel.json
└── README.md
```

Os PDFs, evidências do PageSpeed e arquivos-fonte das entregas acadêmicas ficam apenas em `entregas/`, fora do versionamento e do deploy público.
