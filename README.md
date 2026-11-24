# Trafo Logística

Landing page conceitual de portfólio para o segmento de **Logística B2B**. Marca, serviços e dados são fictícios.

**Demonstração:** Escolha de perfil de frete e rota simulada. Não há envio de dados pessoais, sistema de cadastro ou pagamento.

## Rodar localmente

Requisitos: Node.js 22+ e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000 para ver a landing page.

## Publicar

O projeto usa Next.js App Router, TypeScript e exportação estática. `npm run build` gera `out/`.
Para GitHub Pages, em **Settings → Pages**, selecione **GitHub Actions**, então execute o fluxo “Publicar demonstração no GitHub Pages”. O fluxo configura o caminho público do repositório automaticamente.
Para Vercel, importe o repositório como projeto Next.js sem definir `PAGES_BASE_PATH`.

## Funil conceitual e hipótese

A página vende clareza operacional: escolher o perfil, entender as paradas e copiar um roteiro curto para trabalhar internamente. É material ilustrativo, sem dados de cliente, cotação ou qualquer envio.

Experimento proposto para sessões consentidas: comparar texto longo e lista curta no roteiro e observar qual torna modalidade, próximo ponto e prazo mais fáceis de recuperar. A demo não tem instrumentação.
