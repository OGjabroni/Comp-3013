import { db, prisma } from "@/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

const deleteBlock = async (id: string) => {
  'use server';

  await prisma.block.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
};

export default async function BlocksPage() {
  const blocks = await db.block.findMany();
  const renderedBlocks = blocks.map((block) => {
    return (
      <Link
        key={block.id}
        className="flex justify-between items-center p-2 border rounded"
        href={`/blocks/${block.id}`}
      >
        <div>{block.title}</div>
        <div>View</div>
        <Link href={`/posts/${block.id}`}>Go To</Link> |{' '}
              <Link href={`/posts/${block.id}/edit`}>Edit</Link> |{' '}
              <form action={deleteBlock.bind(null, block.id)}>
                <button type="submit">Delete</button>
              </form>

      </Link>
    );
  });
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h2 className="text-xl font-bold">Blocks</h2>
        <Link href="/blocks/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedBlocks}</div>
    </div>
  );
}
