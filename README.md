# capstone-iLOVED
Capstone project - building full stack app - using Node express, React.js

Full stack app using Node Express and React to build API and Application

“Honey? Do you remember that really amazing Pad Thai we ate a few months ago?”Website
app designed to track all your favorite meals you tried, LOVED, and revisit with your LOVED
ones!! App allows you to search restaurant menu you want to try out, record meals you LOVED,
and leave simple journal of your experience

Front-End Functionality;

Using the componet lifecycle componentDidMount - axios API request, and state - data is passed down as props to generate side videos, all main video content including comments
3 routes exist for Home/On video page with comments, Video Upload Page, and Side vidoe list
Clicking videos in "Next Video" displays Video Details - using componentDidUpdate lifecycle for the selected video to apply dynamic URL and displays all the information from stored back-end server(likes, view, author, description, comments, etc.)
Event handlers was used to POST videos in Upload page and POST new comments in main page for each videos
Back-End Functionality;

The end-point and reponse structure of back-end server contains GET/video, GET/video/:id, POST/video
Submitting a new video from the form (Upload Page) POSTs to the API
Submitting a comment from the displaying video detail page POSTs to the API
Demo screensht:

![1](https://user-images.githubusercontent.com/59574143/84601656-f0927180-ae4f-11ea-8010-9395cb643bc5.png)
![2](https://user-images.githubusercontent.com/59574143/84601660-f7b97f80-ae4f-11ea-825b-756eb855f8b1.png)
![3](https://user-images.githubusercontent.com/59574143/84601663-fab47000-ae4f-11ea-8335-3cabbcdf399d.png)
![4](https://user-images.githubusercontent.com/59574143/84601664-fb4d0680-ae4f-11ea-8b46-fecc74a0d5f5.png)
![5](https://user-images.githubusercontent.com/59574143/84601665-fd16ca00-ae4f-11ea-8954-6e3e04b8616a.png)
![6](https://user-images.githubusercontent.com/59574143/84601667-fee08d80-ae4f-11ea-998b-9602fc7699b7.png)
![7](https://user-images.githubusercontent.com/59574143/84601669-00aa5100-ae50-11ea-93fa-4d0e7c5d6fd8.png)
