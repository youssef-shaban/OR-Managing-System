![](frontend/src/assets/images/logos/icon.png)
# CuOR+ - Cairo University Operation Rooms System
***

## Table of contents
- [Overview](#overview)
  - [Introduction](#introduction)
  - [Run the Project](#run-the-project)
- [Frontend](#frontend)
  - [CSS](#css)
  - [Colors](#colors-used)
  - [Grid](#grid)
  - [Fonts](#fonts)
  - [Borders](#borders)
  - [Helper Functions](#helper-functions)
  - [Routing System](#routing-system)
  - [Resources and credits](#resources-and-credits)
- [Backend](#backend)
- [Team](#team)


## Overview

### Introduction
Pronounced as **"Cure" (kyo͝or)** CuOR+ is

Operation rooms system with neat graphical user interface and incomparable user experience that helps the OR Department transfer the way they offer the service they got. In the system you
can have a set of nice features that facilitates the operation process for the doctors, nurses, patients and the OR
department admins. First you need to have an account made by the admin/through sign up page to access and explore the system.

> As a **Patient** you can
- View your upcoming operations.
- View your past operations.
- View your medical history.
- Approve/Reject operation time.
- View/Edit your profile.
- Make an appointment.
- Manage your billing settings.
- Be Notified with updates.
- View/Download your Radiology Scans & Medical Test
- Contact the department through contact-us form

> As a **Doctor** you can
- View Statistics about your operations.
- View your upcoming operations.
- View your past operations.
- View each of your patient medical history.
- Request new operation for a patient.
- Approve/Reject operation time.
- Be Notified with updates.
- See/Edit your profile.

> As a **Nurse** you can
- View Statistics about your operations.
- View your upcoming operations.
- View your past operations.
- View each of your patient medical history.
- Request new supplies for operations.
- Track the current supplies.

> As an **Admin** you can
- View all department upcoming operations.
- View all department past operations.
- View all department patients.
- Manage and schedule operation requests by doctors.
- View all rooms info/availability/status.
- Manage & track all supplies, equipments & devices.
- Edit other users profiles.
- Add new users.
- View all statistics about the department.
- View the contact-us form responses.

### Run The project

You need to install React JS and NodeJS on your computer.

[Download NodeJS](https://nodejs.org/en/download/)

[Get Started with React](https://github.com/facebook/create-react-app)

1 - You need to install the node modules for both frontend and backend

- Frontend Modules
```shell
 cd .\frontend\
 npm install
```
- Backend Modules
```shell
 cd .\backend\
 npm install
```
2-  Start the backend **(Make sure you are connected to the internet)**

```shell
cd .\backend\
npm start
```
3- Start the frontend
```shell
cd .\frontend\
npm start
```

## Frontend
The Project frontend is fully build with **reactJS** on top of open source libraries (eg. Soft UI, MUI)

The Project frontend has 170 directory, 312 files and +200 Component.

### CSS
This product makes usage of emotion and sx prop, as our friends from MUI.

- We’ve used the `ThemeProvider` inside `src/App.js`: Style Library Interoperability.
- We’ve used the `CssBaseline` inside `src/App.js`: CSS Baseline
- We’ve used the `styled` utility inside `src/components/*` and `src/examples/*` files: `Styled`

### Responsive meta tag
Material Design is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale
up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices,
the responsive viewport meta tag was added to `<head>` inside the `public/index.html` file.

### Colors Used
- Primary:  ![#cb0c9f](https://via.placeholder.com/15/cb0c9f/cb0c9f.png) `#cb0c9f`
- Secondary: ![#8392ab](https://via.placeholder.com/15/8392ab/8392ab.png) `#8392ab`
- Info:  ![#17c1e8](https://via.placeholder.com/15/17c1e8/17c1e8.png) `#17c1e8`
- Success: ![#8392ab](https://via.placeholder.com/15/82d616/82d616.png) `#82d616`
- Warning:  ![#Warning](https://via.placeholder.com/15/fbcf33/fbcf33.png) `#fbcf33`
- Error: ![#8392ab](https://via.placeholder.com/15/ea0606/ea0606.png) `#ea0606`
- Light:  ![#Warning](https://via.placeholder.com/15/e9ecef/e9ecef.png) `#e9ecef`
- Dark: ![#344767](https://via.placeholder.com/15/344767/344767.png) `#344767`


### Grid
MUI grid is a powerful mobile-first flexbox grid which helps you build layouts of all shapes and sizes thanks to a
twelve column system, five default responsive tiers, and dozens of predefined classes.
#### BreakPoints
We’ve changed the default MUI breakpoints with the following:
```javascript
breakpoints: {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
},
```

### Fonts
We've created a set of predefined configuration for the typography to make if easy and simple for customization, it
contains different types of styles for headings, paragraphs, font sizes, line heights, displays and other sort of styles
for different purposes.

#### Base Properties
```javascript
{
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
}
```
The `pxToRem()` is a helper function that helps you to convert px units to rem units, you can find this helper function
on the `src/assets/theme/functions/pxToRem.js`

#### Font Sizes
```javascript
{
  xxs: baseProperties.fontSizeXXS,
  xs: baseProperties.fontSizeXS,
  sm: baseProperties.fontSizeSM,
  md: baseProperties.fontSizeMD,
  lg: baseProperties.fontSizeLG,
  xl: baseProperties.fontSizeXL,
}
```

#### Line Heights
```javascript
{
  sm: 1.25,
  md: 1.5,
  lg: 2,
},
```


### Borders
We've created a set of predefined borders configuration to make if easy and simple for customization, it contains the
border color, border width and border radius properties.

#### Border Color
It's the default color for all of the borders.

```javascript
{ borderColor: grey[300] }
```

#### Border Width
```javascript
borderWidth: {
  0: 0,
  1: pxToRem(1),
  2: pxToRem(2),
  3: pxToRem(3),
  4: pxToRem(4),
  5: pxToRem(5),
}
```

#### Border Raduis

```javascript
borderRadius: {
  xs: pxToRem(2),
  sm: pxToRem(4),
  md: pxToRem(8),
  lg: pxToRem(12),
  xl: pxToRem(16),
  xxl: pxToRem(24),
  section: pxToRem(160),
}
```

### Box Shadows
We've created a set of predefined box-shadow configuration to make if easy and simple for customization, it contains
different types of soft box shadows that you need to style your elements with.

```javascript
{
  xs: boxShadow([0, 2], [9, -5], black.main, 0.15),
          sm: boxShadow([0, 5], [10, 0], black.main, 0.12),
          md: `${boxShadow([0, 4], [6, -1], black.light, 0.12)},
            ${boxShadow([0, 2], [4, -1], black.light, 0.07)}`,
          lg: `${boxShadow([0, 8], [26, -4], black.light, 0.15)},
       ${boxShadow([0, 8], [9, -5], black.light, 0.06)}`,
          xl: boxShadow([0, 23], [45, -11], black.light, 0.25),
          xxl: boxShadow([0, 20], [27, 0], black.main, 0.05),
          inset: boxShadow([0, 1], [2, 0], black.main, 0.075, "inset"),
}
```

The `boxShadow()` is a helper function that simply creates a box shadow based on your values, you can find that helper
function inside the `src/assets/theme/functions/boxShadow.js`.


### Helper Functions

- rgba : The `rgba()` function helps you to create a rgba color code.
```javascript
import rgba from "assets/theme/functions/rgba";

rgba(color, opacity);
```
- pxToRem : The `pxToRem()` function helps you to convert a `px` unit into a `rem` unit.
```javascript
import pxToRem from "assets/theme/functions/pxToRem";

pxToRem(number, baseNumber);
```

- hexToRgb: The `hexToRgb()` function helps you to change the `hex` color code to `rgb` using chroma-js library.
```javascript
import hexToRgb from "assets/theme/functions/hexToRgb";

hexToRgb(color);
```

- boxShadow: The `boxShadow()` function helps you to simply create a box shadow for an element.
```javascript
import boxShadow from "assets/theme/functions/boxShadow";

boxShadow(offset, radius, color, opacity, inset)
```
The `offset` and `radius` should be an array, the `color` should be a hex color code, the `opacity` should be a number between
0 and 1 and the `inset` should be a string with the value of "inset"

- linerGradient: The `linearGradient()` function helps you to simply create a linear gradient background color.
```javascript
import linearGradient from "assets/theme/functions/linearGradient";

linearGradient(color, colorState, angle)
```
It can take upto two colors for creating a linear gradient background color. The `angle` has a default value of 310.


- gradientChartLine: The `gradientChartLine()` function helps you to simply create a gradient color for the lines of a
  chart. The only use case of that helper function is for the chart components.
```javascript
import gradientChartLine from "assets/theme/functions/gradientChartLine";

gradientChartLine(chart, color, opacity)
```

### Routing System
We’ve created these dynamic routes, so the `Sidenav` and `DefaultNavbar` components would not get too loaded with code.
You will find all our demo routes for the `Sidenav` in `src/routes.js` and for the `DefaultNavbar` in `src/page.routes.js`


- #### Side Navbar
  - The type `key` with the `collapse` value is used for a route.
  - The type `key` with the `title` value is used for a title inside the `Sidenav`.
  - The type `key` with the `divider` value is used for a divider between Sidenav items.
  - The name `key` is used for the name of the route on the `Sidenav`.
  - The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  - The `icon` key is used for the icon of the route on the `Sidenav`, you have to add a node.
  - The `collapse` key is used for making a collapsible item on the `Sidenav` that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  - The `route` key is used to store the route location which is used for the react router.
  - The `href` key is used to store the external links location.
  - The `title` key is only for the item with the type of `title` and it's used for the title text on the `Sidenav`.
  - The `component` key is used to store the component of its route.

- #### Default Navbar
  - The `type` key with the collapse value is used for a route.
  - The `name` key is used for the name of the route on the `DefaultNavbar`.
  - The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  - The `icon` key is used for the icon of the route on the `DefaultNavbar`, you have to add a node.
  - The `collapse` key is used for making a collapsible item on the `DefaultNavbar` that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  - The `route` key is used to store the route location which is used for the react router.
  - The `href` key is used to store the external links location.
### Resources and credits
- [MUI](https://mui.com/) - The React UI library for faster and easier web development.
- [React Table](https://tanstack.com/table/v8/?from=reactTableV7&original=https://react-table-v7.tanstack.com/) - Lightweight and extensible data tables for React.
- [React Flatpickr](https://github.com/haoxins/react-flatpickr) - Useful library used to select date.
- [React Select](https://react-select.com/) - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.
- [React Tag Input](https://betterstack.dev/projects/react-tag-input/) - React Tag Input is a robust, minimal and performant input field for creating multiple tags.
- [React Countup](https://github.com/glennreyes/react-countup) - A lightweight React component that can be used to quickly create animations that display numerical data in a more interesting way.
- [React ChartJS 2](https://react-chartjs-2.netlify.app/) - Simple yet flexible React charting for designers & developers.
- [Full Calendar](https://fullcalendar.io/) - Full-sized drag & drop event calendar.
- [React Kanban](https://github.com/asseinfo/react-kanban) - Kanban/Trello board lib for React.
- [React Images Viewer](https://guonanci.github.io/react-images-viewer/) - A simple, responsive images viewer component for ReactJS.
- [React Quill](https://github.com/zenoamaro/react-quill) - A free, open source WYSIWYG editor built for the modern web.
- [Sweet Alert 2](https://sweetalert2.github.io/) - A beautiful, responsive, customisable, accessible replacement for Javascript’s popup boxes.
- [Formik](https://formik.org/) - Formik is the world's most popular open source form library for React and React Native.
- [React Tilt](https://www.npmjs.com/package/react-tilt) - A tiny lightweight parallax hover tilt effect for React.
- [React Leaflet](https://react-leaflet.js.org/) - React components for Leaflet maps.
- [React Circular Slider](React Circular Slider) - A full-featured circular slider React component, with full TypeScript definitions.
- [ChromaJS](https://gka.github.io/chroma.js/) - A small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.
- [UUID](https://github.com/uuidjs/uuid) - JavaScript library for generating random id numbers.
- [React HTML Parser](https://github.com/peternewnham/react-html-parser) - A utility for converting HTML strings into React components.


## Backend

The Serverside part of the project is made using NodeJS & MongoDB as API for handling operation rooms, with many features for patients, staff members and admin

You can read the whole backend documentation on Postman
[Click here for more](https://documenter.getpostman.com/view/19876288/Uz5Gmasj#intro)

## Team
#### Operation Rooms Department Manging System
Database (SBE2242) class project created by:

- Ibrahim Mohamed
- Kamel Mohamed
- Romaisaa Sherif
- Youssef Shaaban

### Submitted to:
- Dr. Ahmed Hesham Kandil & Eng. Eman Ibrahim


All rights reserved © 2022 to Team 3 - Systems & Biomedical Engineering, Cairo University (Class 2024)
