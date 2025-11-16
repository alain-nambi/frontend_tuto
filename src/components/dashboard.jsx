import {
  AppShell,
  Text,
  Burger,
  useMantineTheme,
  Group,
  ActionIcon,
  Box,
  NavLink,
  Avatar,
  Badge,
  Card,
  Grid,
  Stack,
  Title,
  Paper,
  Progress,
  RingProgress,
  ScrollArea,
  Divider,
  Button,
  Modal,
  TextInput,
  Select,
  MultiSelect,
  NumberInput,
  Switch,
  Checkbox,
  Slider,
  Timeline,
  Tooltip,
  Indicator,
  Menu,
  Notification,
  Alert,
  ThemeIcon,
  Skeleton,
  LoadingOverlay,
  useDisclosure,
  createStyles,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import {
  IconHome,
  IconGauge,
  IconCalendar,
  IconUser,
  IconSettings,
  IconLogout,
  IconChevronRight,
  IconBell,
  IconSearch,
  IconPlus,
  IconChartBar,
  IconUsers,
  IconFileText,
  IconShoppingCart,
  IconCurrencyDollar,
  IconTrendingUp,
  IconMessage,
  IconReport,
  IconActivity,
  IconClock,
  IconCheck,
  IconX,
  IconInfoCircle,
  IconStar,
  IconHeart,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBuilding,
  IconBriefcase,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconDownload,
  IconUpload,
  IconEdit,
  IconTrash,
  IconShare,
  IconEye,
  IconFilter,
  IconSortAscending,
  IconSortDescending,
  IconRefresh,
  IconHelp,
  IconQuestionMark,
  IconShield,
  IconLock,
  IconUnlock,
  IconKey,
  IconPassword,
  IconUserPlus,
  IconUserMinus,
  IconUserCheck,
  IconUserOff,
  IconUserCircle,
  IconUserSquare,
  IconUserHexagon,
  IconUserPin,
  IconUserScan,
  IconUserSearch,
  IconUserX,
  IconUserShield,
  IconUserStar,
  IconUserExclamation,
  
  IconUserPlus,
  IconUserCheck,
  IconUserOff,
  IconUserCircle,
  IconUserSquare,
  IconUserHexagon,
  IconUserPin,
  IconUserScan,
  IconUserSearch,
  IconUserX,
  IconUserShield,
  IconUserStar,
  IconUserExclamation,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
  
  header: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    boxShadow: theme.shadows.sm,
  },
  
  footer: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
  },
  
  card: {
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.md,
    },
  },
  
  statCard: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${theme.color Scheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.md,
    },
  },
  
  chartCard: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    height: '100%',
  },
  
  table: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    borderRadius: theme.radius.md,
  },
  
  notification: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    borderRadius: theme.radius.md,
  },
}));

