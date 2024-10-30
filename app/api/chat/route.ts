import { NextResponse } from "next/server";
import { PineconeStore } from "@langchain/pinecone";
import { ChatOpenAI } from "@langchain/openai";
import { Pinecone } from "@pinecone-database/pinecone";
const pinecone = new Pinecone();
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { OpenAIEmbeddings } from "@langchain/openai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // Initialize OpenAI
    const model = new ChatOpenAI({
      modelName: "gpt-4o",
      temperature: 0.7,
      maxTokens: 128,
    });

    // Use OpenAI embeddings
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // Get the pinecone index
    const index = pinecone.Index("guac-docs");

    // Create vector store
    const vectorStore = await PineconeStore.fromExistingIndex(
      embeddings,
      { 
        pineconeIndex: index as any,
      }
    );

    // Create prompt template
    const prompt = ChatPromptTemplate.fromTemplate(`
      You are a helpful assistant. Your name is Guac. You love avocado, talk in a friendly and engaging manner. Talk in avocado-y way, but tone it down a bit.
      Answer the following question based on the provided context:
      
      Context: {context}
      Question: {input}
    `);

    // Create document chain
    const documentChain = await createStuffDocumentsChain({
      llm: model,
      prompt,
    });

    // Create retrieval chain
    const chain = await createRetrievalChain({
      combineDocsChain: documentChain,
      retriever: vectorStore.asRetriever(),
    });

    // Get the response
    const response = await chain.invoke({
      input: lastMessage,
    });

    return NextResponse.json({ response: response.answer });
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 