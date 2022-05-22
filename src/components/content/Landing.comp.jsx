import Logo from '../../images/logo.png'
const Landing = () =>{
    return (
        <section className="flex justify-center items-center flex-col gap-1 w-full h-full bg-[#231F42] m-auto md:w-[500px]">
            <img src= {Logo} alt="logo" className='w-[200px]'/>
            <h1 className='text-4xl text-pink-500 font-sansita'>Where it's @</h1>
            <h2 className='text-white text-[25px] font-FiraSans italic' >Ticketing made easy</h2>
        </section>
    );
}

export default Landing;