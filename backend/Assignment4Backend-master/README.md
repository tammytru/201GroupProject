Open Constants file and add your database connection URL.

Here are the backend API endpoints. It accepts JSON, and returns JSON to be used on the front end.

1. Register user:
Send POST Request to localhost:8080/Assignment4Backend/RegisterUser
Send with parameters:
String username, String password, String hint, String profileImage
You will receive a userID back

2. Verify that user exists (to use when logging user in)
Send POST Request to localhost:8080/Assignment4Backend/VerifyLogin
Send with parameters:
String username, String password
You will receive a userID over 1 back if the user is found, if the user doesn't exist, you will receive a userID of -1

3. Make a post/recipe
Send POST request to localhost:8080/Assignment4Backend/Recipe
Send with parameters:
String date, String image, String name, int rating, String text, int userID

4. View post/recipe
Send GET request to localhost:8080/Assignment4Backend/Recipe
Send with parameter:
int postID
You will receive JSON back that looks like this:
```
{
    "date": "11/25/2022",
    "image": "https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg",
    "name": "Cucumber Sandwich",
    "rating": 4,
    "text": "Recipe instructions go here.",
    "userID": 1
}
```

5. View User
Send GET request to localhost:8080/Assignment4Backend/RegisterUser
Send with parameter:
int userID

You will receive JSON back that looks like this:
```
{
    "name": "testUser",
    "password": "pass",
    "hint": "This is a hint",
    "profileImage": "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
    "bio": "This is a sample user bio",
    "rating": 5
}
```