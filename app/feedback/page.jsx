import { FeedbackForm } from "@/Components/feedback/feedback"

export const metadata = {
    title: 'Feedback',
    description: 'VVGC- Temple',
}

export default function FeedbackPage(){
    return(
        <div className="min-h-[70dvh]  flex items-start justify-center bg-slate-800 py-10">
        <FeedbackForm />
        </div>
    )
}