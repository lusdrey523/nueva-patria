export default function handler(req, res) {
  const members = [
    { id: 1, name: "Carlos Gómez", cedula: "V-12345678", photo: "https://via.placeholder.com/50", status: "Activo" }
  ];
  res.status(200).json(members);
}
