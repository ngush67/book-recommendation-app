# Book Recommendation App 

A full-stack web application that allows users to browse, add, and manage book recommendations. The app features a React frontend, a Node.js/Express backend, and MongoDB for database management.

## 🌟 Features

- View a list of recommended books
- Add new books with details like title, author, genre, and rating
- Connects to a MongoDB cloud database for persistent storage
- Responsive and clean UI built with Material UI (MUI)

## 🔧 Project Structure

```
book-recommendation-app/
├── backend/
│   ├── models/
│   │   └── Book.js
│   ├── routes/
│   │   └── bookRoutes.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddBook.js
│   │   │   └── BookList.js
│   │   ├── services/
│   │   │   └── bookService.js
│   │   ├── App.js
│   │   └── index.js
├── package.json
├── README.md
└── .gitignore
```

## 📊 Tech Stack

- **Frontend:** React, Axios, Material UI
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB (Cloud)
- **Tools:** Nodemon, Dotenv

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-recommendation-app.git
cd book-recommendation-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the backend directory:

```bash
MONGO_URI=your_mongodb_cloud_uri
```

- Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

### 4. Access the App

- **Frontend:** `http://localhost:3000`
- **Backend API:** `http://localhost:5000/api/books`

## 📊 API Endpoints

- `GET /api/books` - Fetch all books
- `POST /api/books` - Add a new book

## 🌟 Future Enhancements

- Implement user authentication (Sign up/Login)
- Add search and filter functionality
- Enable book rating and reviews
- Improve UI/UX with more advanced design

## 👥 Contributors

- [Your Name](https://github.com/your-username)

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

