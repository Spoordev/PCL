import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative z-10">
      <div className="fixed top-0 left-0 w-full bg-black text-white py-12 border-t-2 border-[#141414] hover:text-white overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col"> {/* Changed flex justify-between to flex-col */}
          <div className="flex items-center whitespace-nowrap overflow-hidden animate-scrolling">
            <div className="flex items-center">
              <img src="/PoorGuy.1vHead2.png" alt="Image" className="w-6 h-6 mr-2" />
              <p>$Poorcoin is #1 Creamcoin on SOLANA</p>
            </div>
          </div>
          <div className="flex items-center whitespace-nowrap overflow-hidden animate-scrolling">
            <div className="flex items-center">
              <img src="/PoorMath01.png" alt="Image" className="w-6 h-6 mr-2" />
              <p>$Poor Math!</p>
            </div>
          </div>
          <div className="flex items-center whitespace-nowrap overflow-hidden animate-scrolling">
            <div className="flex items-center">
              <img src="/PoorGuy.1vHead2.png" alt="Image" className="w-6 h-6 mr-2" />
              <p>Live a $Poor Life</p>
            </div>
          </div>
        </div>
      </div>
    


     <div className="fixed bottom-0 left-0 flex h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
  <a
    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    href="https://twitter.com/POORonSOL"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span style={{ color: 'Red' }}>By</span>
    <Image
      src="/PoorGuy.1vHead2.png"
      alt="$Poor Logo"
      className="relative w-auto h-auto dark:invert"
      width={150}
      height={36}
      priority
    />
  </a>
</div>


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Image
  src="/Proof02.png"
  alt="!Proof of our Riches"
  className="relative w-auto h-auto dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" // Add w-auto and h-auto
  width={500}
  height={37}
  priority
/>

      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://birdeye.so/token/4V6ymgApBUSjrgxdFoDfQQxe5tqNvcm5oYgSWFKZ2wVJ/DuJjKhV11KkgPYJaCH4SxC5e9sKbxcDug2rMxnJdy2V3?chain=solana"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
         $Poor Track{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
           Follow $Poor on Birdeye.so.
          </p>
        </a>

        <a
          href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4V6ymgApBUSjrgxdFoDfQQxe5tqNvcm5oYgSWFKZ2wVJ&fixed=in"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            $Poor Swap{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
            Swap $Poor on Raydium NOW!
          </p>
        </a>

        <a
          href="https://t.co/sIWfyx96AH"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            $Poor Telegram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
            Join the $Poor Community over at Telegram.
          </p>
        </a>

        <a
          href="https://t.co/VJpEYbfh21"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-bold`}>
            $Poor Discord{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100 text-balance`}>
            Visit the $Poor Discord Today.
          </p>
        </a>
      </div>
<br />
<br />
<br />
<footer className="footer bg-black text-white">
  <div className="container mx-auto px-4 py-12 border-t-2 border-[#141414] hover:text-white" style={{ height: '150px' }}>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 md:space-x-12">

      <div className="col-span-3 md:col-span-1">
        <a href="https://twitter.com/POORonSOL" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">
          <img src="/Poor01.png" alt="$Poor Logo" width="75" height="24" />
        </a>
        <div className="flex mt-4">
        <a href="https://twitter.com/Huntermigo" target="_blank" rel="noopener noreferrer" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
  <img src="/880.png" alt="Small Image" className="w-6 h-6" />
</a>
<a href="https://twitter.com/TryingTwoSmile" target="_blank" rel="noopener noreferrer" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
  <img src="/239.png" alt="Small Image" className="w-6 h-6" />
</a>
        </div>
        <div className="mt-4 text-secondary">© 2024 $Proof Of Our Riches</div>
      </div>
      
      <div>
        <div className="font-normal capitalize mb-2.5">Pounder Collections</div>
        <div className="flex flex-col mb-0 gap-2">
          <a href="https://magiceden.io/marketplace/2GzZnmY925jgnZcKEJVkgK9N6dpzpLD8JPqz16JJNNsf?activeTab=items" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">Underdogs on Magic Eden</a>
          <a href="https://magiceden.io/marketplace/underpup" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">Underpups on Magic Eden</a>
        </div>
      </div>
      
      <div>
        <div className="font-normal capitalize mb-2.5">$Poor Friends</div>
        <div className="flex flex-col mb-0 gap-2">
          <a href="https://twitter.com/CorrugatedCaps" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">Corrugated Caps</a>
          <a href="https://twitter.com/chumchumsnft" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">Racooties</a>
        </div>
      </div>
      
      <div>
        <div className="font-normal capitalize mb-2.5">$Poor Partners</div>
        <div className="flex flex-col mb-0 gap-2">
          <a href="https://twitter.com/POORonSOL" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">TBA</a>
          <a href="https://twitter.com/POORonSOL" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">TBA</a>
        </div>
      </div>
    </div>
  </div>
</footer>







    </main>
  );
}
