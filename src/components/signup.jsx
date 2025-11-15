import { Button, Card, TextInput, Divider, Text, Group, Title, PasswordInput } from '@mantine/core';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';

export function SignUp() {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Card>
                <Card.Section p="md" pb="xs">
                    <Title order={3}>Create an account</Title>
                    <Text size="sm" c="dimmed">
                        Enter your email below to create your account
                    </Text>
                </Card.Section>
                <Card.Section p="md" py="xs">
                    <Group justify='space-between' grow>
                        <Button variant="default" leftSection={<IconBrandGithub />}>
                            GitHub
                        </Button>
                        <Button variant="default" leftSection={<IconBrandGoogle />}>
                            Google
                        </Button>
                    </Group>
                </Card.Section>
                <Divider my="sm" label="OR CONTINUE WITH" labelPosition="center" />
                <Card.Section p="md" py="xs">
                    <TextInput label="Email" placeholder="alainnambi@gmail.com" required />
                    <PasswordInput label="Password" placeholder='***********' type="password" required mt="md" />
                </Card.Section>
                <Card.Section p="md" pt="xs">
                    <Button fullWidth>Create account</Button>
                </Card.Section>
            </Card>
        </div>

    );
}