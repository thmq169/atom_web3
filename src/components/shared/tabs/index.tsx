"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from 'next/navigation'
import Link from "next/link"

const TabContainer = () => {
    const pathname = usePathname()
    return (
        <>
            <Tabs defaultValue={pathname.includes("/client-side") ? "csr" : pathname.includes("/server-side") ? "ssr" : "" } className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="csr">
                        <Link href="/client-side" className="w-full">
                            Client Side
                        </Link>
                    </TabsTrigger>
                    <TabsTrigger value="ssr">
                        <Link href="/server-side" className="w-full">
                            Server Side
                        </Link>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </>
  )
}

export default TabContainer
