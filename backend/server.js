import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());

// Special middleware for Razorpay Webhook
app.use("/api/payment/webhook", express.raw({ type: "application/json" }));

// Normal JSON parser for all other routes
app.use(bodyParser.json());

// Routes
app.use("/api/payment", paymentRoutes);

// ✅ Export app for Vercel
export default app;

// ✅ Local run (Vercel ignores this block)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
