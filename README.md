
# Personal Portfolio

Welcome to my personal portfolio repository! This repository houses the code for my personal website, showcasing my skills, projects, and more. Feel free to explore and use this code as a reference for your own projects.



## Introduction
This repository contains the code for my personal portfolio website. It is built using Next.js 14, Tailwind CSS, Framer Motion, Million.js, and deployed on Vercel.
## Features
- **Skills**: Showcase skills with images and descriptions.
- **About**: Share education, experience, and interesting facts.
- **Favorite Stacks**: Highlight favorite tech stacks.
- **Projects**: Display projects with descriptions and links.
- **Contact Information**: Provide various ways to get in touch.

## Screenshots

![App Screenshot1](https://i.ibb.co/7Stds9B/portfolio-1.png)
![App Screenshot2](https://i.ibb.co/tKK3C8y/portfolio-2.png)
![App Screenshot3](https://i.ibb.co/s5ckF84/portfolio-3.png)
![App Screenshot4](https://i.ibb.co/gZ9gxQy/portfolio-4.png)



## Tech Stack

- **Next.js 14** - React framework for building server-rendered applications.
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development.
- **Framer Motion** - Library for creating animations and gestures in React.
- **Million.js** - JavaScript library optimizing react compiler.
- **Vercel** - Platform for deploying serverless functions and static websites.
## Installation

Clone the repository:
```bash
  git clone https://github.com/hackgods/personal-portolio.git
```

Install dependencies:
```bash
  cd personal-portolio
  npm install
```

Install dependencies:
```bash
  cd portfolio
  npm install
```
    
## Usage
#### Constants Directory

Contains TypeScript file that control the data displayed on different sections of the website. Here's a breakdown of each file and how to update them with your own data:

Update index.js located in the constants directory as per need. 

#### Navbar items
```javascript
export const navItems = [
  {
    name: "Home",
    link: "#home"
  },
  {
    name: "Your Section",
    link: "#your-section"
  },
  // Add more navigation items as needed
];
```

#### Skills items
```javascript
export const skillData = [
  {
    skill_name: "Your Skill 1",
    src: "/your-skill1.png",
  },
  {
    skill_name: "Your Skill 2",
    src: "/your-skill2.png",
  },
  // Add more skills as needed
];
```

#### About me items
```javascript
export const aboutItems = [
  {
    title: "Your Title 1",
    description: "Your description 1",
    src: "/your-image1.png",
    className: "md:col-span-2",
  },
  {
    title: "Your Title 2",
    description: "Your description 2",
    src: "/your-image2.png",
    className: "md:col-span-1",
  },
  // Add more about section items as needed
];
```

#### Projects items
```javascript
export const projects = [
  {
    src: "/your-project1.jpg",
    title: "Your Project Title 1",
    description: "Your project description 1",
    link: "https://your-project1-link.com"
  },
  {
    src: "/your-project2.jpg",
    title: "Your Project Title 2",
    description: "Your project description 2",
    link: "https://your-project2-link.com"
  },
  // Add more project details as needed
];
```

#### All Personal data
```javascript
export const personalData = {
  fName: "Your First Name",
  lName: "Your Last Name",
  profile: "/your-profile-image.jpg",
  designation: "Your Designation",
  description: "Your personal description",
  email: "your-email@example.com",
  phone: "+1234567890",
  address: "Your Address",
  github: "https://github.com/your-username",
  linkedIn: "https://www.linkedin.com/in/your-username",
  twitter: "https://www.twitter.com/your-username",
  instagram: "https://www.instagram.com/your-username/",
  twitterCover: "https://pbs.twimg.com/profile_banners/1737440772490711040/1709913760/1500x500",
  resumeLink: "https://drive.google.com/uc?export=download&id=1xedHbKHa0_Cpax9QtbaYOchJVXu5USHq",
};
```

#### Run the development server
```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the website locally.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)

