# to-do-app


Project Title: To-Do App

Description:
The To-Do App is a simple web application designed to help users manage their daily tasks. It provides functionality for adding, completing, and deleting tasks. The main features of the app include:

1. Adding Tasks: Users can input a task into the text field and click the "Add Task" button to add it to their to-do list. Tasks are added with a timestamp indicating when they were added.

2. Completing Tasks: Each task in the pending tasks list has a "Complete" button associated with it. Clicking this button marks the task as completed, moving it to the completed tasks list. Completed tasks are displayed with a strike-through effect.

3. Undoing Completion: If a task is marked as completed by mistake or needs to be reopened, users can click the "Undo" button associated with the completed task to move it back to the pending tasks list.

4. Deleting Tasks: Both pending and completed tasks have a "Delete" button associated with them. Clicking this button removes the task from the list entirely.

5. Timestamp Display: Each task displayed in the list includes a timestamp indicating when it was added to the list. This helps users keep track of when tasks were created.

Implementation:
The project is implemented using HTML, CSS, and JavaScript. HTML is used for the structure of the web page, CSS for styling elements, and JavaScript for the dynamic functionality of adding, completing, and deleting tasks. The project utilizes event listeners to handle user interactions such as clicking buttons to add, complete, or delete tasks. Tasks are stored in an array in JavaScript, and the DOM is manipulated to reflect changes in the task lists dynamically.

User Interface:
The user interface is designed to be simple and intuitive. Users can easily input tasks, mark them as complete, and delete them with minimal effort. The interface provides visual feedback by displaying completed tasks with a strike-through effect and organizing tasks into separate pending and completed lists for better organization. Timestamps are included to provide additional context about when tasks were added.
