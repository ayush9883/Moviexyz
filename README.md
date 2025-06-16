# 🎬 Next.js 14 Movie Streaming Platform

A modern, full-stack movie streaming and database management application built with Next.js 14, featuring both frontend user interface and backend admin dashboard.

## ⚠️ IMPORTANT LEGAL NOTICE

**This project is protected by copyright and additional usage restrictions. Please read the LICENSE file carefully before using any part of this code.**

### 🚫 Prohibited Uses:
- ❌ Creating competing movie streaming platforms
- ❌ Commercial use without explicit permission
- ❌ Reselling or redistributing for profit
- ❌ Removing attribution or license notices

### ✅ Allowed Uses:
- ✅ Learning and educational purposes
- ✅ Personal projects (non-commercial)
- ✅ Contributing to this repository
- ✅ Academic research and study

## 🚀 Features

### Frontend (User Interface)
- 🎥 Browse movies by categories (Bollywood, Hollywood, South Indian, etc.)
- 🎭 Genre-based filtering and search
- 📱 Responsive design for all devices
- 🎨 Modern UI with smooth animations
- 📖 Movie details with ratings, descriptions, and download links
- 📞 Contact and DMCA compliance pages

### Backend (Admin Dashboard)
- 🔐 Secure authentication system
- 📝 Movie database management (CRUD operations)
- 📊 Admin dashboard with analytics
- 🎬 Bulk movie upload and editing
- 🏷️ Category and genre management
- 📱 API endpoints for frontend integration

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, Tailwind CSS
- **Backend:** Next.js API Routes, MongoDB, Mongoose
- **Authentication:** NextAuth.js
- **Database:** MongoDB with Mongoose ODM
- **Styling:** CSS Modules and Tailwind CSS
- **Icons:** React Icons
- **HTTP Client:** Axios

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Git

### Clone & Install
```bash
git clone https://github.com/tabrezrabbani/movie-project.git
cd movie-project

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Setup
Create `.env.local` files in both frontend and backend directories:

**Frontend (.env.local):**
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
MONGODB_URI=your-mongodb-connection-string
```

**Backend (.env.local):**
```env
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
API_BASE_URL=http://localhost:3001
```

### Run Development Servers
```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend  
cd backend
npm run dev
```

Visit:
- Frontend: http://localhost:3000
- Backend Admin: http://localhost:3001

## 📁 Project Structure

```
movie-project/
├── frontend/              # User-facing application
│   ├── components/        # Reusable UI components
│   ├── pages/            # Next.js pages and routing
│   ├── styles/           # CSS and styling files
│   ├── lib/              # Utility functions
│   ├── hooks/            # Custom React hooks
│   └── models/           # Data models
├── backend/              # Admin dashboard & API
│   ├── pages/            # Admin pages and API routes
│   ├── components/       # Admin UI components
│   ├── models/           # Database models
│   └── lib/              # Backend utilities
└── LICENSE               # Usage terms and restrictions
```

## 🎭 Movie Categories Supported

- Editor's Choice
- Bollywood
- Hollywood  
- South Indian Movies
- Regional Cinema (Gujarati, Punjabi, Telugu, Tamil, Malayalam, Kannada)
- Pakistani Cinema
- Marvel Studios & DC
- TV Shows & Web Series

## 📊 Database Schema

### Movie Model
```javascript
{
  title: String,
  slug: String (required),
  bgposter: String,
  smposter: String,
  description: String,
  rating: String,
  duration: String,
  year: String,
  genre: [String],
  language: String,
  category: String,
  downloadlink: {
    "480p": String,
    "720p": String,
    "1080p": String,
    "4k": String
  },
  status: String
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Note:** All contributions must comply with the project's license terms.

## 📞 Contact & Support

For questions, permissions, or support:
- 📧 Email: tabrezrabbani750@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/tabrezrabbani/movie-project/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/tabrezrabbani/movie-project/discussions)

## ⚖️ Copyright & License

© 2024 Tabrez Rabbani. All rights reserved.

This project is licensed under a Proprietary Software License with usage restrictions. See the [LICENSE](LICENSE) file for full terms.

**Key Points:**
- ✅ Free for personal, educational, and non-commercial use
- ❌ Commercial use requires explicit written permission
- ❌ Cannot be used to create competing platforms
- ✅ Attribution required in all derivative works

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB team for the database solution
- All open-source contributors who made this possible

---

**⭐ If you find this project helpful, please give it a star and follow for more updates!**

**🚨 Remember: Respect the license terms and use responsibly.**