// Dashboard.jsx
import React, { useState } from 'react';
import {
  AppShell,
  Text,
  Title,
  Button,
  Group,
  Stack,
  Grid,
  Paper,
  Badge,
  Avatar,
  Table,
  Box,
  Divider,
  ActionIcon,
  Menu,
  Input,
  SegmentedControl,
  Checkbox,
} from '@mantine/core';
import {
  IconSearch,
  IconBell,
  IconPlus,
  IconMenu2,
  IconCalendar,
  IconUser,
  IconCheck,
  IconDots,
  IconArrowRight,
  IconClock,
  IconFileText,
  IconUsers,
  IconDashboard,
  IconFolder,
  IconMessageCircle,
  IconReceipt,
  IconSettings,
  IconHelp,
} from '@tabler/icons-react';

export const Dashboard = () => {
  const [activeNavItem, setActiveNavItem] = useState('my-task');
  const [activeTab, setActiveTab] = useState('this-week');

  // Mock data
  const projects = [
    {
      id: 1,
      name: 'Help DStudio get more customers',
      assignee: { name: 'Phoenix Winters', avatar: 'https://picsum.photos/200/300?random=1' },
      comments: 2,
      attachments: 7,
      status: 'in-progress',
    },
    {
      id: 2,
      name: 'Plan a trip',
      assignee: { name: 'Cohen Merritt', avatar: 'https://picsum.photos/200/300?random=2' },
      comments: 3,
      attachments: 10,
      status: 'pending',
    },
    {
      id: 3,
      name: 'Return a package',
      assignee: { name: 'Lukas Juarez', avatar: 'https://picsum.photos/200/300?random=3' },
      comments: 8,
      attachments: 5,
      status: 'completed',
    },
  ];

  const schedule = [
    { time: '01:00 PM to 02:30 PM', title: 'Kickoff Meeting', participants: ['https://picsum.photos/200/300?random=4', 'https://picsum.photos/200/300?random=5'] },
    { time: '04:00 PM to 02:30 PM', title: 'Create Wordpress website for event Registration', participants: ['https://picsum.photos/200/300?random=6', 'https://picsum.photos/200/300?random=7'] },
    { time: '05:00 PM to 02:30 PM', title: 'Create User flow for hotel booking', participants: ['https://picsum.photos/200/300?random=8', 'https://picsum.photos/200/300?random=9'] },
  ];

  const notes = [
    { id: 1, title: 'Landing Page For Website', content: 'To get started on a landing page, could you provide a bit more detail about its purpose?', completed: false },
    { id: 2, title: 'Fixing icons with dark backgrounds', content: 'Use icons that are easily recognizable and straightforward. Avoid overly complex designs that might confuse users', completed: false },
    { id: 3, title: 'Discussion regarding userflow improvement', content: "What's the main goal of the landing page? (e.g., lead generation, product)", completed: true },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress':
        return 'green';
      case 'pending':
        return 'pink';
      case 'completed':
        return 'blue';
      default:
        return 'gray';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250 }}
      padding="md"
    >
      <AppShell.Header
        style={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
        })}
      >
        <Group justify="space-between" h="100%" px="md">
          <Group>
            <ActionIcon variant="subtle">
              <IconMenu2 size={20} />
            </ActionIcon>
            <Input
              placeholder="Search or type a command"
              leftSection={<IconSearch size={16} />}
              rightSection={<Text size="xs" c="dimmed">⌘ F</Text>}
              w={400}
              radius="md"
            />
          </Group>
          
          <Group>
            <Button 
              leftSection={<IconPlus size={16} />}
              variant="filled"
              color="blue"
            >
              New Project
            </Button>
            
            <Menu>
              <Menu.Target>
                <ActionIcon variant="subtle">
                  <IconDots size={20} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Help</Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red">Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            
            <ActionIcon variant="subtle">
              <IconBell size={20} />
            </ActionIcon>
            
            <Avatar src="https://picsum.photos/200/300?random=10" radius="xl" />
          </Group>
        </Group>
      </AppShell.Header>
      
      <AppShell.Navbar
        style={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
        })}
      >
        <div style={{ padding: '12px' }}>
          <Title order={2} fw={700}>Mondays</Title>
        </div>
        
        <div style={{ marginTop: '12px', marginBottom: '12px', padding: '0 12px' }}>
          <Stack gap="sm">
            <Button 
              variant="subtle" 
              leftSection={<IconDashboard size={18} />}
              onClick={() => setActiveNavItem('dashboard')}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
                ...(activeNavItem === 'dashboard' ? {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: 500,
                } : {})
              }}
            >
              Dashboard
            </Button>
            
            <Button 
              variant="subtle" 
              leftSection={<IconFolder size={18} />}
              onClick={() => setActiveNavItem('projects')}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
                ...(activeNavItem === 'projects' ? {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: 500,
                } : {})
              }}
            >
              Projects
            </Button>
            
            <Button 
              variant="filled" 
              leftSection={<IconFileText size={18} />}
              onClick={() => setActiveNavItem('my-task')}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
                ...(activeNavItem === 'my-task' ? {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: 500,
                } : {})
              }}
            >
              My Task
            </Button>
            
            <Button 
              variant="subtle" 
              leftSection={<IconMessageCircle size={18} />}
              onClick={() => setActiveNavItem('chats')}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
                ...(activeNavItem === 'chats' ? {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: 500,
                } : {})
              }}
            >
              Chats
            </Button>
            
            <Button 
              variant="subtle" 
              leftSection={<IconReceipt size={18} />}
              onClick={() => setActiveNavItem('documents')}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
                ...(activeNavItem === 'documents' ? {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: 500,
                } : {})
              }}
            >
              Documents
            </Button>
            
            <Button 
              variant="subtle" 
              leftSection={<IconUsers size={18} />}
              onClick={() => setActiveNavItem('receipts')}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
                ...(activeNavItem === 'receipts' ? {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: 500,
                } : {})
              }}
            >
              Receipts
            </Button>
          </Stack>
        </div>
        
        <div style={{ marginTop: '24px', marginBottom: '12px' }}>
          <Divider />
          <Group justify="space-between" style={{ padding: '8px 12px' }}>
            <Text fw={500}>Projects</Text>
            <ActionIcon variant="subtle" size="sm">
              <IconPlus size={16} />
            </ActionIcon>
          </Group>
          
          <Stack gap="xs" style={{ padding: '0 12px' }}>
            <Button 
              variant="subtle" 
              leftSection={<Box w={8} h={8} bg="pink" style={{ borderRadius: '50%' }} />}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
              }}
            >
              Event Planning
            </Button>
            
            <Button 
              variant="subtle" 
              leftSection={<Box w={8} h={8} bg="green" style={{ borderRadius: '50%' }} />}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
              }}
            >
              Breakfast Plan
            </Button>
          </Stack>
        </div>
        
        <div style={{ marginTop: 'auto', paddingBottom: '12px' }}>
          <Divider />
          <Stack gap="xs" style={{ padding: '12px 12px 0 12px' }}>
            <Button 
              variant="subtle" 
              leftSection={<IconSettings size={18} />}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
              }}
            >
              Settings
            </Button>
            
            <Button 
              variant="subtle" 
              leftSection={<IconHelp size={18} />}
              rightSection={<Badge color="blue">8</Badge>}
              style={{ 
                padding: '12px',
                borderRadius: '8px',
              }}
            >
              Help & Support
            </Button>
          </Stack>
        </div>
      </AppShell.Navbar>
      
      <AppShell.Main
        style={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        })}
      >
        <Stack gap="lg" style={{ padding: '24px' }}>
          {/* Welcome Section */}
          <Group justify="space-between">
            <Stack gap="xs">
              <Text c="dimmed" fz="sm">Thursday, 20th February</Text>
              <Title order={1}>Good Evening! John,</Title>
            </Stack>
            
            <Group>
              <Button variant="outline" leftSection={<IconArrowRight size={16} />}>
                Share
              </Button>
              <Button variant="outline" leftSection={<IconPlus size={16} />}>
                Add Task
              </Button>
            </Group>
          </Group>
          
          {/* Stats Cards */}
          <Group>
            <Paper p="sm" radius="md" withBorder>
              <Group>
                <IconClock size={20} />
                <Stack gap={0}>
                  <Text fw={700}>12hrs</Text>
                  <Text c="dimmed" fz="sm">Time Saved</Text>
                </Stack>
              </Group>
            </Paper>
            
            <Paper p="sm" radius="md" withBorder>
              <Group>
                <IconCheck size={20} />
                <Stack gap={0}>
                  <Text fw={700}>24</Text>
                  <Text c="dimmed" fz="sm">Projects Completed</Text>
                </Stack>
              </Group>
            </Paper>
            
            <Paper p="sm" radius="md" withBorder>
              <Group>
                <IconArrowRight size={20} />
                <Stack gap={0}>
                  <Text fw={700}>7</Text>
                  <Text c="dimmed" fz="sm">Projects In-progress</Text>
                </Stack>
              </Group>
            </Paper>
          </Group>
          
          {/* Projects Section */}
          <Paper withBorder radius="md" p="md">
            <Group justify="space-between" mb="md">
              <Group>
                <IconFileText size={20} />
                <Title order={3}>My Projects</Title>
                <SegmentedControl
                  value={activeTab}
                  onChange={setActiveTab}
                  data={[
                    { label: 'This Week', value: 'this-week' },
                    { label: 'This Month', value: 'this-month' },
                    { label: 'All Time', value: 'all-time' },
                  ]}
                  size="xs"
                />
              </Group>
              <Button variant="subtle" size="xs">See All</Button>
            </Group>
            
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Task Name</Table.Th>
                  <Table.Th>Assign</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {projects.map((project) => (
                  <Table.Tr key={project.id}>
                    <Table.Td>
                      <Group>
                        <IconUser size={16} />
                        <Text>{project.name}</Text>
                        <Group gap={4}>
                          <Text size="xs" c="dimmed"><IconClock size={12} /> {project.attachments}</Text>
                          <Text size="xs" c="dimmed"><IconMessageCircle size={12} /> {project.comments}</Text>
                        </Group>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <Group>
                        <Avatar src={project.assignee.avatar} size={24} />
                        <Text size="sm">{project.assignee.name}</Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <Badge 
                        color={getStatusColor(project.status)}
                        style={{ 
                          fontSize: '12px',
                          padding: '4px 8px',
                          borderRadius: '8px',
                        }}
                      >
                        {getStatusLabel(project.status)}
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
          
          {/* Schedule & Notes Section */}
          <Grid>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Paper withBorder radius="md" p="md">
                <Group justify="space-between" mb="md">
                  <Group>
                    <IconCalendar size={20} />
                    <Title order={3}>Schedule</Title>
                  </Group>
                  <ActionIcon variant="subtle">
                    <IconDots size={16} />
                  </ActionIcon>
                </Group>
                
                {/* Calendar Days */}
                <Group justify="center" mb="md">
                  {['Mo 15', 'Tu 16', 'We 17', 'Th 18', 'Fr 19', 'Sa 20', 'Su 14'].map((day, index) => (
                    <Box 
                      key={index} 
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        ...(index === 2 ? {
                          backgroundColor: '#fce4ec',
                          color: '#c2185b',
                          fontWeight: 500,
                        } : {}),
                      }}
                    >
                      <Text fz="xs" fw={index === 2 ? 500 : 400}>{day.split(' ')[0]}</Text>
                      <Text fz="xs" fw={index === 2 ? 500 : 400}>{day.split(' ')[1]}</Text>
                    </Box>
                  ))}
                </Group>
                
                {/* Schedule Items */}
                <Stack gap="sm">
                  {schedule.map((item, index) => (
                    <Group key={index} justify="space-between" align="center" style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
                      <Group>
                        <Box w={4} h={20} bg="green" style={{ borderRadius: '2px' }} />
                        <Stack gap={0}>
                          <Text fw={500}>{item.title}</Text>
                          <Text size="xs" c="dimmed">{item.time}</Text>
                        </Stack>
                      </Group>
                      <Group>
                        {item.participants.map((avatar, idx) => (
                          <Avatar key={idx} src={avatar} size={24} />
                        ))}
                        <ActionIcon variant="subtle" size="sm">
                          <IconDots size={16} />
                        </ActionIcon>
                      </Group>
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper withBorder radius="md" p="md">
                <Group justify="space-between" mb="md">
                  <Group>
                    <IconFileText size={20} />
                    <Title order={3}>Notes</Title>
                  </Group>
                </Group>
                
                <Stack gap="md">
                  {notes.map((note) => (
                    <Group key={note.id} gap="md">
                      <Checkbox 
                        checked={note.completed} 
                        onChange={() => {}}
                        size="md"
                      />
                      <Stack gap={0} flex={1}>
                        <Text fw={note.completed ? 500 : 400}>{note.title}</Text>
                        <Text size="sm" c="dimmed">{note.content}</Text>
                      </Stack>
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;