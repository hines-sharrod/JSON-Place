## Challenge:

Using data from https://jsonplaceholder.typicode.com, create a single page application providing the following capabilities:

A dropdown is displayed listing all users

When selecting a user from the dropdown, all of that user’s available information is displayed:
  name
  username
  email
  address
  phone
  website
  company

When selecting a user from the dropdown, all of that user’s posts are listed with:
  title
  body
  number of comments

The title of each post should be a link to the details for that post. On that page, in addition to the post title and body, each comment should be listed with:
  name of user
  email of user
  comment text

I should be presented with the ability to approve or reject any comment that is in pending state

  NOTE: The provided API does not return a moderation status for comments
  It can be assumed that for any comment without this data the moderation status is "pending"
  The appropriate request should be made to the server to approve or reject a comment
  The value will not be updated or saved on the server, but should still appropriately update the UI while on the page
  When refreshing the page, data may be lost
