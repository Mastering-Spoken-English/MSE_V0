import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ✅ CORS first, before routes
const allowedOrigins = [
  "https://mse-v0.vercel.app", // use the stable frontend domain (set this as alias in Vercel)
  "http://localhost:5173",     // for local dev (optional)
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Explicit OPTIONS handling (fixes preflight issues)
app.options("*", cors());

// ✅ Razorpay Webhook route (raw body)
app.use("/api/payment/webhook", express.raw({ type: "application/json" }));

// ✅ Normal JSON parser for all other routes
app.use(bodyParser.json());

// ✅ Routes
app.use("/api/payment", paymentRoutes);

// Export app for Vercel
export default app;

// Local run
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
