# 🛠️ YantraCare

> **Odoo x Adani University Hackathon Round 1 Project**  
> Built in 8 hours of intense hackathon development

A comprehensive Equipment Maintenance Management System designed to streamline maintenance operations, track equipment lifecycle, and manage maintenance teams efficiently.

---

## 🎯 Overview

**YantraCare** is an all-in-one equipment maintenance tracking solution that enables organizations to efficiently manage their equipment inventory, schedule preventive maintenance, handle corrective maintenance requests, and coordinate maintenance teams. Built during the Odoo x Adani University Hackathon, this system demonstrates rapid full-stack development capabilities.

### Key Objectives

- 📊 Centralized equipment tracking and lifecycle management
- 🔧 Streamlined maintenance request workflow (corrective & preventive)
- 👥 Efficient team management and task assignment
- 📅 Calendar-based maintenance scheduling
- 📈 Real-time dashboard analytics for data-driven decisions
- 🎯 Role-based access control (Admin, Manager, Technician, Employee)

---

## 💼 Use Case

### Problem Statement

Organizations face significant challenges in:
- Tracking equipment across multiple departments and locations
- Managing unplanned equipment failures and downtime
- Scheduling and tracking preventive maintenance
- Coordinating maintenance teams effectively
- Maintaining equipment warranty and lifecycle data
- Generating insights from maintenance operations

### Solution

GearGuard provides a unified platform where:

1. **Employees** can report equipment issues and track repair status
2. **Managers** can oversee all maintenance operations, assign teams, and schedule maintenance
3. **Technicians** can view assigned tasks, update repair status, and manage workload
4. **Admins** have complete system control with analytics dashboard

### Real-World Applications

- 🏭 **Manufacturing Plants**: Track production equipment and minimize downtime
- 🏫 **Educational Institutions**: Manage lab equipment, computers, and infrastructure
- 🏢 **Corporate Offices**: Maintain IT assets, HVAC systems, and office equipment
- 🏥 **Healthcare Facilities**: Track medical equipment maintenance and compliance
- 🏗️ **Construction Sites**: Manage heavy machinery and tool inventory

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure JWT-based authentication
- Role-based access control (4 roles)
- Protected routes and API endpoints

### 📊 Dashboard Analytics
- Real-time statistics overview
- Recent maintenance requests
- Upcoming scheduled maintenance
- Overdue request alerts
- Equipment health metrics
- Role-specific dashboards

### 🛠️ Equipment Management
- Complete equipment lifecycle tracking
- Serial number and department mapping
- Warranty expiry tracking
- Equipment assignment to employees
- Default technician assignment
- Equipment scrapping workflow
- Advanced filtering and search

### 📝 Maintenance Request System
- **Corrective Maintenance**: Reactive repairs for breakdowns
- **Preventive Maintenance**: Scheduled routine maintenance
- Request status workflow: New → In Progress → Repaired/Scrap
- Kanban board for visual workflow management
- Team and technician assignment
- Scheduled date and duration tracking
- Overdue request detection

### 👥 Team Management
- Create and manage maintenance teams
- Assign team leaders
- Add/remove team members
- Team-based request assignment
- Team performance tracking

### 📅 Calendar View
- Visual maintenance scheduling
- FullCalendar integration
- Color-coded event types
- Drag-and-drop rescheduling
- Monthly/weekly/daily views

### 🔍 Advanced Features
- Global search functionality
- Real-time notifications
- Dark/Light theme toggle
- Responsive mobile design
- Loading states and skeletons
- Error handling and validation

---

## 🚀 Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 18.3** | UI library with hooks |
| **TypeScript** | Type-safe development |
| **Vite 7.3** | Fast build tool and dev server |
| **TailwindCSS 3.4** | Utility-first CSS framework |
| **Shadcn/ui** | Accessible component library |
| **React Router 6.30** | Client-side routing |
| **TanStack Query 5.83** | Server state management |
| **Axios** | HTTP client |
| **React Hook Form + Zod** | Form validation |
| **FullCalendar 6.1** | Calendar component |
| **@hello-pangea/dnd** | Drag-and-drop (Kanban) |
| **Recharts** | Data visualization |
| **Lucide React** | Icon library |
| **Sonner** | Toast notifications |

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js 18+** | Runtime environment |
| **Express 4.21** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose 8.7** | ODM for MongoDB |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **CORS** | Cross-origin requests |
| **Morgan** | HTTP request logger |
| **dotenv** | Environment variables |

---

## 🏗️ Architecture

### System Architecture

