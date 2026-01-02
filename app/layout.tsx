import StoreProvider from "@/lib/StoreProvider";

export const metadata = {
  title: "Next.js Redux Cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
