# Tech Store E-commerce

A modern e-commerce platform built with Next.js 13+, featuring a responsive design, cart management, and checkout functionality.

![Tech Store Preview](preview.png)

## 🚀 Features

- **Modern UI/UX**: Sleek dark theme with responsive design
- **Product Management**: Browse and filter products by category
- **Shopping Cart**: Real-time cart updates with sliding panel
- **Checkout Process**: Form validation and order processing
- **State Management**: Centralized Redux store with TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 13+
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
  - Styled Components
- **Image Optimization**: Next.js Image Component
- **Form Handling**: React Hook Form
- **Code Quality**:
  - ESLint
  - Prettier
  - TypeScript strict mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tech-store.git
   cd tech-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
tech-store/
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   ├── components/          # React components
│   │   ├── cart/           # Cart related components
│   │   ├── layout/         # Layout components
│   │   └── products/       # Product related components
│   ├── store/              # Redux store setup
│   │   └── features/       # Redux slices
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── styles/                # Global styles
```

## 💻 Usage

1. **Browse Products**
   - View all products on the homepage
   - Filter products by category
   - Search products by name or description

2. **Shopping Cart**
   - Click "Add to Cart" to add products
   - Adjust quantities in the cart
   - Remove items from cart
   - View cart total

3. **Checkout Process**
   - Fill in shipping details
   - Review order summary
   - Place order

## 🔧 Configuration

### Next.js Configuration
The `next.config.js` file includes:
- Image optimization settings
- API routes configuration
- Environment variable setup

### Styling Configuration
Tailwind CSS configuration in `tailwind.config.js`:
- Custom theme settings
- Extended color palette
- Custom plugins

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🔑 Environment Variables

Required environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_IMAGE_DOMAIN=your_image_domain
```

## 📱 Mobile Responsiveness

The application is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## ⚡ Performance Optimizations

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Static page generation where possible
- Efficient state management with Redux Toolkit

## 🔒 Security

- Input sanitization
- Form validation
- Protected API routes
- Secure environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting solutions
- All contributors and supporters

---

Made with ❤️ by [Your Name](https://github.com/yourusername) 