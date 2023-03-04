// NextJS
import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Switch } from "@nextui-org/react";
import Head from "next/head";

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div>
      <Head>
        <title>Portafolio | Home</title>
        <meta name="description" content="Portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </div>
    </div>
  );
}
