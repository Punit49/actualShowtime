# Showtime - Movie Booking Application

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

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Punit49/actualShowtime.git
   cd actualShowtime
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**

   Create `.env` file in the `server` directory:
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017
   
   # TMDB API Key (Get from https://www.themoviedb.org/settings/api)
   TMDB_API_KEY=your_tmdb_api_key_here
   
   # Stripe Configuration (Get from https://dashboard.stripe.com/apikeys)
   STRIPE_SECRET_KEY=your_stripe_secret_key_here
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here
   
   # Email Configuration (SMTP settings)
   SMTP_USER=your_smtp_user_here
   SMTP_PASS=your_smtp_password_here
   SENDER_EMAIL=your_sender_email_here
   
   # Clerk Configuration (Get from https://dashboard.clerk.com)
   CLERK_SECRET_KEY=your_clerk_secret_key_here
   ```

   Create `.env` file in the `client` directory:
   ```env
   # API Base URL
   VITE_BASE_URL=http://localhost:3000
   
   # TMDB Image Base URL
   VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
   
   # Clerk Configuration (Get from https://dashboard.clerk.com)
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   
   # Currency
   VITE_CURRENCY=USD
   ```

4. **Run the application**
   ```bash
   # Start the server (from server directory)
   cd server
   npm run server
   
   # Start the client (from client directory, in a new terminal)
   cd client
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📁 Project Structure

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
- `GET /api/booking/all` - Get all bookings (admin)

### Users
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

### Backend (Railway/Heroku)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy the server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Punit49**
- GitHub: [@Punit49](https://github.com/Punit49)

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data
- [Clerk](https://clerk.com/) for authentication
- [Stripe](https://stripe.com/) for payments
- [Tailwind CSS](https://tailwindcss.com/) for styling
