import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone } from "@pinecone-database/pinecone";

export async function processPDFDocument(file: Buffer) {
  try {
    const loader = new PDFLoader(new Blob([file]), {
      splitPages: true,
      parsedItemSeparator: "\n",
      pdfjs: () => import("pdfjs-dist/legacy/build/pdf.js").then(async (pdf) => {
        pdf.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdf.version}/pdf.worker.min.js`;
        return pdf;
      })
    });

    const docs = await loader.load();

    // Clean the extracted text
    const cleanDocs = docs.map((doc: Document) => ({
      ...doc,
      pageContent: cleanText(doc.pageContent),
    }));

    // Split into smaller chunks for better processing
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,  // Smaller chunks for better context
      chunkOverlap: 100,
      separators: ["\n\n", "\n", ".", "!", "?", ",", " ", ""],
    });

    const splitDocs = await textSplitter.splitDocuments(cleanDocs);
    return splitDocs;
  } catch (error) {
    console.error("Error processing PDF:", error);
    throw error;
  }
}

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')  // Remove control characters
    .replace(/\[.*?\]/g, '')  // Remove square bracket content
    .replace(/\(.*?\)/g, '')  // Remove parentheses content
    .replace(/\{.*?\}/g, '')  // Remove curly bracket content
    .replace(/\\[a-z]+/g, '')  // Remove LaTeX-like commands
    .replace(/[^\x20-\x7E\s]/g, '')  // Remove non-printable characters
    .trim();
}