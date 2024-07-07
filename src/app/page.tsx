"use client"

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isConnected } = useAccount()
  const [connected, setConnected] = useState(isConnected)

  useEffect(() => {
    setConnected(isConnected )
    
  }, [isConnected])
  return (
    <main className=" w-[1144px] px-24" suppressHydrationWarning >
        {connected ? children : <div className="w-full text-center py-4 text-lg font-semibold">Please connect wallet and sign to continue</div>}
    </main>
  );
}
