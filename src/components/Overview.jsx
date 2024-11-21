import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { TotalTransactionsChart } from './TotalTransactionsChart'
import SearchInput from './ui/search-input'
import { LineChart } from './LineChart'
import WorldMapValidators from './WorldMapValidators'
import BarChartComponent from './BarGraph'
import { ArrowDown, ArrowUp, ChevronDown } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { AiOutlineEnter } from "react-icons/ai";

const Overview = () => {
    const menus = ["Block height", "Transactions", "Network fee", "Accounts", "Token price", "NFTs"]
    const total = "24,049,294"
    const extra = "+1.23%"
    const CHR = "17,528,157"
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <main className='m-7'>
            <div className='flex items-center justify-between my-2'>
                <h1 className='my-4'>Atlas blockchain explorer</h1>
                <div className='flex space-x-4 items-center'>
                    <Button variant="outline">Refresh</Button>
                    <div>
                        <Select>
                            <SelectTrigger className="w-28">
                                <SelectValue placeholder="Mainnet" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mainnet">Mainnet</SelectItem>
                                <SelectItem value="devnet">Devnet</SelectItem>
                                <SelectItem value="testnet">Testnet</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:justify-between xl:flex-row gap-4'>
                <div className='w-full'>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex gap-3 flex-wrap">
                                {menus.map(menu => (
                                    <Button key={menu} variant="outline">{menu}</Button>
                                ))}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h1 className='xl:text-5xl text-4xl font-medium'>{total}<span className='text-green-400 px-2 xl:text-3xl text-2xl'>{extra}</span></h1>
                            <TotalTransactionsChart />
                        </CardContent>
                    </Card>
                </div>
                <div className='w-full'>
                    <div>
                        <SearchInput setIsSearchOpen={setIsSearchOpen} />
                    </div>

                    {isSearchOpen ? (
                        // Full height search results card
                        <div className="my-4">
                            <Card className="h-full"> {/* Adjust the height as needed */}
                                <CardHeader>
                                    <CardTitle>Recent</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div>
                                            <Card className="">
                                                <CardHeader>
                                                    <CardTitle>Block Monitoring</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className='text-sm'>Monitoring recent or future blocks</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Highest Transactions</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className='text-sm'>Show recent the most highest txs</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Trend Forcasting</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className='text-sm'>Using algorithms to forecast trends</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Notification Automation</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className='text-sm'>Set up notifications for specific txs</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex items-center gap-3'>
                                            <Button variant="outline" size="icon"><ArrowDown /></Button>
                                            <Button variant="outline" size="icon"><ArrowUp /></Button>
                                            <p className='text-xs'>Navigate</p>
                                            <div className='flex items-center gap-3 pl-5'>
                                                <Button variant="outline" size="icon">
                                                    <kbd className='text-xs'>Esc</kbd>
                                                </Button>
                                                <p className='text-xs'>Close</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Button variant="outline" size="icon">
                                                <AiOutlineEnter />
                                            </Button>
                                            <p className='text-xs'>Enter</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    ) : (
                        // Original layout with multiple cards
                        <>
                            <div className='my-4'>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex justify-between">
                                            <h1>Transactions</h1>
                                            <h1>See All</h1>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {/* Transaction content */}
                                    </CardContent>
                                </Card>
                            </div>

                            <div className='flex xl:flex-row flex-col gap-4 justify-between'>
                                <div className='w-full'>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex justify-between">
                                                <h1>Blocks</h1>
                                                <h1>See All</h1>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            {/* Blocks content */}
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className='w-full'>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                <h1>Total Staked</h1>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <h1 className='xl:text-5xl text-4xl font-medium'>
                                                {CHR} <span className='text-2xl xl:text-3xl'>CHR</span>
                                            </h1>
                                            <div>
                                                <LineChart extraClassName="h-[260px]" />
                                            </div>
                                            <div className='flex mt-4 gap-5'>
                                                <div>
                                                    <p className='text-gray-500'>Users Staking</p>
                                                    <h3 className='xl:text-3xl text-xl'>137,973</h3>
                                                </div>
                                                <div>
                                                    <p className='text-gray-500'>Circulating Supply</p>
                                                    <h3 className='xl:text-3xl text-xl'>26,556,392</h3>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='my-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <h1>Validators</h1>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* <WorldMapValidators /> */}
                    </CardContent>
                </Card>
            </div>
            <div className='flex xl:flex-row flex-col gap-4'>
                <div className='w-full'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h1>Market Value</h1>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h1 className='xl:text-5xl text-4xl font-medium'>{total}<span className='text-green-400 px-2 xl:text-3xl text-2xl'>{extra}</span></h1>
                            <LineChart extraClassName={"h-[350px]"} />
                        </CardContent>
                    </Card>
                </div>
                <div className='w-full'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h1>Current TPS</h1>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h1 className='xl:text-5xl text-4xl font-medium'>3,686<span className='text-red-500 px-2 xl:text-3xl text-2xl'>-2.34%</span></h1>
                            <div>
                                <BarChartComponent />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </main>
    )
}

export default Overview