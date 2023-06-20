# PostScribe

# Installation Manual for PostScribe

This guide will walk you through the steps to install PostScribe, a project made with React and Vite, from its GitHub repository.

## Prerequisites

Before installing PostScribe, make sure you have the following software installed on your machine:

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation Steps

1. Clone the PostScribe repository from GitHub using the following command:
    
    ```
    git clone <https://github.com/MariehVegaS/post-scribe.git>
    ```
    
2. Navigate to the project directory:
    
    ```
    cd post-scribe
    ```
    
3. Install the required dependencies:
    
    ```
    npm install
    ```
    
4. Start the development server:
    
    ```
    npm run dev
    ```
    
5. Open your browser and navigate to `http://localhost:3000` (or the path indicated by the console) to view the application.

Congratulations! You have successfully installed PostScribe on your machine.

## Issues during installation…

This concludes the installation guide for PostScribe. If you encounter any issues during the installation process, please refer to the project's documentation or open an issue on the GitHub repository.

## How does it work?

PostScribe is a web application built with React and Vite. Here's how to use it:

1. Upon starting the application, you will see a table with different posts brought in through JSONPlaceholder. Each row has a corresponding checkbox. Selecting the checkbox for one or more posts will display options in the table header for editing and deleting.
2. To edit a post, you must first select only one post. If you have only one post selected, clicking the edit button will take you to another page with the form for editing the post. If you click the edit button with multiple posts selected, you will receive a prompt asking you to select only one post. Once you are on the edit page, clicking the edit button will prompt you to confirm that you want to edit the selected post. Clicking "yes" will edit the post and take you back to the main page. Clicking "cancel" will close the prompt without making any changes.
3. To delete a post, select one or more posts and click the delete button. This will prompt you to confirm that you want to delete the selected posts. Clicking "yes" will delete the post(s) and show a toast notification that the action was successful. Clicking "no" will close the prompt without making any changes.
4. Below the table is a button to create a new post. Clicking this button will take you to another page with a form to create a new post. Fill in the form and click "create" to create a new post. You will be redirected back to the main page and shown a toast notification that the action was successful.
5. Both the create and edit pages have a button to return to the main page. Additionally, a toast notification will appear in the top corner of the window to indicate that the action (edit or create) is being performed. Once the action is complete, another toast notification will appear indicating that the action was successful.
6. The header of the page contains the PostScribe logo and a link to the "About" page. Clicking the link will take you to an informational page about how the project was made. Clicking the header link will take you back to the main page.