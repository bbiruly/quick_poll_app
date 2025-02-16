# 📌 Quick Polling App
A simple polling app where users can:

✅ Create a poll with a question and multiple options  
✅ Vote on a poll  
✅ View poll results in real-time (auto-refresh every 5 seconds)  

---

## 🚀 Live Demo
🔗 [Deployed Link](#) *(if applicable)*

---

## 🛠️ Tech Stack
**Frontend:** React, Tailwind CSS, React Router  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose ORM)  
**Real-time Updates:** setInterval (Polling), WebSockets (Optional)  

---

## 🔧 Setup & Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/bbiruly/quick-polling-app.git
cd quick-polling-app
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file and add:
```ini
VITE_API_URL=http://localhost:5000
MONGO_URI=your-mongodb-connection-string
```
Run the server:
```sh
npm start
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev
```
Visit: [http://localhost:5173](http://localhost:5173) in your browser

---

## 📌 API Endpoints
| Method | Endpoint       | Description        |
|--------|--------------|------------------|
| GET    | `/api/polls`  | Fetch all polls   |
| POST   | `/api/polls`  | Create a new poll |
| POST   | `/api/vote`   | Vote on a poll    |
| GET    | `/api/results` | Get poll results  |

---

## 🖼️ Screenshots
| Create Poll | Vote on Poll | View Results |
|------------|------------|------------|
| *(Add Screenshot)* | *(Add Screenshot)* | *(Add Screenshot)* |

---

## 📜 License
This project is **MIT Licensed**. Feel free to use and modify.

---

## 🙌 Contributing
1. Fork this repository  
2. Create a branch (`feature/new-feature`)  
3. Commit your changes  
4. Push to the branch  
5. Submit a Pull Request 🎉  

---

## 📧 Contact
For any issues, feel free to raise an issue or reach out:

📩 **Email:** [biruly2020@gmail.com](mailto:biruly2020@gmail.com)  
👨‍💻 **GitHub:** [bbiruly](https://github.com/bbiruly)  

⭐ If you found this project useful, don't forget to **give it a star!** 🌟
