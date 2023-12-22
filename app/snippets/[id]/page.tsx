import { db } from "@/app/db";
import { notFound } from "next/navigation";

interface SnippetshowPageProps{
  params:{
    id: string
  }
}
export default async function SnippetshowPage(props:SnippetshowPageProps){
  await new Promise((r)=> setTimeout(r,2000));
  
  const snippet = await db.snippet.findFirst({
    where:{id:parseInt(props.params.id)}
  });

  if(!snippet){
    return notFound();
  }

  return <div>{snippet.title}</div>
}