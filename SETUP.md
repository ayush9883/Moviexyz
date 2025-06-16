# 🔧 Setup Instructions

## ⚠️ Important Security Notice

This repository is for **DEMONSTRATION PURPOSES ONLY**. The actual production environment uses secure configurations that are not included in this public repository.

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Database (MongoDB/PostgreSQL)
- API keys for external services

## 🚀 Getting Started

### 1. Clone Repository
```bash
git clone [repository-url]
cd movie-project
```

### 2. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 3. Environment Configuration

Create `.env` files in both frontend and backend directories with the following variables:

#### Backend Environment Variables:
```
DATABASE_URL=your_database_connection
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_api_key
# ... other required variables
```

#### Frontend Environment Variables:
```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_BASE_URL=your_base_url
# ... other public variables
```

### 4. Database Setup
```bash
# Run database migrations
npm run migrate

# Seed initial data
npm run seed
```

### 5. Run Development Servers

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## 🔒 Security Notes

- Never commit `.env` files
- Use environment-specific configurations
- Implement proper authentication
- Validate all user inputs
- Use HTTPS in production

## 📞 Support

For setup assistance or licensing inquiries, contact: [your-email@example.com]

---

**Note:** This setup guide provides a general overview. Actual production deployment requires additional security measures and configurations not documented here for security reasons. 