# GraphQL Node.js + TypeScript

Projeto simples para estudo de GraphQL utilizando Node.js, TypeScript e Apollo Server.

## Instalação

```bash
npm init -y
npm install @apollo/server graphql typescript ts-node
npm install -D @types/node nodemon
```

## Estrutura

```text
graphql-node/
├── graphql.ts              # Servidor Apollo (schema, resolvers e inicialização)
├── tsconfig.json           # Configuração do TypeScript
├── package.json            # Configuração do projeto (npm init -y)
└── package-lock.json       # Lock de dependências
```

## Scripts (package.json)

```json
{
  "main": "graphql.ts",
  "scripts": {
    "dev": "nodemon graphql.ts",
    "build": "tsc",
    "start": "node graphql.ts --nowarnings"
  }
}
```

## Como executar

```bash
npm run dev     # Desenvolvimento
npm run build   # Compilação TypeScript
npm start       # Execução do servidor
```