import Link from 'next/link'
import { notFound, redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';



const updatePost = async (formData: FormData) => {
  'use server';

  const id = formData.get('id') as string;
  const name = formData.get('name') as string;

  await prisma.post.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  revalidatePath('/');
  redirect('/');
};

type BlockPageProps = {
  params: {
    postId: string;
  };
};

const BlockPage = async ({ params }: BlockPageProps) => {
  const post = await prisma.post.findUnique({
    where: {
      id: params.blockId,
    },
  });

  if (!block) {
    return notFound();
  }

  return (
    <form action={updateBlock}>
      <input type="hidden" name="id" value={block.id} />
      <input
        type="text"
        name="code"
        placeholder="code"
        defaultValue={block.code}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default BlockPage;