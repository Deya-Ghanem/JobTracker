# JobTracker

JobTracker is a simple full-stack web application that helps users keep track of their job applications in one place.  
Instead of using notes or spreadsheets, users can add jobs they applied to, update their status, and manage everything from a single dashboard.

This project was built to practice full-stack development using React on the frontend and Django on the backend, and to better understand how both parts communicate in a real application.

---

## Features

- Add new job applications  
- Edit existing job entries  
- Delete jobs  
- View all applications in one place  
- Basic form validation  
- REST API for handling job data  

---

## Tech Stack

**Frontend**
- React
- CSS

**Backend**
- Django
- Django REST Framework

**Database**
- MySQL

---

## How to Run the Project Locally

### Backend (Django)

1. Navigate to the backend folder  
2. Create and activate a virtual environment  
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. Navigate to the frontend folder  
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## What I Learned

- How to structure a full-stack project with separate frontend and backend  
- How to build REST APIs using Django REST Framework  
- How to connect a React frontend to a backend API  
- How to manage forms and state in React  
- How to debug issues between the client and server  

Working on this project helped me understand real-world development better than tutorials alone.

---

## Future Improvements

- Add user authentication  
- Improve UI and responsiveness  
- Add job filtering and search  
- Deploy the application online  
