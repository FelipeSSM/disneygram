import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.post.upsert({
    where: { titulo: 'Titulo 1' },
    update: {},
    create: {
      titulo: 'Titulo 1',
      descricao: 'post teste 1',
      corpo: 'corpo do post 1 aleatorio lorem ipsun sla oq',
      publicado: true,
    },
  });

  const post2 = await prisma.post.upsert({
    where: { titulo: 'Titulo 2' },
    update: {},
    create: {
      titulo: 'Titulo 2',
      descricao: 'post teste 2',
      corpo: 'corpo do post 2 aleatorio lorem ipsun sla oq',
      publicado: false,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
