import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { TotalTransactionsChart } from './TotalTransactionsChart'
import SearchInput from './ui/search-input'

const Overview = () => {
    const menus = ["Block height", "Transactions", "Network fee", "Accounts", "Token price", "NFTs"]
    const total = "24, 049, 294"
    const extra = "+1.23%"
    return (
        <main className='m-7'>
            <h1 className='my-4'>Atlas blockchain explorer</h1>
            <div className='flex justify-between space-x-5'>
                <div className='w-full'>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex space-x-3">
                                {menus.map(menu => (
                                    <Button key={menu} variant="outline">{menu}</Button>
                                ))}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h1 className='text-7xl font-medium'>{total} <span className='text-green-400 text-3xl'>{extra}</span></h1>
                            <TotalTransactionsChart />
                        </CardContent>
                    </Card>
                </div>
                <div className='w-full'>
                    <div className='mb-4'>
                        <SearchInput />

                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex justify-between">
                                    <h1>Transactions</h1>
                                    <h1>See All</h1>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>

        </main>
    )
}

export default Overview