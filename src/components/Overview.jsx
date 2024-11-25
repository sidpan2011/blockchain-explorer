import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { TotalTransactionsChart } from './TotalTransactionsChart'
import SearchInput from './ui/search-input'
import { LineChart } from './LineChart'
// import WorldMapValidators from './WorldMapValidators'
import BarChartComponent from './BarGraph'
import { ArrowDown, ArrowLeftRight, ArrowRight, ArrowUp, ArrowUpRight, Box, ChevronLeft, ChevronRight } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { AiOutlineEnter } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { TX_DATA } from '../data'
import { RadialGraph } from './RadialGraph'

const Overview = () => {
    const menus = ["Block height", "Transactions", "Network fee", "Accounts", "Token price", "NFTs"]
    const total = "24,049,294"
    const extra = "+1.23%"
    const CHR = "17,528,157"
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const blocksData = [
        {
            "blockId": "31892008",
            "by": "zeroByte",
            "txs": "12",
            "timeStamp": "3"
        },
        {
            "blockId": "31892018",
            "by": "sidhanth",
            "txs": "23",
            "timeStamp": "3"
        },
        {
            "blockId": "31892028",
            "by": "chromia",
            "txs": "120",
            "timeStamp": "3"
        },
        {
            "blockId": "31892228",
            "by": "solana",
            "txs": "18",
            "timeStamp": "3"
        },
        {
            "blockId": "31892828",
            "by": "vercel",
            "txs": "8",
            "timeStamp": "3"
        },
        {
            "blockId": "31892328",
            "by": "perplexity",
            "txs": "3",
            "timeStamp": "3"
        }
    ]
    const [smallScreen, setSmallScreen] = useState(false)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1280px)')

        const handleChange = (e) => {
            console.log("Media query changed:", e.matches)
            setSmallScreen(e.matches)
        }

        // Set initial value
        handleChange(mediaQuery)

        // Add listener for changes
        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    return (
        <main className='my-7'>
            <div className='flex items-center justify-between my-2'>
                <h1 className='my-2 text-3xl font-medium'>ZeroByte Scan blockchain explorer</h1>
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
            <div className='flex flex-col xl:justify-between lg:flex-col xl:flex-row gap-4'>
                <div className='xl:w-[700px]'>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex gap-3 flex-wrap">
                                {menus.map(menu => (
                                    <Button key={menu} variant="outline">{menu}</Button>
                                ))}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="">
                            <div className='h-full'>

                                <h1 className='xl:text-5xl text-4xl font-medium'>{total}<span className='text-green-400 px-2 xl:text-3xl text-2xl'>{extra}</span></h1>
                                <TotalTransactionsChart />
                            </div>
                        </CardContent>
                    </Card>
                    <div className='my-4'>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h1>Blocks</h1>
                                    <p className='text-md font-normal pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, debitis ducimus doloremque dolor voluptates.</p>
                                </CardTitle>
                            </CardHeader>
                            <CardDescription>

                            </CardDescription>
                            <CardContent className="w-full">
                                <div className={`grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4 ${smallScreen ? '' : 'grid-cols-1'}`}>
                                    {smallScreen ? (
                                        <>
                                            <div>
                                                <RadialGraph />
                                            </div>
                                            <div>
                                                <RadialGraph />
                                            </div>
                                        </>
                                    ) : (
                                        <div className="col-span-full">
                                            <RadialGraph />
                                        </div>
                                    )}
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='w-full'>
                    <div>
                        <SearchInput setIsSearchOpen={setIsSearchOpen} />
                    </div>

                    {isSearchOpen ? (
                        <div className="my-4">
                            <Card className="h-full">
                                <h1 className='text-muted-foreground/80 font-semibold py-4 px-5'>Top Searches</h1>
                                <CardContent className="space-y-4">
                                    <div>
                                        {TX_DATA.recent.map((r, index) => (
                                            <div key={index} className="flex flex-row items-center justify-between">
                                                <p className="my-3 text-sm">{r.value}</p>
                                                <ArrowUpRight />
                                                {/* <p className="text-sm text-gray-600">{r.description}</p> */}
                                            </div>
                                        ))}
                                    </div>
                                    <h1 className='font-semibold text-muted-foreground/80'>Explore</h1>
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
                                            <p className='text-xs text-muted-foreground/80'>Navigate</p>
                                            <div className='flex items-center gap-3 pl-5'>
                                                <Button variant="outline" size="icon">
                                                    <kbd className='text-xs text-muted-foreground/80'>Esc</kbd>
                                                </Button>
                                                <p className='text-xs text-muted-foreground/80'>Close</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Button variant="outline" size="icon">
                                                <AiOutlineEnter />
                                            </Button>
                                            <p className='text-xs text-muted-foreground/80'>Enter</p>
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
                                            <h1 className='text-primary cursor-pointer'>See All</h1>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {
                                            TX_DATA.transactions.map((tx, index) => (
                                                <div key={index} className='flex justify-between items-center space-y-3'>
                                                    <div className='flex gap-4 space-y-4 xl:space-y-0 items-center'>
                                                        <Button variant="outline" size="icon" className="rounded-full cursor-default"><ArrowLeftRight /></Button>
                                                        <div className='flex flex-col'>
                                                            <Link to={`/tx/${tx.hash}`} className='text-primary'>
                                                                <p className='text-foreground'>{tx.hash}</p>
                                                            </Link>
                                                            <p className='text-sm text-muted-foreground/80 lg:flex flex-col lg:flex-row items-center gap-2'>{tx.from}<ArrowRight size={16} /> {tx.to}</p>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <p>{tx.amount} {tx.currency}</p>
                                                        <p className='text-sm text-muted-foreground/80 text-right'>{tx.timeAgo}</p>
                                                        {/*  */}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </CardContent>
                                    <CardFooter>
                                        <div className='space-x-3'>
                                            <Button variant="outline" size="icon"><ChevronLeft /></Button>
                                            <Button variant="outline" size="icon"><ChevronRight /></Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>

                            <div className='flex xl:flex-row flex-col gap-4 justify-between'>
                                <div className='w-full'>
                                    <Card className="h-full">
                                        <CardHeader>
                                            <CardTitle className="flex justify-between">
                                                <h1>Blocks</h1>
                                                <h1 className="text-primary cursor-pointer">See All</h1>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className='space-y-3'>
                                                {
                                                    TX_DATA.blocks.map((block, index) => (
                                                        <div className='flex justify-between items-center'>
                                                            <div className='flex gap-4'>
                                                                <Button variant="outline" size="icon" className="rounded-full cursor-default"><Box /></Button>
                                                                <div key={index} className='flex items-center gap-3'>
                                                                    <div className='flex flex-col'>
                                                                        <Link to={`/block/${block.number}`} className='text-primary'>
                                                                            <p className='text-foreground'>{`#${block.number}`}</p>
                                                                        </Link>
                                                                        <p className='text-sm text-muted-foreground/80'>By {block.validator}</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className=''>
                                                                <p className='text-right'>{`${block.transactions} TXS`}</p>
                                                                <p className='text-sm text-muted-foreground/80'>{`${block.timeAgo}`}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
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
                                                <LineChart extraClassName="h-[200px]" />
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