import { Server } from "socket.io";
import "dotenv/config";
import { configureSocket } from "./socket";

const origins = (process.env.ORIGIN ?? "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

const io = new Server({
  cors: {
    origin: origins
  }
});

const port = Number(process.env.PORT);

io.listen(port);
console.log(`Server is running on port ${port}`);

configureSocket(io);