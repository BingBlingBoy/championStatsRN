import Searchbar from "../../components/Searchbar"
import Carousel from "../../components/Carousel"

const Index = () => {
    const content = (
        <>
            <div className="text-center mt-52 mb-12">
                <h1 className="font-bold text-5xl">GET THE <span className="text-accent">LATEST</span> CHAMPION STATS RIGHT NOW</h1>
                <p className="py-4 text-xl">(Name) is the place to find out if your champ is fucked by RIOT</p>
                <Searchbar />
            </div>
            
            <div className="w-full">
                <svg className="aspect-[900/300] w-full bg-no-repeat bg-cover bg-center" id="visual" viewBox="0 0 900 300" preserveAspectRatio="none" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="900" height="300" fill="#FFF"></rect><path d="M0 204L25 201.8C50 199.7 100 195.3 150 188.5C200 181.7 250 172.3 300 174.3C350 176.3 400 189.7 450 198.8C500 208 550 213 600 214C650 215 700 212 750 204.3C800 196.7 850 184.3 875 178.2L900 172L900 301L875 301C850 301 800 301 750 301C700 301 650 301 600 301C550 301 500 301 450 301C400 301 350 301 300 301C250 301 200 301 150 301C100 301 50 301 25 301L0 301Z" fill="#ead3f3" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
            </div>
            <div className="bg-secondary text-center">
                <h2 className="pb-12 text-3xl font-bold">HOW (NAME) HELPS YOU IN <span className="text-accent">GAME</span></h2>
                <div className="grid grid-cols-3 pb-20 gap-10 mx-20">
                    <div className="flex flex-col items-center rounded-lg bg-white p-6 justify-center">
                        <div className="w-[30ch]">
                            <h3 className="text-xl font-bold">Get info of the latest buffed champion</h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-6 w-12 h-12">
                            <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
                        </svg>
                        <p>Using Riots ddragon data we are able to get accurate data of each champion</p>
                    </div>
                    <div className="rounded-lg bg-white p-6 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-bold">Identify when it is not your fault but Riots Balance Team</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-6 w-12 h-12">
                              <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
                            </svg>
                        <p>The balance team have made some questionable decisions, are you affected?</p>
                    </div>
                    <div className="rounded-lg bg-white p-6 flex flex-col items-center justify center">
                        <h3 className="text-xl font-bold">Donate to increase the chance of your champion getting buffed</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-6 w-12 h-12">
                              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                              <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                            </svg>
                        <p>For every £1 you donate, a kai'sa main gets their champed nerf</p>
                    </div>
                </div>

                <h2 className="pb-12 text-3xl font-bold">Here is some of our happy users</h2>
                <Carousel />
            </div>
            <div className="w-full">
                <svg className="aspect-[900/300] w-full bg-no-repeat bg-cover bg-center" preserveAspectRatio="none" id="visual" viewBox="0 0 900 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg"  version="1.1"><rect x="0" y="0" width="900" height="300" fill="#2d1c63"></rect><path d="M0 229L16.7 216.8C33.3 204.7 66.7 180.3 100 167.3C133.3 154.3 166.7 152.7 200 167.3C233.3 182 266.7 213 300 219.3C333.3 225.7 366.7 207.3 400 194.7C433.3 182 466.7 175 500 183.3C533.3 191.7 566.7 215.3 600 228.2C633.3 241 666.7 243 700 238C733.3 233 766.7 221 800 216.8C833.3 212.7 866.7 216.3 883.3 218.2L900 220L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z" fill="#ffffff"></path><path d="M0 189L16.7 177.8C33.3 166.7 66.7 144.3 100 134.3C133.3 124.3 166.7 126.7 200 127.2C233.3 127.7 266.7 126.3 300 123C333.3 119.7 366.7 114.3 400 123.7C433.3 133 466.7 157 500 160.2C533.3 163.3 566.7 145.7 600 133.7C633.3 121.7 666.7 115.3 700 113.3C733.3 111.3 766.7 113.7 800 115.8C833.3 118 866.7 120 883.3 121L900 122L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z" fill="#f8f0fb"></path><path d="M0 94L16.7 94.7C33.3 95.3 66.7 96.7 100 94.3C133.3 92 166.7 86 200 80.8C233.3 75.7 266.7 71.3 300 74C333.3 76.7 366.7 86.3 400 87.8C433.3 89.3 466.7 82.7 500 80.2C533.3 77.7 566.7 79.3 600 88.7C633.3 98 666.7 115 700 115.2C733.3 115.3 766.7 98.7 800 90C833.3 81.3 866.7 80.7 883.3 80.3L900 80L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z" fill="#f1e2f7"></path><path d="M0 43L16.7 44.7C33.3 46.3 66.7 49.7 100 56.2C133.3 62.7 166.7 72.3 200 71.2C233.3 70 266.7 58 300 49.3C333.3 40.7 366.7 35.3 400 40.7C433.3 46 466.7 62 500 69.2C533.3 76.3 566.7 74.7 600 72.8C633.3 71 666.7 69 700 65C733.3 61 766.7 55 800 50.3C833.3 45.7 866.7 42.3 883.3 40.7L900 39L900 0L883.3 0C866.7 0 833.3 0 800 0C766.7 0 733.3 0 700 0C666.7 0 633.3 0 600 0C566.7 0 533.3 0 500 0C466.7 0 433.3 0 400 0C366.7 0 333.3 0 300 0C266.7 0 233.3 0 200 0C166.7 0 133.3 0 100 0C66.7 0 33.3 0 16.7 0L0 0Z" fill="#ead3f3"></path></svg>
            </div>
            
        </>
    )

    return content
}

export default Index
