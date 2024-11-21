import React from 'react'
import Logo from './Logo'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { Bell } from 'lucide-react'

const Header = () => {
    const menus = [
        {
            id: 1,
            name: 'Overview',
            url: '/'
        },
        {
            id: 2,
            name: 'Transactions',
            url: '/transactions'
        },
        {
            id: 3,
            name: 'Blocks',
            url: '/blocks'
        },
        {
            id: 4,
            name: 'Accounts',
            url: '/accounts'
        },
        {
            id: 5,
            name: 'NFTs',
            url: '/nfts'
        },
    ]
    return (
        <header className='flex items-center justify-between p-6'>
            <div className='flex items-center space-x-4'>
                <Logo />
                <nav className='pl-8 flex flex-row'>
                    {menus.map(menu => (
                        <div key={menu.id}>
                            <a href={menu.url}>
                                <Button variant="ghost">{menu.name}</Button>
                            </a>
                        </div>
                    ))}
                </nav>
            </div>
            <div className='flex items-center space-x-4'>
                <Button variant="outline">Connect Wallet</Button>
                <Button size="icon" variant="outline" className="p-4 rounded-full"><Bell /> </Button>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header