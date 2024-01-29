
```bash
pnpm i -g @nestjs/cli
nest new nets-rest-api
```

By writing `--no-spec` at the front of command `nest g ...` test won't add to the project

```bash
nest g controller items
nest g service items 
nest g module items 
```

# ORMs

## Mongoose

```bash
pnpm i @nestjs/mongoose mongoose
```

## Prisma

```bash
pnpm i -D @prisma
```

```bash
pnpm i @prisma/client
```

```bash
pnpm prisma init
```

```bash
pnpm prisma --help
```

### Migration

```bash
pnpm prisma migrate dev
```

```bash
pnpm prisma generate
```

### Launch UI

```bash
pnpm prisma studio
```

### Prisma Config Module

```bash
nest g module prisma --no-spec
```
