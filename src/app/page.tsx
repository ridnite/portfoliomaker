import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="fixed w-screen h-screen -z-10 bg-primary-50 backdrop-blur-3xl"></div>
      <div className="w-full h-fit md:h-[calc(100vh-96px)] mt-12 md:mt-24 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:h-full flex flex-col items-center justify-center p-8 md:p-14">
          <div className="w-fit h-fit text-5xl p-2 text-center">
            <span className="text-accent-navy font-bold">Porfolio Maker </span>
            <span className="text-text-primary">ile kendi portfolyonu tasarla</span>          
          </div>
          <Link href='/' className='text-text-primary text-2xl border-2 flex flex-col items-center justify-center border-border bg-accent-navy transition-all rounded-lg px-4 pb-1.5 pt-1 mt-4'>Şimdi başla</Link>
        </div>
        <div className="w-full md:w-1/2 md:h-full flex flex-col gap-4 py-12 items-center justify-center select-none">
          <div className="absolute md:w-[50vh] md:h-[50vh] rounded-full translate-x-[-30%] -z-20 bg-accent-navy spin-div">
            <div className="w-1/2 h-1/2 bg-accent-navy rounded-full translate-x-[-10%] translate-y-[-10%] scale-div"></div>
            <div className="w-1/2 h-1/2 bg-accent-navy rounded-full translate-x-[-10%] translate-y-[-10%] scale-div"></div>
          </div>
          <div className="w-2/3 max-w-120 h-fit p-4 bg-secondary-50 rounded-lg border-border border-2 flex flex-col">
            <span className="text-text-primary">Hayal et</span>
            <span className="text-text-secondary">Hayalindeki portfolyone tek tıkla sahip ol</span>
          </div>
          <div className="w-2/3 max-w-120 h-fit p-4 bg-secondary-50 rounded-lg border-border border-2 flex flex-col">
            <span className="text-text-primary">Tasarla</span>
            <span className="text-text-secondary">Hazır taslakların yardımıyla porfolyonu istediğin gibi özelleştir</span>
          </div>
          <div className="w-2/3 max-w-120 h-fit p-4 bg-secondary-50 rounded-lg border-border border-2 flex flex-col">
            <span className="text-text-primary">Paylaş</span>
            <span className="text-text-secondary">Portfolyonu başkalarıyla paylaş</span>
          </div>
        </div>
      </div>
    </main>
  );
}
