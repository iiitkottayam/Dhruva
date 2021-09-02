// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors'

const { Client } = require('@notionhq/client')

const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})

export default async function handler(req, res) {
    await runMiddleware(req, res, cors)
    if (req.method !== 'POST') {
        return res
            .status(405)
            .json({ message: `${req.method} requests are not allowed` })
    }
    try {
        const { name, email, message } = JSON.parse(req.body)
        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DATABASE_ID,
            },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                Email: {
                    email: email,
                },
                Message: {
                    rich_text: [
                        {
                            text: {
                                content: message,
                            },
                        },
                    ],
                },
            },
        })
        res.status(201).json({ msg: 'Success' })
    } catch (error) {
        res.status(500).json({ msg: 'There was an error' })
    }
}
