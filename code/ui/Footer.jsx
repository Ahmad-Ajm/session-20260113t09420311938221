import './styles.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <div className="container">
        <p>
          © {currentYear} منصة السير الذاتية - جميع الحقوق محفوظة
        </p>
        <p className="copyright">
          تم تطوير هذه الواجهة كجزء من ميزة FEAT-UX-BASE
        </p>
      </div>
    </footer>
  );
}