import express from "express";
import cors from "cors";
const app = express();

const PORT = 4000;

// Simple Usage (Enable All CORS Requests)
app.use(cors());

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      author: "John Doe",
      description:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      author: "Jane Smith",
      description:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      author: "Sam Johnson",
      description:
        "What do you get if you cross a snowman and a vampire? Frostbite.",
    },
    {
      id: 4,
      author: "Alice Brown",
      description:
        "Why did the math book look sad? Because it had too many problems.",
    },
    {
      id: 5,
      author: "Bob White",
      description:
        "Why can't you hear a pterodactyl go to the bathroom? Because the P is silent.",
    },
  ];

  res.json(jokes);
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
