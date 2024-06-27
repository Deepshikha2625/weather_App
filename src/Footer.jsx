export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <div className="container" style={{fontSize:"1.2em"}}>
       Deepshikha &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
