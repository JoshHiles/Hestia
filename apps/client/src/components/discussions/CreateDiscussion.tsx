import { useDisclosure } from '@mantine/hooks';

import { Button, Checkbox, Group, TextInput, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';

function CreateDiscussion() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

    const [opened, { open, close }] = useDisclosure(false);


  return (
    <>
        <Modal opened={opened} onClose={close} title="Authentication" centered>
         <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
    
  );
}