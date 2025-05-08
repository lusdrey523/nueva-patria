export default function handler(req, res) {
  const news = [
    {
      id: 1,
      title: "Aviso Importante",
      summary: "Actualización sobre el CLAP.",
      image: "https://via.placeholder.com/300",
      category: "General"
    },
    {
      id: 2,
      title: "Evento Comunitario",
      summary: "Feria de alimentos este sábado.",
      image: "https://via.placeholder.com/300",
      category: "Eventos"
    }
  ];
  res.status(200).json(news);
}
