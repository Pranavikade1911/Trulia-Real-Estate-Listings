# Trulia Real Estate Listings

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)

## Overview

Trulia Real Estate Listings is a web application that provides a platform for users to browse and search for real estate listings. Users can view details of properties, including images, prices, and descriptions. The application aims to streamline the process of finding and exploring available properties.

## Features

- **Property Listings:** Browse and search for real estate properties.
- **Detailed Information:** View detailed information about each property, including images, prices, and descriptions.
- **User Authentication:** Sign up and log in to save favorite listings and personalize the experience.
- **Search Filters:** Filter listings based on criteria such as location, price range, and property type.
- **Responsive Design:** Access the application seamlessly on various devices.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed
- Backend server (Spring Boot, Node.js, etc.) running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/trulia-real-estate.git
   
2. cd trulia-real-estate
3. npm install

### Configuration
Configure the backend server URL in the src/environments/environment.ts file:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:your-backend-port/api',
};

### Usage

Start the Angular development server:
ng serve
Open your browser and navigate to http://localhost:4200/.

Explore the Trulia Real Estate Listings application.
