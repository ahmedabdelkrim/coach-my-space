const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