```mermaid
graph TB
    subgraph Client["🖥️ Client Layer - React SPA"]
        UI["⚛️ React UI Components<br/>shadcn/ui + TailwindCSS"]
        CTX["🔄 Context Providers<br/>Auth & Theme"]
        ROUTER["🛣️ React Router<br/>Navigation"]
        API_CLIENT["📡 API Service Layer<br/>Axios + TanStack Query"]
        
        UI --> CTX
        CTX --> ROUTER
        ROUTER --> API_CLIENT
    end
    
    API_CLIENT -->|HTTP/REST + JWT| GATEWAY["🌐 API Gateway<br/>CORS + Auth Headers"]
    
    subgraph Server["⚙️ Server Layer - Node.js/Express"]
        GATEWAY --> MIDDLEWARE["🔐 Middleware Chain"]
        
        subgraph MW["Middleware Pipeline"]
            AUTH["🔑 JWT Auth"]
            ROLE["👤 Role Checker"]
            ERROR["⚠️ Error Handler"]
            CORS_MW["🌍 CORS"]
        end
        
        MIDDLEWARE --> MW
        MW --> ROUTES["📍 API Routes<br/>/auth /users /equipment<br/>/teams /requests /dashboard"]
        ROUTES --> CONTROLLERS["🎮 Controllers<br/>Business Logic Layer"]
        CONTROLLERS --> MODELS["📊 Mongoose Models<br/>Data Access Layer"]
    end
    
    MODELS -->|Query/Update| DB[("🗄️ MongoDB<br/>Database")]
    
    style UI fill:#60a5fa,stroke:#2563eb,stroke-width:2px,color:#fff
    style CTX fill:#60a5fa,stroke:#2563eb,stroke-width:2px,color:#fff
    style ROUTER fill:#60a5fa,stroke:#2563eb,stroke-width:2px,color:#fff
    style API_CLIENT fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    style GATEWAY fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#000
    style MIDDLEWARE fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style AUTH fill:#c4b5fd,stroke:#a78bfa,stroke-width:2px,color:#000
    style ROLE fill:#c4b5fd,stroke:#a78bfa,stroke-width:2px,color:#000
    style ERROR fill:#c4b5fd,stroke:#a78bfa,stroke-width:2px,color:#000
    style CORS_MW fill:#c4b5fd,stroke:#a78bfa,stroke-width:2px,color:#000
    style ROUTES fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style CONTROLLERS fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style MODELS fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style DB fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
```

### Component Architecture

```mermaid
graph TD
    APP["🚀 App Root"]
    APP --> AUTH_CTX["🔐 AuthProvider Context"]
    
    AUTH_CTX --> THEME_CTX["🎨 ThemeProvider Context"]
    
    THEME_CTX --> PUBLIC["📖 Public Routes"]
    THEME_CTX --> PROTECTED["🔒 Protected Routes"]
    
    PUBLIC --> LOGIN["🔑 Login Page"]
    PUBLIC --> SIGNUP["✍️ SignUp Page"]
    
    PROTECTED --> LAYOUT["📐 AppLayout"]
    
    LAYOUT --> HEADER["🎯 Header"]
    LAYOUT --> SIDEBAR["📋 Sidebar"]
    
    HEADER --> SEARCH["🔍 GlobalSearch"]
    HEADER --> NOTIF["🔔 NotificationBell"]
    HEADER --> THEME["🌓 ThemeToggle"]
    
    LAYOUT --> PAGES["📄 Pages"]
    
    PAGES --> DASH["📊 Dashboard<br/>Stats + Quick Actions"]
    PAGES --> EQUIP["🛠️ Equipment Page<br/>Table + Modals"]
    PAGES --> REQ["📝 Requests Page<br/>Kanban Board"]
    PAGES --> TEAM["👥 Teams Page<br/>Team Cards"]
    PAGES --> CAL["📅 Calendar Page<br/>FullCalendar"]
    PAGES --> SETTINGS["⚙️ Settings Page"]
    
    EQUIP --> EQUIP_MODAL["➕ Create Equipment<br/>📋 Details Modal"]
    REQ --> KANBAN["🎯 Kanban Board<br/>Drag & Drop"]
    REQ --> REQ_MODAL["➕ Create Request<br/>📋 Details Modal"]
    TEAM --> TEAM_MODAL["➕ Create Team<br/>👤 Assign Modal"]
    
    style APP fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#000
    style AUTH_CTX fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff
    style THEME_CTX fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style PUBLIC fill:#94a3b8,stroke:#64748b,stroke-width:2px,color:#fff
    style PROTECTED fill:#94a3b8,stroke:#64748b,stroke-width:2px,color:#fff
    style LOGIN fill:#bfdbfe,stroke:#60a5fa,stroke-width:2px,color:#000
    style SIGNUP fill:#bfdbfe,stroke:#60a5fa,stroke-width:2px,color:#000
    style LAYOUT fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style HEADER fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style SIDEBAR fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style SEARCH fill:#a5f3fc,stroke:#22d3ee,stroke-width:2px,color:#000
    style NOTIF fill:#a5f3fc,stroke:#22d3ee,stroke-width:2px,color:#000
    style THEME fill:#a5f3fc,stroke:#22d3ee,stroke-width:2px,color:#000
    style PAGES fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style DASH fill:#f9a8d4,stroke:#f472b6,stroke-width:2px,color:#000
    style EQUIP fill:#f9a8d4,stroke:#f472b6,stroke-width:2px,color:#000
    style REQ fill:#f9a8d4,stroke:#f472b6,stroke-width:2px,color:#000
    style TEAM fill:#f9a8d4,stroke:#f472b6,stroke-width:2px,color:#000
    style CAL fill:#f9a8d4,stroke:#f472b6,stroke-width:2px,color:#000
    style SETTINGS fill:#f9a8d4,stroke:#f472b6,stroke-width:2px,color:#000
    style EQUIP_MODAL fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style KANBAN fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style REQ_MODAL fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style TEAM_MODAL fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
```

