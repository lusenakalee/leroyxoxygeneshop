# LeroyxOxygeneshop - E-commerce Project

## Project Setup and Running Instructions

### Prerequisites
Before running the project, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

### Getting Started

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd leroyxoxygeneshop
    ```

2. **Install the dependencies**:
    Run the following command to install all the project dependencies:
    ```bash
    npm install
    ```
    > Note: When installing ShadCN and its components, I used the `--legacy-peer-deps` flag to ensure compatibility with React and Next.js.

3. **Run the development server**:
    Start the Next.js development server:
    ```bash
    npm run dev
    ```

    This will launch the application at [http://localhost:3000](http://localhost:3000).

### Running in Production

1. **Build the application**:
    ```bash
    npm run build
    ```

2. **Start the production server**:
    ```bash
    npm run start
    ```

### Linting
You can run the ESLint checker for the project with:
```bash
npm run lint





## Libraries Used and Why

### 1. **Next.js 15**
   - **Purpose**: Next.js is the framework used to build this server-side rendered React app with file-based routing. The App Router introduced in Next.js 13 and enhanced in Next.js 15 provides a cleaner, more maintainable approach to routing and rendering.

### 2. **TypeScript**
   - **Purpose**: TypeScript is used to provide type safety and improve developer experience. It helps catch errors during development, making the codebase more maintainable and less prone to bugs, especially in larger projects.

### 3. **Tailwind CSS**
   - **Purpose**: Tailwind CSS is a utility-first CSS framework that allows for rapid UI design. By using utility classes directly in HTML, Tailwind makes it easy to build responsive, customizable designs without writing custom CSS for each component.

### 4. **ShadCN**
   - **Purpose**: ShadCN provides ready-to-use, accessible, and customizable components for modern UIs. It simplifies the process of building and styling UI elements in a consistent and user-friendly manner. The `--legacy-peer-deps` flag was used during installation due to potential compatibility issues with the latest React and Next.js versions.

### 5. **React Redux and @reduxjs/toolkit**
   - **Purpose**: React Redux is used for managing global state across the application, while `@reduxjs/toolkit` simplifies store setup, action creation, and reducer management. It is particularly useful for managing the shopping cart state and user session throughout the app.

### 6. **Framer Motion**
   - **Purpose**: Framer Motion is used for smooth animations in the app. It enhances user interactions with animations such as page transitions, element movements, and interactive UI features, making the app more engaging and visually appealing.

### 7. **Other Dependencies**
   - **@headlessui/react**: Provides unstyled, accessible UI components (like modals and dropdowns) that integrate well with Tailwind CSS for custom styling.
   - **clsx**: A utility for conditionally joining class names based on certain conditions. It helps keep the code clean and concise when dynamically assigning classes to elements.
   - **class-variance-authority**: Simplifies the process of conditionally applying Tailwind classes in a more structured and reusable manner, making it easier to manage styling in component-based architecture.
   - **embla-carousel-react**: A flexible and customizable carousel component used for product image sliders, enhancing the user experience when browsing through images or products.
   - **lucide-react**: Provides a library of high-quality, customizable icons that can be used throughout the app for various UI elements, improving usability and design consistency.
   - **lenis**: A smooth scroll library used to enhance the scrolling experience and optimize performance, providing a better feel when navigating the page.

### Development Tools
   - **ESLint**: A tool for ensuring consistent code quality by identifying problematic patterns in JavaScript and TypeScript code. It helps maintain best practices across the project.
   - **PostCSS and TailwindCSS**: Tailwind CSS is processed with PostCSS for performance optimizations and compatibility, ensuring that the styles are clean and efficient.
   - **next-lint**: A Next.js plugin that integrates ESLint with Next.js, ensuring that linting is applied to TypeScript, JavaScript, and other files throughout the project.


