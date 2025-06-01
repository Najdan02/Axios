import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "../components/pageTransition";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <main key={router.asPath} className="flex-grow pt-20">
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
