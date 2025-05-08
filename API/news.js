export default function handler(req, res) {
  const news = [
    { id: 1, title: "Aviso Importante", summary: "Actualización sobre el CLAP.", image: "https://via.placeholder.com/300", category: "General" }
  ];
  res.status(200).json(news);
}
