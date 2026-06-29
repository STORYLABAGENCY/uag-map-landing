export const metadata = {
  title: "Maestría en Administración Pública Online | UAG",
  description: "Maestría en Administración Pública 100% online. Lidera la transformación del sector público con visión estratégica e impacto social. UAG + Arizona State University. Inicio septiembre 2026.",
  keywords: "maestría administración pública, UAG, online, gestión pública, políticas públicas, gobernanza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
