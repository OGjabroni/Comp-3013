import { TextInput, Button, Group, Box, Textarea } from '@mantine/core';
import DOMAIN from '../../services/endpoint';
import axios from 'axios';
import { useForm } from '@mantine/form';
import { useNavigate, useLoaderData } from 'react-router-dom';

export function EditPost() {
  const navigate = useNavigate();
  const postDetails = useLoaderData();
  const form = useForm({
    initialValues: {
      id: postDetails.id,
      title: postDetails.title,
      category: postDetails.category,
      image: postDetails.image,
      content: postDetails.content,
    },
  });

  const handleSubmit = async (values) => {
    const res = await axios.put(`${DOMAIN}/api/posts/${values.id}`, values);
    if (res?.status === 200 && res.data) {
      navigate(`/posts/${values.id}`);
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Title" {...form.getInputProps('title')} />
        <TextInput label="Category" {...form.getInputProps('category')} />
        <TextInput label="Image" {...form.getInputProps('image')} />
        <Textarea
          label="Content"
          maxRows={5}
          {...form.getInputProps('content')}
        />

        <Group position="right" mt="md">
          <Button type="submit">
            Update!
          </Button>
          <Button
            type="button"
            onClick={() => navigate(`/posts/${postDetails.id}`)}
          >
            Cancel
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export const postContentLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};
