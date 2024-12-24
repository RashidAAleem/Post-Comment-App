
let userComment = document.getElementById("userComment");
let clickBtn = document.querySelector(".btn");
let comment = document.getElementById("commentted");

const addComment = () => {
// Create a container for the comment
const commentContainer = document.createElement("div");
commentContainer.classList.add("first");

// Create the paragraph for the comment text
const commentText = document.createElement("p");
commentText.textContent = userComment.value;

// Create the buttons
const editButton = document.createElement("button");
editButton.textContent = "edit";
editButton.classList.add("commentBtn");

const deleteButton = document.createElement("button");
deleteButton.textContent = "delete";
deleteButton.classList.add("commentBtn");

// Append buttons to a wrapper div
const buttonWrapper = document.createElement("div");
buttonWrapper.appendChild(editButton);
buttonWrapper.appendChild(deleteButton);

// Append the comment text and button wrapper to the comment container
commentContainer.appendChild(commentText);
commentContainer.appendChild(buttonWrapper);

// Add the comment container to the DOM
comment.appendChild(commentContainer);

// Reset the input and disable the submit button
userComment.value = "";
clickBtn.disabled = true;

// Edit button functionality
editButton.addEventListener("click", () => {
// Create the edit input and save button
const editInput = document.createElement("input");
editInput.type = "text";
editInput.value = commentText.textContent;
editInput.classList.add("editInput");

const saveButton = document.createElement("button");
saveButton.textContent = "save";
saveButton.classList.add("saveBtn");

// Replace the comment text with the edit input
commentContainer.replaceChild(editInput, commentText);

// Hide the Edit and Delete buttons
buttonWrapper.style.display = "none";

// Append the save button
commentContainer.appendChild(saveButton);

// Save button functionality
saveButton.addEventListener("click", () => {
   // Update the comment text and replace the input with the updated text
   commentText.textContent = editInput.value;
   commentContainer.replaceChild(commentText, editInput);

   // Show the Edit and Delete buttons
   buttonWrapper.style.display = "flex";

   // Remove the Save button
   commentContainer.removeChild(saveButton);
});
});

// Delete button functionality
deleteButton.addEventListener("click", () => {
comment.removeChild(commentContainer);
});
};



userComment.addEventListener("input", () => {
clickBtn.disabled = userComment.value.trim() === "";
});

clickBtn.addEventListener("click", addComment);
