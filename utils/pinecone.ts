import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!
});

export const indexName = process.env.PINECONE_INDEX!;

export async function queryPinecone(query: string) {
  const index = pinecone.Index(indexName);
  
  // You'll need to implement embedding generation here
  // const queryEmbedding = await generateEmbedding(query);
  
  const queryResponse = await index.query({
    vector: [], // Add your query embedding here
    topK: 5,
    includeMetadata: true,
  });

  return queryResponse.matches;
}

export { pinecone };