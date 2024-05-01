# mediumclone

-- Backend:

Steps:

1. Backend :

- npm create hono@latest - cloudflare workers doesn't support express. it supports hono which uses nodeJS under hood.
- created NeonDB credentials.
- For connection pooling through prisma ORM, cloudflare workers doesn't work directly with prisma ORM. We have to go use Prisma Accelerate to allow cloudflare workers to use connection pooling and work with Prisma ORM. Prisma accelerate provides global database cache and scalable connection pool.
- We get NeonDB Connection DB String and put the string in Prisma accelerate and Enable Prisma accelerate for connection pooling and work with Prisma ORM and generate API KEY for Prisma Accelerate. Put Neon DB URL in .env which will be used by prisma CLI.
- For CLI, we need DB URL in .env and for cloudflare worker (Hono App) to have connection pooling, we put PRISMA ACCELERATE API KEY IN WRANGER.TOML.
- npx prisma migrate dev --name init_schema
- npx prisma generate // to generate prisma client.
