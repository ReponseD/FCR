# Flight Club Rwanda Backend

This backend provides an API endpoint for the contact form on the Flight Club Rwanda website. It receives form submissions and sends them as emails to info@flightclubrwanda.org using Nodemailer.

## Setup Instructions

1. **Install dependencies:**
   - Open a terminal in the `backend` folder and run:
     ```
     npm install
     ```

2. **Configure email credentials:**
   - Create a `.env` file in the `backend` folder with the following content:
     ```
     FCR_EMAIL_USER=your-email@gmail.com
     FCR_EMAIL_PASS=your-app-password
     ```
   - Replace with your actual email and app password (use Gmail App Passwords or your provider's equivalent).

3. **Run the backend server:**
   - In the terminal, run:
     ```
     npm start
     ```
   - The server will start on port 3001 by default.

## API Endpoint

- **POST /api/contact**
  - Expects JSON body: `{ name, email, message }`
  - Sends email to info@flightclubrwanda.org

## CORS
- CORS is enabled for local development. Adjust as needed for production.

## Security Note
- Do not commit your `.env` file or credentials to version control.

---

For any issues, contact the developer or refer to the copilot-instructions.md in `.github`.
