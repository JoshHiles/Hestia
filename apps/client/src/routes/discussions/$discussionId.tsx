import { createFileRoute } from "@tanstack/react-router";
import { type } from "arktype";

export const Route = createFileRoute('/discussions/$discussionId')({
//   loader: ({ params: { discussionId } }) => fetchInvoiceById(invoiceId),
  component: DiscussionRoute,
})

function DiscussionRoute(){
return <div>Discussion Route</div>
}