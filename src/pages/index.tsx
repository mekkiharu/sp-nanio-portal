import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nanio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto flex justify-center h-screen items-center">
        <div className={`p-12 border-white rounded-md border`}>
          <h1 className="text-3xl font-bold underline text-white">
            Welcome to Nanio
          </h1>
          <p className="text-center">This is a work in progress.</p>
        </div>
      </div>
    </>
  );
}
