import { CloseButton } from "../CloseButton";

import bugImageUrl from  '../../assets/bug.svg'
import ideaImageUrl from  '../../assets/idea.svg'
import thoughtImageUrl from  '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes ={
    BUG: {
      title: 'Problema' , 
      image:{
          source: bugImageUrl,
          alt: 'Imagen de un insecto'
      }
    },
    IDEA: {
        title: 'Idea',
        image:{
            source: ideaImageUrl,
            alt: 'Imagen de una lampara'
        } 
      },
      OTRO: {
        title: 'Otro',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagen de una nube de pensamiendo'
        }  
      }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

function handleRestartFeedback(){
    setFeedbackType(null)
}

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rm)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ):(
                <FeedbackContentStep feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}