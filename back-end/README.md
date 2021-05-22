## Environment application

```
Criar arquivo .env com o conteudo disponível no arquivo `.env.example`.
```

## Environment prisma

```
Criar arquivo .env na pasta prisma com o conteudo disponível no arquivo `.env.example`.
```

## Passos para executar

```
Instalar dependencias: yarn
Para executar postgresql e redis: docker-compose up -d
Executar prisma cliente: npx prisma generate
Executar migrations: npx prisma migrate dev
Executar server: yarn start:dev
Acessar: http://localhost:9000/graphql
```