export function EnhancedDashboard() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New user registered', message: 'John Doe has just signed up', time: '2 min ago', read: false },
    { id: 2, title: 'Payment received', message: '$250 payment from Acme Corp', time: '1 hour ago', read: true },
    { id: 3, title: 'System update', message: 'Version 2.1.0 is now available', time: '3 hours ago', read: false },
    { id: 4, title: 'Support ticket', message: 'New support request from Sarah Johnson', time: '5 hours ago', read: true },
  ]);
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    lastLogin: 'Today, 9:30 AM',
    status: 'online'
  });
  const [stats, setStats] = useState({
    totalUsers: 1250,
    activeUsers: 892,
    revenue: 45678.50,
    growth: 12.5,
    newUsers: 42,
    pendingTasks: 15,
    completedTasks: 87,
    conversionRate: 3.2,
    bounceRate: 24.7
  });
  const [showNotificationModal, { open: openNotificationModal, close: closeNotificationModal }] = useDisclosure(false);
  const [showSettingsModal, { open: openSettingsModal, close: closeSettingsModal }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);

  // Mock data for charts
  const chartData = [
    { month: 'Jan', sales: 1200, profit: 400 },
    { month: 'Feb', sales: 1500, profit: 500 },
    { month: 'Mar', sales: 1800, profit: 600 },
    { month: 'Apr', sales: 2200, profit: 700 },
    { month: 'May', sales: 2500, profit: 800 },
    { month: 'Jun', sales: 2800, profit: 900 },
  ];

  // Mock recent activity data
  const recentActivity = [
    { id: 1, user: 'Sarah Johnson', action: 'created a new project', time: '2 min ago', icon: IconFileText },
    { id: 2, user: 'Mike Chen', action: 'updated the dashboard', time: '15 min ago', icon: IconEdit },
    { id: 3, user: 'Emily Davis', action: 'completed task #45', time: '1 hour ago', icon: IconCheck },
    { id: 4, user: 'David Wilson', action: 'uploaded new files', time: '2 hours ago', icon: IconUpload },
    { id: 5, user: 'Lisa Anderson', action: 'commented on issue #12', time: '3 hours ago', icon: IconMessage },
  ];

  // Mock tasks data
  const tasks = [
    { id: 1, title: 'Complete Q4 financial report', priority: 'high', dueDate: 'Tomorrow', progress: 75, assignee: 'Alex Johnson' },
    { id: 2, title: 'Review new feature requirements', priority: 'medium', dueDate: 'Next Monday', progress: 40, assignee: 'Sarah Johnson' },
    { id: 3, title: 'Fix bug in authentication system', priority: 'high', dueDate: 'Today', progress: 90, assignee: 'Mike Chen' },
    { id: 4, title: 'Update documentation', priority: 'low', dueDate: 'Next Friday', progress: 20, assignee: 'Emily Davis' },
  ];

  const mainLinks = [
    { icon: IconHome, label: 'Home', notifications: 0 },
    { icon: IconGauge, label: 'Dashboard', notifications: 3 },
    { icon: IconCalendar, label: 'Calendar', notifications: 0 },
    { icon: IconUser, label: 'Users', notifications: 1 },
    { icon: IconChartBar, label: 'Analytics', notifications: 0 },
    { icon: IconShoppingCart, label: 'Orders', notifications: 5 },
    { icon: IconFileText, label: 'Projects', notifications: 2 },
    { icon: IconMessage, label: 'Messages', notifications: 8 },
  ];

  const mainItems = mainLinks.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      rightSection={
        item.notifications > 0 ? (
          <Avatar color="blue" radius="xl" size={20}>
            <Text fz={10}>{item.notifications}</Text>
          </Avatar>
        ) : null
      }
      onClick={() => setActive(index)}
    />
  ));

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };

  const handleSettingsSave = () => {
    // Implement settings save logic here
    closeSettingsModal();
    // Show success notification
    showNotification({
      title: 'Settings saved',
      message: 'Your preferences have been updated successfully',
      color: 'green',
      autoClose: 3000,
    });
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          padding: theme.spacing.xl,
        },
      }}
      navbar={{
        width: { sm: 250, lg: 300 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
        className: classes.navbar,
      }}
      header={{ height: { base: 60, md: 80 }, className: classes.header }}
      footer={{ height: 60, className: classes.footer }}
    >
      {/* Header */}
      <AppShell.Header>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', paddingLeft: theme.spacing.md }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
            display={{ base: 'block', sm: 'none' }}
          />

          <Group justify="space-between" style={{ flexGrow: 1 }}>
            <Text size="lg" fw={700}>
              Dashboard
            </Text>
            
            <Group>
              <ActionIcon variant="default" size={36} mr="md">
                <IconSearch size="1rem" />
              </ActionIcon>
              
              <Menu shadow="md" width={300}>
                <Menu.Target>
                  <ActionIcon variant="default" size={36} mr="md">
                    <Indicator size={12} offset={5} color="red" processing>
                      <IconBell size="1rem" />
                    </Indicator>
                  </ActionIcon>
                </Menu.Target>
                
                <Menu.Dropdown>
                  <Menu.Label>Notifications</Menu.Label>
                  <Menu.Item onClick={handleMarkAllAsRead} icon={<IconCheck size="0.9rem" />}>
                    Mark all as read
                  </Menu.Item>
                  <Divider />
                  
                  {notifications.slice(0, 3).map(notification => (
                    <Menu.Item 
                      key={notification.id} 
                      onClick={() => handleMarkAsRead(notification.id)}
                      icon={
                        !notification.read ? (
                          <ThemeIcon color="blue" size="sm">
                            <IconBell size="0.9rem" />
                          </ThemeIcon>
                        ) : (
                          <ThemeIcon color="gray" size="sm">
                            <IconBell size="0.9rem" />
                          </ThemeIcon>
                        )
                      }
                      rightSection={
                        <Text size="xs" c="dimmed">
                          {notification.time}
                        </Text>
                      }
                    >
                      <Stack gap={0}>
                        <Text fw={500} size="sm">{notification.title}</Text>
                        <Text size="xs" c="dimmed">{notification.message}</Text>
                      </Stack>
                    </Menu.Item>
                  ))}
                  
                  <Menu.Item component="a" href="#" icon={<IconChevronRight size="0.9rem" />}>
                    View all notifications
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Avatar src={user.avatar} alt={user.name} radius="xl" size="lg" />
                </Menu.Target>
                
                <Menu.Dropdown>
                  <Menu.Label>{user.name}</Menu.Label>
                  <Menu.Item component="a" href="#" icon={<IconUser size="0.9rem" />}>
                    Profile
                  </Menu.Item>
                  <Menu.Item component="a" href="#" icon={<IconSettings size="0.9rem" />} onClick={openSettingsModal}>
                    Settings
                  </Menu.Item>
                  <Menu.Item component="a" href="#" icon={<IconLogout size="0.9rem" />} onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </div>
      </AppShell.Header>

      {/* Main Content */}
      <AppShell.Main>
        <Box>
          {/* Welcome Section */}
          <Box mb="xl">
            <Title order={2} mb="xs">Welcome back, {user.name}!</Title>
            <Text c="dimmed">Here's what's happening today.</Text>
          </Box>
          
          {/* Stats Cards */}
          <Grid gutter="md" mb="xl">
            <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
              <Paper p="md" radius="md" withBorder className={classes.statCard}>
                <Group justify="space-between">
                  <div>
                    <Text size="sm" c="dimmed">Total Users</Text>
                    <Text size="xl" fw={700}>{stats.totalUsers.toLocaleString()}</Text>
                  </div>
                  <ThemeIcon size={48} radius="md" color="blue">
                    <IconUsers size="1.5rem" />
                  </ThemeIcon>
                </Group>
                <Progress value={85} mt="sm" size="sm" />
                <Text size="xs" mt="xs" c="dimmed">
                  +{stats.newUsers} this month
                </Text>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
              <Paper p="md" radius="md" withBorder className={classes.statCard}>
                <Group justify="space-between">
                  <div>
                    <Text size="sm" c="dimmed">Revenue</Text>
                    <Text size="xl" fw={700}>${stats.revenue.toLocaleString()}</Text>
                  </div>
                  <ThemeIcon size={48} radius="md" color="green">
                    <IconCurrencyDollar size="1.5rem" />
                  </ThemeIcon>
                </Group>
                <Progress value={75} mt="sm" size="sm" />
                <Text size="xs" mt="xs" c="dimmed">
                  +{stats.growth}% from last month
                </Text>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
              <Paper p="md" radius="md" withBorder className={classes.statCard}>
                <Group justify="space-between">
                  <div>
                    <Text size="sm" c="dimmed">Active Users</Text>
                    <Text size="xl" fw={700}>{stats.activeUsers.toLocaleString()}</Text>
                  </div>
                  <ThemeIcon size={48} radius="md" color="orange">
                    <IconActivity size="1.5rem" />
                  </ThemeIcon>
                </Group>
                <Progress value={65} mt="sm" size="sm" />
                <Text size="xs" mt="xs" c="dimmed">
                  {Math.round((stats.activeUsers / stats.totalUsers) * 100)}% of total
                </Text>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
              <Paper p="md" radius="md" withBorder className={classes.statCard}>
                <Group justify="space-between">
                  <div>
                    <Text size="sm" c="dimmed">Conversion Rate</Text>
                    <Text size="xl" fw={700}>{stats.conversionRate}%</Text>
                  </div>
                  <ThemeIcon size={48} radius="md" color="purple">
                    <IconTrendingUp size="1.5rem" />
                  </ThemeIcon>
                </Group>
                <Progress value={90} mt="sm" size="sm" />
                <Text size="xs" mt="xs" c="dimmed">
                  -{stats.bounceRate}% bounce rate
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>
          
          {/* Charts Section */}
          <Grid gutter="md" mb="xl">
            <Grid.Col span={{ xs: 12, md: 8 }}>
              <Paper p="md" radius="md" withBorder className={classes.chartCard}>
                <Group justify="space-between" mb="md">
                  <Title order={3}>Sales Overview</Title>
                  <Button variant="subtle" size="sm">
                    <IconRefresh size="1rem" />
                  </Button>
                </Group>
                
                <Box h={200} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text c="dimmed">Sales chart would be displayed here</Text>
                </Box>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ xs: 12, md: 4 }}>
              <Paper p="md" radius="md" withBorder className={classes.chartCard}>
                <Group justify="space-between" mb="md">
                  <Title order={3}>Performance</Title>
                  <Button variant="subtle" size="sm">
                    <IconRefresh size="1rem" />
                  </Button>
                </Group>
                
                <Box h={200} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <RingProgress
                    size={120}
                    thickness={8}
                    sections={[
                      { value: 75, color: 'blue' },
                      { value: 25, color: 'gray' },
                    ]}
                    label={
                      <Text ta="center" size="lg" fw={700}>
                        75%
                      </Text>
                    }
                  />
                </Box>
              </Paper>
            </Grid.Col>
          </Grid>
          
          {/* Recent Activity & Tasks */}
          <Grid gutter="md">
            <Grid.Col span={{ xs: 12, md: 6 }}>
              <Paper p="md" radius="md" withBorder className={classes.table}>
                <Group justify="space-between" mb="md">
                  <Title order={3}>Recent Activity</Title>
                  <Button variant="subtle" size="sm">
                    <IconRefresh size="1rem" />
                  </Button>
                </Group>
                
                <ScrollArea h={300}>
                  <Timeline active={0} bulletSize={20} lineWidth={2}>
                    {recentActivity.map((activity, index) => (
                      <Timeline.Item
                        key={activity.id}
                        bullet={<activity.icon size="1rem" />}
                        title={activity.user}
                        c="dimmed"
                      >
                        <Text size="sm">{activity.action}</Text>
                        <Text size="xs" c="dimmed" mt={4}>
                          {activity.time}
                        </Text>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </ScrollArea>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ xs: 12, md: 6 }}>
              <Paper p="md" radius="md" withBorder className={classes.table}>
                <Group justify="space-between" mb="md">
                  <Title order={3}>Tasks</Title>
                  <Button variant="subtle" size="sm">
                    <IconRefresh size="1rem" />
                  </Button>
                </Group>
                
                <ScrollArea h={300}>
                  {tasks.map(task => (
                    <Paper key={task.id} p="sm" mb="sm" withBorder>
                      <Group justify="space-between">
                        <Group>
                          <Badge color={task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'green'}>
                            {task.priority}
                          </Badge>
                          <Text size="sm" fw={500}>{task.title}</Text>
                        </Group>
                        <Group>
                          <Text size="xs" c="dimmed">{task.dueDate}</Text>
                          <Avatar size="sm" radius="xl">{task.assignee.charAt(0)}</Avatar>
                        </Group>
                      </Group>
                      <Progress value={task.progress} mt="xs" size="sm" />
                      <Text size="xs" mt="xs" c="dimmed">
                        {task.progress}% complete
                      </Text>
                    </Paper>
                  ))}
                </ScrollArea>
              </Paper>
            </Grid.Col>
          </Grid>
        </Box>
      </AppShell.Main>

      {/* Sidebar Navigation */}
      <AppShell.Navbar p="md" className={classes.navbar}>
        <AppShell.Section grow mt="xs">
          {mainItems}
        </AppShell.Section>
        
        <AppShell.Section>
          <Divider my="sm" />
          
          <NavLink
            label="Settings"
            leftSection={<IconSettings size="1rem" stroke={1.5} />}
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
            onClick={openSettingsModal}
          />
          
          <NavLink
            label="Help & Support"
            leftSection={<IconHelp size="1rem" stroke={1.5} />}
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          />
          
          <NavLink
            label="Logout"
            leftSection={<IconLogout size="1rem" stroke={1.5} />}
            onClick={handleLogout}
          />
        </AppShell.Section>
      </AppShell.Navbar>

      {/* Footer */}
      <AppShell.Footer p="md" className={classes.footer}>
        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            © 2025 Your Company. All rights reserved.
          </Text>
          <Group>
            <ActionIcon variant="subtle" size="sm">
              <IconBrandTwitter size="1rem" />
            </ActionIcon>
            <ActionIcon variant="subtle" size="sm">
              <IconBrandFacebook size="1rem" />
            </ActionIcon>
            <ActionIcon variant="subtle" size="sm">
              <IconBrandInstagram size="1rem" />
            </ActionIcon>
            <ActionIcon variant="subtle" size="sm">
              <IconBrandLinkedin size="1rem" />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Footer>

      {/* Notifications Modal */}
      <Modal
        opened={showNotificationModal}
        onClose={closeNotificationModal}
        title="Notifications"
        size="lg"
        centered
      >
        <ScrollArea h={400}>
          {notifications.map(notification => (
            <Paper key={notification.id} p="sm" mb="sm" withBorder>
              <Group justify="space-between">
                <Group>
                  {!notification.read && (
                    <ThemeIcon color="blue" size="sm">
                      <IconBell size="0.9rem" />
                    </ThemeIcon>
                  )}
                  <Stack gap={0}>
                    <Text fw={500} size="sm">{notification.title}</Text>
                    <Text size="xs" c="dimmed">{notification.message}</Text>
                  </Stack>
                </Group>
                <Group>
                  <Text size="xs" c="dimmed">{notification.time}</Text>
                  <ActionIcon size="sm" variant="subtle" onClick={() => handleMarkAsRead(notification.id)}>
                    <IconCheck size="0.9rem" />
                  </ActionIcon>
                </Group>
              </Group>
            </Paper>
          ))}
        </ScrollArea>
      </Modal>

      {/* Settings Modal */}
      <Modal
        opened={showSettingsModal}
        onClose={closeSettingsModal}
        title="Account Settings"
        size="lg"
        centered
      >
        <LoadingOverlay visible={loading} />
        
        <Stack gap="md">
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            defaultValue={user.name}
            required
          />
          
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
            defaultValue={user.email}
            required
          />
          
          <Select
            label="Role"
            placeholder="Select your role"
            defaultValue={user.role}
            data={['Admin', 'Manager', 'User']}
          />
          
          <MultiSelect
            label="Interests"
            placeholder="Select your interests"
            data={['Technology', 'Design', 'Marketing', 'Finance', 'Healthcare', 'Education']}
          />
          
          <NumberInput
            label="Age"
            placeholder="Enter your age"
            defaultValue={30}
            min={18}
            max={100}
          />
          
          <Switch
            label="Enable notifications"
            defaultChecked
          />
          
          <Checkbox
            label="Show online status"
            defaultChecked
          />
          
          <Slider
            label="Font size"
            defaultValue={14}
            min={10}
            max={20}
            marks={[
              { value: 10, label: 'Small' },
              { value: 14, label: 'Medium' },
              { value: 20, label: 'Large' },
            ]}
          />
          
          <Group justify="right" mt="xl">
            <Button variant="default" onClick={closeSettingsModal}>Cancel</Button>
            <Button onClick={handleSettingsSave}>Save Changes</Button>
          </Group>
        </Stack>
      </Modal>
    </AppShell>
  );
}