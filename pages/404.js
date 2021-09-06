import Link from 'next/link'

const error = () => {
    return (
        <div >
            <div className="sign">
                <span className="fast_flicker">E</span>rro<span className="flicker">r</span><span className="flicker">-</span><span className="fast_flicker">40</span><span className="flicker">4</span>
            </div>
            <div className="sign2">
                <Link href="/"><img className="swingimage" src="https://st2.depositphotos.com/1074452/5420/i/600/depositphotos_54204981-stock-photo-time-go-home-shows-see.jpg" /></Link>
            </div>
        </div>
    )
}

export default error
