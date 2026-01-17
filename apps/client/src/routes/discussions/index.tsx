import { createFileRoute } from "@tanstack/react-router";
import { type } from "arktype";

export const Route = createFileRoute('/discussions/')({
//   loader: ({ params: { discussionId } }) => fetchInvoiceById(invoiceId),
  component: DiscussionsRoute,
})

function DiscussionsRoute(){
return <div>Discussion Route</div>
}