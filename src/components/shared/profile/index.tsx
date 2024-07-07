"use client"
import React, {  useCallback, useEffect, useState } from 'react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Button } from '@/components/ui/button'
import { useAccount, useSignMessage, useSwitchChain } from 'wagmi'
import { getBalance } from '@wagmi/core'
import {config} from '@/config'
import { truncateAddress } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ScrollArea } from '@/components/ui/scroll-area'

const CONNECT_STATUS = "Connect Wallet"
  
const Profile = () => {
    const {open} = useWeb3Modal()
    const { isConnected, address, isDisconnected, chain } = useAccount()
    const {signMessage} = useSignMessage()
    const [userAddress, setUserAddress] = useState(CONNECT_STATUS)
    const { chains, switchChain } = useSwitchChain()
    const [balance, setBalance] = useState<any>()

    const handleGetBalance = useCallback(async () => {
        const balance = await getBalance(config, {
            address: address!,
        })
        setBalance(balance)
    }, [address])

    useEffect(() => {
        if(isConnected){
            handleGetBalance()
            setUserAddress(truncateAddress(address!))
            signMessage({message: `Sign message: This is sign message`})
        }
    }, [isConnected, signMessage, address, handleGetBalance])

    
    useEffect(() => { if(isDisconnected) setUserAddress(CONNECT_STATUS) }, [isDisconnected])

    return (
        <div className='flex justify-end gap-4 items-center'>
            {
                userAddress !== CONNECT_STATUS && 
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>{chain?.name}: {balance?.formatted} {balance?.symbol}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <ScrollArea className="h-80 w-full">
                                <DropdownMenuLabel>Chains</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {
                                        chains.map(chainItem => (
                                            <DropdownMenuItem disabled={chain?.id === chainItem.id} key={chainItem.id} onClick={() => switchChain({ chainId: chainItem.id })} className='' >
                                                {chainItem.name}
                                            </DropdownMenuItem>
                                        ))
                                    }
                                </DropdownMenuGroup>
                            </ScrollArea>
                        </DropdownMenuContent>
                    </DropdownMenu>
            }

            <Button onClick={() => open()}>
                {userAddress}
            </Button>
        </div>
    )
}

export default Profile
