# App Spec

## Mandatory

### Todo List

### Requirements

The core functionality of a todo list type applicaton relies on the ability for users to easily manage and track their todos, therefore the following should be possible:

As a user,

- I can (CRUD) Create, Read, Update, and Delete todo items
- I can add a title(required) and a body(optional) to a todo item
- I can add hashtags to any todo item
- I can perform a text-based search that applies against title and/or body
- I can filter by hashtag
- I can see a list of todo items colored by hashtag
- I when I refresh the page I can still see my todo items

#### UX Considerations

Make sure that it is clear to the user how they can create, edit or delete todos. Try to avoid the use of modals if possible.

#### Possible Implementation Strategies

For todo persistence, if you are not implementing a full backend, store the todos to the user's local state.

Otherwise, check out firebase or airtable to get a backend up and running quickly.

### Time Tracking

### Requirements

In order to expand this apps functionality beyond a simple todo app, we're going to implement a time tracker that allows the user to manage how long they spend working towards each goal or task. To make this possile, the following should be possible:

As a user,

- I can track the number of days/hours/minutes/seconds I have worked on a task.
- I can view the amount of time (if at all) I’ve spent on any given task

#### UX Considerations

#### Possible Implementation Strategies

Quick tip: Instead of tracking time on the client side, you can store the start/end times on the todo itself in the database. To handle time, you could use [moment.js](https://momentjs.com/). Although, some might say that it is [no longer necessary](https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore).