---

## 🗄️ Database Schema

### Collections Overview

YantraCare uses MongoDB with 4 main collections:

#### 1. Users Collection

```javascript
{
  _id: ObjectId,
  name: String,              // User's full name
  email: String,             // Unique email (lowercase)
  password: String,          // Bcrypt hashed password
  role: String,              // 'admin' | 'manager' | 'technician' | 'employee'
  avatar: String,            // Profile image URL (optional)
  teamId: ObjectId,          // Reference to MaintenanceTeam (optional)
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `email` (unique)

#### 2. Equipment Collection

```javascript
{
  _id: ObjectId,
  name: String,                    // Equipment name
  serialNumber: String,            // Unique serial number
  department: String,              // Department location
  assignedEmployee: ObjectId,      // Reference to User (optional)
  maintenanceTeamId: ObjectId,     // Reference to MaintenanceTeam (optional)
  defaultTechnicianId: ObjectId,   // Reference to User (optional)
  purchaseDate: Date,              // Date of purchase
  warrantyExpiry: Date,            // Warranty end date (optional)
  location: String,                // Physical location
  isScrapped: Boolean,             // Scrap status (default: false)
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `serialNumber` (unique)

#### 3. MaintenanceRequest Collection

```javascript
{
  _id: ObjectId,
  type: String,                    // 'corrective' | 'preventive'
  subject: String,                 // Request title/description
  equipmentId: ObjectId,           // Reference to Equipment (required)
  maintenanceTeamId: ObjectId,     // Reference to MaintenanceTeam (optional)
  technicianId: ObjectId,          // Reference to User (optional)
  status: String,                  // 'new' | 'in_progress' | 'repaired' | 'scrap'
  scheduledDate: Date,             // Scheduled maintenance date (optional)
  durationHours: Number,           // Expected duration (optional)
  isOverdue: Boolean,              // Overdue flag (default: false)
  createdBy: ObjectId,             // Reference to User (required)
  createdAt: Date,
  updatedAt: Date
}
```

#### 4. MaintenanceTeam Collection

```javascript
{
  _id: ObjectId,
  name: String,              // Unique team name
  description: String,       // Team description (optional)
  leaderId: ObjectId,        // Reference to User (optional)
  members: [ObjectId],       // Array of User references
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `name` (unique)

### Entity Relationships (ERD)

```mermaid
erDiagram
    User ||--o{ Equipment : "assigned to"
    User ||--o{ MaintenanceRequest : "creates"
    User ||--o{ MaintenanceTeam : "leads"
    User }o--o{ MaintenanceTeam : "member of"
    
    Equipment ||--o{ MaintenanceRequest : "has"
    Equipment }o--|| MaintenanceTeam : "maintained by"
    Equipment }o--|| User : "default technician"
    
    MaintenanceTeam ||--o{ Equipment : "maintains"
    MaintenanceTeam ||--o{ MaintenanceRequest : "handles"
    
    User {
        ObjectId _id PK
        String name
        String email UK
        String password
        String role
        String avatar
        ObjectId teamId FK
        Date createdAt
        Date updatedAt
    }
    
    Equipment {
        ObjectId _id PK
        String name
        String serialNumber UK
        String department
        ObjectId assignedEmployee FK
        ObjectId maintenanceTeamId FK
        ObjectId defaultTechnicianId FK
        Date purchaseDate
        Date warrantyExpiry
        String location
        Boolean isScrapped
        Date createdAt
        Date updatedAt
    }
    
    MaintenanceRequest {
        ObjectId _id PK
        String type
        String subject
        ObjectId equipmentId FK
        ObjectId maintenanceTeamId FK
        ObjectId technicianId FK
        String status
        Date scheduledDate
        Number durationHours
        Boolean isOverdue
        ObjectId createdBy FK
        Date createdAt
        Date updatedAt
    }
    
    MaintenanceTeam {
        ObjectId _id PK
        String name UK
        String description
        ObjectId leaderId FK
        Array members
        Date createdAt
        Date updatedAt
    }
```

**Relationships:**
- **User → Equipment**: One user can be assigned to many equipment (1:N)
- **User → MaintenanceTeam**: Many-to-many relationship (members array)
- **User → MaintenanceRequest**: One user creates many requests (1:N)
- **Equipment → MaintenanceRequest**: One equipment has many requests (1:N)
- **MaintenanceTeam → Equipment**: One team maintains many equipment (1:N)
- **MaintenanceTeam → MaintenanceRequest**: One team handles many requests (1:N)

---

## 🔄 User Flow & Wireframes

### 1. Authentication Flow

```mermaid
flowchart TD
    START([👤 User Visits App]) --> CHECK{Has Account?}
    
    CHECK -->|No| SIGNUP[✍️ Sign Up Page]
    CHECK -->|Yes| LOGIN[🔑 Login Page]
    
    SIGNUP --> REGISTER[📝 Fill Registration Form<br/>Name, Email, Password, Role]
    REGISTER --> CREATE[💾 Create User Account]
    CREATE --> LOGIN
    
    LOGIN --> CREDENTIALS[🔐 Enter Credentials<br/>Email & Password]
    CREDENTIALS --> VALIDATE{Valid?}
    
    VALIDATE -->|❌ Invalid| ERROR[⚠️ Show Error Message]
    ERROR --> LOGIN
    
    VALIDATE -->|✅ Valid| JWT[🎫 Generate JWT Token]
    JWT --> STORE[💾 Store Token + User Data]
    STORE --> REDIRECT{Role-Based<br/>Redirect}
    
    REDIRECT -->|Admin/Manager| ADMIN_DASH[📊 Admin Dashboard]
    REDIRECT -->|Technician| TECH_DASH[🔧 Technician Dashboard]
    REDIRECT -->|Employee| EMP_DASH[👤 Employee Dashboard]
    
    ADMIN_DASH --> FULL_ACCESS[🌟 Full System Access]
    TECH_DASH --> TASK_VIEW[📋 View Assigned Tasks]
    EMP_DASH --> LIMITED[👁️ View Own Equipment]
    
    style START fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
    style SIGNUP fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style LOGIN fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style JWT fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#000
    style ADMIN_DASH fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style TECH_DASH fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style EMP_DASH fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style ERROR fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
```

### 2. Equipment Management Flow

```mermaid
flowchart TD
    EQUIP_PAGE[🛠️ Equipment Page] --> ACTIONS{Choose Action}
    
    ACTIONS -->|View| LIST[📋 View All Equipment<br/>Table with Filters]
    ACTIONS -->|Create| CREATE[➕ Create New Equipment]
    ACTIONS -->|Edit| EDIT[✏️ Edit Equipment]
    ACTIONS -->|Details| DETAILS[🔍 View Details]
    ACTIONS -->|Scrap| SCRAP[🗑️ Scrap Equipment]
    
    LIST --> FILTER[🔍 Apply Filters<br/>Department, Status, Team]
    FILTER --> SEARCH[🔎 Search by Name/Serial]
    
    CREATE --> FORM[📝 Fill Equipment Form]
    FORM --> NAME[📌 Name & Serial Number]
    NAME --> INFO[📍 Department & Location]
    INFO --> DATES[📅 Purchase & Warranty Dates]
    DATES --> ASSIGN[👤 Assign Employee Optional]
    ASSIGN --> TEAM[👥 Assign Team Optional]
    TEAM --> TECH[🔧 Default Technician Optional]
    TECH --> SAVE[💾 Save Equipment]
    SAVE --> SUCCESS[✅ Success Message]
    SUCCESS --> REFRESH[🔄 Refresh List]
    
    EDIT --> LOAD[📥 Load Equipment Data]
    LOAD --> UPDATE_FORM[✏️ Update Form Fields]
    UPDATE_FORM --> SAVE
    
    DETAILS --> MODAL[📋 Details Modal]
    MODAL --> INFO_TAB[ℹ️ Equipment Info]
    MODAL --> HISTORY_TAB[📜 Maintenance History]
    MODAL --> PERSONNEL_TAB[👥 Assigned Personnel]
    
    SCRAP --> CONFIRM{Confirm Scrap?}
    CONFIRM -->|Yes| MARK_SCRAP[❌ Mark as Scrapped]
    CONFIRM -->|No| EQUIP_PAGE
    MARK_SCRAP --> REFRESH
    
    style EQUIP_PAGE fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
    style CREATE fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style FORM fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style SUCCESS fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#fff
    style SCRAP fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style DETAILS fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
```

### 3. Maintenance Request Workflow

```mermaid
flowchart TD
    START([📝 Create Maintenance Request]) --> TYPE{Select Type}
    
    TYPE -->|Corrective| CORRECT[🔧 Corrective Maintenance<br/>Reactive Repair]
    TYPE -->|Preventive| PREVENT[🛡️ Preventive Maintenance<br/>Scheduled Service]
    
    CORRECT --> FORM
    PREVENT --> FORM
    
    FORM[📋 Request Form] --> EQUIP[🛠️ Select Equipment]
    EQUIP --> SUBJECT[📝 Add Subject/Description]
    SUBJECT --> ASSIGN_TEAM[👥 Assign Team Optional]
    ASSIGN_TEAM --> ASSIGN_TECH[🔧 Assign Technician Optional]
    ASSIGN_TECH --> SCHEDULE[📅 Schedule Date Optional]
    SCHEDULE --> DURATION[⏱️ Estimated Duration Optional]
    DURATION --> SUBMIT[💾 Submit Request]
    
    SUBMIT --> NEW[🆕 Status: NEW<br/>Waiting for Assignment]
    
    NEW --> TECH_ASSIGN{Technician<br/>Assigned?}
    TECH_ASSIGN -->|No| WAIT[⏳ Waiting in Queue]
    WAIT --> NEW
    TECH_ASSIGN -->|Yes| NOTIFY[🔔 Notify Technician]
    
    NOTIFY --> ACCEPT{Technician<br/>Accepts?}
    ACCEPT -->|No| REASSIGN[🔄 Reassign Task]
    REASSIGN --> TECH_ASSIGN
    
    ACCEPT -->|Yes| PROGRESS[⚙️ Status: IN PROGRESS<br/>Work Started]
    
    PROGRESS --> WORK[🔧 Perform Maintenance]
    WORK --> CHECK{Can be<br/>Repaired?}
    
    CHECK -->|Yes| REPAIR[✅ Repair Equipment]
    CHECK -->|No| DAMAGE[❌ Beyond Repair]
    
    REPAIR --> TEST[🧪 Test Equipment]
    TEST --> VERIFY{Works<br/>Properly?}
    
    VERIFY -->|No| WORK
    VERIFY -->|Yes| REPAIRED[✅ Status: REPAIRED<br/>Request Closed]
    
    DAMAGE --> SCRAP_REQ[🗑️ Status: SCRAP<br/>Equipment Marked]
    SCRAP_REQ --> ADMIN_REVIEW[👔 Admin Review Required]
    
    REPAIRED --> COMPLETE([🎉 Request Complete])
    ADMIN_REVIEW --> COMPLETE
    
    style START fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
    style NEW fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style PROGRESS fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#000
    style REPAIRED fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style SCRAP_REQ fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style COMPLETE fill:#22c55e,stroke:#16a34a,stroke-width:3px,color:#fff
    style CORRECT fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style PREVENT fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
```

### 4. Role-Specific Workflows

```mermaid
flowchart LR
    subgraph ADMIN[👔 Admin/Manager Workflow]
        A_LOGIN[🔑 Login] --> A_DASH[📊 Dashboard<br/>Full Analytics]
        A_DASH --> A_ACTIONS{Actions}
        
        A_ACTIONS --> A_EQUIP[🛠️ Manage All Equipment]
        A_ACTIONS --> A_REQ[📝 Manage All Requests]
        A_ACTIONS --> A_TEAM[👥 Create/Manage Teams]
        A_ACTIONS --> A_USER[👤 Manage Users]
        A_ACTIONS --> A_ASSIGN[🎯 Assign Tasks]
        A_ACTIONS --> A_SCHEDULE[📅 Schedule Maintenance]
        A_ACTIONS --> A_REPORTS[📈 View Reports]
    end
    
    subgraph TECH[🔧 Technician Workflow]
        T_LOGIN[🔑 Login] --> T_DASH[📊 Dashboard<br/>My Tasks]
        T_DASH --> T_ACTIONS{Actions}
        
        T_ACTIONS --> T_VIEW[👁️ View Assigned Requests]
        T_ACTIONS --> T_UPDATE[✏️ Update Request Status]
        T_ACTIONS --> T_EQUIP[🛠️ View Equipment Details]
        T_ACTIONS --> T_CAL[📅 Check Calendar Schedule]
        T_ACTIONS --> T_COMPLETE[✅ Report Completion]
    end
    
    subgraph EMP[👤 Employee Workflow]
        E_LOGIN[🔑 Login] --> E_DASH[📊 Dashboard<br/>My Equipment]
        E_DASH --> E_ACTIONS{Actions}
        
        E_ACTIONS --> E_VIEW[👁️ View Assigned Equipment]
        E_ACTIONS --> E_CREATE[➕ Create Maintenance Request]
        E_ACTIONS --> E_TRACK[📍 Track Request Status]
        E_ACTIONS --> E_HISTORY[📜 View Request History]
    end
    
    style A_LOGIN fill:#c4b5fd,stroke:#a78bfa,stroke-width:2px,color:#000
    style A_DASH fill:#a78bfa,stroke:#7c3aed,stroke-width:2px,color:#fff
    style A_ACTIONS fill:#ddd6fe,stroke:#c4b5fd,stroke-width:2px,color:#000
    style A_EQUIP fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style A_REQ fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style A_TEAM fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style A_USER fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style A_ASSIGN fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style A_SCHEDULE fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    style A_REPORTS fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
    
    style T_LOGIN fill:#a5f3fc,stroke:#67e8f9,stroke-width:2px,color:#000
    style T_DASH fill:#22d3ee,stroke:#06b6d4,stroke-width:2px,color:#000
    style T_ACTIONS fill:#cffafe,stroke:#a5f3fc,stroke-width:2px,color:#000
    style T_VIEW fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style T_UPDATE fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style T_EQUIP fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style T_CAL fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style T_COMPLETE fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    
    style E_LOGIN fill:#fbcfe8,stroke:#f9a8d4,stroke-width:2px,color:#000
    style E_DASH fill:#f472b6,stroke:#ec4899,stroke-width:2px,color:#000
    style E_ACTIONS fill:#fce7f3,stroke:#fbcfe8,stroke-width:2px,color:#000
    style E_VIEW fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style E_CREATE fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style E_TRACK fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style E_HISTORY fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
```

### 5. Kanban Board Interaction Flow

```mermaid
flowchart LR
    KB[🎯 Kanban Board] --> COL1[📋 NEW Column]
    KB --> COL2[⚙️ IN PROGRESS Column]
    KB --> COL3[✅ REPAIRED Column]
    KB --> COL4[❌ SCRAP Column]
    
    COL1 --> DRAG1{Drag Card}
    DRAG1 -->|Drop to Progress| COL2
    
    COL2 --> DRAG2{Drag Card}
    DRAG2 -->|Drop to Repaired| COL3
    DRAG2 -->|Drop to Scrap| COL4
    
    COL1 --> CLICK1[👆 Click Card]
    CLICK1 --> MODAL[📋 Request Details Modal]
    MODAL --> EDIT[✏️ Edit Details]
    MODAL --> STATUS[🔄 Update Status]
    MODAL --> ASSIGN[👤 Reassign]
    
    EDIT --> API[🌐 API Update]
    STATUS --> API
    ASSIGN --> API
    API --> REFRESH[🔄 Refresh Board]
    
    style KB fill:#3b82f6,stroke:#1e40af,stroke-width:3px,color:#fff
    style COL1 fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style COL2 fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#000
    style COL3 fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style COL4 fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
    style MODAL fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#fff
```

---

## 📁 Project Structure

### Frontend (Client/)

```
Client/
├── public/
│   └── robots.txt                    # SEO configuration
│
├── src/
│   ├── assets/                       # Static assets (images, icons)
│   │
│   ├── components/                   # React components
│   │   ├── common/                   # Shared components
│   │   │   ├── AppLayout.tsx         # Main layout wrapper
│   │   │   ├── Header.tsx            # Top navigation bar
│   │   │   ├── Sidebar.tsx           # Side navigation menu
│   │   │   ├── GlobalSearch.tsx      # Search functionality
│   │   │   ├── NotificationBell.tsx  # Notification system
│   │   │   ├── ThemeToggle.tsx       # Dark/Light mode toggle
│   │   │   ├── Badges.tsx            # Status/priority badges
│   │   │   ├── LoadingScreen.tsx     # Full-page loader
│   │   │   └── LoadingStates.tsx     # Component loaders
│   │   │
│   │   ├── CalendarView/             # Calendar component
│   │   │   ├── CalendarView.tsx      # FullCalendar integration
│   │   │   └── index.ts
│   │   │
│   │   ├── Equipment/                # Equipment features
│   │   │   ├── CreateEquipmentModal.tsx
│   │   │   ├── EquipmentDetailsModal.tsx
│   │   │   ├── CreateScheduleModal.tsx
│   │   │   ├── AssignTeamModal.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── KanbanBoard/              # Drag-drop board
│   │   │   ├── KanbanBoard.tsx       # Kanban implementation
│   │   │   └── index.ts
│   │   │
│   │   ├── Requests/                 # Request management
│   │   │   ├── RequestsPage.tsx      # Requests list view
│   │   │   ├── CreateRequestModal.tsx
│   │   │   ├── RequestDetailsModal.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Teams/                    # Team management
│   │   │   ├── CreateTeamModal.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── ui/                       # Shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   └── [30+ more components]
│   │   │
│   │   └── NavLink.tsx               # Router navigation link
│   │
│   ├── context/                      # React Context providers
│   │   ├── AuthContext.tsx           # Authentication state
│   │   └── ThemeContext.tsx          # Theme management
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-mobile.tsx            # Mobile detection
│   │   └── use-toast.ts              # Toast notifications
│   │
│   ├── lib/                          # Utility libraries
│   │   ├── utils.ts                  # Helper functions
│   │   └── profileImages.ts          # Avatar utilities
│   │
│   ├── pages/                        # Page components
│   │   ├── Index.tsx                 # Landing page
│   │   ├── Login.tsx                 # Login page
│   │   ├── SignUp.tsx                # Registration page
│   │   ├── Dashboard.tsx             # Main dashboard
│   │   ├── EquipmentPage.tsx         # Equipment management
│   │   ├── RequestsPage.tsx          # Requests management
│   │   ├── TeamsPage.tsx             # Team management
│   │   ├── CalendarPage.tsx          # Calendar view
│   │   ├── AdminPage.tsx             # Admin panel
│   │   ├── SettingsPage.tsx          # User settings
│   │   └── NotFound.tsx              # 404 page
│   │
│   ├── routes/                       # Route protection
│   │   └── ProtectedRoute.tsx        # Auth guard
│   │
│   ├── services/                     # API services
│   │   └── api.ts                    # Axios API client (531 lines)
│   │
│   ├── types/                        # TypeScript definitions
│   │   └── index.ts                  # Type declarations
│   │
│   ├── App.tsx                       # Root component
│   ├── main.tsx                      # Entry point
│   └── index.css                     # Global styles
│
├── components.json                   # Shadcn config
├── tailwind.config.ts                # Tailwind configuration
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript config
├── package.json                      # Dependencies
└── README.md                         # This file
```

### Backend (Server/)

```
Server/
├── config/
│   └── db.js                         # MongoDB connection
│
├── controllers/                      # Route handlers
│   ├── auth.controller.js            # Authentication logic
│   ├── user.controller.js            # User CRUD operations
│   ├── equipment.controller.js       # Equipment management
│   ├── request.controller.js         # Request handling
│   ├── team.controller.js            # Team management
│   └── dashboard.controller.js       # Analytics & stats
│
├── middlewares/                      # Express middleware
│   ├── auth.middleware.js            # JWT verification
│   ├── role.middleware.js            # Role-based access
│   └── error.middleware.js           # Error handling
│
├── models/                           # Mongoose schemas
│   ├── User.js                       # User model
│   ├── Equipment.js                  # Equipment model
│   ├── MaintenanceRequest.js         # Request model
│   └── MaintenanceTeam.js            # Team model
│
├── routes/                           # API routes
│   ├── auth.routes.js                # /api/auth/*
│   ├── user.routes.js                # /api/users/*
│   ├── equipment.routes.js           # /api/equipment/*
│   ├── request.routes.js             # /api/requests/*
│   ├── team.routes.js                # /api/teams/*
│   └── dashboard.routes.js           # /api/dashboard/*
│
├── utils/                            # Helper utilities
│   ├── ApiError.js                   # Custom error class
│   └── asyncHandler.js               # Async wrapper
│
├── server.js                         # Express app entry
├── package.json                      # Dependencies
└── .env                              # Environment variables (not in repo)
```

---

## 🛠️ Installation

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** or **bun**
- **MongoDB** (local or Atlas)

### Environment Variables

Create `.env` file in `Server/` directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/yantracare
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yantracare

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:5173
```

Create `.env` file in `Client/` directory:

```env
VITE_API_URL=http://localhost:4000/api
```

### Installation Steps

#### 1. Clone Repository

```bash
git clone <repository-url>
cd YantraCare
```

#### 2. Install Backend Dependencies

```bash
cd Server
npm install
```

#### 3. Install Frontend Dependencies

```bash
cd ../Client
npm install
# or if using bun:
bun install
```

#### 4. Start MongoDB

```bash
# If using local MongoDB:
mongod

# If using MongoDB Atlas, ensure your connection string is correct in .env
```

#### 5. Start Backend Server

```bash
cd Server
npm run dev
# Server will run on http://localhost:4000
```

#### 6. Start Frontend Development Server

```bash
cd Client
npm run dev
# Client will run on http://localhost:5173
```

#### 7. Access Application

Open browser and navigate to: `http://localhost:5173`

### Default Login Credentials

After first run, you can create an admin account via signup or use seed data if provided.

```
Email: admin@example.com
Password: admin123
Role: admin
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | User login | No |
| GET | `/me` | Get current user | Yes |

### User Routes (`/api/users`)

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| GET | `/` | Get all users | Yes | Admin, Manager |
| GET | `/:id` | Get user by ID | Yes | All |
| PATCH | `/:id` | Update user | Yes | Admin, Self |
| DELETE | `/:id` | Delete user | Yes | Admin |

### Equipment Routes (`/api/equipment`)

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| GET | `/` | Get all equipment (with filters) | Yes | All |
| GET | `/:id` | Get equipment by ID | Yes | All |
| POST | `/` | Create equipment | Yes | Admin, Manager |
| PATCH | `/:id` | Update equipment | Yes | Admin, Manager |
| DELETE | `/:id` | Delete equipment | Yes | Admin |
| PATCH | `/:id/scrap` | Mark as scrapped | Yes | Admin, Manager |

### Request Routes (`/api/requests`)

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| GET | `/` | Get all requests (with filters) | Yes | All |
| GET | `/:id` | Get request by ID | Yes | All |
| POST | `/` | Create request | Yes | All |
| PATCH | `/:id` | Update request | Yes | Admin, Manager, Assigned Tech |
| PATCH | `/:id/status` | Update status only | Yes | Admin, Manager, Assigned Tech |
| DELETE | `/:id` | Delete request | Yes | Admin, Creator |

### Team Routes (`/api/teams`)

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| GET | `/` | Get all teams | Yes | All |
| GET | `/:id` | Get team by ID | Yes | All |
| POST | `/` | Create team | Yes | Admin, Manager |
| PATCH | `/:id` | Update team | Yes | Admin, Manager, Team Leader |
| DELETE | `/:id` | Delete team | Yes | Admin |
| POST | `/:id/members` | Add member | Yes | Admin, Manager, Team Leader |
| DELETE | `/:id/members/:userId` | Remove member | Yes | Admin, Manager, Team Leader |

### Dashboard Routes (`/api/dashboard`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/stats` | Get dashboard statistics | Yes |
| GET | `/recent-requests` | Get recent maintenance requests | Yes |
| GET | `/calendar-events` | Get calendar events | Yes |

---

## 📸 Screenshots

### Dashboard
![Dashboard showing real-time statistics, recent requests, and quick actions]

### Equipment Management
![Equipment list with filters, search, and CRUD operations]

### Kanban Board
![Drag-and-drop Kanban board for request workflow management]

### Calendar View
![FullCalendar showing scheduled maintenance with color coding]

### Team Management
![Team cards showing members, leader, and team statistics]

### Mobile Responsive
![Responsive design working seamlessly on mobile devices]

---

## 👥 Team

Built with ❤️ during **Odoo x Adani University Hackathon Round 1**

**Development Time**: 8 hours  
**Hackathon**: Odoo x Adani University  
**Round**: 1

---

## 📄 License

This project was created for the Odoo x Adani University Hackathon.

---

## 🙏 Acknowledgments

- **Odoo & Adani University** for organizing the hackathon
- **Shadcn/ui** for the amazing component library
- **FullCalendar** for calendar functionality
- **MongoDB** for the flexible database solution
- Open source community for all the incredible tools

---

## 📞 Support

For any queries or issues, please contact the development team.

---

**Made with speed and precision in 8 hours! ⚡**
