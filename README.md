# Showtime - Movie ticket Booking Application

A full-stack movie booking application built with React, Node.js, and MongoDB. Users can browse movies, book tickets, and manage their bookings.

## 🎬 Features

- **Movie Browsing**: Browse and search movies using TMDB API
- **Ticket Booking**: Book movie tickets with seat selection
- **User Authentication**: Secure authentication using Clerk
- **Payment Integration**: Stripe payment processing
- **Admin Dashboard**: Manage shows, bookings, and users
- **Email Notifications**: Automated email confirmations
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Clerk** - Authentication
- **React Hot Toast** - Notifications
- **React Player** - Video player

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Stripe** - Payment processing
- **Nodemailer** - Email service
- **Clerk** - Authentication
- **Inngest** - Background jobs

**Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhocalhost:300 📁 Project Structure

```
showtime/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── assets/        # Static assets
│   ├── public/            # Public files
│   └── package.json
├── server/                # Node.js backend
│   ├── configs/          # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── inngest/         # Background jobs
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Shows
- `GET /api/show/movies` - Get all movies
- `GET /api/show/movie/:id` - Get movie details
- `POST /api/show/add` - Add new show (admin)
- `GET /api/show/shows` - Get all shows

### Bookings
- `POST /api/booking/create` - Create booking
- `GET /api/booking/user/:userId` - Get user bookings
- `GET /api/booking/all` - Get all bookings (adminadmin# Users
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Admin
- `GET /api/admin/dashboard` - Admin dashboard data
- `DELETE /api/admin/show/:id` - Delete show (admin)

## 🔐 Authentication

The application uses Clerk for authentication. Users can:
- Sign up with email/password
- Sign in with social providers
- Manage their profile
- Access protected routes

## 💳 Payment Integration

Stripe is integrated for payment processing:
- Secure payment processing
- Webhook handling for payment confirmations
- Support for multiple payment methods

## 📧 Email Notifications

Nodemailer is used for sending:
- Booking confirmations
- Payment receipts
- Account notifications

## 🎨 UI/UX Features

- **Responsive Design**: Works on all device sizes
- **Dark/Light Mode**: Theme switching capability
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📝 License - NA

## 👨‍💻 Author

**Punit49**
- GitHub: [@Punit49](https://github.com/Punit49)

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data
- [Clerk](https://clerk.com/) for authentication
- [Stripe](https://stripe.com/) for payments
- [Tailwind CSS](https://tailwindcss.com/) for styling
