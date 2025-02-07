const dummyData = {
    promoters: {
      stats: {
        total: 127,
        active: 98,
        inactive: 29,
        newThisMonth: 8
      },
      list: [
        {
          id: 'PRO001',
          name: 'Rahul Kumar',
          level: 2,
          customers: 127,
          activeRatio: 77,
          earnings: 12400,
          status: 'active',
          joinDate: '2024-01-15'
        },
        {
          id: 'PRO002',
          name: 'Priya Mehta',
          level: 1,
          customers: 45,
          activeRatio: 82,
          earnings: 5600,
          status: 'active',
          joinDate: '2024-01-20'
        },
        {
          id: 'PRO003',
          name: 'Amit Singh',
          level: 3,
          customers: 180,
          activeRatio: 85,
          earnings: 18900,
          status: 'active',
          joinDate: '2023-12-10'
        },
        {
          id: 'PRO004',
          name: 'Sneha Reddy',
          level: 0,
          customers: 12,
          activeRatio: 66,
          earnings: 1200,
          status: 'inactive',
          joinDate: '2024-02-01'
        }
      ]
    },
  
    prizes: {
      currentPool: 50000,
      nextDraw: '2024-03-15',
      totalWinners: 24,
      categories: [
        {
          name: 'Grand Prize',
          amount: 25000,
          winners: 1,
          drawDate: '2024-03-15'
        },
        {
          name: 'First Runner Up',
          amount: 15000,
          winners: 2,
          drawDate: '2024-03-15'
        },
        {
          name: 'Second Runner Up',
          amount: 5000,
          winners: 5,
          drawDate: '2024-03-15'
        },
        {
          name: 'Consolation Prize',
          amount: 1000,
          winners: 10,
          drawDate: '2024-03-15'
        }
      ],
      recentWinners: [
        {
          name: 'Vikram Patel',
          prize: 'Grand Prize',
          amount: 25000,
          date: '2024-02-15'
        },
        {
          name: 'Meera Shah',
          prize: 'First Runner Up',
          amount: 15000,
          date: '2024-02-15'
        }
      ]
    },
  
    transactions: {
      overview: {
        totalRevenue: 285000,
        growthRate: 12,
        pendingWithdrawals: 45000,
        withdrawalRequests: 12
      },
      recent: [
        {
          id: 'TXN001',
          type: 'deposit',
          amount: 1000,
          user: 'Rahul Kumar',
          status: 'completed',
          date: '2024-02-06'
        },
        {
          id: 'TXN002',
          type: 'withdrawal',
          amount: 5000,
          user: 'Priya Mehta',
          status: 'pending',
          date: '2024-02-06'
        },
        {
          id: 'TXN003',
          type: 'prize',
          amount: 25000,
          user: 'Vikram Patel',
          status: 'completed',
          date: '2024-02-05'
        },
        {
          id: 'TXN004',
          type: 'deposit',
          amount: 1000,
          user: 'Amit Singh',
          status: 'completed',
          date: '2024-02-05'
        }
      ]
    },
  
    analytics: {
      customerGrowth: [
        { month: 'Jan', customers: 120, revenue: 120000 },
        { month: 'Feb', customers: 150, revenue: 150000 },
        { month: 'Mar', customers: 200, revenue: 200000 },
        { month: 'Apr', customers: 180, revenue: 180000 },
        { month: 'May', customers: 220, revenue: 220000 },
        { month: 'Jun', customers: 250, revenue: 250000 }
      ],
      levelDistribution: [
        { level: 0, count: 20 },
        { level: 1, count: 45 },
        { level: 2, count: 32 },
        { level: 3, count: 20 },
        { level: 4, count: 8 },
        { level: 5, count: 2 },
        { level: 6, count: 0 }
      ],
      kycCompletion: {
        completed: 450,
        pending: 48,
        rejected: 12
      }
    },
  
    settings: {
      platform: {
        name: 'AR Dreams',
        currency: 'INR',
        minWithdrawal: 1000,
        maxWithdrawal: 50000,
        kycRequired: true,
        maintenanceMode: false
      },
      security: {
        twoFactorEnabled: true,
        passwordExpiry: 90,
        sessionTimeout: 30,
        ipWhitelist: ['192.168.1.1']
      },
      notifications: {
        email: true,
        sms: true,
        push: false,
        whatsapp: true
      },
      admins: [
        {
          id: 'ADM001',
          name: 'John Doe',
          role: 'Super Admin',
          email: 'john@example.com',
          lastLogin: '2024-02-06 10:30 AM'
        },
        {
          id: 'ADM002',
          name: 'Jane Smith',
          role: 'Admin',
          email: 'jane@example.com',
          lastLogin: '2024-02-06 09:15 AM'
        }
      ]
    }
  };