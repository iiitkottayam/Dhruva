import Link from 'next/link'
import Head from 'next/head'

const error = () => {
    return (
        <div id="notfound">
            <Head><link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700" rel="stylesheet"/></Head>
		<div className="notfound">
			<div className="notfound-404">
				<h1>4<span>0</span>4</h1>
			</div>
			<p>The page you are looking for might have been removed or is temporarily unavailable.</p>
			<Link href="/">home page</Link>
		</div>
	    </div>
    )
}

export default error
