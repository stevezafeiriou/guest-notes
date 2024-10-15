# Guest Notes App for Art Exhibitions

## Overview

The **Guest Notes App** is a React.js web application designed specifically for art exhibitions and events. It allows visitors to leave feedback, comments, or thoughts about the artwork or the event itself. The app displays submitted notes in real-time and includes interactive elements to enhance the user experience, such as hover effects, confetti, and toast notifications. The app also includes URL-based navigation, allowing users to navigate directly to specific exhibitions (tags) via a query parameter.

## Features

- **Live Guest Notes Display**: New notes appear instantly at the top of the list.
- **Tag-Based Filtering**: Users can view guest notes for a specific exhibition or event by selecting a tag, which is reflected in the URL as a query parameter (e.g., `?tag=2`). This allows for easy sharing of specific exhibitions via URLs.
- **Interactive Hover Effects**: When hovering over a note, the other notes blur to focus on the selected note.
- **Cursor-Following Text**: A small piece of text follows the mouse cursor during hover to make the experience more engaging.
- **Form Validation**: Guests must provide an email address and accept the terms of service before submitting feedback.
- **Confetti Animation**: A confetti animation is triggered when a new note is successfully added.
- **Toast Notifications**: Progress and success/error notifications are shown during the note submission process.
- **Tag Synchronization**: The tag dropdown in the feedback form is synchronized with the currently selected exhibition tab.

## Technologies Used

- **Frontend**:

  - React.js
  - Styled-components for CSS-in-JS
  - React-toastify for notifications
  - React-confetti for fun animations

- **Backend**:
  - A custom API (which you will need to create) for handling guest notes
  - MySQL for storing guest notes

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v12.x or higher)
- **npm** (Node package manager)

You will also need to create your own backend API for handling the submission and retrieval of guest notes.

### Required Database Structure

To store the guest notes, your database should have the following structure (using MySQL as an example):

```sql
CREATE TABLE guest_notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) DEFAULT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  tag_id INT NOT NULL,  -- Connects the note to an exhibition (tag)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE guest_notes_tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Database Fields:

- **`guest_notes`** table:

  - **`id`**: Auto-incremented ID for each note.
  - **`name`**: Name of the guest (optional).
  - **`email`**: Email of the guest (required).
  - **`message`**: The feedback message (required).
  - **`tag_id`**: Reference to the exhibition or event (required).
  - **`created_at`**: Timestamp of when the note was created.

- **`guest_notes_tags`** table:
  - **`id`**: Auto-incremented ID for each tag.
  - **`tag_name`**: Name of the exhibition or event.
  - **`created_at`**: Timestamp of when the tag was created.

You will need to create a backend API that interacts with this database for the app to fetch and submit notes.

## Installation

Follow these steps to set up and run the Guest Notes App locally:

### 1. Clone the Repository

```bash
git clone https://github.com/saphirelabs/guest-notes-app.git
cd guest-notes-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project and add the following:

```bash
REACT_APP_API_URL=https://your-backend-api.com
```

Replace `https://your-backend-api.com` with the URL of the backend API that you will create to handle the guest notes.

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

### Navigating by URL

You can navigate directly to a specific exhibition or tag using a query parameter. For example:

- `domain.com/?tag=1`: This will show the notes related to the exhibition with `id=1`.
- The selected exhibition tag is reflected in the URL, so you can easily share links that go directly to specific exhibitions.

### Notifications

When a new note is submitted:

- **Toast notifications** will show the progress and outcome of the submission (e.g., "Sending...", "Note added successfully", or error messages).
- **Confetti animation** will celebrate the successful addition of a new note.

## Backend Integration

You need to create your own API that the app will interact with. The API should provide the following endpoints:

1. **POST `/add`** - Add a new guest note

   - Expected request body:

     ```json
     {
     	"name": "Guest Name", // Optional
     	"email": "guest@example.com", // Required
     	"message": "Feedback message", // Required
     	"tag_id": 1 // Required - Links the note to the relevant exhibition or event
     }
     ```

   - On success, return the created note:
     ```json
     {
     	"id": 1,
     	"name": "Guest Name",
     	"email": "guest@example.com",
     	"message": "Feedback message",
     	"tag_id": 1,
     	"created_at": "2024-10-15T12:34:56"
     }
     ```

2. **GET `/notes/:tag_id`** - Get all guest notes for a specific tag

   - Returns a list of notes for the selected exhibition or event, in reverse chronological order (newest first):
     ```json
     [
       {
         "id": 1,
         "name": "Guest Name",
         "email": "guest@example.com",
         "message": "Feedback message",
         "tag_id": 1,
         "created_at": "2024-10-15T12:34:56"
       },
       ...
     ]
     ```

3. **GET `/tags`** - Get all available exhibition tags
   - Returns a list of all exhibition tags:
     ```json
     [
       {
         "id": 1,
         "tag_name": "British Art Fair 2024"
       },
       {
         "id": 2,
         "tag_name": "Eye's Walk Digital Festival"
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

### TO DO:

1. **Include Image Uploads**

   - Allow users to upload images along with their guest notes.
   - Add backend support for handling image uploads (e.g., storing in the database or a cloud service).
   - Display uploaded images alongside guest notes.

2. **Include Generative Profile Pictures**

   - Implement generative profile pictures for guests who do not upload a profile image.
   - Use a library or API (e.g., robohash, dicebear, etc.) to create unique avatars based on guest names or email addresses.

3. **Include Instagram Handle**
   - Add a field for guests to optionally provide their Instagram handle.
   - Display the Instagram handle (with a link to their profile) next to their guest note.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Contact

For any inquiries or feedback, please reach out to [Steve Zafeiriou](mailto:steve@saphirelabs.com).
