import './Hero.css';
function Hero() {
    return (
        <section className='hero-section'>
            <div className='container hero-container'>

                <div className='hero-text-box'>
                    <h1>
                        Build Your Ideal <br/>
                        <span className='highlight-text'>Development Stack</span>
                    </h1>
                    <p>
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>
                    <div className='btn-group'>
                        <a href='#technologies' className='btn-main'>Explore Technologies</a>
                        <button className='btn-outline'>Learn More</button>
                    </div>
                </div>
                <div className='hero-img-box'>
                    <img src='/banner-stack.png' alt='Dev Stack Banner' />
                </div>
            </div>
        </section>
    );
};
export default Hero;