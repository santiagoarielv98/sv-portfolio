/* eslint-disable */
require('dotenv').config({path: '.env.local'})
const {createClient} = require('@sanity/client')
const fs = require('fs')
const path = require('path')

const sanityClient = createClient({
  projectId: '0fle2w7j',
  dataset: 'production',
  //   token: '<your-token-with-write-access>', // we need this to get write access
  token: process.env.SANITY_API_TOKEN, // we need this to get write access
  useCdn: false, // We can't use the CDN for writing
})

const importData = async () => {
  try {
    const filePath = path.resolve(__dirname, '../data/technologies.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const documents = JSON.parse(fileContent)

    const results = await Promise.all(
      documents.map((doc) =>
        sanityClient.createOrReplace({
          _id: `iconType-${doc.icon}`,
          _type: 'iconType',
          ...doc,
        }),
      ),
    )

    console.log('Importación completada:', results)
  } catch (error) {
    console.error('Error al importar datos:', error)
  }
}

importData()
