# Furni – Modern Furniture E-Commerce Website

Furni is a modern and responsive furniture e-commerce website built with React and Tailwind CSS. It provides a clean shopping experience with product browsing, category filtering, search, wishlist, cart, and checkout functionality.

## Live Demo

https://furniture-shop-eight-silk.vercel.app/
<!-- https://tjsuriya.github.io/furniture-shop/ -->

## GitHub Repository

https://github.com/TJSuriya/furniture-shop

## Features

- Modern and responsive furniture website
- Home page with hero and featured products
- Product categories
- Product search
- Category-based filtering
- Product details page
- Add to cart
- Increase and decrease product quantity
- Wishlist functionality
- Cart total calculation
- Shipping calculation
- Checkout form
- Order success page
- Responsive mobile navigation
- GitHub Pages deployment
- Client-side routing with React Router
- Cart and wishlist data persistence using localStorage

## Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- React Router
- React Icons
- Vite
- HTML5
- CSS3
- Git & GitHub
- GitHub Pages

## Project Structure

```text
furniture-shop/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── CategorySection.jsx
│   │   ├── ProductSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── FeaturesSection.jsx
│   │   └── AboutSection.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── WishlistContext.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderSuccess.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md