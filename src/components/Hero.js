import React from 'react'

export default function Hero({children, hero}) {
    return (
                <header className={hero}>
                    {children}
                </header>
    );
}



//using hero class as default page
Hero.defaultProps = {
    hero: "defaultHero"
}