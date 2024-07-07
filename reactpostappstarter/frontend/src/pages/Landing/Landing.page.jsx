import { Container, Title, Text, Button, Paper, useMantineTheme } from '@mantine/core';

const LandingPage = () => {
  const theme = useMantineTheme();

  return (
    <Container size="sm" padding="md">
      <Paper shadow="xs" padding="lg" style={{ marginBottom: theme.spacing.xl }}>
        <Title order={1}>Where photos go to be appreciated</Title>
              </Paper>

      <Title order={2}>Login today and start sharing your photos</Title>
      
      <Text style={{ fontStyle: 'italic' }}>
        Rated the best place to post your photos by the New York Times, The Guardian, the Wall Street Journal, You, and me.
    </Text>

     
    </Container>
  );
};

export default LandingPage;