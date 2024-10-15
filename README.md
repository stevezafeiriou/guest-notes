# Guest Notes App for Art Exhibitions

## Overview

The **Guest Notes App** is a React.js web application designed for Art Exhibitions. It allows visitors to leave feedback, comments, or thoughts about the artwork or the event itself. The app features a simple and elegant user interface where guests can enter their names, email addresses, and feedback messages. The app displays the submitted notes in real-time and sends notifications when a new note is added.

## Features

- **Live Guest Notes Display**: Submitted notes are instantly displayed on the app, with the newest notes appearing at the top.
- **Interactive Hover Effects**: When hovering over a note, all other notes blur to emphasize the selected note.
- **Follow-the-Cursor Text**: While hovering, a small piece of text follows the mouse cursor for an engaging interactive experience.
- **Form Validation**: Guests must provide an email address and accept the terms of service before submitting their feedback.
- **Confetti Effect**: A confetti animation is triggered when a new note is successfully added.
- **Toast Notifications**: Toast notifications provide feedback to the guest during the note submission process (e.g., "Sending...", "Note added successfully", or error messages).

## Technologies Used

- **Frontend**:

  - React.js
  - Styled-components
  - React-toastify for notifications
  - React-confetti for confetti effect

- **Backend**:
  - API (you'll create your own) for handling guest notes
  - MySQL for storing guest notes

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v12.x or higher)
- **npm** (Node package manager)
- **A backend endpoint** (You'll create your own API for handling the notes)

### Required Database Structure

To store the guest notes, your database should have the following structure (MySQL example):

```sql
CREATE TABLE guest_notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) DEFAULT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Database Fields:

- **`id`**: Auto-incremented ID for each note.
- **`name`**: Name of the guest (optional).
- **`email`**: Email of the guest (required).
- **`message`**: The feedback message (required).
- **`created_at`**: Timestamp of when the note was created.

You will need to create a backend API that interacts with this database for the app to fetch and submit notes.

## Installation

Follow these steps to set up and run the Guest Notes App locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/guest-notes-app.git
cd guest-notes-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root of your project and add the following:

```bash
REACT_APP_API_URL=https://your-backend-api.com
```

Replace `https://your-backend-api.com` with the URL of the backend API you have created to handle the guest notes.

### 4. Run the Application

Once everything is set up, start the development server:

```bash
npm start
```

The app will be running at `http://localhost:3000`.

## Usage

### Submitting Guest Notes

Guests can:

1. Enter their name (optional), email (required), and a feedback message.
2. Check the "Accept Terms of Service" box.
3. Submit the note, which will appear instantly in the guest notes section at the top of the page.

### Receiving Notifications

When a new note is submitted:

- Toast notifications will appear to show progress and results of the submission process (e.g., "Sending...", "Note added successfully", or error messages).
- Confetti will celebrate the successful addition of a new note.

## Backend Integration

You are required to create your own API that the app will interact with. The API should provide the following endpoints:

1. **POST `/add`** - Add a new guest note

   - Expected request body:

     ```json
     {
     	"name": "Guest Name", // Optional
     	"email": "guest@example.com", // Required
     	"message": "Feedback message" // Required
     }
     ```

   - On success, return the created note:
     ```json
     {
     	"id": 1,
     	"name": "Guest Name",
     	"email": "guest@example.com",
     	"message": "Feedback message",
     	"created_at": "2024-10-15T12:34:56"
     }
     ```

2. **GET `/all`** - Get all guest notes
   - Returns a list of all notes in reverse chronological order (newest first):
     ```json
     [
       {
         "id": 1,
         "name": "Guest Name",
         "email": "guest@example.com",
         "message": "Feedback message",
         "created_at": "2024-10-15T12:34:56"
       },
       ...
     ]
     ```

## Customization

You can modify the following aspects of the app:

- **Confetti Effect**: Adjust the `react-confetti` component for different visual effects.
- **Toast Notifications**: Customize the toast notification messages and styles using `react-toastify`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Contact

For any inquiries or feedback, please reach out to [Steve Zafeiriou](mailto:steve@saphirelabs.com).
