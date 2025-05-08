export default function handler(req, res) {
  const members = [
    { id: 1, name: "Carlos Gómez", cedula: "V-12345678", photo: "https://via.placeholder.com/50", status: "Activo" },
    { id: 2, name: "Luisa Martínez", cedula: "V-87654321", photo: "https://via.placeholder.com/50", status: "Inactivo" }
  ];
  res.status(200).json(members);
}
