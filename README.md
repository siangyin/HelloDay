# React-Project 2 : Focus Diary

[Demo App Link](https://focus-diary.netlify.app)

## Pre-Project Planning

### Problem

Even on a good day, life can be overwhelming. Buzzing phones, work obligations, family needs, to-do lists, email overload, expectations, illness, invitations and the list goes on for the things that occupy our time. Personally, I always get stressed out pretty easily and having alot of inner thought in mind fighting with each other. Some day, I feel energetic and positive but some other day I maybe feeling down and begin to self doubting. By jot down all the thoughts reminding myself are helpful to free the mind and can be like a walk through or reflections from things that happened around me.

### Solution

Focus Diary as like a place where one can record events, experience and even throw anything you want to declutter out from your mind. This digital journal app help to simplify your life by empty what's on your mind at the same time understand ownself better.

## Project Development

### User Story

A user should be able to

- sign/ sign out
- create new diary input
- access to all his/her diaries for
- viewing
- editing
- deleting

### Ideas & App Structures:

Data needed:

- Individual user account
- Diary form entry array object
  - date
  - mood
  - title
  - diary input
  - tagging option
- All diaries entry array object, each day entry in one main array to be access by unique date.
- Tagging list
- Mood list
- Daily quote

### Wireframe

#### - Landing and routes

![Landing and routes](https://github.com/siangyin/focus-diary/blob/main/images/mapping.png?raw=true)

#### - Create New Diary

![Create New Diary](https://github.com/siangyin/focus-diary/blob/main/images/NewDiary.png?raw=true)

#### - Accessing Personal Diaries

![Accessing Personal Diaries](https://github.com/siangyin/focus-diary/blob/main/images/AllDiaries.png?raw=true)

## Project Implementation

### Technologies & Dependencies Used

- HTML
- CSS
- React (React-DOM & React-Router-DOM)
- Axios (for API)
- Firebase (for Auth login)
- Font Awesome
- API for [quote](https://type.fit/api/quotes)

### App Interface

<table>

#### - Login page

<tr>
 <td>
 <img src="https://github.com/siangyin/focus-diary/blob/main/images/landingpage.png?raw=true"/>
</td>
 </tr></table>

<table>

#### - Create new diary entry

<tr>
 <td>
 <img src="https://github.com/siangyin/focus-diary/blob/main/images/newdiarypage.png?raw=true"/>
</td>
 </tr></table>

<table>

#### - Accessing all diaries list

<tr>
 <td>
 <img src="https://github.com/siangyin/focus-diary/blob/main/images/alldiariespage.png?raw=true"/>
</td>
 </tr></table>

<table>

#### - Sample mobile interface

<tr>
 <td>
 <img src="https://github.com/siangyin/focus-diary/blob/main/images/mobile.png?raw=true"/>
</td>
 </tr></table>

### Challenges

- Getting trouble in passing state object from form submission to Firebase storage. Solution: to use local storage for data submission & retrieving.

- Facing lot of error when using state to pass around to different components, and when calling for API. Solution: Setting default/ initial state check and managing all shared states in parent component which is App in my case.

- Had issue of node module which causing the app do not display in localhost (npm start) showing e.g. Uncaught Error: Cannot find module 'react/jsx-runtime'. Solution: Delete whole repo content and recreate-react-app and checking each line of code again.

### Learning

- better understanding of react hooks, route. Learned to {useEffect, useState, useRef} in react and {useParams, useNavigate} in react-router-dom. Tried { useAuth, signUp, logOut, logIn } in firebase for user authentification. Has been trying to get storage update in firestore but failed.
- states management and async functions.
- API function in useEffect and using cleanup AbortController to cancel previous fetch.
- to reusing component for different pages and passing dynamic class for odd styling.

### Possible further improvement
