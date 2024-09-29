import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"], preload: false });
const nunito = Nunito({
  weight: ["700"],
  subsets: ["latin"]
});

export { inter, nunito };