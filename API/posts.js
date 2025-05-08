export default function handler(req, res) {
  const posts = [
    { id: 1, userName: "Juan Pérez", userAvatar: "https://via.placeholder.com/40", time: "Hace 2 horas", content: "¡Orgulloso de mi comunidad! #CLAP" }
  ];
  res.status(200).json(posts);
}
