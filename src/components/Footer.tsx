const Footer = () => {
    return (
      <footer className="bg-[var(--card)] text-[var(--card-foreground)] py-8 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4 lg:p-0 p-4">
            Vous pouvez me contacter à l&apos;adresse suivante: <a href="mailto:tonemail@example.com" className="bg-transparent	text-[var(--accent)] hover:underline">nicolasbernard06600@gmail.com</a>
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Nicolas-B06" className="bg-transparent	hover:text-[var(--accent)]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.997.107-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.004-.404c1.02.004 2.048.137 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.656 1.649.243 2.873.12 3.176.771.84 1.234 1.912 1.234 3.222 0 4.609-2.807 5.624-5.479 5.922.43.371.813 1.103.813 2.222 0 1.605-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  