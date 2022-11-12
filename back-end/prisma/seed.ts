import prisma from "../src/config/db.js"

async function main() {
    await prisma.admin.create({
        data:
            {
            id: 2,
            username: "admin2",
            password: "admin2"
        }
    });

}

main().catch(e => {
    console.log(e);
    process.exit(1);
  }).finally(async () => {
    await prisma.$disconnect();
  })